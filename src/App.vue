<template>
  <div class="searchBar" id="searchBar">
      <!-- 头部 -->
      <header :class="searchBarFixed == true ? 'isFixed' :''" slot="header" style="backgroundColor:black;height:68px;width:100%;">
          <!-- logo -->
          <h1 id="logo"><a href="" style="color:blue">logo</a></h1>
          <!-- 导航栏 --> 
          <div id="guide">
            <nav class="tabs">
              <li class="tab" @click="changePage('/home', 0)"></li>
              <li class="tab" @click="changePage('/biology', 1)">
                <el-dropdown>
                  <span class="el-dropdown-link font">
                    多彩生物
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <li @click="changePage('/animals', 11)">动物</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/botany', 12)">植物</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/fungus', 13)">真菌</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/protist', 14)">原生生物</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/prokaryote', 15)">原核生物</li>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="tab" @click="changePage('/activities', 2)">
                <el-dropdown>
                  <span class="el-dropdown-link font">
                    科普活动
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <li @click="changePage('/scienceTalk', 21)">天方烨谈</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/sciencePicture', 22)">科学美图</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/scienceConference', 23)">科普会议</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/scienceArticles', 24)">科普文章</li>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="tab" @click="changePage('/cooperate', 3)">
                <el-dropdown>
                  <span class="el-dropdown-link font">
                    合作伙伴
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <li @click="changePage('/zoo', 31)">动物园</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/researchInstitutes', 32)">科研机构</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/commonwealOrganization)', 33)">公益性组织</li>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="tab"  @click="changePage('/data', 4)">
              <span>基因数据</span>
              </li>
              <li class="tab"  @click="changePage('/about', 5)">
                <el-dropdown>
                  <span class="el-dropdown-link font">
                    关于我们
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <li @click="changePage('/projectIntroduction)', 51)">项目介绍</li>
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <li @click="changePage('/contactUs)', 52)">联系我们</li>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li class="tab"  @click="changePage('/mall', 6)">
              <span>积分商城</span>
              </li>
              <li class="tab"  @click="changePage('/personalCenter', 7)">
              <span>个人中心</span>
              </li>
            </nav>

          </div>
          <!-- 搜索框   -->
          <form action="#">
              <input
               class="search"
               placeholder="请输入关键词"/>
          </form>
          <!-- 登录注册按钮 -->
          <div id="loginRegister">
              <li class="tab" @click="changePage('/login',111)">
              <span>登录</span>
              </li>
              <li style="color:white;marginLeft:5px;marginRight:5px">|</li>
              <li class="tab" @click="changePage('/register',222)">
              <span>注册</span>
              </li>
          </div>
      </header>
      <!-- 主体 -->
      <!-- 路由显示组件的容器 -->
      <router-view>
      <main style="textAlign:center;height:500px">
        main
      </main>
      </router-view>
      <!-- 尾部 -->
      <footer style="backgroundColor:black;textAlign:center;height:350px">
        <h1 id="logo"><a href="" style="color:white">logo</a></h1>
        <div class="bottomBigList">
          <div class="bottomSmallList">
            <p>多彩生物</p>
            <li @click="changePage('/animals', 11)">动物</li>
            <li @click="changePage('/botany', 12)">植物</li>
            <li @click="changePage('/fungus', 13)">真菌</li>
            <li @click="changePage('/protist', 14)">原生生物</li>
            <li @click="changePage('/prokaryote', 15)">原核生物</li>
          </div>
          <div class="bottomSmallList">
            <p>科普活动</p>
            <li @click="changePage('/scienceTalk', 21)">天方烨谈</li>
            <li @click="changePage('/sciencePicture', 22)">科学美图</li>
            <li @click="changePage('/scienceConference', 23)">科普会议</li>
            <li @click="changePage('/scienceArticles', 24)">科普文章</li>
          </div>
          <div class="bottomSmallList">
            <p>合作机构</p>
            <li @click="changePage('/zoo', 31)">动物园</li>
            <li @click="changePage('/researchInstitutes', 32)">科研机构</li>
            <li @click="changePage('/commonwealOrganization)', 33)">公益性组织</li>
          </div>
          <div class="bottomSmallList">
            <p>关于我们</p>
            <li @click="changePage('/projectIntroduction)', 51)">项目介绍</li>
            <li @click="changePage('/contactUs)', 52)">联系我们</li>
          </div>
        </div>

      </footer>
  </div>
</template>

<script>

export default { 
  data(){
    // 声明 searchBarFixed 为一个空值字符串
    return{
      searchBarFixed: ''
    }
   },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
	methods: {
		changePage(path, flag){
				//编程式导航
				this.$router.push({name: 'tab'+flag});
//				this.$router.replace({name: 'tab'+flag});
    },
    handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('#searchBar').offsetTop
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
},
  },
  destroyed () {
  window.removeEventListener('scroll', this.handleScroll)
},
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
  }
li{
	list-style: none;
  cursor: pointer;
}
a{
	text-decoration: none;
	color: #fff;
}
/* 导航菜单 */
.tabs .tab{
	width: 100px;
  float: left;
  position: relative;
  left: 150px;
  top:30px;
  color: #fff;
}
li :hover{
	color: #2f7df1;
}
#logo{
  float: left;
}
.searchBar .isFixed{
  position:fixed;
  background-color:#Fff;
  top:0;
  z-index:999;
}
.font{
  color: #fff;
  font-size: 16px;
}
.bottomSmallList{
  width: 280px;
  height: 180px;
  float: left;
  position: relative;
  left: 150px;
}
.bottomSmallList p{
  padding-bottom: 20px;
  color:#fff; 
}
.bottomSmallList li{
  color: rgba(230, 229, 227, 0.493);
  margin-top: 4px;
  
}
/* 搜索框 */
.search{
    position: absolute;
    right: 250px;
    top: 25px;
    width: 150px;
    height: 25px;
}
/* 登录注册 */
#loginRegister{
    position: absolute;
    right: 160px;
    top: 30px;
    cursor: pointer;
}
#loginRegister li{
  float: left;
}
#loginRegister .tab{
  color: #fff;
  position: relative;
}
#loginRegister span :hover{
	color: #2f7df1;
}
</style>