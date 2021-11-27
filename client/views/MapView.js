class MapView extends View{
    constructor(element){
        super(element);
    }

    template(model){
        return `
            <script type="text/javascript">
            ${model.map}
            </script>
        `;
    }

}