export const testingTranslations = {
  zh: {
    testing: {
      hero: {
        title: "试验检测中心",
        subtitle: "专业、权威、可靠的航空产品测试验证服务",
        labelTitleMain: "专业测试",
        labelTitleBottom: "覆盖环境、EMC与软件测试，保障产品可靠性。",
        statistics: {
          testEquipment: "测试设备",
          testStandards: "测试标准",
          testItems: "测试项目"
        }
      },
      categories: {
        all: "全部",
        devices: "设备级测试",
        environment: "环境可靠性试验",
        mechanical: "机械及特殊环境试验",
        emc: "电磁兼容试验",
        components: "机载软件与元器件",
        core: "核心测试项目"
      },
      navTitle: "测试分类",
      stickyCategories: {
        all: "全部",
        environment: "环境可靠性",
        emc: "电磁兼容",
        software: "软件测评"
      },
      environment: {
        title: "环境可靠性试验",
        subtitle: "ENVIRONMENTAL RELIABILITY",
        description: "拥有高精度气候环境试验设备，具备温度、湿度、高度、砂尘、流体等多因素综合模拟能力。试验箱均采用国际一流品牌控制系统，温场均匀、数据稳定，可同时满足DO-160G、GJB 150A、GB/T 2423对气候环境试验的严苛要求。特别是在高空低气压、快速温变及温-湿-高综合试验方面，具备行业领先优势。",
        items: {
          highLowTemp: {
            title: "高低温试验",
            specs: "温度范围: -70°C ~ +150°C，温度变化速率: ≤10°C/min",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          humidity: {
            title: "湿热试验",
            specs: "相对湿度: 10% ~ 98% RH，温度: -10°C ~ +85°C",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          vibration: {
            title: "振动试验",
            specs: "频率范围: 5Hz ~ 2000Hz，加速度: 0 ~ 20g",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          shock: {
            title: "冲击试验",
            specs: "冲击加速度: 15g ~ 75g，持续时间: 11ms",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          solar: {
            title: "太阳辐射试验",
            specs: "辐射强度: 1120 W/m²，温度: -10°C ~ +85°C",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          tempShock: {
            title: "温度冲击试验",
            specs: "温度范围: -65°C ~ +150°C，转换时间: ≤5min",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          }
        }
      },
      emc: {
        title: "电磁兼容性试验",
        subtitle: "Electro-Magnetic Compatibility",
        description: "XXX XXX XXXXXXX",
        items: {
          re: {
            title: "辐射发射 (RE)",
            specs: "频率范围: 10kHz ~ 18GHz，测量距离: 1m / 3m",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          ce: {
            title: "传导发射 (CE)",
            specs: "频率范围: 10kHz ~ 108MHz，阻抗: 50Ω",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          hirf: {
            title: "高强辐射场 (HIRF)",
            specs: "场强: 200V/m ~ 8000V/m，频率: 10kHz ~ 40GHz",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          lightning: {
            title: "间接雷电效应",
            specs: "波形: 6.4/69μs，能量: 2.5J ~ 5J",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          rs: {
            title: "电磁敏感度 (RS)",
            specs: "频率范围: 10kHz ~ 18GHz，场强: 1V/m ~ 200V/m",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          cs: {
            title: "传导敏感度 (CS)",
            specs: "频率范围: 10kHz ~ 400MHz，注入电平: 0.1V ~ 5V",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          }
        }
      },
      core: {
        title: "核心测试项目",
        subtitle: "CORE CAPABILITIES",
        description: "依据 DO-160G 《机载设备环境条件和试验程序》进行测试",
        table: {
          index: "序号",
          item: "测试项目",
          standard: "测试标准"
        },
        items: {
          i1: "地面低温耐受试验和低温短时工作试验",
          i2: "低温工作试验",
          i3: "地面高温耐受试验和高温短时工作试验",
          i4: "高度试验",
          i5: "减压试验",
          i6: "过压试验",
          i7: "温度变化试验",
          i8: "湿热试验"
        }
      },
      softwareComponents: {
        title: "机载软件与元器件",
        subtitle: "SOFTWARS & COMPONENTS",
        description: "XXX XXX XXXXXXX",
        softwareCard: {
          title: "机载软件测评",
          linkText: "了解更多"
        },
        componentsCard: {
          title: "元器件筛选 (DPA)",
          badge: "破坏性物理分析",
          tags: {
            internal: "内部目检",
            physical: "物理分析",
            reliability: "可靠性评估"
          }
        }
      },
      cta: {
        title: "未找到您需要的测试项目？",
        description: "XXXXXXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
        button: "联系技术专家"
      },
      devices: {
        title: "设备级测试",
        subtitle: "Device-Level Testing",
        section: {
          description: "不论是航空机载设备的适航取证，还是地面装备的定型鉴定，我们均能为您提供专业、精准、高效的解决方案。"
        },
        table: {
          field: "业务方向",
          standard: "适用标准",
          content: "业务内容"
        },
        items: {
          i1: {
            field: "适航符合性验证",
            content: "涵盖全部26个章节的测试服务，包括气候、机械、EMC及特殊环境试验，为民用飞机及通航设备适航取证提供数据支撑"
          },
          i2: {
            field: "机载设备研发摸底",
            standard: "RTCA DO-160G（部分章节）",
            content: "在产品研发阶段提供关键项目的摸底测试，提前暴露设计缺陷，缩短取证周期"
          },
          i3: {
            field: "军工装备环境鉴定",
            standard: "GJB 150A 系列",
            content: "模拟军用装备在贮存、运输、使用过程中可能遇到的极限环境，评估其对装备性能和结构强度的影响"
          },
          i4: {
            field: "军用EMC鉴定",
            content: "提供CE101~CE107、RE101~RE102、CS101~CS116、RS101等全项目电磁兼容测试，满足陆、海、空三军装备电磁兼容性要求"
          },
          i5: {
            field: "基础环境适应性",
            standard: "GB/T 2423 系列",
            content: "涵盖高温、低温、湿热、温度变化、振动、冲击等基础环境试验，适用于消费电子、工业设备、仪器仪表等各类产品"
          },
          i6: {
            field: "民品电磁兼容",
            standard: "GB/T 9254、GB 17626 系列",
            content: "提供辐射发射、传导发射及静电、浪涌、脉冲群抗扰度测试，协助企业通过CCC、CE、FCC等认证"
          },
          i7: {
            field: "车载电子可靠性",
            standard: "GB/T 28046 系列、ISO 16750 系列",
            content: "模拟汽车电气环境（温度、振动、电源波动）对电子模块的长期影响"
          },
          i8: {
            field: "车载EMC",
            standard: "GB/T 18655-2018、GB/T 33014 系列",
            content: "提供传导发射、辐射发射及大电流注入（BCI）等抗扰度测试，确保车载电子设备在复杂电磁环境中稳定运行"
          },
          i9: {
            field: "无人机/飞行汽车",
            content: "针对低空飞行器特点，提供温度-高度综合试验、结冰试验、快速减压试验等专项测试"
          },
          i10: {
            field: "机器人/智能装备",
            standard: "GB/T 2423、客户定制",
            content: "结合机器人移动与作业特性，提供多轴振动、复杂气候模拟及外壳防护等级测试"
          },
          i11: {
            field: "EMC设计整改",
            content: "提供从PCB布局、滤波设计到整机屏蔽的EMC问题诊断与整改方案"
          },
          i12: {
            field: "工装夹具定制",
            content: "根据产品结构与测试要求，设计并加工各类振动夹具、冲击夹具及测试转接板"
          },
          i13: {
            field: "测试大纲编制",
            content: "协助客户编写符合适航、军标或行业标准要求的环境试验与EMC测试大纲"
          }
        }
      },
      mechanical: {
        title: "机械及特殊环境试验",
        subtitle: "Mechanical & Special Environment Testing",
        section: {
          description: "拥有大推力振动系统和高加速度冲击台，能够模拟从运输振动到坠撞冲击的全频谱机械应力。振动系统配置800×800mm大台面和水平滑台，可满足大尺寸机载设备及机柜的测试需求。同时，我们具备航空级防火试验能力，为机载非金属材料和电气设备提供全面的安全性评估。"
        },
        items: {
          i1: {
            field: "振动试验",
            paras: {
              p1: "推力：50KN",
              p2: "台面尺寸：800×800mm（水平滑台）",
              p3: "频率：随机1-2000Hz，正弦1-2000Hz",
              p4: "空载频率范围：随机1-2600Hz，正弦1-2600Hz",
              p5: "空载加速度：980m/s²",
              p6: "位移：76mm p-p",
              p7: "二次平台：150×150mm，加速度500~3000g"
            },
            examples: {
              e1: "正弦振动",
              e2: "随机振动",
              e3: "正弦+随机振动",
              e4: "强化振动"
            }
          },
          i2: {
            field: "冲击/坠撞试验",
            paras: {
              p1: "冲击台面：650×800mm",
              p2: "半正弦波：15~500g，脉冲时间2~40ms",
              p3: "后峰锯齿波：15~100g，脉冲时间2~40ms",
              p4: "二次台面：500~3000g，正弦脉冲0.2~2ms"
            },
            examples: {
              e1: "工作冲击",
              e2: "坠撞安全试验",
              e3: "包装跌落模拟"
            }
          },
          i3: {
            field: "加速度试验",
            paras: {
              p1: "量级：0.5~100g",
              p2: "加速度回转半径：2500mm"
            },
            examples: {
              e1: "结构耐久性",
              e2: "惯性载荷模拟"
            }
          },
          i4: {
            field: "防火/可燃性测试",
            paras: {
              p1: "类型：垂直/水平本生灯法",
              p2: "火焰类型：符合航空标准"
            },
            examples: {
              e1: "材料可燃性测试",
              e2: "机载设备防火试验"
            }
          }
        }
      },
      environmentAdvanced: {
        items: {
          i1: {
            field: "温湿度试验",
            paras: {
              p1: "箱体尺寸：1000*1000*1000mm",
              p2: "温度范围：-70°C~+150°C",
              p3: "温度变化速率：10°C/min",
              p4: "温度冲击转换时间：≤5s",
              p5: "湿度范围：20%RH~98%RH"
            },
            examples: {
              e1: "高温/低温贮存",
              e2: "温度循环/冲击",
              e3: "恒定/交变湿热",
              e4: "温度-湿度组合"
            }
          },
          i2: {
            field: "低气压/高度试验",
            paras: {
              p1: "气压范围：常压~0.5kPa",
              p2: "降压速率：≤30min（常压→1kPa，空载）",
              p3: "快速减压：75.2kPa→18.8kPa，≤15s"
            },
            examples: {
              e1: "温度-高度试验",
              e2: "快速减压",
              e3: "爆炸减压模拟"
            }
          },
          i3: {
            field: "砂尘试验",
            paras: {
              p1: "吹尘风速：1.5~8.9m/s",
              p2: "吹尘浓度：(3.5~8.8)g/m³",
              p3: "吹砂风速：18.0~29m/s"
            },
            examples: {
              e1: "吹尘试验",
              e2: "吹砂试验",
              e3: "防尘等级验证"
            }
          },
          i4: {
            field: "防水/流体试验",
            paras: {
              p1: "防水方式：滴水、喷水、连续水流",
              p2: "流体敏感性：液体浸渍、喷淋"
            },
            examples: {
              e1: "防水性试验",
              e2: "流体污染试验",
              e3: "雨淋试验"
            }
          },
          i5: {
            field: "腐蚀/霉菌/结冰",
            paras: {
              p1: "盐雾：中性盐雾（非水加热）",
              p2: "霉菌：符合 DO-160、GJB 150 菌种",
              p3: "结冰：符合 DO-160、GJB 150 工况"
            },
            examples: {
              e1: "中性盐雾试验",
              e2: "霉菌生长试验",
              e3: "结冰/冻雨试验"
            }
          }
        }
      },
      emcAdvanced: {
        title: "电磁兼容性试验",
        subtitle: "Electro-Magnetic Compatibility",
        section: {
          description: "配置3米法半电波暗室，测试系统覆盖9kHz至40GHz全频段，能够完整执行RTCA DO-160G第15至22条及第25条的全部EMC测试项目，同时兼容GJB 151B-2013及主要民品/车规EMC标准。特别是在射频辐射敏感度领域，我们具备200V/m的高场强测试能力，能够满足最严苛的航空电子设备抗干扰验证需求。"
        },
        items: {
          i1: {
            field: "DO-160G航空EMC",
            paras: {
              p1: "3米法暗室",
              p2: "磁效应：±80N/m",
              p3: "电源输入：28V/30A",
              p4: "系统射频辐射敏感度：10kHz-40GHz，200V/m",
              p5: "射频传导敏感度：10kHz-400MHz，300mA",
              p6: "静电放电：15kV"
            },
            examples: {
              e1: "磁影响(§15)",
              e2: "电源输入(§16)",
              e3: "电压尖峰(§17)",
              e4: "音频传导敏感度(§18)",
              e5: "感应信号敏感度(§19)",
              e6: "射频敏感度(§20)",
              e7: "射频能量发射(§21)",
              e8: "雷电感应瞬态(§22)",
              e9: "静电放电(§25)"
            }
          },
          i2: {
            field: "军标EMC",
            paras: {
              p1: "传导发射：CE101、CE102、CE107",
              p2: "辐射发射：RE101、RE102",
              p3: "传导敏感度：CS101、CS102、CS114、CS115、CS116",
              p4: "辐射敏感度：RS101"
            },
            examples: {
              e1: "电源线传导发射",
              e2: "电场辐射发射",
              e3: "大电流注入(BCI)",
              e4: "磁场辐射敏感度"
            }
          },
          i3: {
            field: "民品/汽车电子EMC",
            paras: {
              p1: "传导发射：CE 150kHz-30MHz/80MHz",
              p2: "辐射发射：RE 150kHz-6GHz",
              p3: "辐射抗扰：RS 80MHz-6GHz"
            },
            standard3: "GB/T 33014系列",
            examples: {
              e1: "车载电子传导/辐射发射",
              e2: "辐射抗扰度测试",
              e3: "手持式无线电设备测试"
            }
          }
        }
      }
    }
  },
  en: {
    testing: {
      hero: {
        title: "Testing Center",
        subtitle: "Professional, Authoritative, Reliable Aviation Product Testing & Verification Services",
        labelTitleMain: "Professional Testing",
        labelTitleBottom: "End-to-end environmental, EMC, and software testing for reliability.",
        statistics: {
          testEquipment: "Test Equipment",
          testStandards: "Test Standards",
          testItems: "Test Items"
        }
      },
      categories: {
        all: "All",
        devices: "Device-Level Testing",
        environment: "Environmental Reliability Testing",
        mechanical: "Mechanical & Special Environment Testing",
        emc: "EMC Testing",
        components: "Softwars & Components",
        core: "Core Capablities"
      },
      navTitle: "Test Categories",
      stickyCategories: {
        all: "All",
        environment: "Environmental Reliability",
        emc: "EMC",
        software: "Software Evaluation"
      },
      environment: {
        title: "Environmental Reliability",
        subtitle: "",
        description: "Equipped with high-precision climatic test systems, we provide multi-factor integrated simulation capabilities covering temperature, humidity, altitude, sand and dust, and fluid exposure. All chambers use internationally leading control systems with uniform thermal fields and stable data, meeting stringent climatic test requirements in DO-160G, GJB 150A, and GB/T 2423. We are especially strong in high-altitude low-pressure, rapid temperature transition, and combined temperature-humidity-altitude testing.",
        items: {
          highLowTemp: {
            title: "High/Low Temperature Test",
            specs: "Temperature range: -70°C to +150°C, ramp rate: ≤10°C/min",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          humidity: {
            title: "Humidity Test",
            specs: "Humidity: 10% to 98% RH, Temperature: -10°C to +85°C",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          vibration: {
            title: "Vibration Test",
            specs: "Frequency: 5Hz to 2000Hz, Acceleration: 0 to 20g",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          shock: {
            title: "Shock Test",
            specs: "Shock: 15g to 75g, Duration: 11ms",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          solar: {
            title: "Solar Radiation Test",
            specs: "Irradiance: 1120 W/m², Temperature: -10°C to +85°C",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          tempShock: {
            title: "Thermal Shock Test",
            specs: "Temperature range: -65°C to +150°C, Transfer time: ≤5 min",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          }
        }
      },
      emc: {
        title: "Electro-Magnetic Compatibility",
        subtitle: "",
        description: "XXX XXX XXXXXXX",
        items: {
          re: {
            title: "Radiated Emissions (RE)",
            specs: "Frequency: 10kHz to 18GHz, Distance: 1m / 3m",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          ce: {
            title: "Conducted Emissions (CE)",
            specs: "Frequency: 10kHz to 108MHz, Impedance: 50Ω",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          hirf: {
            title: "High-Intensity Radiated Fields (HIRF)",
            specs: "Field strength: 200V/m to 8000V/m, Frequency: 10kHz to 40GHz",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          lightning: {
            title: "Indirect Lightning Effects",
            specs: "Waveform: 6.4/69μs, Energy: 2.5J to 5J",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          rs: {
            title: "Radiated Susceptibility (RS)",
            specs: "Frequency: 10kHz to 18GHz, Field strength: 1V/m to 200V/m",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          },
          cs: {
            title: "Conducted Susceptibility (CS)",
            specs: "Frequency: 10kHz to 400MHz, Injection: 0.1V to 5V",
            description: "XXXXXX XXXXXX XXXXXX XXXXXX"
          }
        }
      },
      core: {
        title: "Core Capabilities",
        subtitle: "",
        description: "Testing per DO-160G 'Environmental Conditions and Test Procedures for Airborne Equipment'.",
        table: {
          index: "No.",
          item: "Test Item",
          standard: "Standard"
        },
        items: {
          i1: "Ground low-temperature endurance and short-time operation tests",
          i2: "Low-temperature operation test",
          i3: "Ground high-temperature endurance and short-time operation tests",
          i4: "Altitude test",
          i5: "Decompression test",
          i6: "Overpressure test",
          i7: "Temperature variation test",
          i8: "Humidity test"
        }
      },
      softwareComponents: {
        title: "Softwars & Components",
        subtitle: "",
        description: "XXX XXX XXXXXXX",
        softwareCard: {
          title: "Airborne Software Evaluation",
          linkText: "Learn more"
        },
        componentsCard: {
          title: "Component Screening (DPA)",
          badge: "Destructive Physical Analysis",
          tags: {
            internal: "Internal Visual Inspection",
            physical: "Physical Analysis",
            reliability: "Reliability Assessment"
          }
        }
      },
      cta: {
        title: "Can't find the testing you need?",
        description: "XXXXXXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX",
        button: "Contact a technical expert"
      },
      devices: {
        title: "Device-Level Testing",
        subtitle: "",
        section: {
          description: "Whether for airworthiness certification of airborne equipment or type qualification of ground equipment, we provide professional, precise, and highly efficient solutions."
        },
        table: {
          field: "Business Area",
          standard: "Applicable Standard",
          content: "Service Content"
        },
        items: {
          i1: {
            field: "Airworthiness Compliance Verification",
            content: "Comprehensive testing across all 26 chapters, including climate, mechanical, EMC, and special-environment tests, providing data support for civil aircraft and general aviation airworthiness certification."
          },
          i2: {
            field: "Airborne Equipment R&D Baseline Testing",
            standard: "RTCA DO-160G (Selected Chapters)",
            content: "Provides baseline tests for key items during product development to expose design issues early and shorten certification cycles."
          },
          i3: {
            field: "Military Equipment Environmental Qualification",
            standard: "GJB 150A Series",
            content: "Simulates extreme environments encountered during storage, transport, and operation of military equipment, assessing impacts on performance and structural strength."
          },
          i4: {
            field: "Military EMC Qualification",
            content: "Provides full-scope EMC testing including CE101~CE107, RE101~RE102, CS101~CS116, and RS101, meeting electromagnetic compatibility requirements across land, sea, and air military platforms."
          },
          i5: {
            field: "Basic Environmental Adaptability",
            standard: "GB/T 2423 Series",
            content: "Covers foundational environmental tests such as high/low temperature, humidity, thermal variation, vibration, and shock for consumer electronics, industrial equipment, instrumentation, and more."
          },
          i6: {
            field: "Commercial EMC",
            standard: "GB/T 9254, GB 17626 Series",
            content: "Provides radiated/conducted emissions and immunity tests including ESD, surge, and EFT, helping enterprises meet CCC, CE, FCC, and related certifications."
          },
          i7: {
            field: "Automotive Electronics Reliability",
            standard: "GB/T 28046 Series, ISO 16750 Series",
            content: "Simulates long-term effects of automotive electrical environments (temperature, vibration, power fluctuation) on electronic modules."
          },
          i8: {
            field: "Automotive EMC",
            standard: "GB/T 18655-2018, GB/T 33014 Series",
            content: "Provides immunity tests such as conducted/radiated emissions and bulk current injection (BCI), ensuring stable operation of automotive electronics in complex electromagnetic environments."
          },
          i9: {
            field: "UAV / Flying Car",
            content: "Offers dedicated tests such as temperature-altitude combined testing, icing testing, and rapid decompression testing based on low-altitude vehicle characteristics."
          },
          i10: {
            field: "Robotics / Intelligent Equipment",
            standard: "GB/T 2423, Customer-Specific",
            content: "Combines robotic mobility and operation characteristics to provide multi-axis vibration, complex climate simulation, and enclosure protection testing."
          },
          i11: {
            field: "EMC Design Rectification",
            content: "Provides EMC issue diagnosis and rectification plans from PCB layout and filtering design to complete-system shielding."
          },
          i12: {
            field: "Custom Fixtures & Tooling",
            content: "Designs and manufactures vibration fixtures, shock fixtures, and test interface boards according to product structure and test requirements."
          },
          i13: {
            field: "Test Outline Preparation",
            content: "Assists customers in preparing environmental and EMC test outlines compliant with airworthiness, military, or industry standards."
          }
        }
      },
      mechanical: {
        title: "Mechanical & Special Environment Testing",
        subtitle: "",
        section: {
          description: "With a high-thrust vibration system and high-acceleration shock table, we can simulate full-spectrum mechanical stress from transport vibration to crash impact. Our vibration system features an 800x800 mm large table and horizontal slip table, supporting large airborne equipment and cabinet-level tests. We also provide aviation-grade fire testing to deliver comprehensive safety evaluation for onboard non-metallic materials and electrical equipment."
        },
        items: {
          i1: {
            field: "Vibration Testing",
            paras: {
              p1: "Thrust: 50KN",
              p2: "Table Size: 800×800mm (Horizontal Slip Table)",
              p3: "Frequency: Random 1-2000Hz, Sine 1-2000Hz",
              p4: "No-load Frequency Range: Random 1-2600Hz, Sine 1-2600Hz",
              p5: "No-load Acceleration: 980m/s²",
              p6: "Displacement: 76mm p-p",
              p7: "Secondary Table: 150×150mm, Acceleration 500~3000g"
            },
            examples: {
              e1: "Sine Vibration",
              e2: "Random Vibration",
              e3: "Sine + Random Vibration",
              e4: "Enhanced Vibration"
            }
          },
          i2: {
            field: "Shock / Crash Testing",
            paras: {
              p1: "Shock Table Size: 650×800mm",
              p2: "Half-sine: 15~500g, Pulse Duration 2~40ms",
              p3: "Terminal Peak Sawtooth: 15~100g, Pulse Duration 2~40ms",
              p4: "Secondary Table: 500~3000g, Sine Pulse 0.2~2ms"
            },
            examples: {
              e1: "Operational Shock",
              e2: "Crash Safety Testing",
              e3: "Package Drop Simulation"
            }
          },
          i3: {
            field: "Acceleration Testing",
            paras: {
              p1: "Range: 0.5~100g",
              p2: "Centrifuge Radius: 2500mm"
            },
            examples: {
              e1: "Structural Durability",
              e2: "Inertial Load Simulation"
            }
          },
          i4: {
            field: "Fire / Flammability Testing",
            paras: {
              p1: "Method: Vertical/Horizontal Bunsen Burner",
              p2: "Flame Type: Compliant with aviation standards"
            },
            examples: {
              e1: "Material Flammability Testing",
              e2: "Airborne Equipment Fire Testing"
            }
          }
        }
      },
      environmentAdvanced: {
        items: {
          i1: {
            field: "Temperature & Humidity Testing",
            paras: {
              p1: "Chamber Size: 1000*1000*1000mm",
              p2: "Temperature Range: -70°C~+150°C",
              p3: "Temperature Change Rate: 10°C/min",
              p4: "Thermal Shock Transfer Time: ≤5s",
              p5: "Humidity Range: 20%RH~98%RH"
            },
            examples: {
              e1: "High/Low Temperature Storage",
              e2: "Thermal Cycling / Shock",
              e3: "Constant / Alternating Damp Heat",
              e4: "Temperature-Humidity Combined"
            }
          },
          i2: {
            field: "Low Pressure / Altitude Testing",
            paras: {
              p1: "Pressure Range: Atmospheric~0.5kPa",
              p2: "Depressurization Rate: ≤30min (Atmospheric→1kPa, No-load)",
              p3: "Rapid Decompression: 75.2kPa→18.8kPa, ≤15s"
            },
            examples: {
              e1: "Temperature-Altitude Testing",
              e2: "Rapid Decompression",
              e3: "Explosive Decompression Simulation"
            }
          },
          i3: {
            field: "Sand & Dust Testing",
            paras: {
              p1: "Dust-Blowing Speed: 1.5~8.9m/s",
              p2: "Dust Concentration: (3.5~8.8)g/m³",
              p3: "Sand-Blowing Speed: 18.0~29m/s"
            },
            examples: {
              e1: "Dust-Blowing Test",
              e2: "Sand-Blowing Test",
              e3: "Dust Protection Rating Verification"
            }
          },
          i4: {
            field: "Waterproof / Fluid Susceptibility Testing",
            paras: {
              p1: "Waterproof Methods: Drip, Spray, Continuous Water Flow",
              p2: "Fluid Susceptibility: Liquid Immersion, Spray"
            },
            examples: {
              e1: "Waterproof Test",
              e2: "Fluid Contamination Test",
              e3: "Rain Test"
            }
          },
          i5: {
            field: "Corrosion / Mold / Icing",
            paras: {
              p1: "Salt Spray: Neutral Salt Spray (Non-Water Heating)",
              p2: "Mold: DO-160 and GJB 150 compliant strains",
              p3: "Icing: DO-160 and GJB 150 compliant conditions"
            },
            examples: {
              e1: "Neutral Salt Spray Test",
              e2: "Mold Growth Test",
              e3: "Icing / Freezing Rain Test"
            }
          }
        }
      },
      emcAdvanced: {
        title: "Electro-Magnetic Compatibility",
        subtitle: "",
        section: {
          description: "Featuring a 3 m semi-anechoic chamber, our test system covers the full 9 kHz to 40 GHz band. We can execute all EMC items in RTCA DO-160G Sections 15 to 22 and Section 25, while also supporting GJB 151B-2013 and major commercial/automotive EMC standards. In radiated RF susceptibility, we offer high-field testing up to 200 V/m to meet the most stringent anti-interference validation requirements for avionics equipment."
        },
        items: {
          i1: {
            field: "DO-160G Aviation EMC",
            paras: {
              p1: "3-Meter Anechoic Chamber",
              p2: "Magnetic Effect: ±80N/m",
              p3: "Power Input: 28V/30A",
              p4: "System RF Radiated Susceptibility: 10kHz-40GHz, 200V/m",
              p5: "RF Conducted Susceptibility: 10kHz-400MHz, 300mA",
              p6: "ESD: 15kV"
            },
            examples: {
              e1: "Magnetic Effect (§15)",
              e2: "Power Input (§16)",
              e3: "Voltage Spike (§17)",
              e4: "Audio Frequency Conducted Susceptibility (§18)",
              e5: "Induced Signal Susceptibility (§19)",
              e6: "RF Susceptibility (§20)",
              e7: "RF Energy Emission (§21)",
              e8: "Lightning Induced Transient (§22)",
              e9: "Electrostatic Discharge (§25)"
            }
          },
          i2: {
            field: "Military Standard EMC",
            paras: {
              p1: "Conducted Emissions: CE101, CE102, CE107",
              p2: "Radiated Emissions: RE101, RE102",
              p3: "Conducted Susceptibility: CS101, CS102, CS114, CS115, CS116",
              p4: "Radiated Susceptibility: RS101"
            },
            examples: {
              e1: "Power Line Conducted Emissions",
              e2: "Electric Field Radiated Emissions",
              e3: "Bulk Current Injection (BCI)",
              e4: "Magnetic Field Radiated Susceptibility"
            }
          },
          i3: {
            field: "Commercial / Automotive EMC",
            paras: {
              p1: "Conducted Emissions: CE 150kHz-30MHz/80MHz",
              p2: "Radiated Emissions: RE 150kHz-6GHz",
              p3: "Radiated Immunity: RS 80MHz-6GHz"
            },
            standard3: "GB/T 33014 Series",
            examples: {
              e1: "Automotive Conducted/Radiated Emissions",
              e2: "Radiated Immunity Testing",
              e3: "Handheld Radio Equipment Testing"
            }
          }
        }
      }
    }
  }
};
