const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const skills={embedded:{label:'HARDWARE / FIRMWARE',title:'Small devices. Connected possibilities.',description:'Microcontroller programming, sensor data acquisition, motor control, and the interfaces that connect them.',items:['Embedded C','C++','Arduino','ESP32 / ESP32-CAM','ESP8266','STM32','TM4C123GH6PM','GPIO','ADC','PWM','UART','SPI','I²C','Timers','Sensor integration','Motor control','IoT']},code:{label:'SOFTWARE / COMMUNICATION',title:'The logic behind the connection.',description:'Programming foundations, databases, and network communication for connected applications.',items:['Java','C++','C','Python','SQL','Networking','MQTT','Wi-Fi','Serial communication','Software debugging','System testing']},design:{label:'DESIGN / BUILD / DEBUG',title:'From schematic to working prototype.',description:'PCB design, circuit prototyping, and practical testing across electronics design tools and development environments.',items:['PCB design','EasyEDA','Altium Designer','Tinkercad','Arduino IDE','STM32CubeIDE','MATLAB','Linux','Ubuntu','Circuit testing','Hardware debugging','Hardware prototyping','Technical documentation']}};
const skillPanel=document.querySelector('#skill-panel'),tabs=[...document.querySelectorAll('[data-skill]')];
function selectSkill(tab){tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1});const s=skills[tab.dataset.skill];skillPanel.setAttribute('aria-labelledby',tab.id);skillPanel.innerHTML=`<span class="mono">${s.label}</span><h3>${s.title}</h3><p>${s.description}</p><div class="skill-pills">${s.items.map(x=>`<span>${x}</span>`).join('')}</div>`}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectSkill(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(i+1)%tabs.length;if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();tabs[next].focus();selectSkill(tabs[next])}})});selectSkill(tabs[0]);
const certs=[{id:'microchip',issuer:'MICROCHIP / EDUSKILLS',date:'2025',title:'Embedded System Developer',detail:'10-week virtual internship · Jan–Mar 2025',description:'AICTE – EduSkills virtual internship supported by Microchip.'},{id:'tessolve-1',issuer:'TESSOLVE · LEVEL 1',date:'2023',title:'Embedded System Application & IoT Programming',detail:'Completed September 2023',description:'Training program: 4–9 September 2023. Certificate issued 10 September 2023.'},{id:'tessolve-2',issuer:'TESSOLVE · LEVEL 2',date:'2024',title:'IIoT Programming & Automation',detail:'Completed February 2024',description:'Training program: 29 January–3 February 2024. Certificate issued 4 February 2024.'},{id:'altium',issuer:'ALTIUM',date:'2025',title:'Altium Global Scholarship Program',detail:'PCB design · April 2025',description:'Completed the Altium Global Scholarship Program on 5 April 2025.'},{id:'wipro',issuer:'WIPRO TALENTNEXT',date:'2025',title:'Java Full Stack',detail:'Digital Skills Readiness Program',description:'Completed the TalentNext Java Full Stack course during July–October 2025.'},{id:'nptel',issuer:'NPTEL',date:'2024',title:'Programming in Java',detail:'12-week course · Jul–Oct 2024',description:'Completed the NPTEL Programming in Java course, July–October 2024.'}];
document.querySelector('#cert-grid').innerHTML=certs.map(c=>`<button class="cert-card" data-cert="${c.id}" aria-label="View ${c.title} certificate"><div class="cert-image"><img src="assets/${c.id}.png" alt="${c.issuer} certificate for Nunna Sai Teja" loading="lazy" width="300" height="200"></div><div class="cert-content"><div class="mono"><span>${c.issuer}</span><span>${c.date}</span></div><h3>${c.title}</h3><p>${c.detail}</p><div class="cert-view">View certificate <span>+</span></div></div></button>`).join('');
const projects=[
  {
    "title": "Surveillance Car",
    "date": "JUL – DEC 2024",
    "subtitle": "ESP32-CAM Embedded System · July–December 2024",
    "short": "A Wi-Fi-controlled vehicle bringing live video, motor control, and embedded hardware together.",
    "summary": "A Wi-Fi-controlled embedded vehicle integrating a camera, motor driver, DC motors, LEDs, and control inputs.",
    "points": [
      "Implemented GPIO-based control for motors and peripheral devices.",
      "Integrated a web interface with live camera streaming, directional controls, and speed and light sliders.",
      "Integrated the camera, motors, LEDs, and electronic modules through circuit wiring, power connections, and signal interfacing.",
      "Tested hardware responses under different operating conditions.",
      "Debugged motor, wiring, power, and software issues through systematic hardware and functional testing."
    ],
    "skills": [
      "ESP32-CAM",
      "Embedded C/C++",
      "GPIO",
      "Motor control",
      "Wi-Fi"
    ],
    "color": "#6ce5ff",
    "input": [
      "Wi-Fi input"
    ],
    "chip": "ESP32",
    "subchip": "CAM",
    "output": [
      "Camera",
      "DC motors",
      "LEDs"
    ],
    "flow": [
      "INPUT",
      "PROCESS",
      "ACTUATE"
    ],
    "label": "WIRELESS CONTROL",
    "id": "surveillance-car",
    "cover": "assets/surveillance-overview-enhanced.png",
    "coverAlt": "Enhanced studio presentation of the surveillance car prototype on a navy background",
    "mediaType": "studio",
    "mediaLabel": "Enhanced project photo",
    "galleryTitle": "Car & web-interface outputs",
    "gallery": [
      {
        "src": "assets/surveillance-overview-enhanced.png",
        "label": "Enhanced car",
        "caption": "AI-enhanced presentation of the project photograph with studio lighting and a clean background. Original photographs are also included."
      },
      {
        "src": "assets/surveillance-front-enhanced.png",
        "label": "Enhanced front",
        "caption": "AI-enhanced front view of the ESP32-CAM prototype. See the original Camera & light photograph for source details."
      },
      {
        "src": "assets/surveillance-web-interface.jpeg",
        "label": "Web interface",
        "caption": "Original mobile web-interface output from page 13: camera feed, directional buttons, and speed and light sliders."
      },
      {
        "src": "assets/surveillance-car-overview.jpeg",
        "label": "Original car",
        "caption": "Complete surveillance car prototype from page 14, showing the chassis, wheels, battery pack, motor driver, wiring, and ESP32-CAM."
      },
      {
        "src": "assets/surveillance-car-wiring.jpeg",
        "label": "Top & wiring",
        "caption": "Top view of the assembled car and component connections from page 13."
      },
      {
        "src": "assets/surveillance-car-side.jpeg",
        "label": "Side view",
        "caption": "Side view of the chassis and wheel assembly from page 13."
      },
      {
        "src": "assets/surveillance-car-front.jpeg",
        "label": "Camera & light",
        "caption": "Front view of the ESP32-CAM and illuminated onboard light from page 13."
      }
    ]
  },
  {
    "title": "Smart Agriculture System with cloud-based predictive analysis using machine learning",
    "date": "JAN – APR 2024",
    "subtitle": "ESP32 · Sensor Integration · Cloud & Machine Learning · January–April 2024",
    "short": "Sensor integration, connected monitoring, and machine learning come together in a cloud-connected agriculture prototype.",
    "summary": "A smart agriculture system combining ESP32-based soil-moisture, temperature, and humidity monitoring with cloud-based predictive analysis using machine learning.",
    "points": [
      "Combined sensor monitoring with cloud-based predictive analysis using machine learning.",
      "Interfaced sensor signals with the microcontroller and implemented data acquisition and processing.",
      "Calibrated sensors and tested hardware under varying environmental conditions.",
      "Performed fault isolation and system validation.",
      "Troubleshot connections and software logic to improve reliability and real-time readings."
    ],
    "skills": [
      "ESP32",
      "Machine Learning",
      "Cloud Analysis",
      "Embedded IoT",
      "ADC",
      "Sensor interfacing",
      "Calibration"
    ],
    "color": "#b095ff",
    "input": [
      "Moisture",
      "Temperature",
      "Humidity"
    ],
    "chip": "ESP32",
    "subchip": "ADC",
    "output": [
      "Cloud",
      "ML analysis"
    ],
    "flow": [
      "SENSE",
      "CONNECT",
      "ANALYZE"
    ],
    "label": "PREDICTIVE AGRICULTURE",
    "cover": "assets/agriculture-clean.png",
    "coverAlt": "Enhanced photograph of the smart agriculture prototype with ESP32, LCD, sensors, probe and pump, with handwritten names removed",
    "mediaType": "photo",
    "mediaLabel": "Enhanced prototype photo",
    "gallery": [
      {
        "src": "assets/agriculture-clean.png",
        "label": "Prototype",
        "caption": "Retouched project photo with handwritten names removed and exposure and clarity improved."
      }
    ]
  },
  {
    "id": "flower-cnn",
    "title": "Flower Classification Model using CNN",
    "date": "ACADEMIC TEAM PROJECT",
    "subtitle": "Convolutional Neural Networks · Jupyter Notebook · Streamlit",
    "short": "An image classification model with a Streamlit interface for uploading flower images and viewing predictions.",
    "summary": "An academic team project that develops and evaluates a convolutional neural network for flower classification in a software environment. Jupyter Notebook supports model development, while Streamlit provides an interactive image-upload and prediction interface.",
    "points": [
      "Prepared flower-image data through resizing, normalization, and augmentation.",
      "Developed and evaluated a CNN model in Jupyter Notebook.",
      "Integrated an interactive Streamlit interface to upload images and display predicted flower classes.",
      "Explored embedded inference optimization in the project report, with hardware deployment identified as future work."
    ],
    "skills": [
      "CNN",
      "Python",
      "Streamlit",
      "Jupyter Notebook",
      "Image Classification",
      "Machine Learning"
    ],
    "color": "#e1a1ff",
    "input": [
      "Flower image"
    ],
    "chip": "CNN",
    "subchip": "MODEL",
    "output": [
      "Prediction"
    ],
    "flow": [
      "UPLOAD",
      "CLASSIFY",
      "DISPLAY"
    ],
    "label": "COMPUTER VISION",
    "cover": "assets/flower-output-2.jpeg",
    "coverAlt": "Original Streamlit flower classification interface showing a tulip prediction from page 12 of the project report",
    "mediaType": "screenshot",
    "mediaLabel": "Original model output",
    "gallery": [
      {
        "src": "assets/flower-output-2.jpeg",
        "label": "Tulip output",
        "caption": "Streamlit prediction example from page 12 of the project report."
      },
      {
        "src": "assets/flower-output-1.jpeg",
        "label": "Second output",
        "caption": "Second Streamlit prediction example from page 12 of the project report."
      },
      {
        "src": "assets/flower-model-diagram.png",
        "label": "Model design",
        "caption": "Proposed system block diagram from the project report. The implemented prototype runs in software."
      },
      {
        "src": "assets/flower-workflow.png",
        "label": "Workflow",
        "caption": "Classification workflow from the project report."
      },
      {
        "src": "assets/flower-training-samples-1.jpeg",
        "label": "Notebook · 1",
        "caption": "Flower dataset and notebook view from page 11 of the project report."
      },
      {
        "src": "assets/flower-training-samples-2.jpeg",
        "label": "Notebook · 2",
        "caption": "Additional dataset and preprocessing notebook view from page 11."
      }
    ]
  },
  {
    "title": "Smart Home Automation",
    "date": "AUG – DEC 2023",
    "subtitle": "ESP8266 & Blynk · August–December 2023",
    "short": "A working Wi-Fi prototype that controls an LED bulb through Blynk, an ESP8266, and a relay.",
    "summary": "A home automation prototype using an ESP8266 NodeMCU, Blynk Cloud and app, and a single-channel relay to switch an LED bulb over Wi-Fi.",
    "points": [
      "Connected the ESP8266 NodeMCU to Blynk for remote bulb control over Wi-Fi.",
      "Used GPIO-based relay switching to turn the LED bulb on and off.",
      "Assembled the prototype with the controller, relay, wiring, and bulb mounted in a cardboard enclosure.",
      "Integrated the hardware and software to demonstrate app-controlled lighting."
    ],
    "skills": [
      "ESP8266",
      "Blynk",
      "C/C++",
      "Wi-Fi",
      "Relays",
      "GPIO"
    ],
    "color": "#7bafff",
    "input": [
      "Blynk app"
    ],
    "chip": "ESP",
    "subchip": "8266",
    "output": [
      "Relay",
      "LED bulb"
    ],
    "flow": [
      "COMMUNICATE",
      "CONTROL",
      "SWITCH"
    ],
    "label": "CONNECTED CONTROL",
    "cover": "assets/smart-home-prototype-enhanced.png",
    "coverAlt": "AI-enhanced photograph based on the actual ESP8266 home automation prototype, with a relay and illuminated bulb in a cardboard enclosure",
    "mediaType": "photo",
    "mediaLabel": "Enhanced prototype photo",
    "gallery": [
      {
        "src": "assets/smart-home-prototype-enhanced.png",
        "label": "Enhanced prototype",
        "caption": "AI-enhanced presentation based on the actual prototype photograph in the project report. Lighting and surroundings have been cleaned up; the original photo is available alongside it."
      },
      {
        "src": "assets/smart-home-prototype-original.jpeg",
        "label": "Original prototype",
        "caption": "Original project photograph from page 16 of the report, showing the ESP8266 NodeMCU, relay, wiring, cardboard enclosure, and illuminated bulb."
      }
    ],
    "galleryTitle": "Working prototype"
  }
];

function projectMedia(p,i){
 if(p.secondaryCover)return `<div class="project-media dual-output"><div class="media-duo"><div><span>CAR PROTOTYPE</span><img src="${p.cover}" alt="${p.coverAlt}" loading="lazy"></div><div><span>WEB INTERFACE</span><img src="${p.secondaryCover}" alt="Original mobile control interface with live video, directional buttons and speed and light sliders" loading="lazy"></div></div><div class="media-caption"><span>Original project outputs</span><span>VIEW GALLERY +</span></div></div>`;

 if(p.cover)return `<div class="project-media ${p.mediaType||'photo'}"><img src="${p.cover}" alt="${p.coverAlt}" loading="lazy"><div class="media-caption"><span>${p.mediaLabel||'PROJECT PHOTO'}</span><span>VIEW DETAILS +</span></div></div>`;
 return `<div class="project-visual" style="--viz:${p.color}"><div class="visual-top"><span>SYSTEM / 00${i+1}</span><span>${p.label}</span></div><div class="architecture"><div class="nodes">${p.input.map(x=>`<span>${x}</span>`).join('')}</div><i></i><strong>${p.chip}<span>${p.subchip}</span></strong><i></i><div class="nodes">${p.output.map(x=>`<span>${x}</span>`).join('')}</div></div><div class="visual-bottom">${p.flow.map(x=>`<span>${x}</span>`).join('')}</div></div>`;
}
document.querySelector('#project-grid').innerHTML=projects.map((p,i)=>`<article class="project-card ${p.cover?'has-photo':''}"><button class="project-open" data-project="${i}" aria-label="Read about ${p.title}">${projectMedia(p,i)}<div class="project-body"><div class="project-no">0${i+1}<span>${p.date}</span></div><h3>${p.title}</h3><p>${p.short}</p><div class="tags">${p.skills.slice(0,3).map(x=>`<span>${x}</span>`).join('')}</div><div class="project-link">${p.gallery?'Explore project & gallery':'Explore project'} <span>+</span></div></div></button></article>`).join('');

const dialog=document.querySelector('#detail-dialog'),dialogContent=document.querySelector('#dialog-content');let lastTrigger;
function openDialog(html,trigger){dialog.classList.remove('gallery-dialog');lastTrigger=trigger;dialogContent.innerHTML=html;dialog.showModal();document.body.style.overflow='hidden';dialog.scrollTop=0}

function projectGallery(p){if(!p.gallery?.length)return '';return `<section class="project-gallery" aria-label="Project images"><h3>${p.galleryTitle||(p.id==='flower-cnn'?'Model & outputs':'Project gallery')}</h3><div class="gallery-tabs" role="group" aria-label="Choose a project image">${p.gallery.map((g,i)=>`<button data-gallery="${i}" aria-pressed="${i===0}">${g.label}</button>`).join('')}</div><figure><a id="gallery-fullsize" href="${p.gallery[0].src}" target="_blank" rel="noopener" aria-label="Open selected project image at full size"><img id="gallery-image" src="${p.gallery[0].src}" alt="${p.gallery[0].caption}"></a><figcaption id="gallery-caption">${p.gallery[0].caption}</figcaption></figure><a id="gallery-original" class="text-link" href="${p.gallery[0].src}" target="_blank" rel="noopener">Open image at full size</a></section>`}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{const p=projects[Number(b.dataset.project)];openDialog(`<div class="section-label">PROJECT / 0${Number(b.dataset.project)+1}</div><h2 id="dialog-title" class="dialog-title">${p.title}</h2><p class="dialog-meta">${p.subtitle}</p><p class="dialog-summary">${p.summary}</p>${projectGallery(p)}<h3>${p.id==='flower-cnn'?'Project approach':'What I worked on'}</h3><ul class="dialog-points">${p.points.map(x=>`<li>${x}</li>`).join('')}</ul><div class="tags">${p.skills.map(x=>`<span>${x}</span>`).join('')}</div>`,b);dialog.classList.toggle('gallery-dialog',!!p.gallery?.length);dialogContent.querySelectorAll('[data-gallery]').forEach(button=>button.addEventListener('click',()=>{const g=p.gallery[Number(button.dataset.gallery)];dialogContent.querySelectorAll('[data-gallery]').forEach(t=>t.setAttribute('aria-pressed',String(t===button)));document.querySelector('#gallery-image').src=g.src;document.querySelector('#gallery-image').alt=g.caption;document.querySelector('#gallery-caption').textContent=g.caption;document.querySelector('#gallery-fullsize').href=g.src;document.querySelector('#gallery-original').href=g.src;}));}));

document.querySelectorAll('[data-cert]').forEach(b=>b.addEventListener('click',()=>{const c=certs.find(x=>x.id===b.dataset.cert);openDialog(`<div class="section-label">${c.issuer}</div><h2 id="dialog-title" class="dialog-title">${c.title}</h2><p class="dialog-meta">${c.description}</p><img class="dialog-image" src="assets/${c.id}.png" alt="${c.title} certificate awarded to Nunna Sai Teja"><a class="button primary" href="assets/${c.id}.pdf" target="_blank" rel="noopener">Open original PDF</a>`,b)}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>{document.body.style.overflow='';lastTrigger?.focus()});
document.querySelector('#copy-email').addEventListener('click',async function(){try{await navigator.clipboard.writeText('saitejawins@gmail.com');this.textContent='Email copied';document.querySelector('#copy-status').textContent='Email address copied to clipboard';setTimeout(()=>this.textContent='Copy email',2500)}catch{this.textContent='saitejawins@gmail.com';document.querySelector('#copy-status').textContent='Copy this email address: saitejawins@gmail.com'}});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.section-head,.project-card,.about-content,.toolkit,.journey-grid,.cert-card,.contact-inner').forEach(el=>{el.classList.add('reveal');observer.observe(el)});const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}}),{rootMargin:'-10% 0px -60% 0px'});document.querySelectorAll('section[id]').forEach(s=>navObserver.observe(s))}
// Ambient motion and keyboard navigation.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let effectsPaused=reducedMotion.matches;
const motionButton=document.querySelector('#motion-toggle');
function reflectMotion(){document.body.classList.toggle('motion-paused',effectsPaused);motionButton.setAttribute('aria-pressed',String(effectsPaused));motionButton.textContent=effectsPaused?'Enable effects':'Pause effects'}
reflectMotion();motionButton.addEventListener('click',()=>{effectsPaused=!effectsPaused;reflectMotion()});reducedMotion.addEventListener('change',e=>{effectsPaused=e.matches;reflectMotion()});
const roles=['Software & Embedded Systems','Java, C++ & SQL','IoT & Sensor Integration','PCB Design'];let roleIndex=0;
setInterval(()=>{if(effectsPaused||document.hidden)return;const el=document.querySelector('#role-text');el.classList.add('changing');setTimeout(()=>{roleIndex=(roleIndex+1)%roles.length;el.textContent=roles[roleIndex];el.classList.remove('changing')},210)},3200);
const progress=document.querySelector('.scroll-progress');function updateProgress(){const full=document.documentElement.scrollHeight-innerHeight;progress.style.width=(full>0?scrollY/full*100:0)+'%'}addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);updateProgress();
if(matchMedia('(pointer:fine)').matches){document.querySelectorAll('[data-tilt]').forEach(card=>{card.addEventListener('pointermove',e=>{if(effectsPaused)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateY(${x*13}deg) rotateX(${-y*10}deg) rotateZ(1deg)`});card.addEventListener('pointerleave',()=>card.style.transform='')});}
const canvas=document.querySelector('#constellation'),ctx=canvas.getContext('2d');let width=innerWidth,height=innerHeight,dots=[],pointer={x:-1000,y:-1000},animationId;
function resizeField(){width=innerWidth;height=innerHeight;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);dots=Array.from({length:Math.min(62,Math.floor(width/20))},()=>({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.1+.5}));}
resizeField();addEventListener('resize',resizeField);addEventListener('pointermove',e=>{pointer={x:e.clientX,y:e.clientY}},{passive:true});document.addEventListener('pointerleave',()=>pointer={x:-1000,y:-1000});
function drawField(){ctx.clearRect(0,0,width,height);for(let i=0;i<dots.length;i++){const p=dots[i];if(!effectsPaused){p.x=(p.x+p.vx+width)%width;p.y=(p.y+p.vy+height)%height;}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(140,169,243,.45)';ctx.fill();for(let j=i+1;j<dots.length;j++){const q=dots[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<115){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(125,160,255,${(1-d/115)*.09})`;ctx.lineWidth=.7;ctx.stroke()}}const d=Math.hypot(pointer.x-p.x,pointer.y-p.y);if(!effectsPaused&&d<150){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(pointer.x,pointer.y);ctx.strokeStyle=`rgba(108,229,255,${(1-d/150)*.23})`;ctx.stroke()}}animationId=requestAnimationFrame(drawField)}drawField();document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(animationId);else drawField()});
const commandDialog=document.querySelector('#command-dialog'),commandInput=document.querySelector('#command-input'),commandResults=document.querySelector('#command-results');const commands=[['Home','#home','01'],['About me','#about','02'],['Projects','#projects','03'],['Skills & technologies','#skills','04'],['Education','#journey','05'],['Certifications','#certifications','06'],['Contact me','#contact','07']];
function renderCommands(){const q=commandInput.value.toLowerCase();const results=commands.filter(c=>c[0].toLowerCase().includes(q));commandResults.replaceChildren();for(const [name,href,key] of results){const link=document.createElement('a');link.href=href;link.textContent=name;const label=document.createElement('span');label.textContent=key;link.append(label);link.addEventListener('click',()=>commandDialog.close());commandResults.append(link)}if(!results.length){const p=document.createElement('p');p.className='command-hint';p.textContent='No matching section. Try projects, skills, or contact.';commandResults.append(p)}}
function openCommands(){if(dialog.open||commandDialog.open)return;commandInput.value='';renderCommands();commandDialog.showModal();document.body.style.overflow='hidden';commandInput.focus()}
function closeCommands(){commandDialog.close()}document.querySelector('.command-trigger').addEventListener('click',openCommands);document.querySelector('#command-close').addEventListener('click',closeCommands);commandDialog.addEventListener('close',()=>document.body.style.overflow='');commandDialog.addEventListener('click',e=>{if(e.target===commandDialog){const r=commandDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeCommands()}});commandInput.addEventListener('input',renderCommands);commandInput.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();commandResults.querySelector('a')?.focus()}if(e.key==='Enter'){commandResults.querySelector('a')?.click()}});commandResults.addEventListener('keydown',e=>{const links=[...commandResults.querySelectorAll('a')],i=links.indexOf(document.activeElement);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();links[(i+(e.key==='ArrowDown'?1:links.length-1))%links.length]?.focus()}});addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();commandDialog.open?closeCommands():openCommands()}});

// Pointer-following light, enabled only for precise pointing devices.
const glowSurfaces=[...document.querySelectorAll('.project-card,.cert-card,.toolkit,.education-grid article,.contact')];
glowSurfaces.forEach(el=>el.classList.add('glow-surface'));
if(matchMedia('(pointer:fine)').matches){glowSurfaces.forEach(el=>{let frame=0;el.addEventListener('pointermove',event=>{if(effectsPaused)return;const x=event.clientX,y=event.clientY;if(frame)cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const rect=el.getBoundingClientRect();el.style.setProperty('--glow-x',`${x-rect.left}px`);el.style.setProperty('--glow-y',`${y-rect.top}px`);frame=0})});el.addEventListener('pointerleave',()=>{if(frame)cancelAnimationFrame(frame);frame=0;el.style.removeProperty('--glow-x');el.style.removeProperty('--glow-y')})})}
