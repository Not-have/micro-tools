export default defineEventHandler(() => `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mock服务API列表</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
        h1 { color: #333; }
        ul { list-style: none; padding: 0; }
        li { margin: 10px 0; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>Mock服务API列表</h1>
    <h2>模拟服务正在运行</h2>
    <ul>
        <li><a href="/api/user/info">/api/user/info</a> - 用户信息</li>
        <li><a href="/api/menu/all">/api/menu/all</a> - 菜单数据</li>
        <li><a href="/api/upload">/api/upload</a> - 文件上传</li>
        <li><a href="/api/table/list">/api/table/list</a> - 表格数据</li>
    </ul>
</body>
</html>
`);
