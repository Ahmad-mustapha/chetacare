

export interface BlogPostContent {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'image';
  content?: string;
  items?: string[];
  level?: number;
}

export interface BlogPost {
  id: number;
  category: string;
  readTime: string;
  date: string;
  author: string;
  title: string;
  description: string;
  image: string;
  fullContent: BlogPostContent[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Health Awareness',
    readTime: '6 min read',
    date: 'Monday, April 14, 2025',
    author: 'Chetacare Team',
    title: 'Why Many Nigerians May Have High Blood Pressure Without Knowing',
    description: 'High blood pressure, also known as hypertension, is a long-term health condition in which the force of blood against the walls...',
    image: '/src/assets/blog1.jpg',
    fullContent: [
      {
        type: 'paragraph',
        content: 'High blood pressure, also known as hypertension, is a long-term health condition in which the force of blood against the walls of the arteries remains consistently elevated. Over time, if not detected and managed, it can increase the risk of complications affecting the heart, brain, kidneys, and eyes.'
      },
      {
        type: 'paragraph',
        content: 'One of the challenges with hypertension is that it often develops without obvious symptoms. Many individuals may feel completely well while their blood pressure is already higher than normal. For this reason, it is frequently referred to in medical practice as a “silent condition.”'
      },
      {
        type: 'paragraph',
        content: 'This article is for general health education purposes. It is not intended to diagnose or replace medical evaluation. Blood pressure checks and professional assessment remain essential for accurate diagnosis.'
      },
      {
        type: 'heading',
        content: 'Why hypertension often goes unnoticed',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'In many cases, high blood pressure does not produce clear early symptoms. As a result, individuals may continue daily activities without awareness of an underlying health issue.'
      },
      {
        type: 'paragraph',
        content: 'Hypertension is often discovered during routine health checks or after complications such as stroke, heart disease, or kidney problems have already developed.'
      },
      {
        type: 'heading',
        content: 'Common factors associated with increased blood pressure',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Several lifestyle and environmental factors may contribute to elevated blood pressure levels. These include:'
      },
      {
        type: 'list',
        items: [
          'Long-term stress',
          'Diets high in salt and processed foods',
          'Low physical activity levels',
          'Excess body weight',
          'Poor sleep patterns',
          'Family history of hypertension'
        ]
      },
      {
        type: 'paragraph',
        content: 'In many urban settings, including Nigeria, daily stress signals such as traffic, financial pressure, and demanding work schedules may also contribute to increased risk.'
      },
      {
        type: 'heading',
        content: 'Why symptoms are often absent',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Unlike some acute illnesses, hypertension typically does not cause noticeable symptoms in its early stages. When symptoms do occur, they are often non-specific and may include headaches, dizziness, or fatigue. However, these symptoms alone are not reliable indicators of high blood pressure.'
      },
      {
        type: 'paragraph',
        content: 'Because of this, blood pressure can only be accurately identified through blood pressure check using a blood pressure monitor.'
      },
      {
        type: 'heading',
        content: 'Who should consider regular blood pressure checks.',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Regular blood pressure screening is generally recommended for adults, particularly those who:'
      },
      {
        type: 'list',
        items: [
          'Are aged 30 years and above',
          'Have a family history of hypertension',
          'Are living with diabetes',
          'Are overweight or physically inactive',
          'Experience ongoing stress'
        ]
      },
      {
        type: 'paragraph',
        content: 'Even individuals without symptoms are advised to consider periodic health checks.'
      },
      {
        type: 'heading',
        content: 'Why early detection matters',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'When identified early, hypertension can often be managed effectively through lifestyle modifications and, where necessary, medical treatment. Early detection significantly reduces the risk of serious complications such as stroke and heart disease.'
      },
      {
        type: 'paragraph',
        content: 'At Chetacare, we focus on providing accessible health education and early awareness support for chronic conditions such as hypertension and diabetes. Our goal is to help individuals understand their health risks early and encourage timely engagement with healthcare professionals.'
      },
      {
        type: 'paragraph',
        content: 'We support individuals through community-based education and a digital health platform designed to improve awareness and promote preventive care.'
      },
      {
        type: 'paragraph',
        content: 'High blood pressure often develops quietly over time. Regular monitoring remains one of the most effective ways to detect it early and reduce the risk of long-term complications.'
      }
    ]
  },
  {
    id: 2,
    category: 'Nutrition',
    readTime: '5 min read',
    date: 'Thursday, January 5, 2025',
    author: 'Chetacare Team',
    title: 'Foods That Can Raise Blood Sugar Levels More Quickly',
    description: 'Many people living with or at risk of diabetes are often advised to “watch their diet.” However, this advice can seem very unclear...',
    image: '/src/assets/blog2.jpg',
    fullContent: [
      {
        type: 'paragraph',
        content: 'Many people living with or at risk of diabetes are often advised to “watch their diet.” However, this advice can seem very unclear without understanding which foods tend to affect blood sugar more significantly.'
      },
      {
        type: 'paragraph',
        content: 'In Nigeria, where meals are often rich in carbohydrates and refined ingredients, some commonly eaten foods may contribute to faster increases in blood sugar levels, especially when consumed in large portions or without balance.'
      },
      {
        type: 'paragraph',
        content: 'This does not mean these foods must be completely avoided. It means understanding how they affect the body can help you make more informed and balanced choices.'
      },
      {
        type: 'heading',
        content: '1. White rice',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'White rice is a common food in many Nigerian homes. Because it is highly refined and low in fibre, it is broken down relatively quickly in the body. This means it can contribute to a faster rise in blood sugar levels, especially when eaten in large portions or without accompanying protein or vegetables.'
      },
      {
        type: 'paragraph',
        content: 'Pairing rice with beans, vegetables, or protein can help slow down this effect.'
      },
      {
        type: 'heading',
        content: '2. White bread and pastries',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Foods made from refined wheat flour, such as white bread, buns, and pastries, are digested quickly. This can lead to a more rapid increase in blood sugar compared to whole grain alternatives, particularly when eaten frequently or in large amounts.'
      },
      {
        type: 'heading',
        content: '3. Sugary drinks',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Soft drinks, energy drinks, and many packaged fruit juices contain high levels of added sugar. Because these sugars are in liquid form, they are absorbed quickly into the bloodstream and can cause a rapid rise in blood glucose levels.'
      },
      {
        type: 'paragraph',
        content: 'Reducing intake of sugary drinks is one of the most effective dietary steps for blood sugar control. Consider more water.'
      },
      {
        type: 'heading',
        content: '4. Garri (cassava products)',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Garri is widely consumed across Nigeria. It is high in carbohydrates and, depending on how it is processed and consumed, it may contribute to a faster rise in blood sugar levels, especially when eaten in large portions and without fibre, protein, or vegetables.'
      },
      {
        type: 'paragraph',
        content: 'Its effect on blood sugar can vary depending on preparation and portion size.'
      },
      {
        type: 'heading',
        content: '5. Sweetened cereals and processed breakfast foods',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Many packaged breakfast cereals and processed foods contain added sugars and refined grains. Although they are often marketed as quick or convenient meals, they may lead to faster increases in blood sugar compared to less processed alternatives.'
      },
      {
        type: 'heading',
        content: 'Why blood sugar control matters',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'When blood sugar levels rise too quickly and frequently over time, it can increase the risk of developing type 2 diabetes or make blood sugar management more difficult for individuals already living with diabetes.'
      },
      {
        type: 'paragraph',
        content: 'However, the key factor is not just the food itself, but also portion size, frequency, and what the food is eaten with.'
      },
      {
        type: 'heading',
        content: 'A balanced perspective',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'It is important to emphasise that no single food is entirely “bad.” Most foods can be part of a healthy diet when eaten in moderation and balanced with fibre, protein, and healthy fats.'
      },
      {
        type: 'paragraph',
        content: 'At Chetacare, we focus on practical and sustainable health education that helps individuals make informed choices without fear or confusion. Small, consistent dietary adjustments can make a meaningful difference in long-term blood sugar control.'
      },
      {
        type: 'paragraph',
        content: 'Understanding how everyday foods affect your body is about awareness, balance, and taking small steps toward better health.'
      },
      {
        type: 'paragraph',
        content: 'Would you love to speak with a dietician?'
      }
    ]
  },
  {
    id: 3,
    category: 'Health Awareness',
    readTime: '6 min read',
    date: 'Tuesday, April 15, 2025',
    author: 'Chetacare Team',
    title: 'Early Signs of Diabetes Many Nigerians Often Ignore',
    description: 'Diabetes is a long-term health condition that affects how the body regulates blood sugar (glucose). Learn the early warning signs that are often overlooked.',
    image: '/src/assets/blog3.jpg',
    fullContent: [
      {
        type: 'paragraph',
        content: 'Diabetes is a long-term health condition that affects how the body regulates blood sugar (glucose). In many cases, it develops gradually, and early symptoms may be mild or easily mistaken for everyday health changes.'
      },
      {
        type: 'paragraph',
        content: 'Because of this, many people may not realise they are at risk until the condition is identified during a routine medical test or after complications have begun to develop.'
      },
      {
        type: 'paragraph',
        content: 'This article highlights common early signs that may be associated with diabetes. It is intended for health awareness and should not be used for self-diagnosis. If you are concerned about your health, a proper medical evaluation is recommended.'
      },
      {
        type: 'heading',
        content: '1. Frequent urination',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'An increase in how often a person urinates, especially at night, may be a sign of elevated blood sugar levels. This happens because the body attempts to remove excess glucose through urine.'
      },
      {
        type: 'paragraph',
        content: 'However, frequent urination can also be caused by other conditions, so it should be assessed alongside other symptoms.'
      },
      {
        type: 'heading',
        content: '2. Increased thirst',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Some individuals may notice persistent thirst even after drinking fluids. This can occur when the body loses more water through frequent urination.'
      },
      {
        type: 'paragraph',
        content: 'This symptom alone is not specific to diabetes but may be a warning sign when it occurs with other changes.'
      },
      {
        type: 'heading',
        content: '3. Unexplained weight loss',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Unintentional weight loss without changes in diet or activity may sometimes be associated with diabetes. This occurs when the body begins to use fat and muscle for energy due to difficulty using glucose effectively.'
      },
      {
        type: 'paragraph',
        content: 'Other medical conditions can also cause weight loss, so proper testing is important.'
      },
      {
        type: 'heading',
        content: '4. Persistent fatigue',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Feeling unusually tired or lacking energy even after rest may be linked to changes in blood sugar levels. This is because the body may not be effectively converting glucose into energy.'
      },
      {
        type: 'heading',
        content: '5. Blurred vision',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'High blood sugar levels can sometimes affect vision temporarily, leading to blurred or fluctuating sight. This may improve with proper blood sugar management, but should always be assessed clinically.'
      },
      {
        type: 'heading',
        content: '6. Slow healing of wounds',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Cuts or wounds that take longer than usual to heal may be associated with elevated blood sugar levels, which can affect circulation and the body’s healing process.'
      },
      {
        type: 'heading',
        content: '7. Increased hunger',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Some individuals may experience increased hunger even shortly after eating. This can occur when the body is not effectively using glucose for energy.'
      },
      {
        type: 'heading',
        content: 'Why these signs should not be self-diagnosed',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'These symptoms are not specific to diabetes alone and can be caused by a variety of health conditions, lifestyle factors, or temporary changes in the body.'
      },
      {
        type: 'paragraph',
        content: 'A combination of symptoms does not confirm diabetes. Only proper blood sugar testing and medical evaluation can provide a diagnosis.'
      },
      {
        type: 'heading',
        content: 'When to consider medical testing',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'It may be helpful to consider a blood sugar test if you notice persistent or multiple symptoms, especially if you:'
      },
      {
        type: 'list',
        items: [
          'Are above 30 years of age',
          'Have a family history of diabetes',
          'Are overweight',
          'Experience ongoing fatigue, thirst, or frequent urination'
        ]
      },
      {
        type: 'paragraph',
        content: 'Early testing allows for earlier detection and better management outcomes.'
      },
      {
        type: 'paragraph',
        content: 'At Chetacare, we provide health education and support to help individuals better understand chronic disease risks. Our goal is to encourage early awareness and timely engagement with healthcare professionals.'
      },
      {
        type: 'paragraph',
        content: 'Early signs of diabetes are often very easy to overlook. Paying attention to changes in your body and seeking proper medical testing when needed can help support better long-term health outcomes.'
      }
    ]
  },
  {
    id: 4,
    category: 'Health Awareness',
    readTime: '6 min read',
    date: 'Wednesday, February 12, 2025',
    author: 'Chetacare Team',
    title: 'Why Young Nigerians Are Developing High Blood Pressure',
    description: 'Traditionally, hypertension was more common among older adults. However, in recent years, there has been a noticeable increase in younger adults being diagnosed.',
    image: '/src/assets/blog4.jpg',
    fullContent: [
      {
        type: 'paragraph',
        content: 'This article explains some of the factors that may contribute to this trend. It is intended for general health education and should not be used for self-diagnosis.'
      },
      {
        type: 'paragraph',
        content: 'High blood pressure, also known as hypertension, is a long-term health condition in which the force of blood against the walls of the arteries remains consistently elevated. If left undetected or poorly managed, it can increase the risk of serious complications such as stroke, heart disease, and kidney problems.'
      },
      {
        type: 'paragraph',
        content: 'Traditionally, hypertension was more common among older adults. However, in recent years, there has been a noticeable increase in younger adults being diagnosed with high blood pressure, including individuals in their 20s and 30s.'
      },
      {
        type: 'heading',
        content: 'Changing lifestyle patterns',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'One of the key contributors to rising blood pressure among young people is lifestyle change. Many young Nigerians now live more sedentary lives due to work, education, and increased screen time.'
      },
      {
        type: 'paragraph',
        content: 'Physical inactivity may contribute to weight gain and reduced cardiovascular fitness, both of which are associated with higher blood pressure risk.'
      },
      {
        type: 'heading',
        content: 'Increased stress levels',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Stress is becoming more common among young adults due to financial pressure, job instability, academic demands, and urban living conditions.'
      },
      {
        type: 'paragraph',
        content: 'While stress alone does not directly cause hypertension, long-term exposure to stress may influence behaviours such as poor sleep, unhealthy eating, and reduced physical activity, which can collectively increase risk.'
      },
      {
        type: 'heading',
        content: 'Dietary changes and processed foods',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Diet plays an important role in cardiovascular health. Many young people now consume more processed and fast foods that are often high in salt, unhealthy fats, and added sugars.'
      },
      {
        type: 'paragraph',
        content: 'Frequent intake of these foods may contribute to weight gain and increased blood pressure over time.'
      },
      {
        type: 'heading',
        content: 'Reduced physical activity',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Modern lifestyles, especially in urban areas, often involve long hours of sitting, whether in offices, transportation, or academic environments.'
      },
      {
        type: 'paragraph',
        content: 'A lack of regular physical activity is associated with increased risk of hypertension and other metabolic conditions.'
      },
      {
        type: 'heading',
        content: 'Excess body weight',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Being overweight or obese is a known risk factor for high blood pressure. In many cases, weight gain results from a combination of dietary habits, inactivity, and lifestyle factors.'
      },
      {
        type: 'paragraph',
        content: 'Even modest weight reduction can help improve blood pressure levels in some individuals.'
      },
      {
        type: 'heading',
        content: 'Family history',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Genetics can also play a role. Individuals with a family history of hypertension may have a higher likelihood of developing the condition, especially when combined with lifestyle-related risk factors.'
      },
      {
        type: 'heading',
        content: 'Why early detection is important',
        level: 2
      },
      {
        type: 'paragraph',
        content: 'Hypertension often develops without obvious symptoms, meaning many young people may not realise they are affected. Regular blood pressure checks are important for early detection and prevention of complications.'
      },
      {
        type: 'paragraph',
        content: 'Early awareness allows for lifestyle adjustments and, when necessary, medical intervention.'
      },
      {
        type: 'paragraph',
        content: 'At Chetacare, we focus on helping individuals understand and manage chronic disease risks through accessible health education and community-based support. We encourage early awareness and routine health checks as part of preventive care.'
      },
      {
        type: 'paragraph',
        content: 'Our goal is to support individuals in identifying risks early and connecting with appropriate healthcare guidance before complications develop.'
      },
      {
        type: 'paragraph',
        content: 'The rise of high blood pressure among young Nigerians is influenced by a combination of lifestyle, environmental, and genetic factors. With early awareness and small consistent lifestyle changes, the risk can often be reduced.'
      },
      {
        type: 'paragraph',
        content: 'Talk to Chetacare today.'
      }
    ]
  },
  {
    id: 5,
    category: 'Health Awareness',
    readTime: '6 min read',
    date: 'Wednesday, April 16, 2025',
    author: 'Chetacare Team',
    title: "Nigeria’s Silent Health Emergency: Why Chronic Diseases Are Rising Faster Than We Think",
    description: 'Across Nigeria, a silent health emergency is unfolding. Chronic diseases such as hypertension and diabetes are rising rapidly, often undetected until severe complications occur.',
    image: '/src/assets/blogimg.png',
    fullContent: [
      {
        type: 'paragraph',
        content: "For many Nigerians, illness still feels like something sudden, dramatic, and unavoidable. A stroke happens overnight. A neighbour collapses without warning. A parent who seemed healthy suddenly becomes bedridden overnight."
      },
      {
        type: 'paragraph',
        content: "But the truth is different."
      },
      {
        type: 'paragraph',
        content: "Across Nigeria, a silent health emergency is unfolding, one that rarely makes headlines yet affects millions of families every day. Chronic diseases such as hypertension and diabetes are rising rapidly, often undetected until severe complications occur."
      },
      {
        type: 'paragraph',
        content: "Unlike infectious diseases, chronic conditions develop quietly. High blood pressure may show no symptoms for years. Diabetes can progress unnoticed while slowly damaging nerves, kidneys, eyes, and blood vessels. By the time many people seek care, prevention is no longer possible; only crisis management remains."
      },
      {
        type: 'paragraph',
        content: "During some of our community outreaches, we noticed a recurring pattern. Many adults in their forties, fifties, and sixties have never checked their blood pressure or blood sugar levels in years. Some live far from health facilities. Others just don't see it as a big deal till it becomes a big deal."
      },
      {
        type: 'paragraph',
        content: "The result is predictable; emergencies become the first point of care."
      },
      {
        type: 'paragraph',
        content: "Stroke, kidney failure, amputations, and sudden deaths are increasingly common outcomes of conditions that could have been managed early with consistent monitoring and guidance."
      },
      {
        type: 'paragraph',
        content: "This growing burden is getting beyond medical concern. From all data available, Chronic disease affects household income, increases emotional stress, and places heavy strain on communities already facing economic challenges. When people feel abandoned by essential systems like healthcare, frustration and hopelessness grow."
      },
      {
        type: 'heading',
        content: 'Preventive healthcare must therefore become a national priority',
        level: 2
      },
      {
        type: 'paragraph',
        content: "Early screening, community engagement, continuous follow-up, and accessible digital health support can transform outcomes. Healthcare should not begin in the hospital during emergencies; it should exist daily, within communities and accessible through tools people already use."
      },
      {
        type: 'paragraph',
        content: "At Chetacare, our work focuses on shifting care from reaction to prevention, supporting individuals living with diabetes and hypertension through community outreach, education, and predictive care delivered through familiar platforms like WhatsApp."
      },
      {
        type: 'paragraph',
        content: "With early action, community trust, and innovative care models, countless emergencies can be prevented before they actually begin."
      },
      {
        type: 'paragraph',
        content: "Access preventive support through Chetacare today. ✅"
      }
    ]
  },
];
