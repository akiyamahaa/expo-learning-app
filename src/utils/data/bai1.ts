export default [
  {
    title: 'Mục tiêu bài học',
    contents: [
      'Biết sử dụng thành thạo phần mềm lập trình Kidscode và nạp chương trình vào robot',
      'Nhận biết và hiểu được nguyên lý hoạt động của các module phần cứng cơ bản (động cơ, nguồn điện..)',
      'Biết cách sử dụng khối lập trình phần mềm điều khiển động cơ về tốc độ và hướng di chuyển',
      'Nâng cao khả năng tư duy lập trình, kỹ năng làm việc nhóm',
    ],
  },
  {
    title: 'Module bài học',
    contentWithImg: [
      {
        img: require('assets/images/b1a1.png'),
        contents: [
          'Mô hình robot sử dụng hai động cơ được gắn với chân kế nối M1 và M2',
        ],
      },
      {
        img: require('assets/images/b1a1.png'),
        contents: [
          'Loại động cơ được sử dụng là động cơ DC giảm tốc V1 (Điện áp hoạt động: 3 - 9 VDC, dòng điện tiêu thụ: 110 - 140 mA)',
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
            img: require('assets/images/b1a3.png'),
            contents: ['Bắt đầu một chương trình'],
          },
          {
            img: require('assets/images/b1a4.png'),
            contents: [
              'Điều khiển động cơ. Khi thay đổi thông số M1, M2 và tốc độ thì bánh xe sẽ thay đổi tốc độ và hướng di chuyển.',
            ],
          },
          {
            img: require('assets/images/b1a5.png'),
            contents: ['Chờ trong một khoảng thời gian xác định'],
          },
          {
            img: require('assets/images/b1a6.png'),
            contents: ['Thực hiện lặp các câu lệnh bên trong nó mãi mãi'],
          },
        ],
      },
      {
        title: 'Cấu trúc lập trình',
        contentWithImg: [
          {
            img: require('assets/images/b1a7.png'),
            contents: [
              'Chương trình sẽ bắt đầu chạy từ câu lệnh đầu tiến lần lượt đến câu lệnh cuối cùng  khi gặp lệnh lặp lại nó sẽ quay trở lại câu lệnh đầu tiên và thực hiện lại từ đầu nếu không chương trình sẽ kết thúc. Lưu đồ trên là cấu trúc của chương trình nó sẽ thực hiện lần lượt 3 khối lệnh A, B, C và khi gặp lệnh lặp lại nó sẽ quay trở lại thực hiện khối lệnh A và nó sẽ lặp đi lặp lại hành động này.',
            ],
          },
        ],
      },
      {
        title: 'Thực hành',
        contentWithImg: [
          {
            img: require('assets/images/b1a8.png'),
            contents: [
              'Bắt đầu',
              'Động cơ M1 quay với tốc độ 100',
              'Động cơ M2 quay với tốc độ 100',
              'Chờ 1000 mili giây',
              'Động cơ M1 quay với tốc độ 0',
              'Động cơ M2 quay với tốc độ 0',
              'Chờ 1000 mili giây',
              'Lặp lại từ câu lệnh đầu tiên',
            ],
          },
        ],
      },
    ],
  },
];
