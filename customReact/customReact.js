
function costemRender(rVew, mainC){

    // const newElement = document.createElement(rVew.type);
    // newElement.innerHTML = rVew.children
    // newElement.setAttribute('href', rVew.props.href);
    // newElement.setAttribute('target',rVew.props.target);
    // mainC.appendChild(newElement);


    const newElement = document.createElement(rVew.type)
    newElement.innerHTML = rVew.children;
    for (const Prop in rVew.props) {
    
        newElement.setAttribute(Prop, rVew.props [Prop])
        mainC.appendChild(newElement)

    }
}

const reactVeew = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children:'click hear for google'
}

const mainContenar = document.getElementById('root')

costemRender(reactVeew, mainContenar)
