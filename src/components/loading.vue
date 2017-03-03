<template>
    <div class="indicator pop-fade-transition d-popup d-popup-center hide_it"> 
	    <span class="indicator-text .hide_it"></span> 
	    <span class="indicator-spin"></span> 
    </div>
</template>
<script>

export default {

}

</script>
<style scoped>

.d-popup {
    left: -9999px;
    top: -9999px
}

.d-popup-center {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}



.indicator {
    position: fixed;
    border-radius: 5px;
    background: rgba(0,0,0,.7);
    box-sizing: border-box;
    padding: 10px;
    z-index: 300;
}

.indicator,.indicator-text {
    color: #fff;
    text-align: center
}

.indicator-text {
    display: block;
    margin-bottom: 10px
}

.indicator-spin {
    display: inline-block;
    font-size: 0;
    width: 40px;
    height: 40px;
    background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZSBpZD0nbCcgeDE9JzYwJyB4Mj0nNjAnIHkxPSc3JyB5Mj0nMjcnIHN0cm9rZT0nI2ZmZicgc3Ryb2tlLXdpZHRoPScxMScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+CiAgICA8L2RlZnM+CiAgICA8Zz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPgogICAgICAgIDx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+CiAgICAgICAgPHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz4KICAgIDwvZz4KPC9zdmc+) 50% no-repeat;
    background-size: 100%;
    -webkit-animation: indicator-spin 1s steps(12,end) infinite;
    animation: indicator-spin 1s steps(12,end) infinite
}

/* @-webkit-keyframes pop-bounce-center-in {
    0% {
        -webkit-transform: translate(-50%,-50%) scale(.8);
        transform: translate(-50%,-50%) scale(.8)
    }

    to {
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1)
    }
}

@keyframes pop-bounce-center-in {
    0% {
        -webkit-transform: translate(-50%,-50%) scale(.8);
        transform: translate(-50%,-50%) scale(.8)
    }

    to {
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1)
    }
}

@-webkit-keyframes pop-bounce-center-out {
    0% {
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1)
    }

    to {
        -webkit-transform: translate(-50%,-50%) scale(.7);
        transform: translate(-50%,-50%) scale(.7)
    }
}

@keyframes pop-bounce-center-out {
    0% {
        -webkit-transform: translate(-50%,-50%) scale(1);
        transform: translate(-50%,-50%) scale(1)
    }

    to {
        -webkit-transform: translate(-50%,-50%) scale(.7);
        transform: translate(-50%,-50%) scale(.7)
    }
}
 */
@-webkit-keyframes indicator-spin {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes indicator-spin {
    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.hide_it {
	display: none;
}
</style>


