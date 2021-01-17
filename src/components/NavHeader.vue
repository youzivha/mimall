<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <span class="sep">|</span>
          <a href="javascript:;">MIUI</a>
          <span class="sep">|</span>
          <a href="javascript:;">云服务</a>
          <span class="sep">|</span>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登陆</a>
          <span class="sep">|</span>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart iconfont icon-gouwuchezhengpin"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>红米Redmi</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text">
            <a href="javascript:;"><span class="iconfont icon-sousuo"></span></a>
          </div>
        </div>
      </div>
    </div>
    nav-header
  </div>
</template>

<script>
export default {
  name: 'nav-header'

}
</script>

<style lang="scss">
  @import '@/assets/scss/base.scss';
  @import '@/assets/scss/mixin.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333;
      color: #b0b0b0;
      .container{
        @include flex();
        a{
          display: inline-block;
          color: #b0b0b0;
          }
        .my-cart{
          margin-left: 30px;
          width: 120px;
          background-color: #424242;
          text-align: center;
          .icon-cart{
            margin-right: 4px;
            vertical-align: -2px;
          }
        }
        .sep{
          color: #424242;
          margin: .3em;
        }
       }
    }
    .nav-header{
      color: #333;
      .container{
        height: 112px;
        background-color: #fff;
        @include flex();
        .header-logo{
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #F60;
          overflow: hidden;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            overflow: hidden;
            &:before{
              content: '';
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('/imgs/mi-logo.png') no-repeat 50%;
              background-size: 55px;
              transition: margin .2s;
            }
            &:after{
              content: '';
              display: inline-block;
              width: 55px;
              height: 55px;
              background: url('/imgs/mi-home.png') no-repeat 50%;
              background-size: 55px;
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu{
          display: inline-block;
          margin-left: -400px;
          .item-menu{
            display: inline-block;
            color: #333;
            font-weight: 700;
            font-size: 16px;
            padding: 0 20px;
            cursor: pointer;
            &:hover{
              color: #f60;
              transition: .2s;
            }
          }
        }
        .header-search{
          color: #333;
          .wrapper{
            display: flex;
            border: 1px solid #e0e0e0;
            input{
              border: none;
              width: 223px;
              height: 48px;
              padding: 0 10px;
              font-size: 14px;
              line-height: 48px;
            }
            a{
              display: inline-block;
              text-decoration: none;
              color: #616161;
              span{
                display: inline-block;
                width: 52px;
                height: 48px;
                line-height: 48px;
                font-size: 24px;
                text-align: center;
                vertical-align: middle;
                &:hover{
                  background-color: #f60;
                  transition:all .2s;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
