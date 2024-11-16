AFRAME.registerComponent('randomzombiespawn',{
    init:function (){


        positionx=-10
        positiony=-2
        positionz=-50

        for(var i=1; i<=7;i++){

            var id='zombiespawn${i}'
            var position={x:positionx, y:positiony, z:positionz}
            positionx+=10
            var environment=document.querySelector('a-scene')
            var zombies=document.createElement('a-entity')
            zombies.setAttribute('id',id)
            zombies.setAttribute('position',position)
            zombies.setAttribute('gltf-model','#zombies')
            zombies.setAttribute('scale', '5 5 5')
            zombies.setAttribute('animation-mixer',{clip:'Walk'})
            zombies.setAttribute('animation',{property:'position', to: '25 10 100', loop: 'true', dur:'200000'})
            environment.appendChild(zombies)

        }
    }
})