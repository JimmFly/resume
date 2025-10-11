#!/usr/bin/env node
/* eslint-env node */
/* global require, process, console */
// @ts-check

// Export docs/resume_cn_onepage.html to docs/resume_cn_onepage.pdf via Puppeteer.
// Requires: pnpm add -D puppeteer

import fs from 'fs/promises'
import path from 'path'
import puppeteer from 'puppeteer'

const ROOT = path.resolve(process.cwd())
const input = path.join(ROOT, 'docs', 'resume_cn_onepage.html')
const output = path.join(ROOT, 'docs', 'resume_cn_onepage.pdf')

async function main() {
  try {
    await fs.access(input)
  } catch {
    console.error(`[error] 找不到输入文件: ${input}`)
    process.exit(1)
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  // Load local file via file:// protocol
  await page.goto(`file://${input}`, { waitUntil: 'networkidle0' })

  await page.pdf({
    path: output,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', right: '10mm', bottom: '12mm', left: '10mm' },
    scale: 0.9,
  })

  await browser.close()
  console.log(`[ok] 已导出 PDF: ${output}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
