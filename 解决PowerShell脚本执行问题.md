# 解决 PowerShell 脚本执行策略问题

## 问题说明
PowerShell 默认禁止运行脚本，这是 Windows 的安全策略。npm 需要运行脚本，所以被阻止了。

## 解决方案

### ✅ 方案 1：使用命令提示符 (cmd) - 最简单

**步骤：**
1. 在项目文件夹 `F:\webtest` 的地址栏输入 `cmd`，按回车
2. 或者：按住 `Shift + 右键`，选择 "在此处打开命令窗口"
3. 在命令提示符中运行：
   ```bash
   npm install
   npm run dev
   ```

**优点：** 不需要修改系统设置，最简单安全

---

### ✅ 方案 2：修改 PowerShell 执行策略（永久解决）

#### 方法 A：仅为当前用户修改（推荐）

1. **以管理员身份打开 PowerShell：**
   - 按 `Win + X`
   - 选择 "Windows PowerShell (管理员)"
   - 或右键开始菜单图标，选择 "Windows PowerShell (管理员)"

2. **运行以下命令：**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   
3. **输入 `Y` 确认**

4. **关闭管理员 PowerShell**

5. **重新在项目文件夹打开普通 PowerShell**，再次运行：
   ```bash
   npm install
   ```

**执行策略说明：**
- `RemoteSigned`：允许运行本地脚本，远程脚本需要签名（安全且实用）
- `CurrentUser`：只影响当前用户，不影响系统其他用户

#### 方法 B：临时绕过（仅本次会话）

在普通 PowerShell 中运行：
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```
然后运行 `npm install`

**注意：** 关闭 PowerShell 后需要重新设置

---

### ✅ 方案 3：在命令提示符中使用 npm（无需修改策略）

如果你已经安装了 Node.js，可以直接使用：
```bash
# 在 cmd 中
npm install
npm run dev
```

---

## 推荐做法

**建议使用方案 1（cmd）**，因为：
- ✅ 不需要修改系统安全策略
- ✅ 更简单直接
- ✅ 避免潜在的安全风险
- ✅ npm 在 cmd 中运行完全正常

如果以后经常需要运行脚本，可以考虑使用方案 2A 修改执行策略。
