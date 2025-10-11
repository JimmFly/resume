# AFFiNE 项目亮点（STAR 简历要点）

> 说明：以下要点基于 `docs/affine_prs_merged_by_jimmfly.csv`（571 条合并 PR）进行主题归纳，仅展示高价值与代表性工作。每条采用 STAR（情境-任务-行动-结果）结构，并附代表性 PR 便于校验与延展。

---

## 1) 团队工作区与配额/计费能力打通
- 情境（S）：产品从个人使用扩展至组织协作，需要在云端工作区中提供成员上限、存储配额与计费提示等能力，降低运维与升级成本。
- 任务（T）：补齐工作区成员/存储配额、创建与升级引导，以及计费相关的文案与状态展示。
- 行动（A）：
  - 实现成员/存储限制与展示（如 member limit、blob/storage limit、quota 来源于 user quota）；创建云工作区端到端流程与 UI。
  - 联动计费路径与文案（payment 文案、billing i18n key、进度显示与校验）。
- 结果（R）：工作区可用性提升，成员/存储超限可自解释；升级路径与计费提示更清晰，降低客服答疑与误操作。
- 代表 PR：[#5771](https://github.com/toeverything/AFFiNE/pull/5771) · [#5500](https://github.com/toeverything/AFFiNE/pull/5500) · [#5518](https://github.com/toeverything/AFFiNE/pull/5518) · [#5535](https://github.com/toeverything/AFFiNE/pull/5535) · [#4713](https://github.com/toeverything/AFFiNE/pull/4713) · [#4771](https://github.com/toeverything/AFFiNE/pull/4771) · [#4797](https://github.com/toeverything/AFFiNE/pull/4797)

## 2) 分享与权限体系体验升级（Share Menu 与链接能力）
- 情境（S）：分享入口与权限配置分散，用户难以判断“谁能看/能做什么”，且链接创建存在边界异常。
- 任务（T）：重构分享菜单与文案，完善分享链接创建/复制体验，并处理权限缺失场景的 UI 展示。
- 行动（A）：
  - 新版 Share Menu 信息架构与样式调整；新增私有锚点链接、复制到剪贴板等能力；
  - 修复创建/展示异常（共享页响应式、链接创建失败、错误状态回显）；隐藏无权限时的设置入口。
- 结果（R）：分享-授权路径更清晰，误操作与重复提问减少，关键操作闭环提效。
- 代表 PR：[#7838](https://github.com/toeverything/AFFiNE/pull/7838) · [#6966](https://github.com/toeverything/AFFiNE/pull/6966) · [#6555](https://github.com/toeverything/AFFiNE/pull/6555) · [#5175](https://github.com/toeverything/AFFiNE/pull/5175) · [#6383](https://github.com/toeverything/AFFiNE/pull/6383) · [#8285](https://github.com/toeverything/AFFiNE/pull/8285) · [#8026](https://github.com/toeverything/AFFiNE/pull/8026)

## 3) 管理后台（Admin）能力建设：自托管与运维效率
- 情境（S）：企业/自托管客户需要可运营、可治理与可审计的后台能力，降低日常维护成本。
- 任务（T）：构建 Admin Panel 的关键页面与配置，并完善登录状态与表单一致性问题。
- 行动（A）：
  - 新增自托管 Setup 与用户管理页、Prompt 管理、服务运行时配置与通用配置页；
  - 修复后台搜索频繁请求、动态表单不更新、导航激活态错误、登录异常状态处理等。
- 结果（R）：后台操作闭环，大幅减少人工介入；自托管部署/排障效率提升。
- 代表 PR：[#7115](https://github.com/toeverything/AFFiNE/pull/7115) · [#7537](https://github.com/toeverything/AFFiNE/pull/7537) · [#7611](https://github.com/toeverything/AFFiNE/pull/7611) · [#7618](https://github.com/toeverything/AFFiNE/pull/7618) · [#7619](https://github.com/toeverything/AFFiNE/pull/7619) · [#7646](https://github.com/toeverything/AFFiNE/pull/7646) · [#7854](https://github.com/toeverything/AFFiNE/pull/7854)

## 4) 编辑器个性化与设置中心重构
- 情境（S）：用户对编辑器个性化需求高，但设置项分散、预期不一致，难以快速找到且缺少实时反馈。
- 任务（T）：集中化编辑器设置中心，覆盖字体、颜色、默认模式、信息显示、预览等关键项，统一预览与状态管理。
- 行动（A）：
  - 新建/迁移设置项（自定义字体、颜色选择器、默认模式、信息/反向链接显示、全宽布局等）并统一到 Editor Settings；
  - 完善预览、禁用规则与 UI 微交互；沉淀展示/TOC/侧边栏默认视图等默认值策略。
- 结果（R）：设置可发现性与一致性显著提升，个性化门槛下降，设置相关回归减少。
- 代表 PR：[#7878](https://github.com/toeverything/AFFiNE/pull/7878) · [#7924](https://github.com/toeverything/AFFiNE/pull/7924) · [#7990](https://github.com/toeverything/AFFiNE/pull/7990) · [#7991](https://github.com/toeverything/AFFiNE/pull/7991) · [#8053](https://github.com/toeverything/AFFiNE/pull/8053) · [#7988](https://github.com/toeverything/AFFiNE/pull/7988) · [#8146](https://github.com/toeverything/AFFiNE/pull/8146) · [#8152](https://github.com/toeverything/AFFiNE/pull/8152) · [#6503](https://github.com/toeverything/AFFiNE/pull/6503)

## 5) 搜索与命令面板（cmdk）体验优化
- 情境（S）：搜索与命令面板是高频入口，存在高亮、加载、转义、滚动等细节问题，影响效率与稳定性。
- 任务（T）：完善搜索结果展示、组别显示与跳转；修复特殊字符导致的崩溃/错位，以及加载闪烁问题。
- 行动（A）：
  - 支持文内搜索（cmd+f）、搜索高亮、结果分组、跳转到块；增加加载态与滚动间距处理；
  - 修复特殊字符转义、双引号崩溃、同步过程加载闪烁等问题。
- 结果（R）：搜索与命令操作成功率与可读性提升，减少误触与中断。
- 代表 PR：[#7040](https://github.com/toeverything/AFFiNE/pull/7040) · [#4667](https://github.com/toeverything/AFFiNE/pull/4667) · [#5073](https://github.com/toeverything/AFFiNE/pull/5073) · [#4802](https://github.com/toeverything/AFFiNE/pull/4802) · [#5785](https://github.com/toeverything/AFFiNE/pull/5785) · [#4972](https://github.com/toeverything/AFFiNE/pull/4972) · [#5008](https://github.com/toeverything/AFFiNE/pull/5008) · [#4947](https://github.com/toeverything/AFFiNE/pull/4947) · [#5409](https://github.com/toeverything/AFFiNE/pull/5409)

## 6) 协作与导航：侧边栏/成员列表体验
- 情境（S）：协作与文档浏览对侧边栏与成员列表依赖度高，历史问题导致激活态缺失、悬浮逻辑不一致等。
- 任务（T）：统一侧边栏激活态/悬浮/浮动逻辑，完善成员列表展示，修复移动端侧边栏默认行为。
- 行动（A）：
  - 恢复菜单项激活态、优化浮动与悬浮策略；移动端默认折叠/浮动；
  - 修复成员列表展示姓名、排序与空态回退。
- 结果（R）：导航一致性与可达性提高，移动端体验更稳定。
- 代表 PR：[#6520](https://github.com/toeverything/AFFiNE/pull/6520) · [#8393](https://github.com/toeverything/AFFiNE/pull/8393) · [#3550](https://github.com/toeverything/AFFiNE/pull/3550) · [#5077](https://github.com/toeverything/AFFiNE/pull/5077) · [#6672](https://github.com/toeverything/AFFiNE/pull/6672) · [#6835](https://github.com/toeverything/AFFiNE/pull/6835) · [#6903](https://github.com/toeverything/AFFiNE/pull/6903)

## 7) i18n 与全球化覆盖
- 情境（S）：全球化推进需要快速接入新语言与高频资源同步，减少错漏与不一致。
- 任务（T）：新增语言包与批量同步资源，完善 i18n 工具链上的占位/命名统一。
- 行动（A）：
  - 新增多语言（如 Swedish、Spanish(Argentina)、Urdu）；
  - 周期性资源更新与清理，消除重复/过期 key，修复错别字与遗漏。
- 结果（R）：语言覆盖面扩大，词条质量与一致性提升，国际用户体验提升。
- 代表 PR：[#7247](https://github.com/toeverything/AFFiNE/pull/7247) · [#7771](https://github.com/toeverything/AFFiNE/pull/7771) · [#8119](https://github.com/toeverything/AFFiNE/pull/8119) · [#6767](https://github.com/toeverything/AFFiNE/pull/6767) · [#5906](https://github.com/toeverything/AFFiNE/pull/5906) · [#4923](https://github.com/toeverything/AFFiNE/pull/4923)

## 8) 可靠性修复与细节治理
- 情境（S）：共享页、编辑器 UI、快捷键等关键路径存在易感缺陷，会影响首启体验与编辑稳定性。
- 任务（T）：系统性排查并修复样式与逻辑冲突、边界条件与缺失状态处理；补齐空态/加载反馈。
- 行动（A）：
  - 修复共享页响应式问题、编辑器滚动条缺失、快捷键失效、意外路由历史、Toast 风格不一致等；
  - 对可能的异常（特殊字符、UI 重叠）加入防护与降级逻辑。
- 结果（R）：关键路径稳定性提升，减少误操作与异常中断。
- 代表 PR：[#6383](https://github.com/toeverything/AFFiNE/pull/6383) · [#6597](https://github.com/toeverything/AFFiNE/pull/6597) · [#6903](https://github.com/toeverything/AFFiNE/pull/6903) · [#6480](https://github.com/toeverything/AFFiNE/pull/6480) · [#8356](https://github.com/toeverything/AFFiNE/pull/8356) · [#6924](https://github.com/toeverything/AFFiNE/pull/6924)

---

## 简历投递版（可直接粘贴，建议精简到 1–2 行/条）
- 搭建团队工作区配额/计费体验闭环（成员/存储限制、创建与升级引导、计费文案联动），减少超限误操作与客服答疑（如 #5500/#5518/#5535/#4713）。
- 重构 Share Menu 与链接能力（私有锚点、复制到剪贴板、异常回显、无权限隐藏入口），显著提升分享-授权路径清晰度（如 #7838/#6966/#6555/#8285）。
- 打造 Admin 能力（自托管 Setup、用户/Prompt/运行时配置、登录异常处理），降低运维成本，提升自托管部署与排障效率（如 #7537/#7611/#7618/#7646）。
- 重构编辑器设置中心（字体/颜色/默认模式/信息显示），统一预览与禁用规则，降低个性化配置门槛与回归率（如 #7878/#7924/#7990/#8053）。
- 优化搜索与 cmdk（结果高亮/分组、文内搜索、跳转到块、特殊字符防护），提升检索效率与稳定性（如 #7040/#4667/#5073/#5008）。
- 统一导航与协作体验（侧边栏激活/浮动、移动端默认折叠/浮动、成员列表回退/排序），改善多端一致性（如 #6520/#8393/#5077/#6672）。
- 扩展 i18n 覆盖（引入多语言并常态化资源更新），提升全球化用户体验（如 #7247/#7771/#8119/#6767）。
- 系统性修复共享页/编辑器关键缺陷（响应式、滚动、快捷键、路由历史、toast 风格），增强首启与编辑稳定性（如 #6383/#6597/#6903/#8356）。

> 可与团队核对后补充量化指标（示例占位）：
> - 邀请/分享转化率提升 X%，异常流失降低 Y%，相关客服工单下降 Z%。
> - 自托管部署平均用时缩短 X 分钟，回退率降低 Y%。
> - 设置相关问题周均反馈减少 X 起；搜索/命令面板相关崩溃率降低 Y%。

---

如果需要，我可以基于以上内容快速生成英文版/某特定岗位定制版（前端/全栈/前端架构），并控制字数到一页或半页。