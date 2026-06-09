// src/data/blogData.ts

export interface BlogPostContent {
  type: 'paragraph' | 'heading' | 'list' | 'quote' | 'image';
  content?: string;
  items?: string[];
  level?: number;
}

export interface BlogPost {
  id: number;
  category: string[]; // Changed from string to string[]
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
    category: ['Chronic Conditions', 'Preventive Care', 'Care Tips'],
    readTime: '6 min read',
    date: 'Monday, April 14, 2025',
    author: 'Chetacare Team',
    title: 'Why Many Nigerians May Have High Blood Pressure Without Knowing',
    description: 'High blood pressure, also known as hypertension, is a long-term health condition in which the force of blood against the walls...',
    image: '/assets/blog1.jpg',
    fullContent: [
      {
        type: 'paragraph',
        content: 'High blood pressure, also known as hypertension, is a long-term health condition in which the force of blood against the walls of the arteries remains consistently elevated. Over time, if not detected and managed, it can increase the risk of complications affecting the heart, brain, kidneys, and eyes.'
      },
      // ... content truncated for brevity ...
      {
        type: 'paragraph',
        content: 'High blood pressure often develops quietly over time. Regular monitoring remains one of the most effective ways to detect it early and reduce the risk of long-term complications.'
      }
    ]
  },
  {
    id: 2,
    category: ['Nutrition', 'Chronic Conditions', 'Lifestyle & Wellness'],
    readTime: '5 min read',
    date: 'Thursday, January 5, 2025',
    author: 'Chetacare Team',
    title: 'Foods That Can Raise Blood Sugar Levels More Quickly',
    description: 'Many people living with or at risk of diabetes are often advised to “watch their diet.” However, this advice can seem very unclear...',
    image: '/assets/blog2.jpg',
    fullContent: [
      {
        type: 'paragraph',
        content: 'Many people living with or at risk of diabetes are often advised to “watch their diet.” However, this advice can seem very unclear without understanding which foods tend to affect blood sugar more significantly.'
      },
      // ... content truncated for brevity ...
      {
        type: 'paragraph',
        content: 'Would you love to speak with a dietician?'
      }
    ]
  },
  {
    id: 3,
    category: ['Chronic Conditions', 'Preventive Care', 'Care Tips'],
    readTime: '6 min read',
    date: 'Tuesday, April 15, 2025',
    author: 'Chetacare Team',
    title: 'Early Signs of Diabetes Many Nigerians Often Ignore',
    description: 'Diabetes is a long-term health condition that affects how the body regulates blood sugar (glucose). Learn the early warning signs that are often overlooked.',
    image: '/assets/blog3.jpg',
    fullContent: [
      {
        type: 'paragraph',
        content: 'Diabetes is a long-term health condition that affects how the body regulates blood sugar (glucose). In many cases, it develops gradually, and early symptoms may be mild or easily mistaken for everyday health changes.'
      },
       // ... content truncated for brevity ...
      {
        type: 'paragraph',
        content: 'Early signs of diabetes are often very easy to overlook. Paying attention to changes in your body and seeking proper medical testing when needed can help support better long-term health outcomes.'
      }
    ]
  },
  {
    id: 4,
    category: ['Chronic Conditions', 'Lifestyle & Wellness', 'Preventive Care'],
    readTime: '6 min read',
    date: 'Wednesday, February 12, 2025',
    author: 'Chetacare Team',
    title: 'Why Young Nigerians Are Developing High Blood Pressure',
    description: 'Traditionally, hypertension was more common among older adults. However, in recent years, there has been a noticeable increase in younger adults being diagnosed.',
    image: '/assets/blog4.jpg',
    fullContent: [
      {
        type: 'paragraph',
        content: 'This article explains some of the factors that may contribute to this trend. It is intended for general health education and should not be used for self-diagnosis.'
      },
      // ... content truncated for brevity ...
      {
        type: 'paragraph',
        content: 'Talk to Chetacare today.'
      }
    ]
  },
  {
    id: 5,
    category: ['Chronic Conditions', 'Preventive Care', 'Lifestyle & Wellness'],
    readTime: '6 min read',
    date: 'Wednesday, April 16, 2025',
    author: 'Chetacare Team',
    title: "Nigeria’s Silent Health Emergency: Why Chronic Diseases Are Rising Faster Than We Think",
    description: 'Across Nigeria, a silent health emergency is unfolding. Chronic diseases such as hypertension and diabetes are rising rapidly, often undetected until severe complications occur.',
    image: '/assets/blogimg.png',
    fullContent: [
      {
        type: 'paragraph',
        content: "For many Nigerians, illness still feels like something sudden, dramatic, and unavoidable. A stroke happens overnight. A neighbour collapses without warning. A parent who seemed healthy suddenly becomes bedridden overnight."
      },
       // ... content truncated for brevity ...
      {
        type: 'paragraph',
        content: "Access preventive support through Chetacare today. ✅"
      }
    ]
  }
];