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
          title: '店名',
          key: 'store_name'
        },
        {
          title: '類型',
          key: 'type'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '評分',
          key: 'score'
        }
      ],
      data1: [
        {
          store_name: 'KFC',
          type: '速食',
          address: '103台北市大同區承德路一段38號',
          score: '★★★★☆'
        },
        {
          store_name: '蜂巢 Bee House',
          type: '旅宿',
          address: '103台北市大同區太原路57號',
          score: '★★★★★'
        },
        {
          store_name: '京站時尚廣場 Q Square',
          type: '購物廣場',
          address: '103台北市大同區承德路一段1號',
          score: '★★☆☆☆'
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
