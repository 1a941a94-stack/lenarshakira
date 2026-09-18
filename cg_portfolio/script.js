const demos = {
  saas: {
    title: 'SaaS Operations Platform', chart: 'MRR growth', activity: 'Recent activity',
    metrics: [['MRR','$38.4K','+12.8%'],['Active accounts','1,284','+6.2%'],['Trial → paid','18.7%','+2.1%'],['Churn','2.4%','-0.6%']],
    bars:[42,51,58,66,79,92], labels:['Apr','May','Jun','Jul','Aug','Sep'],
    activity:[['Subscription upgraded','Northstar Labs • Pro → Scale','2m'],['Payment recovered','Invoice #4821 • retry success','11m'],['Team invited','VectorHouse • 3 new seats','24m'],['Webhook delivered','CRM sync • 200 OK','31m']],
    nodes:[['Auth','Users + roles'],['Billing','Plans + invoices'],['Core API','Business logic'],['Admin','Operations']]
  },
  market: {
    title: 'Multi-Vendor Marketplace', chart: 'Gross merchandise value', activity: 'Order flow',
    metrics: [['GMV','$92.1K','+19.4%'],['Vendors','146','+8'],['Orders','2,804','+14.2%'],['Commission','$9.7K','+16.0%']],
    bars:[35,48,51,68,74,96], labels:['Apr','May','Jun','Jul','Aug','Sep'],
    activity:[['Order paid','#A-2841 • buyer confirmed','1m'],['Seller accepted','#A-2838 • preparing','7m'],['Commission booked','$34.80 platform fee','14m'],['Listing approved','Vendor 042 • product live','22m']],
    nodes:[['Buyer','Discovery + checkout'],['Orders','Lifecycle'],['Vendor','Listings + fulfilment'],['Admin','Fees + moderation']]
  },
  ai: {
    title: 'AI Workflow Automation', chart: 'Hours automated', activity: 'Processing queue',
    metrics: [['Documents','8,420','+22.1%'],['Auto-processed','91.6%','+4.8%'],['Avg. latency','4.8s','-1.2s'],['Human review','8.4%','-3.7%']],
    bars:[30,39,55,62,81,94], labels:['Apr','May','Jun','Jul','Aug','Sep'],
    activity:[['Invoice classified','Vendor invoice • confidence 98%','now'],['Fields extracted','12 structured fields captured','1m'],['Policy matched','Knowledge base • 3 citations','3m'],['Review requested','Low confidence • routed to Ops','6m']],
    nodes:[['Input','Docs + messages'],['AI Layer','Classify + extract'],['Rules','Validate + route'],['Systems','CRM + DB + alerts']]
  },
  crm: {
    title: 'Custom Sales & Operations CRM', chart: 'Pipeline value', activity: 'Team activity',
    metrics: [['Pipeline','$214K','+11.7%'],['Open deals','87','+9'],['Win rate','31.2%','+3.4%'],['Tasks due','18','-7']],
    bars:[44,48,60,57,73,89], labels:['Apr','May','Jun','Jul','Aug','Sep'],
    activity:[['Deal moved','Acme • Discovery → Proposal','3m'],['Task completed','Prepare scope • marked done','9m'],['Lead assigned','Inbound lead → Alex','13m'],['Reminder sent','Follow-up automation executed','20m']],
    nodes:[['Leads','Capture + assign'],['Pipeline','Stages + tasks'],['Automation','Rules + reminders'],['Reports','Forecast + KPIs']]
  }
};
const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)];
function render(key){
  const d=demos[key]; q('#demoTitle').textContent=d.title; q('#chartTitle').textContent=d.chart; q('#activityTitle').textContent=d.activity;
  q('#metricRow').innerHTML=d.metrics.map(m=>`<div class="metric"><small>${m[0]}</small><b>${m[1]}</b><em>${m[2]}</em></div>`).join('');
  q('#bars').innerHTML=d.bars.map((h,i)=>`<div class="bar-wrap"><div class="bar" style="height:${h}%"></div><small>${d.labels[i]}</small></div>`).join('');
  q('#activityList').innerHTML=d.activity.map(a=>`<div class="activity"><i></i><div>${a[0]}<small>${a[1]}</small></div><small>${a[2]}</small></div>`).join('');
  q('#systemMap').innerHTML=d.nodes.map((n,i)=>`${i?'<span class="link-line"></span>':''}<div class="node"><b>${n[0]}</b><small>${n[1]}</small></div>`).join('');
}
qa('.demo-select').forEach(btn=>btn.addEventListener('click',()=>{qa('.demo-select').forEach(x=>x.classList.remove('active'));btn.classList.add('active');render(btn.dataset.demo)}));
qa('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy)}catch(e){} const t=q('#toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)}));
q('#year').textContent=new Date().getFullYear(); render('saas');

const gb=q('#generateBrief'); if(gb){gb.addEventListener('click',async()=>{const val=id=>q(id).value.trim()||'Not specified'; const msg=`Hi, I'd like to discuss a custom development project.\n\nWhat I want to build: ${val('#fBuild')}\nWho will use it: ${val('#fUsers')}\nMost important functions: ${val('#fFunctions')}\nRequired integrations: ${val('#fIntegrations')}\nApproximate deadline: ${val('#fDeadline')}\n\nPlease let me know what else you need to estimate the scope.`; try{await navigator.clipboard.writeText(msg)}catch(e){} const t=q('#toast'); t.textContent='Project brief copied'; t.classList.add('show'); setTimeout(()=>{t.classList.remove('show');t.textContent='Copied: lenarshakira'},1800);});}
