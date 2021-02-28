<template>
  <div class='footer'>
     <div class="footer-wrapper pb-5">
        <div class="row">
           <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 pt-4 text-center pt-5">
              <div class="footer-logo mt-4">
                 <img src="@/assets/icon.png" width="50" height="50" alt=""/>
              </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 pt-5">
           <div class="developers mt-4">
              <ul>
                 <li class="title">
                   <span>Developers</span>
                 </li>
                 <li class="pt-3">
                   <span>Meleshko Roman</span>
                 </li>

              </ul>
           </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 pt-5">
           <div class="developers mt-4 text-sm-center text-md-left">
              <ul>
                 <li class="title">
                   <span>Product</span>
                 </li>
                 <li class="pt-3">
                   <span>Weather Vue</span>
                 </li>

              </ul>
           </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 pt-5">
           <div class="developers mt-4">
              <ul>
                 <li class="title">
                   <span>Company</span>
                 </li>
                 <li class="pt-3">
                   <span>About Us</span>
                 </li>
                 <li class="pt-3">
                   <span>Our galary</span>
                 </li>
                 <li class="pt-3">
                   <span>Partners</span>
                 </li>
                 <li class="pt-3">
                   <span>Customers</span>
                 </li>
                 <li class="pt-3">
                   <span>Contact Us</span>
                 </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Footer',
  date() {
    return {

    }
  }
}
</script>


<style scoped>
.row {
  border-top: 2px solid rgba(188, 193, 199, 0.67);
}
li {
  list-style-type: none;
}
ul li:first-child ~ li {
  color: rgba(70, 72, 75, 0.67);
}
ul li:first-child ~ li:hover {
  color: rgba(182, 125, 39, 0.9);
}
</style>


