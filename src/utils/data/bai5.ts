export default [
  {
    title: 'Mục tiêu bài học',
    contents: [
      'Hiểu về nguyên lý hoạt động của cảm biến hồng ngoại',
      'Sử dụng phần mềm lập trình robot với cảm biến hồng ngoại',
      'Nâng cao tư duy lập trình và kỹ năng làm việc theo nhóm',
    ],
  },
  {
    title: 'Module bài học',
    contentWithImg: [
      {
        img: require('assets/images/b5a1.png'),
        contents: [
          'Module cảm biến hồng ngoại (dò line) có thể dùng để phát hiện line trắng và đen',
        ],
      },
      {
        img: require('assets/images/b5a2.png'),
        contents: [
          'Mạch sử dụng cảm biến hồng ngoại TCRT5000 với khoảng cách phát hiện từ 1~25mm. Ứng dụng: dò line, thiết bị phát hiện màu trắng, đen',
        ],
      },
    ],
  },
  {
    title: 'Lập trình',
    subcontents: [
      {
        title: 'Các khối lập trình',
        contentWithImg: [
          {
            img: require('assets/images/b5a4.png'),
            contents: [
              'Điều khiển động cơ M1 hoặc M2',
              'Cài đặt tốc độ truyền dữ liệu từ robot lên máy tính',
            ],
          },
          {
            img: require('assets/images/b5a56.png'),
            contents: [
              'Gửi dữ liệu từ robot lên máy tính',
              'Đọc giá trị nhận được từ chân Analog',
            ],
          },
          {
            img: require('assets/images/b5a78.png'),
            contents: [
              'Chờ trong một khoảng thời gian xác định',
              'Thực hiện lặp các câu lệnh bên trong nó mãi mãi',
            ],
          },
          {
            img: require('assets/images/b5a91011.png'),
            contents: [
              'Cấu lệnh được dùng trong phép so sánh >, <, =',
              'Khối logic “và”',
              'Là khối lệnh điều kiện, nếu đúng sẽ thực hiện khối lệnh phía trên. Còn nếu sai sẽ thự hiện khối lệnh phía dưới',
            ],
          },
        ],
      },
      {
        title: 'Cấu trúc lập trình',
        contentWithImg: [
          {
            img: require('assets/images/b5a12.png'),
            contents: [
              'Chương trình bắt đầu, kiểm tra kí tự nhận được. Khi nhận được kí tự đã được lập trình sẵn Robot sẽ thực hiện các chức năng',
            ],
          },
        ],
      },
      {
        title: 'Thực hành',
        contentWithImg: [
          {
            img: require('assets/images/b5a13.png'),
            contents: [
              'Chương trình bắt đầu',
              'Nếu chân A7<800 thì robot tiến với tốc độ 200',
              'Nếu chần A<800 robot quay trái với tốc độ 200',
              'Nếu chân A7<800 thì robot quay phải với tốc độ 200',
              'Nếu chần A7<800 robot lùi với tốc độ 200',
            ],
          },
        ],
      },
    ],
  },
];
