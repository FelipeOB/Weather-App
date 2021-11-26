class ProxyFactory{
    static create(model, props, action){
        return new Proxy(model, {
            get(target, prop, receiver){
                if(props.includes(prop)) action(target);
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value,receiver){
                if(props.includes(prop)) {
                    Reflect.set(target, prop, value, receiver)
                    action(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }
}