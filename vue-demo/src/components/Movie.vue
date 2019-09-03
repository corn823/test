<template>
  <div>
    <Layout>
      <Menu active-name="1" @on-select="goTo">
        <MenuGroup title="内容管理">
          <MenuItem name="1" id="store">
            Go to store
          </MenuItem>
          <MenuItem name="2" id="movie">
            Go to movie
          </MenuItem>
          <MenuItem name="3" id="tibame">
            Go to tibame
          </MenuItem>
          <MenuItem name="4" id="helloworld">
            Go back to HelloWorld
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
          title: '電影',
          key: 'movie'
        },
        {
          title: '類型',
          key: 'type'
        },
        {
          title: '上映日期',
          key: 'date'
        },
        {
          title: '推薦',
          key: 'recommend'
        },
        {
          title: '備註',
          key: 'remark'
        }
      ],
      data1: [
        {
          movie: '牠 第二章',
          type: '恐怖',
          date: '2019-09-05',
          recommend: '★★★★★',
          remark: '聽說鰻恐怖的！'
        },
        {
          movie: '生日幻境',
          type: '動畫',
          date: '2019-09-06',
          recommend: '★★★☆☆',
          remark: '日本動畫'
        },
        {
          movie: '返校',
          type: '懸疑',
          date: '2019-09-20',
          recommend: '★★★★★',
          remark: '蠻夯的，想看！'
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
