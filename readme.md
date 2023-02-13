# Bot Confession Discord
Bot confession gửi bài viết đến phòng cách ẩn danh thay cho người viết.

Nó được xây dựng riêng cho server của bạn, đơn giản dễ sử dụng với người dùng và mượt mà.

## Xây dựng trên các nền thư viện chính
- Discord.js
- Node.js

## Sử dụng

- Gửi nội dung tin nhắn đồng thời kèm hình ảnh hoặc video.

| Hình ảnh  | video  |
| --------- |:------:|
| .webp     | .mp4   |
| .png      | .webm  |
| .jpg      | .mov   |
| .jpeg     |        |
| .gif      |        |
| .jpg      |        |
| .jpg      |        |
| .jpg      |        |

- Gửi tin nhắn đến bot

<img src="https://i.imgur.com/c9Df33W.png">

- Ở kênh

<img src="https://i.imgur.com/orLvvvE.png">

- **Không khuyến khích** nếu bạn cấu hình id kênh muốn kiểm tra người gửi thì bot sẽ gửi thông tin liên quan bao gồm nội dung, tên và ảnh đại diện


### Cấu hình sử dụng

file : /config/bot.json
```
{
    "TOKEN": "<thay token bot>",
    "CHANNELID": "<id phòng bot gửi nội dung>",
    "CHANNELID_CHECK": "<id phòng kiểm tra>"
}
```

Chúc các bạn thành công.
