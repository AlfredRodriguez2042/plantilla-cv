import React from 'react'

const Page404 = () => {

    const animation404 = ()=>{
        
            function makeSnow(el) {
              var ctx = el.getContext('2d');
              var width = 0;
              var height = 0;
              var particles = [];
              
              var Particle = function() {
                this.x = this.y = this.dx = this.dy = 0;
                this.reset();
              }
              
              Particle.prototype.reset = function() {
                this.y = Math.random() * height;
                this.x = Math.random() * width;
                this.dx = (Math.random() * 1) - 0.5;
                this.dy = (Math.random() * 0.5) + 0.5;
              }
              
              function createParticles(count) {
                if (count !== particles.length) {
                  particles = [];
                  for (var i = 0; i < count; i++) {
                    particles.push(new Particle());
                  }
                }
              }
                  
              function onResize() {
                width = window.innerWidth;
                height = window.innerHeight;
                el.width = width;
                el.height = height;
                
                createParticles((width * height) / 10000);
              }
              
              function updateParticles() {
                ctx.clearRect(0, 0, width, height);
                ctx.fillStyle = '#f6f9fa';
                
                particles.forEach(function(particle) {
                  particle.y += particle.dy;
                  particle.x += particle.dx;
                  
                  if (particle.y > height) {
                    particle.y = 0;
                  }
                  
                  if (particle.x > width) {
                    particle.reset();
                    particle.y = 0;
                  }
                  
                  ctx.beginPath();
                  ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
                  ctx.fill();
                });
                
                window.requestAnimationFrame(updateParticles);
              }
              
              onResize();
              updateParticles();
              
              window.addEventListener('resize', onResize);
            }
            

              var canvas = document.getElementById('canvas');
              makeSnow(canvas);
          
          
    }
    React.useEffect(()=>{ animation404()},[])
    return (
        <div className="content">
            <div className="">
            <canvas className="snow" id="canvas"></canvas>
            <div className="main-text">
                  <h1>Error :( <br/>That page has gone missing.</h1><a className="home-link" href="/">Hitch a ride back home.</a>
                </div>
                <div className="ground">
                  <div className="mound"> 
                    <div className="mound_text">404</div>
                    <div className="mound_spade"></div>
                  </div>
                </div>
                </div>
        </div>
    )
}

export default Page404
