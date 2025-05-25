import InfoBLock from './components/InfoBlock/InfoBlock';

import styles from "./App.module.scss"


function App() {
  const mainSliderData = [
    {
      // // key: '0-0',
      title: 'Поэзия',
      dates: [1982, 1986],
    },
    {
      // // key: '0-1',
      title: 'Кино',
      dates: [1987, 1991],
    },
    {
      // // key: '0-2',
      title: 'Литература',
      dates: [1992, 1997],
    },
    {
      // // key: '0-3',
      title: 'Исскуство',
      dates: [1999, 2004],
    },
    {
      // // key: '0-4',
      title: 'История',
      dates: [2007, 2012],
    },
    {
      // // key: '0-5',
      title: 'Наука',
      dates: [2015, 2022],
    },

  ];

  const subSliderData = [
    [
      {
        title: "Title 1-1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "0-0",
      },
      {
        title: "Title 1-2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "0-1",
      },
      {
        title: "Title 1-3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "0-2",
      },
      {
        title: "Title 1-4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "0-3",
      },
    ],
    [
      {
        title: "Title 2-1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "1-0",
      },
      {
        title: "Title 2-2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "1-1",
      },
      {
        title: "Title 2-3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "1-2",
      },
      {
        title: "Title 2-4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "1-3",
      },
    ],
    [
      {
        title: "Title 3-1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "2-0",
      },
      {
        title: "Title 3-2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "2-1",
      },
      {
        title: "Title 3-3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "2-2",
      },
      {
        title: "Title 3-4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "2-3",
      },
    ],
    [
      {
        title: "Title 4-1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "3-0",
      },
      {
        title: "Title 4-2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "3-1",
      },
      {
        title: "Title 4-3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "3-2",
      },
      {
        title: "Title 4-4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "3-3",
      },
    ],
    [
      {
        title: "Title 5-1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "4-0",
      },
      {
        title: "Title 5-2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "4-1",
      },
      {
        title: "Title 5-3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "4-2",
      },
      {
        title: "Title 5-4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "4-3",
      },
    ],
    [
      {
        title: "Title 6-1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "5-0",
      },
      {
        title: "Title 6-2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "5-1",
      },
      {
        title: "Title 6-3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "5-2",
      },
      {
        title: "Title 6-4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas perspiciatis optio expedita quos reprehenderit eveniet aliquam totam doloremque debitis, ipsa, aperiam ea ex sunt earum dolor quia cumque impedit!",
        // key: "5-3",
      },
    ]
  ];

  return (
    <div className={styles.App}>
      <InfoBLock
        classes={styles['first-block']}
        blockTitle='Исторические даты'
        blockIndex='first-block'
        mainSliderData={mainSliderData}
        subSliderData={subSliderData}
      />
      {/* <InfoBLock
        blockTitle='Географические даты'
        blockIndex='second-block'
        mainSliderData={mainSliderData}
        subSliderData={subSliderData}
      /> */}
    </div>
  );
}

export default App;
