# Aceternity UI Components - Light Mode Adaptation

下面这些是ai跑的，但是现在已经删了很多同时加了很多了。
这些组件已适配为支持浅色主题（Light Mode），同时保持高科技感。

## 组件列表

### 1. LightModeWrapper
页面级别的包装组件，提供白色背景和点状背景装饰。

```tsx
import { LightModeWrapper } from "@/components/ui/LightModeWrapper";

<LightModeWrapper showDotBackground={true}>
  {/* 页面内容 */}
</LightModeWrapper>
```

### 2. BentoGrid & BentoCard
网格布局组件，支持浅色和深色主题。

**浅色主题特性：**
- 白色背景 (`bg-white`)
- 浅灰边框 (`border-slate-200`)
- 悬停时：蓝色边框 + 浅蓝背景 (`hover:border-blue-500 hover:bg-blue-50/50`)
- 图标：蓝色背景 (`bg-blue-100 text-blue-600`)

```tsx
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";

<BentoGrid theme="light">
  <BentoCard
    theme="light"
    title="服务标题"
    description="服务描述"
    icon={<Icon />}
  />
</BentoGrid>
```

### 3. MovingBorder
动态边框按钮组件，支持浅色主题。

**浅色主题特性：**
- 蓝色动画边框 (`#3b82f6`)
- 白色背景
- 深色文字

```tsx
import { MovingBorder } from "@/components/ui/MovingBorder";

<MovingBorder theme="light" borderRadius="0.75rem">
  <button className="px-6 py-3 bg-white text-blue-600">
    点击按钮
  </button>
</MovingBorder>
```

### 4. ThreeDCard
3D 卡片组件，悬停时有提升效果。

**浅色主题特性：**
- 白色背景
- 悬停时：蓝色阴影 (`hover:shadow-blue-500/20`)

```tsx
import { ThreeDCard } from "@/components/ui/ThreeDCard";

<ThreeDCard theme="light" className="p-6">
  {/* 卡片内容 */}
</ThreeDCard>
```

### 5. DotBackground
点状背景装饰组件，支持浅色模式。

**浅色模式特性：**
- 浅蓝灰色点 (`#cbd5e1`)
- 径向遮罩效果（中心明显，边缘淡出）

```tsx
import { DotBackground } from "@/components/ui/DotBackground";

<DotBackground variant="light" />
```

## 颜色方案

### 浅色主题
- **背景**: `#ffffff` (白色) 或 `#f8fafc` (浅灰)
- **文字**: `#0f172a` (标题), `#475569` (正文)
- **强调色**: `#3b82f6` (蓝色)
- **边框**: `#e2e8f0` (浅灰)
- **悬停背景**: `#eff6ff` (浅蓝)

## 示例页面

查看 `app/services/[slug]/page.tsx` 了解完整的使用示例。
