<template>
<div class="beidou">
     <div class="container">
      <div class="title">
        <h1>北斗计划</h1>
          <span>Beidou Program</span>
          <p>北斗计划是美团面向全球精尖校园科技人才的招聘项目，目标是基于美团多元的业务场景和广阔的职业平台，培养及储备能引领未来科技发展的技术专家，携手打造多层次科技服务平台。该项目自启动以来，吸引了海内外高校诸多优秀科技人才加入，经过多年的耕耘及沉淀，逐渐形成了助力专业人才成长和发展的项目体系。现诚邀各技术领域的优秀同学加入“北斗计划”，一起成长，一起更好，共同践行“帮大家吃得更好，生活更好”的使命！</p>
          <!-- 搜索框 -->
          <div class=search>
            <!-- <label for="search">关键词:</label> -->
            <input type="text" id="search" v-model="searchKeyword" placeholder="输入职位关键词">
            <button @click="searchJobs">搜索</button>
          </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="job-filter">
      <div class="filter-criteria">
        <h2>职位筛选</h2>
        <div>
          <label for="city">城市:</label>
          <select v-model="selectedCity" id="city">
            <option value="">全部</option>
            <option v-for="city in cities" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
        </div>
        <div>
          <label for="category">职位类别:</label>
          <select v-model="selectedCategory" id="category">
            <option value="">全部</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
      </div>
      <div class="job-list-box">
        <ul class="job-list">
          <li v-for="job in paginatedJobs" :key="job.id" class="job-item" @click="goToJobDetail(job.id)">
            <h3>{{ job.title }}</h3>
            <p>城市: {{ job.city }}</p>
            <p>类别: {{ job.category }}</p>
            <p>{{ job.description }}</p>
          </li>
        </ul>
        <el-pagination
        @current-change="handlePageChange"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="filteredJobs.length"
        :current-page="currentPage"
      >
      </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';


// 模拟的职位数据
const jobs = ref([
  { id: 1, title: '【北斗】前端工程师', city: '北京', category: '技术', description: '负责公司前端开发工作' },
  { id: 2, title: '【北斗】后端工程师', city: '上海', category: '技术', description: '负责公司后端开发工作' },
  { id: 3, title: '【北斗】产品经理', city: '广州', category: '产品', description: '负责产品规划和设计' },
  { id: 4, title: '【北斗】UI设计师', city: '深圳', category: '设计', description: '负责用户界面设计' },
  { id: 5, title: '【北斗】市场分析师', city: '北京', category: '市场', description: '负责市场数据的收集和分析' },
  { id: 6, title: '【北斗】测试工程师', city: '上海', category: '技术', description: '负责软件测试和质量保证' },
  { id: 7, title: '【北斗】数据科学家', city: '杭州', category: '技术', description: '负责数据分析和挖掘' },
  { id: 8, title: '【北斗】运营专员', city: '成都', category: '市场', description: '负责产品运营和用户增长' },
  { id: 9, title: '【北斗】客户关系经理', city: '广州', category: '市场', description: '负责客户关系维护和拓展' },
  { id: 10, title: '【北斗】项目经理', city: '深圳', category: '产品', description: '负责项目规划和管理' },
]);

// 用户选择筛选的城市和类别
const selectedCity = ref('');
const selectedCategory = ref('');
const searchKeyword = ref('');

const filteredJobs = computed(() => {
  return jobs.value.filter(job => 
    (selectedCity.value === '' || job.city === selectedCity.value) &&
    (selectedCategory.value === '' || job.category === selectedCategory.value) &&
    (job.title.includes(searchKeyword.value) || job.description.includes(searchKeyword.value))
  );
});


// 搜索职位的方法
const searchJobs = () => {
  // 由于计算属性 filteredJobs 依赖 searchKeyword，此处无需手动重新计算
  // filteredJobs 的值会自动更新
};

// 职位类别和城市列表
const categories = ref(['技术', '产品', '设计', '市场']);
const cities = ref(['北京', '上海', '广州', '深圳']);

// 使用 Vue Router
const router = useRouter();
const route = useRoute();

const goToJobDetail = (jobId) => {
  // 假设详情页的路由路径为 /detail/:id
  router.push({ name: 'Detail', params: { id: jobId.toString() } });
};

// 当前页码
const currentPage = ref(1);

// 每页显示的职位数量
const pageSize = 5;

// 现在基于 filteredJobs 来计算每页的职位
const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredJobs.value.slice(start, end);
});

// 页码改变时触发
const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    });
};
</script>

<style scoped>
.beidou {
 background-image: url(@/assets/images/beidou.png);
}
.container {
  margin: 0 auto;
  width: 1280px;
}
.title {
 
  height: 476px;
}
.title h1,span,p {
  color: white;
}
h1 {
  font-size: 40px;
  padding-top: 100px;
}
.title span {
  font-size: 18px;
  color:#e1e6eab0;
}
p {
  display: block;
  width: 740px;
  padding-top: 10px;
  font-size: 14px;
}
.title .search {
  height: 60px;
  width: 600px;
  margin-top: 36px;
  border-radius: 30px;
  background-color: white;
}
input {
  position: relative;
  width: 544px;
  height: 60px;
  border-radius: 30px;
  border: 0;
  font-size: 20px;
  padding-left: 30px;
}
input:focus {
  outline: none; /* 移除边框 */
  box-shadow: none; /* 移除阴影 */
  border-color: transparent; /* 将边框设置为透明 */
}
button {
  position: relative;
  bottom: 2px;
  width: 52px;
  height:52px;
  background-color: #ffd100;
  border: 0;
  border-radius: 26px;
}

.job-filter {
  display: flex;
  margin: 20px;
}

.filter-criteria {
  flex:1;
  margin-bottom: 20px;
}

.filter-criteria > div {
  margin-right: 10px;
}

.job-list {
  list-style: none;
  padding: 0;
  color:black;
}
.job-list p,h3 {
  color:black;
}
.job-item {
  border-bottom: 1px solid #eee;
  padding: 10px;
}

.job-item h3 {
  margin: 0 0 10px;
}

.job-item p {
  margin: 5px 0;
}

.job-list-box {
  flex:3;
}
.job-list li {
  margin: 20px 0;
  border-radius: 20px;
  padding: 20px 20px;
}
.job-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
</style>