function eBook(method) {
  let res = null;
  switch (method) {
    case 'GET':
      res = {
        count: 178,
        next: 'http://101.236.57.232:8000/e-book?page=2&size=12',
        previous: null,
        results: [
          {
            id: 178,
            category: [{ id: 14, name: '好书推荐' }],
            title: '《棋王. 树王. 孩子王》:在绝处中寻找新的希望',
            author: '',
            cover: 'https://5kindle.com/wp-content/uploads/2018/07/015.jpg',
            description: '',
            source_uid: 981,
            source: 1
          },
          {
            id: 177,
            category: [{ id: 13, name: '畅销小说' }],
            title: '张小娴爱情力作：《我终究是爱你的》',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/739745c03f160cda6e85ec6240372d5b.jpg',
            description: '',
            source_uid: 972,
            source: 1
          },
          {
            id: 176,
            category: [{ id: 14, name: '好书推荐' }],
            title:
              '《不要因为走得太远而忘记为什么出发》：带着信念，指引我们前进',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/97bf9c5c97f96bf7b533f01b4e751204.jpg',
            description: '',
            source_uid: 951,
            source: 1
          },
          {
            id: 175,
            category: [{ id: 13, name: '畅销小说' }],
            title: '《世界的凛冬(英文原版)》[英]肯·福莱特',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/s24228614.jpg',
            description: '',
            source_uid: 797,
            source: 1
          },
          {
            id: 174,
            category: [{ id: 13, name: '畅销小说' }],
            title: '《中国古代大案探奇录系列丛书（套装共22册）》吴蔚',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/645d3a183fcc205ft.jpg',
            description:
              '中国历史上有许多扑朔迷离的历史名案和历史之谜，历来众说纷纭，莫衷一是，甚至有很多迄今为止学术界都无法给出真正的定论，这就给推敲和研究历史名案留下了空间。吴蔚，正看中了这种空间，决定下笔《中国古代大案探奇录》系列，以小说的叙述方式来展现精彩的历史案件及人物。',
            source_uid: 794,
            source: 1
          },
          {
            id: 173,
            category: [{ id: 13, name: '畅销小说' }],
            title: '《新零售的未来：零售连锁巨头的进化之道》翁怡诺',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/717cf37655459844t.jpg',
            description:
              '弘章资本创始合伙人，深耕零售的资本企业家翁怡诺诚意力作。剖析多家国际零售业巨头的商业模式，洞察新零售的五大核心问题、三大发展趋势与四大商业逻辑，勾勒新零售未来图景，揭秘国际零售巨头进化之道。',
            source_uid: 791,
            source: 1
          },
          {
            id: 172,
            category: [{ id: 5, name: '人文社科' }],
            title: '如何记忆',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/41NASdSRAeL.jpg',
            description: '我们的大脑究竟是怎么回事？',
            source_uid: 788,
            source: 1
          },
          {
            id: 171,
            category: [{ id: 6, name: '经济管理' }],
            title: '冷启动：零成本做营销',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/51DhUBmFfWL.jpg',
            description:
              '本书针对中小企业做营销没预算、没用户的痛点，系统梳理冷启动项目的思维和策略，帮助营销和运营人员实现项目从0到1再到n的爆发式增长。',
            source_uid: 785,
            source: 1
          },
          {
            id: 170,
            category: [{ id: 3, name: '小说文学' }],
            title: '阿加莎的毒药',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/s29171799.jpg',
            description:
              '“犯罪小说女王”阿加莎•克里斯蒂在她众多令人着迷的推理小说中，构思了无数悬念与谜团，也使用了各种各样的毒药。在小说里，毒药不仅是受害者被害的原因，也是推动情节发展的要素。阿加莎的创作中展现出丰富而准确的化学知识，而这却鲜为她的读者所知。',
            source_uid: 782,
            source: 1
          },
          {
            id: 169,
            category: [{ id: 2, name: '人物传记' }],
            title: '《一口气文史系列（套装共11册）》肖剑 等',
            author: '',
            cover: 'https://5kindle.com/wp-content/uploads/imgs/wx.jpg',
            description: '',
            source_uid: 779,
            source: 1
          },
          {
            id: 168,
            category: [{ id: 4, name: '学习教育' }],
            title: '《（2018）考研英语阅读理解精读100篇（高分版）》印建坤',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/ee462ae6570e48b4t.jpg',
            description:
              '《考研英语阅读理解精读100篇（高分版）》是为考研阅读理解想考高分的人量身定做的。本书可以帮助英语基本功优秀的考生反复演练各种考试技巧，在大量练习之后提高解题速度，以期在阅读理解部分达到28分以上的水平。本书所选文章全部来自于英美国家的权威报纸或杂志，题目的命制思路也是完全仿照了历年考试的真题，所有题目已经被多位曾参加过研究生入学考试的名校在读研究生反复检测，解析精准到位，帮助考生掌握答题技巧，取得考研阅读高分。',
            source_uid: 776,
            source: 1
          },
          {
            id: 167,
            category: [{ id: 4, name: '学习教育' }],
            title: '《纳什均衡与博弈论》汤姆•齐格弗里德',
            author: '',
            cover:
              'https://5kindle.com/wp-content/uploads/2018/07/1a857f85da351e9dt.jpg',
            description:
              '《纳什均衡与博弈论》作者曾获得美国国家科学作家协会颁发的社会科学奖，以及美国地球物理学联合会在科学新闻创办方面颁发的终身成就奖，其作品广受读者欢迎。 一部《美丽心灵》让我们认识了约翰•纳什这位带有传奇色彩的诺贝尔奖获得者。他的数学理论更是越来越为人们所熟知。《纳什均衡与博弈论》通过通俗的语言深入浅出地阐述了约翰•纳什的数学理论及其在当今社会各个领域如经济学、生物学、物理学和社会科学的应用。并简明扼要地介绍了其他科学家对博弈论的研究成果。篇幅精炼，但内容翔实，适合广大对纳什及博弈论感兴趣的读者阅读。',
            source_uid: 773,
            source: 1
          }
        ]
      };
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = eBook;
