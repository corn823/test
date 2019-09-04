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
            <MenuItem name="5" id="tablerender">
              Go to TableRender
            </MenuItem>
          </MenuGroup>
        </Menu>
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
        <Card>
          <Table :columns="columns1" :data="data1"></Table>
        </Card>
      </Layout>
      <br><br>
      <Select v-model="model1" style="width:150px">
        <Option v-for="item in arrayData" :value="item.value" :key="item.value">{{item.label}}</Option>
      </Select>
      <Button type="primary" @click="openModal">請點選</Button>
      <!-- <Button type="primary" @click="consoleIsModalOpen">aaa</Button> -->
      <Button type="warning" @click="cosoleOfApi">按一下</Button>
      <Modal v-model="isModalOpen" :mask-closable="false">
          {{model1}}
      </Modal>
      <br><br>
      Enter your message(Blur)：<Input type="text" v-model="isBlurMessage" @on-blur="consoleOfBlur" style="width:150px"/>
      <br><br>
      Enter your message again(Change)：<Input type="text" v-model="isChangeMessage" @on-change="consoleOfChange" style="width:150px"/>
    </div>
</template>

<script>
import { api } from '@/api'
export default {
  data () {
    return {
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年齡',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'David',
          age: 18,
          address: '台北市大同區長安西路150號'
        },
        {
          name: 'Nick',
          age: 22,
          address: '台北市大安區忠孝東路四段100號'
        },
        {
          name: 'Jeremy',
          age: 30,
          address: '苗栗市米市街5號'
        }
      ],
      isModalOpen: false,
      arrayData: [
        { label: '星期日',
          value: 'Sunday'},
        { label: '星期一',
          value: 'Monday'},
        { label: '星期二',
          value: 'Tuesday'},
        { label: '星期三',
          value: 'Wednesday'},
        { label: '星期四',
          value: 'Thursday'},
        { label: '星期五',
          value: 'Friday'},
        { label: '星期六',
          value: 'Saturday'}
      ],
      model1: '',
      page: {
        1: '/store',
        2: '/movie',
        3: '/tibame',
        4: '/',
        5: '/tablerender'
      }
    }
  },
  methods: {
    openModal () {
      this.isModalOpen = true
    },
    // consoleIsModalOpen () {
    //   console.log(this.isModalOpen)
    // },
    consoleOfBlur () {
      console.log(this.isBlurMessage)
    },
    consoleOfChange () {
      console.log(this.isChangeMessage)
    },
    goTo (to) {
      // this.page[to]
      this.$router.push({
        path: this.page[to]
      })
      // console.log(to)
    },
    async cosoleOfApi () {
      try {
        const res = await api.get('/activity/getActivity')
        console.log(res)
      } catch (err) {
        console.log(err)
      }
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
#helloworld {
  background-color: #DDDD;
  border:1px solid #000;
}
#tablerender {
  background-color: #FF5511;
  border:1px solid #000;
}
router-link:hover{
  cursor: pointer;
}
</style>
