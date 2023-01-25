const btn = document.getElementById('btnChange')
let color = document.getElementById('colorName')

const colors = ['red', 'blue', 'green', 'purple', 'yellow', 'black','black','silver','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua','orange','aliceblue','antiquewhite','aquamarine','azure','beige','bisque','blanchedalmond','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','darkblue','darkcyan','darkgoldenrod','darkgray']

btn.addEventListener('click', ()=>{
    let num = Math.floor(Math.random()*44)
    document.body.style.backgroundColor = colors[num]
    color.innerHTML = colors[num]
})