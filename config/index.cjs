/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx602c8eba900159b7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4037137af505ff2fa5f643580e8c4a54',

  PROVINCE: '湖南',
  CITY: '湘潭',

  USERS: [
    {
      // 想要发送的人的名字
      name: '妍熙宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'orO3X5ssAwxpOiBCpPND4YrquvIo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ABfuZEkvGNM_TSYgGGP_KABENizF8FR59hlmcB_SwIA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-13',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '妍熙宝宝', year: '2003', date: '07-13',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-04' },
        // 见你的日子
        { keyword: 'seeu_day', date: '2023-04-29' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ABfuZEkvGNM_TSYgGGP_KABENizF8FR59hlmcB_SwIA',

  CALLBACK_USERS: [
    {
      name: 'jh',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wx602c8eba900159b7',
    }
  ],

}

module.exports = USER_CONFIG

