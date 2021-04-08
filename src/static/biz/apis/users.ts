
import { TypedApiScheme } from './types.d';
/**
 * 注册
 * @see {@link http://yapi.runcobo.com/project/196/interface/api/766}
 */
export const ApiSignUp: TypedApiScheme = {
  url: '/third/third_sign_up',
  method: 'POST',
  requestRules: {
    code: {
      type: String,
      required: true,
    },
    iv: {
      type: String,
      required: true,
    },
    encryptedData: {
      type: String,
      required: true,
    },
    appid: {
      type: Number,
      required: true,
    },
    login: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    account_name: {
      type: String,
      required: true,
    },
    region_code: {
      type: String,
      required: true,
    },
  },
  responseRules: {
    auth_token: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
      model: {
        user_id: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    },
  },
  responseMock: {
    auth_token: '@ID',
    user: {
      email: '@EMAIL',
      user_id: '@Id',
    },
  },
};

/**
 * 登录
 * @see {@link http://yapi.runcobo.com/project/242/interface/api/2246}
 */
export const ApiLogin: TypedApiScheme = {
  url: '/third/xcx_third_login',
  method: 'POST',
  requestRules: {
    code: {
      type: String,
      required: false,
    },
    iv: {
      type: String,
      required: true,
    },
    encryptedData: {
      type: String,
      required: true,
    },
    appid: {
      type: String,
      required: false,
    },
    random_code: {
      type: String,
      required: false,
    },
  },
  responseRules: {
    adviser_info: {
      type: Object,
      required: false,
      model: {
        avatar: {
          type: String,
          required: true,
        },
        account_name: {
          type: String,
          required: true,
        },
        gender: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        open_id: {
          type: String,
          required: true,
        },
      }
    },
    agent_info: {
      type: Object,
      required: false,
      model: {
        avatar: {
          type: String,
          required: true,
        },
        account_name: {
          type: String,
          required: true,
        },
        gender: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        open_id: {
          type: String,
          required: true,
        },
        user_third_id: {
          type: String,
          required: true,
        },
        height: {
          type: String,
          required: true,
        },
      }
    },
    terminal_user_session: {
      type: String,
      required: false,
    },
    code: {
      type: String,
      required: false,
    },
    bind_user_flag: {
      type: String,
      required: false,
    },
    user_info: {
      type: Object,
      required: false,
      model: {
        account_name: {
          type: String,
          required: true,
        },
        adviser_user_id: {
          type: Number,
          required: true,
        },
        appid: {
          type: String,
          required: true,
        },
        avatar: {
          type: String,
          required: true,
        },
        birthday: {
          type: String,
          required: true,
        },
        category_type: {
          type: Number,
          required: true,
        },
        code: {
          type: String,
          required: true,
        },
        gender: {
          type: Number,
          required: true,
        },
        height: {
          type: String,
          required: true,
        },
        height_unit: {
          type: Number,
          required: true,
        },
        hip: {
          type: Number,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        },
        open_id: {
          type: String,
          required: true,
        },
        person_body_shape: {
          type: Number,
          required: true,
        },
        person_goal: {
          type: Number,
          required: true,
        },
        person_type: {
          type: Number,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        public_number_id: {
          type: String,
          required: true,
        },
        question_flag: {
          type: Number,
          required: true,
        },
        region_code: {
          type: String,
          required: true,
        },
        relation_user_id: {
          type: String,
          required: true,
        },
        role: {
          type: Number,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
        sign: {
          type: String,
          required: true,
        },
        superior_agent_id: {
          type: Number,
          required: true,
        },
        unionid: {
          type: String,
          required: true,
        },
        updated_at: {
          type: String,
          required: true,
        },
        waistline: {
          type: Number,
          required: true,
        },
        weight: {
          type: Number,
          required: true,
        },
        weight_goal: {
          type: Number,
          required: true,
        },
        weight_unit: {
          type: Number,
          required: true,
        },
      }
    },
  },
  responseMock: {
    auth_token: '@ID',
    user: {
      email: '@EMAIL',
      user_id: '@Id',
    },
  },
};

/**
 * 编辑用户信息
 * @see {@link http://yapi.runcobo.com/project/196/interface/api/1444}
 */
export const ApiUpdateUserProfile: TypedApiScheme = {
  url: '/users/update_user_info',
  method: 'POST',
  requestRules: {
    email: {
      type: String,
      required: false,
    },
    gender: {
      type: Number,
      required: true,
    },
    birthday: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
};

export default {};
