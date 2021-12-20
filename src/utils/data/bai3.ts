export default [
  {
    title: 'Mục tiêu bài học',
    contents: [
      'Hiểu về nguyên lý hoạt đông của Còi báo  và lập trình cho Robot phát còi báo',
      'Sử dụng phần mềm lập trình kết hợp di chuyển robot với LED RGB và còi báo',
    ],
  },
  {
    title: 'Module bài học',
    contentWithImg: [
      {
        img: require('assets/images/b3a2.png'),
        contents: [
          'Còi chíp (Buzzer) là một loại thiết bị phát thanh. Nó được sử dụng rộng rãi trong đồ chơi điện tử, quà tặng âm thanh, báo thức cá nhân, hệ thống báo động của ngân hàng và công an',
        ],
      },
      {
        img: require('assets/images/b3a2.png'),
        contents: ['Đây là loại Còi chip loại 9,5x12mm 3V, 5V, 12V'],
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
            img: require('assets/images/b3a3.png'),
            contents: [
              'Điều khiển động cơ',
              'Khi thay đổi thông số M1, M2 và tốc độ thì bánh xe sẽ thay đổi tốc độ và hướng di chuyển',
            ],
          },
          {
            img: require('assets/images/b3a4.png'),
            contents: ['Xuất ra giá trị cao hoặc thấp tại một chân của robot'],
          },
          {
            img: require('assets/images/b3a5.png'),
            contents: ['Chờ trong một khoảng thời gian xác định'],
          },
          {
            img: require('assets/images/b3a6.png'),
            contents: ['Thực hiện lặp các câu lệnh bên trong nó mãi mãi'],
          },
        ],
      },
      {
        title: 'Cấu trúc lập trình',
        contentWithImg: [
          {
            img: require('assets/images/b3a7.png'),
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
            img: require('assets/images/b3a8.png'),
            contents: [
              'Chân số 3, 4 và 5 điều khiển đèn led',
              'Chân số 6 điều khiển còi chip',
              'Đi tiến với tốc độ 150 chờ 2s, đèn và còi tắt',
              'Đi tiến tốc độ 150, bật đèn led màu đỏ và bật còi, đợi 3s',
              'Rẽ phải tốc độ 150, bật đèn led màu vàng và bật còi, đợi 1s',
              'Xe đi tiến tốc độ 150, tắt đèn và tắt còi, đợi 2s',
              'Xe dừng lại, đội 2s',
              'Lặp lại quá trình trên',
            ],
          },
        ],
      },
    ],
  },
];
