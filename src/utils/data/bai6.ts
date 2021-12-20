export default [
  {
    title: 'Mục tiêu bài học',
    contents: [
      'Hiểu và sử dụng được module Bluetooth',
      'Biết được cách sử dụng phần mềm để điều khiển robot qua Bluetooth',
      'Nắm được các tính năng và cách dùng của các khối điều khiển',
    ],
  },
  {
    title: 'Module bài học',
    contentWithImg: [
      {
        img: require('assets/images/b6a1.png'),
        contents: [
          'Với module Bluetooth HC 06 và điều khiển thông qua điện thoại Android. Các bạn có thể ứng dụng để điều khiển các thiết bị điện trong nhà như bật tắt đèn, quạt, bật tắt bình nóng lạnh, ... Ở đây chúng ta dùng module Bluetooth HC 06 để điều khiển Robot.',
          'Module Bluetooth HC06 này gồm 4 chân GND, VCC, TX, RX  Khi kết nối bạn chỉ cần cắm bluetooth vào nơi thiết kế sẵn cho module bluetooth trên Board mạch, sau đó bạn có thể lập trình gửi và nhận dữ liệu như một cổng Serial thông thường. Module này có ba loại Master,  Slave và loại chạy được cả hai chế độ Master và Slave, ở đây sử dụng loại Slave, khi kết nối với điện thoại bạn điền mật khẩu mặc định là: 1234',
        ],
      },
      {
        img: require('assets/images/b6a4.png'),
        contents: [
          'Về phần mềm trên điện thoại Android trong sử dụng phần mềm Robo Control bạn có thể tìm và tải trên Google Play. Giao diện và cách sử dụng phần mềm rất đơn giản, bạn chỉ cần nhìn là có thể sử dụng được ngay',
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
            img: require('assets/images/b6a34.png'),
            contents: [
              'Điều khiển tốc độ động cơ M1 hoặc M2',
              'Xuất giá trị CAO hoặc THẤP ra các chân điều khiển',
            ],
          },
          {
            img: require('assets/images/b6a56.png'),
            contents: [
              'Chờ trong một khoảng thời gian xác định',
              'Thực hiện lặp các câu lệnh bên trong nó mãi mãi',
            ],
          },
          {
            img: require('assets/images/b6a78.png'),
            contents: [
              'Cấu lệnh được dùng trong phép so sánh >, <, =',
              'Lệnh nhận dữ liệu qua Bluetooth',
            ],
          },
          {
            img: require('assets/images/b6a910.png'),
            contents: [
              'Tạo một biến mới',
              'Nếu điều kiện đúng sẽ thực hiện câu lênh bên trong',
            ],
          },
        ],
      },
      {
        title: 'Cấu trúc lập trình',
        contentWithImg: [
          {
            img: require('assets/images/b6a11.png'),
            contents: [
              'Chương trình bắt đầu, kiểm tra kí tự nhận được. Khi nhận được kí tự đã được lập trình sẵn Robot sẽ thực hiện các chức năng: Tiến, lùi, dừng, rẽ trái, rẽ phải, bật đèn đỏ, tắt đèn đỏ',
            ],
          },
        ],
      },
      {
        title: 'Thực hành',
        contentWithImg: [
          {
            img: require('assets/images/b6a12.png'),
            contents: [
              'Chương trình bắt đầu',
              'Cài đặt tốc độ truyền dữ liệu',
              'Đọc dữ liệu nhận về từ điện thoại qua cổng Serial',
              'Nếu nhận được “F” thì Robot đi thẳng tốc độ 200',
              'Nếu nhận được “B” thì Robot đi lùi tốc độ 200',
              'Nếu nhận được “L” thì Robot rẽ trái tốc độ 200',
              'Nếu nhận được “R” thì Robot rẽ phải tốc độ 100',
              'Nếu nhận được “S” thì Robot dừng lại',
            ],
          },
        ],
      },
    ],
  },
];
