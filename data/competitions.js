// data/competitions.js

// Basic competition data structure
export const competitions = [ 
  { id: 1, title: "AI Short Video", description: "Create a 15s AI-generated reel on weekly themes.", icon: "🎥", color: "from-blue-500 to-blue-600", deadline: "March 25, 2025" }, 
  { id: 2, title: "Lextoons", description: "Creative toons made using AI tools.", icon: "✍️", color: "from-green-500 to-green-600", deadline: "April 1, 2025" }, 
  { id: 3, title: "Political Toons", description: "AI-powered satire on political issues.", icon: "🗳️", color: "from-red-500 to-red-600", deadline: "April 10, 2025" }
];

// Generate detailed sections dynamically based on competition type
const generateSectionsForCompetition = (competition) => {
  const baseSections = [];
  
  // Problem Statement
  baseSections.push({
    id: "problem-statement",
    title: "Problem Statement",
    content: `Welcome to the ${competition.title} competition! ${competition.description}
    
    **Competition Details:**
    • Deadline: ${competition.deadline}
    • Theme: Creative use of AI tools
    • Target: High-quality, engaging content
    • Format: Digital submission required
    
    **What We're Looking For:**
    • Innovation in AI tool usage
    • Creative storytelling and visual appeal
    • Technical execution and quality
    • Originality and unique perspective
    • Clear communication of your concept`
  });

  // Competition-specific requirements
  if (competition.id === 1) { // AI Short Video
    baseSections.push({
      id: "video-requirements",
      title: "Video Requirements",
      content: `Specific requirements for AI Short Video submissions:
      
      **Technical Specifications:**
      • Duration: Exactly 15 seconds
      • Format: MP4, MOV, or AVI
      • Resolution: Minimum 720p, preferred 1080p
      • Aspect Ratio: 9:16 (vertical) or 16:9 (horizontal)
      • File Size: Maximum 100MB
      
      **Content Guidelines:**
      • Must use at least one AI tool for video generation
      • Weekly theme integration required
      • Original content only (no copyrighted material)
      • Clear visual and audio quality
      • Engaging storytelling within time limit`
    });
  } else if (competition.id === 2) { // Lextoons
    baseSections.push({
      id: "toon-requirements",
      title: "Toon Creation Guidelines",
      content: `Guidelines for creating your AI-powered toons:
      
      **Artistic Requirements:**
      • Use AI tools for character design or backgrounds
      • Comic/cartoon style preferred
      • Clear narrative or message
      • Professional presentation
      • Original character concepts
      
      **Technical Specifications:**
      • Static image or short animation (max 30s)
      • High resolution (minimum 1024x1024 for images)
      • PNG, JPEG, GIF, or MP4 formats accepted
      • Include process documentation showing AI tool usage`
    });
  } else if (competition.id === 3) { // Political Toons
    baseSections.push({
      id: "satire-guidelines",
      title: "Political Satire Guidelines",
      content: `Important guidelines for political satire content:
      
      **Content Standards:**
      • Focus on issues, not personal attacks
      • Maintain respectful discourse
      • Factual basis for satirical content
      • Avoid hate speech or discrimination
      • Consider diverse political perspectives
      
      **Creative Approach:**
      • Use humor to highlight important issues
      • Clever visual metaphors and symbolism
      • AI-generated elements for enhanced creativity
      • Clear political commentary or message
      • Engaging and thought-provoking content`
    });
  }

  // AI Tools & Resources
  baseSections.push({
    id: "ai-tools",
    title: "Recommended AI Tools",
    content: `Explore these AI tools to enhance your submission:
    
    **Video Generation:**
    • Runway ML - Advanced video creation and editing
    • Pika Labs - AI-powered short video generation
    • Stable Video Diffusion - Open-source video tools
    • Luma AI Dream Machine - Text-to-video generation
    
    **Image/Art Generation:**
    • Midjourney - High-quality artistic images
    • DALL-E 3 - Creative image generation
    • Stable Diffusion - Open-source image creation
    • Adobe Firefly - Integrated creative tools
    
    **Audio & Music:**
    • Suno AI - Music and song generation
    • ElevenLabs - Voice synthesis and audio
    • Mubert - AI-generated background music
    
    **Free Resources:**
    • Hugging Face - Open-source AI models
    • Google Colab - Free computing resources
    • YouTube tutorials for each tool
    • Community Discord for support`
  });

  // Submission Guidelines
  baseSections.push({
    id: "submission-guidelines",
    title: "Submission Guidelines",
    content: `Follow these guidelines for a successful submission:
    
    **Submission Process:**
    • Use the submission panel on this page
    • Provide your name and email address
    • Upload your file or provide a link
    • Include a brief description of your approach
    • Submit before the deadline: ${competition.deadline}
    
    **Required Information:**
    • List all AI tools used in creation
    • Brief explanation of your creative process
    • Any inspiration or reference sources
    • Technical specifications met
    • Original work confirmation
    
    **Evaluation Criteria:**
    • Creativity and Innovation (30%)
    • Technical Quality and Execution (25%)
    • Effective Use of AI Tools (20%)
    • Adherence to Requirements (15%)
    • Overall Impact and Engagement (10%)
    
    **Important Notes:**
    • Only original submissions accepted
    • One submission per participant
    • Late submissions will not be considered
    • Winners announced within 2 weeks of deadline`
  });

  return baseSections;
};

// Helper functions
export const getCompetitionById = (id) => {
  const competition = competitions.find(comp => comp.id === parseInt(id));
  if (!competition) return null;
  
  return {
    ...competition,
    sections: generateSectionsForCompetition(competition)
  };
};

export const getAllCompetitionIds = () => {
  return competitions.map(comp => ({ params: { id: comp.id.toString() } }));
};