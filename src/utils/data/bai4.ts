export default [
  {
    title: 'Mục tiêu bài học',
    contents: [
      'Hiểu và sử dụng được cảm biến sóng siêu âm SRF04',
      'Nắm được các tính năng và cách dùng của các khối điều khiển các khối',
    ],
  },
  {
    title: 'Module bài học',
    contentWithImg: [
      {
        img: require('assets/images/b4a1.png'),
        contents: [
          'Cảm biến siêu âm HC-SR04',
          'Nguồn cung cấp: 5V DC',
          'Dòng điện: 30mA. Tần số hoạt động: 40KHz',
          'Khoảng cách lớn nhất đo được: 6m. Khoảng cách nhỏ nhất đo được: 2cm',
          'Kích thước module: 45x20mm',
        ],
      },
      {
        img: require('assets/images/b4a2.png'),
        contents: [
          'Cảm biến siêu âm hoạt động bằng cách phát đi một xung tín hiệu và đo thời gian nhận được tín hiệu trở vể. Sau khi đo được tín hiệu trở về trên cảm biến siêu âm, ta tính được thời gian từ lúc phát đến lúc nhận được tín hiệu. Từ thời gian này có thể tính ra được khoảng cách',
          'Nếu đo được chính xác thời gian và không có nhiễu, mạch cảm biến siêu âm trả về kết quả cực kì chính xác. Điều này phụ thuộc vào cách viết chương trình không sử dụng các hàm đợi.',
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
            img: require('assets/images/b4a3.png'),
            contents: [
              'Điều khiển động cơ',
              'Khi thay đổi thông số M1, M2 và tốc độ thì bánh xe sẽ thay đổi tốc độ và hướng di chuyển',
            ],
          },
          {
            img: require('assets/images/b4a4.png'),
            contents: ['Chờ trong 1 khoảng thời gian xác định'],
          },
          {
            img: require('assets/images/b4a56.png'),
            contents: [
              'Cấu lệnh được dùng trong phép so sánh >, <, =',
              'Là khối lệnh điều kiện, nếu đúng sẽ thực hiện khối lệnh phía trên. Còn nếu sai sẽ thự hiện khối lệnh phía dưới',
            ],
          },
          {
            img: require('assets/images/b4a78.png'),
            contents: [
              'Câu lệnh để đọc khoảng cách với cảm biến siêu âm, giá trị trả lại chính là giá trị khoảng cách',
              'Thực hiện lặp các câu lệnh bên trong nó mãi mãi',
            ],
          },
        ],
      },
      {
        title: 'Cấu trúc lập trình',
        contentWithImg: [
          {
            img: require('assets/images/b4a9.png'),
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
            img: require('assets/images/b4a10.png'),
            contents: [
              'Chương trình bắt đầu',
              'Nếu khoảng cách lớn hơn 25cm thì cho Robot đi tiến với tốc độ 100',
              'Lặp lại quá trình trên',
            ],
          },
        ],
      },
    ],
  },
];
