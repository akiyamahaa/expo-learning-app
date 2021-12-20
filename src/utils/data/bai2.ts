export default [
  {
    title: 'Mục tiêu bài học',
    contents: [
      'Hiểu về nguyên lý hoạt đông của LED RGB và kết hợp kiến thức pha trộn màu (7 màu)',
      'Sử dụng phần mềm lập trình kết hợp di chuyển robot với LED RGB',
      'Nâng cao tư duy lập trình và kỹ năng làm việc theo nhóm',
    ],
  },
  {
    title: 'Module bài học',
    contentWithImg: [
      {
        img: require('assets/images/b2a1.png'),
        contents: [
          'Các bạn có thắc mắc tín hiệu đền giao thông ở ngã tư hoạt động như thế nào không nhỉ? Robot chưa biết làm sao để tạo ra các màu, các bạn giúp Robot được không? Trước khi bắt đầu, chúng ta sẽ cùng xem cấu tạo và chân kết nối của đèn led RGB với mạch KcBot',
          'Led RGB có 4 chân, trong đó có 1 chân âm (hoặc dương) chung và 3 chân dương (âm) riêng cho từng màu (R - red - đỏ, G - Green – Lục, B - Blue - Lam)',
        ],
      },
      {
        img: require('assets/images/b2a2.png'),
        contents: [
          'Trong bài học này, chúng ta sẽ sử dụng board mở rộng để kết nối các chân của đèn led với mạch KcBot như hình bên trên',
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
            img: require('assets/images/b2a3.png'),
            contents: ['Bắt đầu một chương trình'],
          },
          {
            img: require('assets/images/b2a4.png'),
            contents: [
              'Điều khiển động cơ. Khi thay đổi thông số M1, M2 và tốc độ thì bánh xe sẽ thay đổi tốc độ và hướng di chuyển',
            ],
          },
          {
            img: require('assets/images/b2a5.png'),
            contents: [
              'Đặt giá trị của một chân bất kì trên mạch một giá trị ở mức CAO hoặc mức THẤP',
            ],
          },
          {
            img: require('assets/images/b2a67.png'),
            contents: [
              'Chờ trong một khoảng thời gian xác định',
              'Thực hiện lặp các câu lệnh bên trong nó mãi mãi',
            ],
          },
        ],
      },
      {
        title: 'Cấu trúc lập trình',
        contentWithImg: [
          {
            img: require('assets/images/b2a8.png'),
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
            img: require('assets/images/b2a9.png'),
            contents: [
              'Bắt đầu',
              'Bật đèn màu đỏ',
              'Chờ 1000 mili giây',
              'Bật đèn xanh lục',
              'Chờ 1000 mili giây',
              'Bật đèn xanh lam',
              'Chờ 1000 mili giây',
              'Lặp lại từ câu lệnh đầu tiên',
            ],
          },
        ],
      },
    ],
  },
];
