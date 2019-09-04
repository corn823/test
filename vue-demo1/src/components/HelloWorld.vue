<template>
  <div>
    <Layout>
      <Menu active-name="1" @on-select="goTo">
        <MenuGroup title="內容管理">
          <MenuItem name="1" id="store">
            Go to Store!!!
          </MenuItem>
          <MenuItem name="2" id="movie">
            Go to Movie!!!
          </MenuItem>
          <MenuItem name="3" id="tibame">
            Go to Tibame!!!
          </MenuItem>
          <MenuItem name="4" id="helloworld">
            Go back to HelloWorld!!!
          </MenuItem>
        </MenuGroup>
      </Menu>
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </Layout>
    <Table :columns="columns1" :data="data1"></Table>
    <br>
    <Select v-model="dayForWeek" style="width:150px">
      <Option v-for="item in arrayData" :value="item.value" :key="item.value">{{item.label}}</Option>
    </Select>
    {{dayForWeek}}
    <Button type="primary" @click="openModal">請點選</Button>
    <Button type="primary" @click="consoleIsModalOpen">aaa</Button>
    <Button type="warning" @click="consoleOfApi">按一下</Button>
    <Modal v-model="isModalOpen" :mask-closable="false" :closable="true"> <!--:mask-closable 是否允许点击遮罩层关闭 ||:closable 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭-->
      {{dayForWeek}}
    </Modal>
    <br>
    <ul>
      <li v-for="(item, index) in dateArray" :key="index">星期{{item.msg}}</li>
    </ul>
    <br>
    <ul>
      <div v-for="(item, index) in dateArrayAgain" :key="index">
        <li v-if="item.isMsgForShow">{{item.msg}}</li>
      </div>
    </ul>
    Enter your message(Blur)：<Input type="text" v-model="isBlurMessage" @on-blur="consoleOfBlur" style="width:150px"/>
    <br><br>
    Enter your message again(Change)：<Input type="text" v-model="isChangeMessage" @on-change="consoleOfChange" style="width:150px"/>
  </div>
</template>

<script>
import { api } from '@/api'
export default{
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
          title: '電話',
          key: 'tel'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '大吳',
          age: '52',
          tel: '0912345678',
          address: '台北市大同區長安西路150號'
        },
        {
          name: '小吳',
          age: '36',
          tel: '0999888777',
          address: '台北市大安區忠孝東路四段100號'
        },
        {
          name: '玉米',
          age: '30',
          tel: '0966777888',
          address: '苗栗市米市街5號'
        }
      ],
      isModalOpen: false,
      arrayData: [
        {
          label: '星期一',
          value: 'Monday'
        },
        {
          label: '星期二',
          value: 'Tuesday'
        },
        {
          label: '星期三',
          value: 'Wednesday'
        },
        {
          label: '星期四',
          value: 'Thursday'
        },
        {
          label: '星期五',
          value: 'Friday'
        },
        {
          label: '星期六',
          value: 'Saturday'
        },
        {
          label: '星期日',
          value: 'Sunday'
        }
      ],
      dayForWeek: '',
      dateArray: [
        {
          msg: '一'
        },
        {
          msg: '二'
        },
        {
          msg: '三'
        },
        {
          msg: '四'
        },
        {
          msg: '五'
        },
        {
          msg: '六'
        },
        {
          msg: '日'
        }
      ],
      dateArrayAgain: [
        { msg: '日', isMsgForShow: true },
        { msg: '一', isMsgForShow: false },
        { msg: '二', isMsgForShow: true },
        { msg: '三', isMsgForShow: false },
        { msg: '四', isMsgForShow: true },
        { msg: '五', isMsgForShow: false },
        { msg: '六', isMsgForShow: true }
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
    openModal () {
      this.isModalOpen = true
    },
    consoleIsModalOpen () {
      console.log(this.isModalOpen)
    },
    consoleOfBlur () {
      console.log(this.isBlurMessage)
    },
    consoleOfChange () {
      console.log(this.isChangeMessage)
    },
    goTo (to) {
      this.$router.push({
        path: this.page[to]
      })
    },
    async consoleOfApi () {
      try {
        const res = await api.get('activity/getActivity')
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
#helloworld{
  background-color: #DDDDDD;
  border:1px solid #000;
}
router-link:hover{
  cursor: pointer;
}
</style>
