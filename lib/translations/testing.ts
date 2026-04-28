export const testingTranslations = {
  zh: {
    testing: {
      hero: {
        title: "试验检测中心",
        subtitle: "专业、权威、可靠的航空产品测试验证服务",
        labelTitleMain: "专业测试",
        labelTitleBottom: "覆盖环境、EMC与软件测试，保障产品可靠性",
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
        mechanical: "机械试验",
        emc: "电磁兼容试验",
        components: "机载软件与元器件",
        core: "核心测试项目"
      },
      navTitle: "测试分类",
      environment: {
        title: "环境可靠性试验",
        subtitle: "ENVIRONMENTAL RELIABILITY TESTING",
        description: "拥有高精度气候环境试验设备，具备温度、湿度、高度、砂尘、流体等多因素综合模拟能力。试验箱均采用国际一流品牌控制系统，温场均匀、数据稳定，可同时满足DO-160G、GJB 150A、GB/T 2423对气候环境试验的严苛要求。特别是在高空低气压、快速温变及温-湿-高综合试验方面，具备行业领先优势。",
        descriptionPart1: "拥有高精度气候环境试验设备，具备温度、湿度、高度、砂尘、流体等多因素综合模拟能力。试验箱均采用国际一流品牌控制系统，温场均匀、数据稳定，可同时满足",
        descriptionPart2: "等对气候环境试验的严苛要求。特别是在高空低气压、快速温变及温-湿-高综合试验方面，具备行业领先优势。",
        items: {
          i1: {
            field: "温湿度试验",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.3A/4A/9A",
              s3: "GB/T 2423.1/2/3/4",
              s4: "HB-6167 系列"
            },
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
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.6A",
              s3: "GB/T 2423 系列",
              s4: "IEC 60068-2 系列",
              s5: "HB 6167 系列"
            },
            paras: {
              p1: "气压范围：常压~0.5kPa",
              p2: "降压速率：≤30min（常压→1kPa，空载）",
              p3: "快速减压：75.2kPa→18.8kPa，≤15s"
            },
            examples: {
              e1: "温度-高度试验",
              e2: "快速减压"
            }
          },
          i3: {
            field: "砂尘试验",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.12A",
              s3: "HB 6167.10-2016",
              s4: "GJB 360B-2009",
              s5: "GB/T 38924 系列"
            },
            paras: {
              p1: "吹尘风速：1.5~8.9m/s",
              p2: "吹尘浓度：0~11g/m³",
              p3: "吹砂风速：18.0~29m/s",
              p4: "吹砂浓度：0~3g/m³"
            },
            examples: {
              e1: "吹尘试验",
              e2: "吹砂试验",
              e3: "防尘等级验证"
            }
          },
          i4: {
            field: "防水/流体试验",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.8A/26A",
              s3: "GB/T 38924 系列",
              s4: "HB 6167 系列"
            },
            paras: {
              p1: "防水方式：滴水、喷水、连续水流",
              p2: "流体敏感性：液体浸渍、喷淋"
            },
            examples: {
              e1: "防水性试验",
              e2: "流体污染试验",
              e3: "淋雨试验"
            }
          },
          i5: {
            field: "盐雾腐蚀/霉菌/结冰",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.10A/11A",
              s3: "GB/T 10125",
              s4: "HB 6167 系列"
            },
            paras: {
              p1: "盐雾：中性盐雾、酸性盐雾",
              p2: "霉菌：符合 RTCA DO-160、GJB 150 菌种",
              p3: "结冰：符合标准 RTCA DO-160 工况"
            },
            examples: {
              e1: "中性/酸性盐雾",
              e2: "霉菌生长试验",
              e3: "结冰/冻雨试验"
            }
          },
          i6: {
            field: "防火/可燃性测试",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.13A"
            },
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
      emc: {
        title: "电磁兼容性试验",
        subtitle: "Electro-Magnetic Compatibility",
        description: "公司配有3米法半电波暗室和屏蔽室，测试系统覆盖25Hz至40GHz全频段，能够进行RTCA DO-160G第15至22章及第25章的全部EMC测试项目，同时具备国军标、汽车电子、无人机及消费电子产品电磁兼容项目试验能力。",
        section: {
          description: "公司配有3米法半电波暗室和屏蔽室，测试系统覆盖25Hz至40GHz全频段，能够进行RTCA DO-160G第15至22章及第25章的全部EMC测试项目，同时具备国军标、汽车电子、无人机及消费电子产品电磁兼容项目试验能力。"
        },
        items: {
          i1: {
            field: "DO-160G航空EMC",
            standards: {
              s1: "RTCA DO-160G"
            },
            paras: {
              p1: "第15章-磁影响",
              p2: "第16章-电源输入(28V/30A)",
              p3: "第17章-电压尖峰",
              p4: "第18章-电源线音频传导敏感度",
              p5: "第19章-感应信号敏感度",
              p6: "第20章-射频敏感度(辐射敏感度: 100MHz-18GHz, 200V/m)",
              p7: "第21章-射频能量发射",
              p8: "第22章-雷电感应瞬态敏感度",
              p9: "第25章-静电放电"
            },
            examples: {}
          },
          i2: {
            field: "军标EMC",
            standards: {
              s1: "GJB 151A-97",
              s2: "GJB 151B-2013",
              s3: "GJB 151C-2024"
            },
            paras: {
              p1: "传导发射：CE101、CE102、CE107",
              p2: "辐射发射：RE101、RE102",
              p3: "传导敏感度：CS101、CS102、CS106、CS109、CS112、CS114、CS115、CS116",
              p4: "辐射敏感度：RS101、RS103"
            },
            examples: {
              e1: "电源线传导发射",
              e2: "电场辐射发射",
              e3: "大电流注入(BCI)",
              e4: "磁场辐射敏感度"
            }
          },
          i3: {
            field: "民品/无人机EMC",
            standards: {
              s1: "IEC61000-6-1",
              s2: "IEC61000-6-2",
              s3: "EN55035",
              s4: "CISPR35",
              s5: "GB/T17799.1",
              s6: "GB/T17799.2",
              s7: "GB/T38909",
              s8: "GB42590",
              s9: "GB/T38058",
              s10: "GB/T38997",
              s11: "GB/T9254.2"
            },
            paras: {
              p1: "传导发射CE：150kHz-30MHz",
              p2: "辐射发射RE：30MHz-40GHz",
              p3: "辐射抗扰度RS：80MHz-6GHz",
              p4: "传导抗扰度CS：150kHz-80Mhz",
              p5: "静电放电ESD：±30kV"
            },
            examples: {}
          },
          i4: {
            field: "汽车电子EMC",
            standards: {
              s1: "GB/T18655",
              s2: "GB/T33014.2",
              s3: "GB/T33014.4",
              s4: "GB/T33014.8",
              s5: "GB/T33014.9"
            },
            paras: {
              p1: "传导发射CE：150kHz-245MHz",
              p2: "辐射发射RE：150kHz-6GHz",
              p3: "大电流注入BCI：1MHz-400MHz",
              p4: "磁场抗扰度：DC&15Hz-150kHz",
              p5: "辐射抗扰度RI：80MHz-6GHz",
              p6: "便携式发射机：26MHz-5.85GHz"
            },
            examples: {}
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
          i1: { name: "地面低温耐受试验和低温短时工作试验", standard: "DO-160G" },
          i2: { name: "低温工作试验", standard: "DO-160G" },
          i3: { name: "地面高温耐受试验和高温短时工作试验", standard: "DO-160G" },
          i4: { name: "高度试验", standard: "DO-160G" },
          i5: { name: "减压试验", standard: "DO-160G" },
          i6: { name: "过压试验", standard: "DO-160G" },
          i7: { name: "温度变化试验", standard: "DO-160G" },
          i8: { name: "湿热试验", standard: "DO-160G" }
        }
      },
      softwareComponents: {
        title: "机载软件与元器件",
        subtitle: "SOFTWARS & COMPONENTS",
        description: "XXX XXX XXXXXXX",
        softwareCard: {
          title: "机载软件测评",
          standard: "DO-178C",
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
        description: "邮件咨询，一对一专属服务",
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
            standard: "-",
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
            standard: "GJB 151B-2013",
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
            standard: "RTCA DO-160G、GJB 150A",
            content: "针对低空飞行器特点，提供温度-高度综合试验、结冰试验、快速减压试验等专项测试"
          },
          i10: {
            field: "机器人/智能装备",
            standard: "GB/T 2423、客户定制",
            content: "结合机器人移动与作业特性，提供多轴振动、复杂气候模拟及外壳防护等级测试"
          },
          i11: {
            field: "EMC设计整改",
            standard: "-",
            content: "提供从PCB布局、滤波设计到整机屏蔽的EMC问题诊断与整改方案"
          },
          i12: {
            field: "工装夹具定制",
            standard: "-",
            content: "根据产品结构与测试要求，设计并加工各类振动夹具、冲击夹具及测试转接板"
          },
          i13: {
            field: "测试大纲编制",
            standard: "-",
            content: "协助客户编写符合适航、军标或行业标准要求的环境试验与EMC测试大纲"
          }
        }
      },
      mechanical: {
        title: "机械试验",
        subtitle: "Mechanical Testing",
        section: {
          description: "拥有振动系统冲击台和离心机，能够模拟从运输振动坠撞冲击到加速度的全频谱机械应力。振动系统配置800mmx800mm台面和水平滑台，可满足机载设备及机柜的试验需求。"
        },
        items: {
          i1: {
            field: "振动试验",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.16A",
              s3: "GB/T 2423.10/.56"
            },
            paras: {
              p1: "推力：50kN",
              p2: "台面尺寸：800×800mm（水平滑台）",
              p3: "频率：随机1-2000Hz，正弦1-2000Hz",
              p4: "空载频率范围：随机1-2600Hz，正弦1-2600Hz",
              p5: "空载加速度：980m/s²",
              p6: "位移：76mm p-p",
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
            standards: {
              s1: "DO-160",
              s2: "GJB 150.15A/18A",
              s3: "GB/T 2423.5/.6"
            },
            paras: {
              p1: "冲击台面：650×800mm",
              p2: "半正弦波：15~500g，脉冲时间2~40ms",
              p3: "后峰锯齿波：15~100g，脉冲时间2~40ms",
              p4: "二次台面：500~3000g，正弦脉冲0.2~2ms"
            },
            examples: {
              e1: "工作冲击",
              e2: "坠撞安全试验",
            }
          },
          i3: {
            field: "加速度试验",
            standards: {
              s1: "GJB 150.15A"
            },
            paras: {
              p1: "量级：0.5~100g",
              p2: "加速度回转半径：2500mm"
            },
            examples: {
              e1: "结构耐久性",
              e2: "惯性载荷模拟"
            }
          }
        }
      },
    }
  },
  en: {
    testing: {
      hero: {
        title: "Testing Center",
        subtitle: "Professional, Authoritative, Reliable Aviation Product Testing & Verification Services",
        labelTitleMain: "Professional Testing",
        labelTitleBottom: "End-to-end environmental, EMC, and software testing for reliability",
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
        mechanical: "Mechanical Testing",
        emc: "EMC Testing",
        components: "Software & Components",
        core: "Core Capabilities"
      },
      navTitle: "Test Categories",
      environment: {
        title: "Environmental Reliability Testing",
        subtitle: "ENVIRONMENTAL RELIABILITY TESTING",
        description: "Equipped with high-precision climatic test systems, we provide multi-factor integrated simulation capabilities covering temperature, humidity, altitude, sand and dust, and fluid exposure. All chambers use internationally leading control systems with uniform thermal fields and stable data, meeting stringent climatic test requirements in DO-160G, GJB 150A, and GB/T 2423. We are especially strong in high-altitude low-pressure, rapid temperature transition, and combined temperature-humidity-altitude testing.",
        descriptionPart1: "Equipped with high-precision climatic test systems, we provide multi-factor integrated simulation capabilities covering temperature, humidity, altitude, sand and dust, and fluid exposure. All chambers use internationally leading control systems with uniform thermal fields and stable data, meeting stringent climatic test requirements in ",
        descriptionPart2: " and so on. We are especially strong in high-altitude low-pressure, rapid temperature transition, and combined temperature-humidity-altitude testing.",
        items: {
          i1: {
            field: "Temperature & Humidity Testing",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.3A/4A/9A",
              s3: "GB/T 2423.1/2/3/4",
              s4: "HB-6167 Series"
            },
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
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.6A",
              s3: "GB/T 2423 Series",
              s4: "IEC 60068-2 Series",
              s5: "HB 6167 Series"
            },
            paras: {
              p1: "Pressure Range: Atmospheric~0.5kPa",
              p2: "Depressurization Rate: ≤30min (Atmospheric→1kPa, No-load)",
              p3: "Rapid Decompression: 75.2kPa→18.8kPa, ≤15s"
            },
            examples: {
              e1: "Temperature-Altitude Testing",
              e2: "Rapid Decompression"
            }
          },
          i3: {
            field: "Sand & Dust Testing",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.12A",
              s3: "HB 6167.10-2016",
              s4: "GJB 360B-2009",
              s5: "GB/T 38924 Series"
            },
            paras: {
              p1: "Dust-Blowing Speed: 1.5~8.9m/s",
              p2: "Dust Concentration: 0~11g/m³",
              p3: "Sand-Blowing Speed: 18.0~29m/s",
              p4: "Sand-Blowing Concentration: 0~3g/m³"
            },
            examples: {
              e1: "Dust-Blowing Test",
              e2: "Sand-Blowing Test",
              e3: "Dust Protection Rating Verification"
            }
          },
          i4: {
            field: "Waterproof / Fluid Testing",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.8A/26A",
              s3: "GB/T 38924 Series",
              s4: "HB 6167 Series"
            },
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
            field: "Salt Spray Corrosion",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.10A/11A",
              s3: "GB/T 10125",
              s4: "HB 6167 Series"
            },
            paras: {
              p1: "Salt Spray: Neutral Salt Spray, Acidic Salt Spray",
              p2: "Mold: DO-160 and GJB 150 compliant strains",
              p3: "Icing: DO-160 compliant conditions"
            },
            examples: {
              e1: "Neutral Salt Spray Test",
              e2: "Mold Growth Test",
              e3: "Icing / Freezing Rain Test"
            }
          }
          ,
          i6: {
            field: "Fire / Flammability Testing",
            standards: {
              s1: "RTCA DO-160G",
              s2: "GJB 150.13A"
            },
            paras: {
              p1: "Method: Vertical/Horizontal Bunsen burner",
              p2: "Flame Type: Compliant with aviation standards"
            },
            examples: {
              e1: "Material flammability testing",
              e2: "Airborne equipment fire testing"
            }
          }
        }
      },
      emc: {
        title: "Electro-Magnetic Compatibility",
        subtitle: "ELECTRO-MAGNETIC COMPATIBILITY",
        description: "The company is equipped with a 3-meter semi-anechoic chamber and a shielded room. The test system covers the full 25 Hz to 40 GHz range and can perform all EMC tests in RTCA DO-160G Chapters 15 to 22 and 25, while also supporting military standards, automotive electronics, UAVs, and consumer electronics EMC testing.",
        section: {
          description: "The company is equipped with a 3-meter semi-anechoic chamber and a shielded room. The test system covers the full 25 Hz to 40 GHz range and can perform all EMC tests in RTCA DO-160G Chapters 15 to 22 and 25, while also supporting military standards, automotive electronics, UAVs, and consumer electronics EMC testing."
        },
        items: {
          i1: {
            field: "DO-160G Aviation EMC",
            standards: {
              s1: "RTCA DO-160G"
            },
            paras: {
              p1: "Chapter 15 - Magnetic Effect",
              p2: "Chapter 16 - Power Input (28V/30A)",
              p3: "Chapter 17 - Voltage Spike",
              p4: "Chapter 18 - Power Line Audio Frequency Conducted Susceptibility",
              p5: "Chapter 19 - Induced Signal Susceptibility",
              p6: "Chapter 20 - RF Susceptibility (Radiated Susceptibility: 100MHz-18GHz, 200V/m)",
              p7: "Chapter 21 - RF Energy Emission",
              p8: "Chapter 22 - Lightning Induced Transient Susceptibility",
              p9: "Chapter 25 - Electrostatic Discharge"
            },
            examples: {
              e1: "Chapter 15 - Magnetic Effect",
              e2: "Chapter 16 - Power Input (28V/30A)",
              e3: "Chapter 17 - Voltage Spike",
              e4: "Chapter 18 - Power Line Audio Frequency Conducted Susceptibility",
              e5: "Chapter 20 - RF Susceptibility (Radiated: 100MHz-18GHz, 200V/m)",
              e6: "Chapter 20 - RF Susceptibility (Conducted: 10kHz-400MHz, 300mA)",
              e7: "Chapter 21 - RF Energy Emission",
              e8: "Chapter 22 - Lightning Induced Transient Susceptibility",
              e9: "Chapter 25 - Electrostatic Discharge"
            }
          },
          i2: {
            field: "Military Standard EMC",
            standards: {
              s1: "GJB 151A-97",
              s2: "GJB 151B-2013",
              s3: "GJB 151C-2024"
            },
            paras: {
              p1: "Conducted Emissions: CE101, CE102, CE107",
              p2: "Radiated Emissions: RE101, RE102",
              p3: "Conducted Susceptibility: CS101, CS102, CS106, CS109, CS112, CS114, CS115, CS116",
              p4: "Radiated Susceptibility: RS101, RS103"
            },
            examples: {
              e1: "Power Line Conducted Emissions",
              e2: "Electric Field Radiated Emissions",
              e3: "Bulk Current Injection (BCI)",
              e4: "Magnetic Field Radiated Susceptibility"
            }
          },
          i3: {
            field: "Consumer / Drone EMC",
            standards: {
              s1: "IEC61000-6-1",
              s2: "IEC61000-6-2",
              s3: "EN55035",
              s4: "CISPR35",
              s5: "GB/T17799.1",
              s6: "GB/T17799.2",
              s7: "GB/T38909",
              s8: "GB42590",
              s9: "GB/T38058",
              s10: "GB/T38997",
              s11: "GB/T9254.2"
            },
            paras: {
              p1: "Conducted Emissions CE: 150kHz-30MHz",
              p2: "Radiated Emissions RE: 30MHz-40GHz",
              p3: "Radiated Immunity RS: 80MHz-6GHz",
              p4: "Conducted Immunity CS: 150kHz-80MHz",
              p5: "Electrostatic Discharge ESD: ±30kV"
            },
            examples: {}
          },
          i4: {
            field: "Automotive EMC",
            standards: {
              s1: "GB/T18655",
              s2: "GB/T33014.2",
              s3: "GB/T33014.4",
              s4: "GB/T33014.8",
              s5: "GB/T33014.9"
            },
            paras: {
              p1: "Conducted Emissions CE: 150kHz-245MHz",
              p2: "Radiated Emissions RE: 150kHz-6GHz",
              p3: "Bulk Current Injection BCI: 1MHz-400MHz",
              p4: "Magnetic Field Immunity: DC & 15Hz-150kHz",
              p5: "Portable Transmitter: 26MHz-5.85GHz"
            },
            examples: {}
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
          i1: { name: "Ground low-temperature endurance and short-time operation tests", standard: "DO-160G" },
          i2: { name: "Low-temperature operation test", standard: "DO-160G" },
          i3: { name: "Ground high-temperature endurance and short-time operation tests", standard: "DO-160G" },
          i4: { name: "Altitude test", standard: "DO-160G" },
          i5: { name: "Decompression test", standard: "DO-160G" },
          i6: { name: "Overpressure test", standard: "DO-160G" },
          i7: { name: "Temperature variation test", standard: "DO-160G" },
          i8: { name: "Humidity test", standard: "DO-160G" }
        }
      },
      softwareComponents: {
        title: "Software & Components",
        subtitle: "",
        description: "XXX XXX XXXXXXX",
        softwareCard: {
          title: "Airborne Software Evaluation",
          standard: "DO-178C",
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
        description: "Consultation via email, providing one-on-one exclusive service",
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
            standard: "-",
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
            standard: "GJB 151B-2013",
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
            standard: "RTCA DO-160G, GJB 150A",
            content: "Offers dedicated tests such as temperature-altitude combined testing, icing testing, and rapid decompression testing based on low-altitude vehicle characteristics."
          },
          i10: {
            field: "Robotics / Intelligent Equipment",
            standard: "GB/T 2423, Customer-Specific",
            content: "Combines robotic mobility and operation characteristics to provide multi-axis vibration, complex climate simulation, and enclosure protection testing."
          },
          i11: {
            field: "EMC Design Rectification",
            standard: "-",
            content: "Provides EMC issue diagnosis and rectification plans from PCB layout and filtering design to complete-system shielding."
          },
          i12: {
            field: "Custom Fixtures & Tooling",
            standard: "-",
            content: "Designs and manufactures vibration fixtures, shock fixtures, and test interface boards according to product structure and test requirements."
          },
          i13: {
            field: "Test Outline Preparation",
            standard: "-",
            content: "Assists customers in preparing environmental and EMC test outlines compliant with airworthiness, military, or industry standards."
          }
        }
      },
      mechanical: {
        title: "Mechanical Testing",
        subtitle: "",
        section: {
          description: "With vibration systems, shock tables, and a centrifuge, we can simulate a full spectrum of mechanical stress from transport vibration to crash impact and acceleration. Our vibration system features an 800 mm x 800 mm table and horizontal slip table, supporting airborne equipment and cabinet-level tests."
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
              p6: "Displacement: 76mm p-p"
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
              e2: "Crash Safety Testing"
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
          }
        }
      },
    }
  }
};
