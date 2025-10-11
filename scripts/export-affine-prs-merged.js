#!/usr/bin/env node
/* eslint-env node */

/* global fetch */
/**
 * Export only merged PRs by JimmFly in toeverything/AFFiNE to a CSV file.
 * - Uses GitHub Search API query: repo:toeverything/AFFiNE is:pr author:JimmFly is:closed is:merged
 * - Paginates up to the 1000-result search cap.
 * - Optionally set GH_TOKEN to increase rate limits.
 */

import { mkdirSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'

const OWNER = 'toeverything'
const REPO = 'AFFiNE'
const AUTHOR = 'JimmFly'
const OUTPUT_DIR = resolve(__dirname, '..', 'docs')
const OUTPUT_FILE = join(OUTPUT_DIR, 'affine_prs_merged_by_jimmfly.csv')

const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || ''

async function fetchAllSearch(query) {
  const perPage = 100
  let page = 1
  let items = []

  while (true) {
    const url = new URL('https://api.github.com/search/issues')
    url.searchParams.set('q', query)
    url.searchParams.set('per_page', String(perPage))
    url.searchParams.set('page', String(page))

    const res = await fetch(url.toString(), {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(GH_TOKEN ? { Authorization: `Bearer ${GH_TOKEN}` } : {}),
        'User-Agent': 'export-affine-prs-script',
      },
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`GitHub API error ${res.status}: ${text}`)
    }
    const data = await res.json()
    const batch = Array.isArray(data.items) ? data.items : []
    items = items.concat(batch)

    if (batch.length < perPage) break // last page
    page += 1
    if (page > 10) break // safety guard (1000 cap)
  }
  return items
}

function toCsvRow(values) {
  return values
    .map(v => {
      if (v == null) return ''
      const s = String(v)
      if (/[",\n]/.test(s)) {
        return '"' + s.replaceAll('"', '""') + '"'
      }
      return s
    })
    .join(',')
}

async function main() {
  const query = `repo:${OWNER}/${REPO} is:pr author:${AUTHOR} is:closed is:merged`
  console.error('Fetching merged PRs...')
  const merged = await fetchAllSearch(query)
  console.error(`Merged count: ${merged.length}`)

  const rows = merged
    .map(it => ({
      number: it.number,
      title: it.title,
      url: it.html_url,
      state: 'merged',
      created_at: it.created_at || '',
      closed_at: it.closed_at || '',
    }))
    .sort((a, b) => a.number - b.number)

  mkdirSync(OUTPUT_DIR, { recursive: true })
  const header = ['number', 'title', 'url', 'state', 'created_at', 'closed_at']
  const csvLines = [toCsvRow(header)]
  for (const r of rows) {
    csvLines.push(toCsvRow([r.number, r.title, r.url, r.state, r.created_at, r.closed_at]))
  }
  writeFileSync(OUTPUT_FILE, csvLines.join('\n'), 'utf8')
  console.error(`Wrote ${rows.length} rows to ${OUTPUT_FILE}`)
}

if (typeof fetch !== 'function') {
  console.error('This script requires Node 18+ with global fetch.')
  process.exit(1)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
