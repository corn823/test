<template>
  <div>
    <Layout>
      <Menu active-name="1" @on-select="goTo">
        <MenuGroup title="内容管理">
          <MenuItem name="1" id="store">
            Go to store!!!
          </MenuItem>
          <MenuItem name="2" id="movie">
            Go to movie!!!
          </MenuItem>
          <MenuItem name="3" id="tibame">
            Go to tibame!!!
          </MenuItem>
          <MenuItem name="4" id="helloworld">
            Go back to HelloWorld!!!
          </MenuItem>
        </MenuGroup>
      </Menu>
      <Layout>
        <Content :style="{padding: '0 16px 16px'}">
          <Card>
            <Table :columns="columns1" :data="data1"></Table>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '課程名稱',
          key: 'class'
        },
        {
          title: '類型',
          key: 'type'
        },
        {
          title: '上課日期',
          key: 'date'
        },
        {
          title: '推薦',
          key: 'recommend'
        },
        {
          title: '師資',
          key: 'teacher'
        },
        {
          title: '備註',
          key: 'remark'
        }
      ],
      data1: [
        {
          class: '全方位數位行銷實戰養成班',
          type: '行銷企劃 ‧ SEO ‧ 廣告投放 ‧ GA數據分析 ‧ 社群經營',
          date: '108/9/17 - 109/1/17',
          recommend: '★★★☆☆',
          teacher: 'DoDo',
          remark: '無'
        },
        {
          class: '智慧App整合開發養成班',
          type: 'Android+iOS雙系統開發課程',
          date: '108/09/24 - 109/03/13',
          recommend: '★★★☆☆',
          teacher: '小吳',
          remark: '學員完訓後兩個月內就業率高達95%！'
        },
        {
          class: 'Java雲端服務開發技術養成班',
          type: 'Java ‧ Android ‧ 雲端開發',
          date: '108/10/1 - 109/3/20',
          recommend: '★★★★★',
          teacher: '大吳',
          remark: '有機會起薪達38k~50k'
        },
        {
          class: 'Web/APP 前端設計工程師養成班',
          type: 'UI/UX設計 ‧ 互動程式 ‧ 網站開發',
          date: '108/10/23-109/4/10',
          recommend: '★★★★★',
          teacher: 'Mrs.潘',
          remark: '就業薪資34K~50K'
        }
      ],
      page: {
        1: '/store',
        2: '/movie',
        3: '/tibame',
        4: '/'
      }
    }
  },
  methods: {
    goTo (to) {
      // this.page[to]
      this.$router.push({
        path: this.page[to]
      })
      // console.log(to)
    }
  }
}
</script>
<style>
#store {
  background-color: #FFBB00;
  border:1px solid #000;
  cursor: pointer;
}
#movie {
  background-color: #FFFF00;
  border:1px solid #000;
}
#tibame {
  background-color: #BBFF00;
  border:1px solid #000;
}
#helloworld{
  background-color: #DDDDDD;
  border:1px solid #000;
}
router-link:hover{
  cursor: pointer;
}
</style>
