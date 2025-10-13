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
const targets = [
  {
    input: path.join(ROOT, 'docs', 'resume_cn_onepage.html'),
    output: path.join(ROOT, 'public', 'resume_cn_onepage.pdf'),
    label: '简历（中文单页）',
  },
  {
    input: path.join(ROOT, 'docs', 'resume_en_onepage.html'),
    output: path.join(ROOT, 'public', 'resume_en_onepage.pdf'),
    label: 'Resume (English one-page)',
  },
  {
    input: path.join(ROOT, 'docs', 'resume_cn_arch_onepage.html'),
    output: path.join(ROOT, 'public', 'resume_cn_arch_onepage.pdf'),
    label: '简历（中文架构单页）',
  },
  {
    input: path.join(ROOT, 'docs', 'letter.html'),
    output: path.join(ROOT, 'public', 'letter.pdf'),
    label: 'Cover Letter (PayPay)',
  },
]

async function main() {
  for (const { input, label } of targets) {
    try {
      await fs.access(input)
    } catch {
      console.error(`[error] 找不到输入文件: ${input}`)
      process.exit(1)
    }
    console.log(`[info] ✔️ 已找到 ${label}`)
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  for (const { input, output, label } of targets) {
    await page.goto(`file://${input}`, { waitUntil: 'networkidle0' })
    await page.pdf({
      path: output,
      format: 'A4',
      printBackground: true,
      margin: { top: '16mm', right: '14mm', bottom: '16mm', left: '14mm' },
      scale: 0.9,
    })
    console.log(`[ok] 已导出 PDF: ${output} (${label})`)
  }

  await browser.close()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
