addListeners();

function addListeners() {
    document.getElementById('fadeInPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('fadeInBlock');
            animaster().fadeIn(block, 1500);
        });

    document.getElementById('movePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('moveBlock');
            animaster().move(block, 1500, {x: 100, y: 10});
        });

    document.getElementById('scalePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('scaleBlock');
            animaster().scale(block, 1500, 1.25);
        });
//////////////////////////////////////////
    let fadeOut;
    document.getElementById('fadeOutPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('fadeOutBlock');
            fadeOut = animaster().addFadeOut(1500).play(block);
        });
    document.getElementById('fadeOutReset')
        .addEventListener('click', function () {
            if (fadeOut) {
                fadeOut.reset();
                fadeOut = undefined;
            } else {
                alert("Анимация не запущена");
            }
        });

    let moveAndHide;
    document.getElementById('moveAndHidePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('moveAndHideBlock');
            moveAndHide = animaster().moveAndHide(block, 3000, 1.25);
        });
    document.getElementById('moveAndHideStop')
        .addEventListener('click', function () {
            if (moveAndHide) {
                moveAndHide.stop();
            } else {
                alert("Анимация не запущена");
            }
        });
    document.getElementById('moveAndHideReset')
        .addEventListener('click', function () {
            if (moveAndHide) {
                moveAndHide.reset();
                moveAndHide = undefined;
            } else {
                alert("Анимация не запущена");
            }
        });

    let showAndHide;
    document.getElementById('showAndHidePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('showAndHideBlock');
            showAndHide = animaster().showAndHide(block, 3000, 1.25);
        });
    document.getElementById('showAndHideStop')
        .addEventListener('click', function () {
            if (showAndHide) {
                showAndHide.stop();
            } else {
                alert("Анимация не запущена");
            }
        });
    document.getElementById('showAndHideReset')
        .addEventListener('click', function () {
            if (showAndHide) {
                showAndHide.reset();
                showAndHide = undefined;
            } else {
                alert("Анимация не запущена");
            }
        });

    let hearthBeating;
    document.getElementById('hearthBeatingPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('hearthBlock');
            hearthBeating = animaster().heartBeating(block);
        });
    document.getElementById('hearthBeatingStop')
        .addEventListener('click', function () {
            if (hearthBeating) {
                hearthBeating.stop();
            } else {
                alert("Анимация не запущена");
            }
        });

    const customAnimation = animaster()
        .addMove(200, {x: 40, y: 40})
        .addScale(800, 1.3)
        .addMove(200, {x: 80, y: 0})
        .addScale(800, 1)
        .addMove(200, {x: 40, y: -40})
        .addScale(800, 0.7)
        .addMove(200, {x: 0, y: 0})
        .addScale(800, 1);
    let customAnimationControl;
    document.getElementById('animationChainPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('animationChainBlock');
            customAnimationControl = customAnimation.play(block);
        });
    document.getElementById('animationChainStop')
        .addEventListener('click', function () {
            if (customAnimationControl) {
                customAnimationControl.stop();
            } else {
                alert("Анимация не запущена");
            }
        });
    document.getElementById('animationChainReset')
        .addEventListener('click', function () {
            if (customAnimationControl) {
                customAnimationControl.reset();
                customAnimationControl = undefined;
            } else {
                alert("Анимация не запущена");
            }
        });

    const worryAnimationHandler = animaster()
        .addMove(200, {x: 80, y: 0})
        .addMove(200, {x: 0, y: 0})
        .addMove(200, {x: 80, y: 0})
        .addMove(200, {x: 0, y: 0})
        .buildHandler();
    document.getElementById('worryAnimationHandlerBlock')
        .addEventListener('click', worryAnimationHandler);

    let myAnimation = animaster().addSpin(500, 130);
    let myAnimationStop;
    document.getElementById('customAnimationPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('customAnimationBlock');
            myAnimationStop = myAnimation.play(block);
        });
    document.getElementById('customAnimationStop')
        .addEventListener('click', function () {
            if (myAnimationStop) {
                myAnimationStop.stop();
            } else {
                alert("Анимация не запущена");
            }
        });
    document.getElementById('customAnimationReset')
        .addEventListener('click', function () {
            if (myAnimationStop) {
                myAnimationStop.reset();
                myAnimationStop = undefined;
            } else {
                alert("Анимация не запущена");
            }
        });
    const a = animaster().addMove(111, {x: 10, y: -10});
    let aStop;
    const b = a.addFadeOut(400);
    document.getElementById('othersAnimationsPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('othersAnimationsBlock');
            aStop = a.play(block);
        });
    document.getElementById('othersAnimationsStop')
        .addEventListener('click', function () {
            if (aStop) {
                aStop.stop();
            } else {
                alert("Анимация не запущена");
            }
        });
    document.getElementById('othersAnimationsReset')
        .addEventListener('click', function () {
            if (aStop) {
                aStop.reset();
                aStop = undefined;
            } else {
                alert("Анимация не запущена");
            }
        });
}

function animaster() {
    let getTransform = function (translation, ratio, rotateDeg) {
        const result = [];
        if (translation) {
            result.push(`translate(${translation.x}px,${translation.y}px)`);
        }
        if (ratio) {
            result.push(`scale(${ratio})`);
        }
        if (rotateDeg) {
            result.push(`rotate(${rotateDeg}deg)`);
        }
        return result.join(' ');
    };
    let resetFadeIn = function (element) {
        element.classList.remove('show');
        element.classList.add('hide');
        element.style.transitionDuration = null;
    };
    let resetFadeOut = function (element) {
        element.classList.remove('hide');
        element.classList.add('show');
        element.style.transitionDuration = null;
    };
    let resetMoveScaleAndSpin = function (element) {
        element.style.transitionDuration = null;
        element.style.transform = getTransform(null, 1, 0);
    };
    let _createObject = function(context, newStep) {
        const obj = {};
        for (let prop in context) {
            obj[prop] = context[prop];
        }
        obj._steps =  JSON.parse(JSON.stringify(context._steps));
        obj._steps.push(newStep);
        return obj;
    };

    return {
        _steps: [],
        addMove: function (duration, translation) {
            isMoveAndScale = true;
            return _createObject(this, {name: "move", duration: duration, extraParameters: translation});
        },
        addScale: function (duration, ratio) {
            isMoveAndScale = true;
            return _createObject(this, {name: 'scale', duration: duration, extraParameters: ratio});
        },
        addFadeIn: function (duration) {
            isFadeIn = true;
            return _createObject(this, {name: "fadeIn", duration: duration});
        },
        addFadeOut: function (duration) {
            isFadeOut = false;
            return _createObject(this, {name: "fadeOut", duration: duration});
        },
        addDelay: function (duration) {
            return _createObject(this, {name: "delay", duration: duration});
        },
        addSpin: function(duration, deg) {
            return _createObject(this, {name: "spin", duration: duration, extraParameters: deg});
        },
        play: function (element, isCycled = false) {
            let isFadeIn = false,
                isFadeOut = false,
                isMoveScaleOrSpin = false,
                isPaused = false;

            function animationSwitch() {
                if (isPaused)
                    return false;
                if (i === this._steps.length) {
                    i = 0;
                    if (!isCycled){
                        return false;
                    }
                }
                switch (this._steps[i].name) {
                    case 'move' : {
                        isMoveScaleOrSpin = true;
                        element.style.transitionDuration = `${this._steps[i].duration}ms`;
                        element.style.transform = getTransform(this._steps[i].extraParameters, null, null);
                        break;
                    }
                    case 'scale' : {
                        isMoveScaleOrSpin = true;
                        element.style.transitionDuration = `${this._steps[i].duration}ms`;
                        element.style.transform = getTransform(null, this._steps[i].extraParameters, null);
                        break;
                    }
                    case 'fadeIn' : {
                        isFadeIn = true;
                        element.style.transitionDuration = `${this._steps[i].duration}ms`;
                        element.classList.remove('hide');
                        element.classList.add('show');
                        break;
                    }
                    case 'fadeOut' : {
                        isFadeOut = true;
                        element.style.transitionDuration = `${this._steps[i].duration}ms`;
                        element.classList.remove('show');
                        element.classList.add('hide');
                        break;
                    }
                    case 'delay' : {
                        break;
                    }
                    case 'spin' : {
                        isMoveScaleOrSpin = true;
                        element.style.transitionDuration = `${this._steps[i].duration}ms`;
                        element.style.transform = getTransform(null, null, this._steps[i].extraParameters);
                        break;
                    }
                }
                return this._steps[i++].duration;
            }
            animationSwitch = animationSwitch.bind(this);

            let i = 0;
            let timer = setTimeout(function timeoutStart() {
                let duration = animationSwitch();
                if (isPaused || !duration) {
                    return;
                }
                setTimeout(timeoutStart, duration)
            }, animationSwitch());

            return {
                stop: function () {
                    isPaused = true;
                },
                reset: function () {
                    clearTimeout(timer);
                    if (isFadeIn) {
                        resetFadeIn(element);
                    }
                    if (isFadeOut) {
                        resetFadeOut(element);
                    }
                    if (isMoveAndScale) {
                        resetMoveScaleAndSpin(element);
                    }
                }
            }
        },
        buildHandler: function() {
            let play = this.play.bind(this);
            return function(){
                play(this);
            }
        },
        fadeIn: function (element, duration) {
            this.addFadeIn(duration).play(element);
        },
        fadeOut: function (element, duration) {
            this.addFadeOut(duration).play(element);
        },
        move: function (element, duration, translation) {
            this.addMove(duration, translation).play(element);
        },
        scale: function (element, duration, ratio) {
            this.addScale(duration, ratio).play(element);
        },
        moveAndHide: function (element, duration) {
            return this.addMove(duration * .4, {x: 100, y: 20}).addFadeOut(duration * .6).play(element);
        },
        showAndHide: function (element, duration) {
            return this.addFadeIn(duration / 3).addDelay(duration / 3).addFadeOut(duration / 3).play(element);
        },
        heartBeating: function (element) {
            return this.addScale(500, 1.4).addScale(500, 1).play(element, true);
        }
    };
}
