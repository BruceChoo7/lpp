<template>
     <div id="container">
      <main style="backgroundColor:orange;height:1950px;width:2000px">
        <!-- 轮播图 -->
        <el-carousel height="450px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
        <!-- 筛选模块 -->
        <div id="filter" style="height:150px;backgroundColor:blue;"></div>
        <!-- 生物展示列表 -->
        <table style="width:500px;height:400px;align:right" align="center">
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
            <tr>
                <td>11</td>
                <td>22</td>
                <td>33</td>
                <td>44</td>
            </tr>
            <tr>
                <td>11</td>
                <td>22</td>
                <td>33</td>
                <td>44</td>
            </tr>
        </table>

        <!-- 分页切换展示 -->
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[20, 40, 60, 80]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
        </el-pagination>
      </main>
    </div>
</template>

<script>
export default {
methods: {
    handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
    console.log(`当前页: ${val}`);
    }
},
data() {
    return {
    currentPage1: 5,
    currentPage2: 5,
    currentPage3: 5,
    currentPage4: 4
    };
}
}
</script>

<style>
#container{
    box-sizing: border-box
}
*{
    margin: 0;
    padding: 0;
}
/* 轮播图 */
.el-carousel__item h3 {
    color: #da1828;
    font-size: 44px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
background-color: #19d38c;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}

tr{
    height: 40px;
    background: #da1828;
}
td{
    width: 30px;
}
</style>