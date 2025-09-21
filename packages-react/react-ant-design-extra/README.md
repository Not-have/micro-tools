# @mt-kit/react-ant-design-extra

基于 Ant Design 的 React 组件库，提供增强的 UI 组件和工具。

## rc-dialog

一个功能强大的弹窗组件，支持 Modal 和 Drawer 两种模式，提供 Promise 化的 API 和完整的表单验证支持。

### 特性

- 🎯 **双模式支持**：Modal 和 Drawer 两种展示模式
- 🚀 **Promise 化 API**：支持 async/await 语法
- 📝 **表单验证**：内置 Ant Design Form 支持
- 🎨 **自定义按钮**：支持自定义按钮和事件处理
- 🔒 **状态管理**：内置加载、锁定等状态管理
- 📱 **响应式设计**：支持不同屏幕尺寸
- 🎭 **动画支持**：流畅的打开/关闭动画

### 安装

```bash
npm install @mt-kit/react-ant-design-extra
# 或
yarn add @mt-kit/react-ant-design-extra
# 或
pnpm add @mt-kit/react-ant-design-extra
```

### 基础用法

```tsx
import React from 'react';
import { Button } from 'antd';
import { open, DialogMode } from '@mt-kit/react-ant-design-extra';

const App = () => {
  const handleClick = () => {
    open({
      title: '基础弹窗',
      content: <div>这是弹窗内容</div>,
      mode: DialogMode.MODAL
    });
  };

  return <Button onClick={handleClick}>打开弹窗</Button>;
};
```

### API

#### open(props)

打开弹窗的主要方法。

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | - | 弹窗标题 |
| content | `ReactNode` | - | 弹窗内容 |
| mode | `DialogMode` | `DialogMode.MODAL` | 弹窗模式 |
| size | `number \| ESize` | - | 弹窗尺寸 |
| onSubmit | `(data?: Record<string, unknown>) => Promise<any>` | - | 提交回调 |
| onClose | `(result?: any, rejected?: boolean) => void` | - | 关闭回调 |
| buttonsExtra | `ReactElement[]` | - | 额外按钮 |
| ok | `IButtonProps \| string` | - | 确定按钮配置 |
| cancel | `IButtonProps \| string` | - | 取消按钮配置 |

#### DialogMode

弹窗模式枚举：

```tsx
enum DialogMode {
  MODAL = 'modal',    // 模态框
  DRAWER = 'drawer'   // 抽屉
}
```

#### ESize

尺寸枚举：

```tsx
enum ESize {
  S = 300,    // 小尺寸
  M = 400,    // 中尺寸
  L = 600,    // 大尺寸
  XL = 800    // 超大尺寸
}
```

### 高级用法

#### 表单验证

```tsx
import React from 'react';
import { Form, Input, Button } from 'antd';
import { open, DialogMode, useForm } from '@mt-kit/react-ant-design-extra';

const FormContent = () => {
  const [form, initData, currentData, handleValuesChange] = useForm();

  return (
    <Form
      form={form}
      onValuesChange={handleValuesChange}
      initialValues={initData}
    >
      <Form.Item
        name="username"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱格式' }
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

const App = () => {
  const handleSubmit = async (data: Record<string, unknown>) => {
    // 模拟 API 请求
    const result = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    return result.json();
  };

  const handleClick = () => {
    open({
      title: '用户信息',
      content: <FormContent />,
      mode: DialogMode.DRAWER,
      size: ESize.M,
      onSubmit: handleSubmit
    }).then(result => {
      console.log('提交成功:', result);
    }).catch(error => {
      console.error('提交失败:', error);
    });
  };

  return <Button onClick={handleClick}>打开表单弹窗</Button>;
};
```

#### 自定义按钮

```tsx
import React from 'react';
import { Button, Space } from 'antd';
import { open, DialogMode } from '@mt-kit/react-ant-design-extra';

const App = () => {
  const handleClick = () => {
    open({
      title: '自定义按钮弹窗',
      content: <div>弹窗内容</div>,
      mode: DialogMode.MODAL,
      buttonsExtra: [
        <Button key="save" type="primary">保存草稿</Button>,
        <Button key="preview">预览</Button>
      ],
      ok: {
        label: '确认提交',
        type: 'primary',
        danger: true
      },
      cancel: '取消'
    });
  };

  return <Button onClick={handleClick}>打开自定义按钮弹窗</Button>;
};
```

#### 不同模式示例

```tsx
import React from 'react';
import { Button, Space } from 'antd';
import { open, DialogMode, ESize } from '@mt-kit/react-ant-design-extra';

const App = () => {
  const openModal = () => {
    open({
      title: '模态框',
      content: <div>这是模态框内容</div>,
      mode: DialogMode.MODAL,
      size: ESize.L
    });
  };

  const openDrawer = () => {
    open({
      title: '抽屉',
      content: <div>这是抽屉内容</div>,
      mode: DialogMode.DRAWER,
      size: ESize.M
    });
  };

  return (
    <Space>
      <Button onClick={openModal}>打开模态框</Button>
      <Button onClick={openDrawer}>打开抽屉</Button>
    </Space>
  );
};
```

### 类型定义

```tsx
interface DialogProps<T = void, D extends object = Record<string, unknown>> {
  title?: string;
  content?: ReactNode;
  mode?: DialogMode;
  size?: number | ESize;
  data?: D;
  onSubmit?: (data?: Record<string, unknown>) => Promise<T>;
  onClose?: (result?: T | Error, rejected?: boolean) => void;
  buttonsExtra?: ReactElement[];
  ok?: IButtonProps | string;
  cancel?: IButtonProps | string;
  // ... 其他 Ant Design 组件属性
}

interface IButtonProps extends Partial<ButtonProps> {
  label?: string;
}
```

### 注意事项

1. **表单验证**：使用 `useForm` hook 时，确保将 `form` 实例传递给 `Form` 组件
2. **异步操作**：`onSubmit` 函数应该返回 Promise，支持 async/await
3. **错误处理**：表单验证失败或提交失败时会自动处理错误状态
4. **内存管理**：弹窗关闭时会自动清理相关资源
