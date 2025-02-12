System.register("chunks:///_virtual/BackgroundCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "51d779uGaRDBq044YHPAyyV", "BackgroundCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var BackgroundCtrl = exports('BackgroundCtrl', (_dec = ccclass('BackgroundCtrl'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BackgroundCtrl, _Component);

        function BackgroundCtrl() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = BackgroundCtrl.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return BackgroundCtrl;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CharacterCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventCode.ts', './Emitter.ts', './DynamicEntity.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, KeyCode, EventCode, Emitter, DynamicEntity;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      KeyCode = module.KeyCode;
    }, function (module) {
      EventCode = module.default;
    }, function (module) {
      Emitter = module.Emitter;
    }, function (module) {
      DynamicEntity = module.DynamicEntity;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "8556aeFmK5H/68zUQRY0TkS", "CharacterCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CharacterCtrl = exports('CharacterCtrl', (_dec = ccclass('CharacterCtrl'), _dec(_class = /*#__PURE__*/function (_DynamicEntity) {
        _inheritsLoose(CharacterCtrl, _DynamicEntity);

        function CharacterCtrl() {
          return _DynamicEntity.apply(this, arguments) || this;
        }

        var _proto = CharacterCtrl.prototype;

        _proto.initEvent = function initEvent() {
          _DynamicEntity.prototype.initEvent.call(this);

          Emitter.instance.on(EventCode.PLAYER.MOVE, this.onPressMove, this);
          Emitter.instance.on(EventCode.PLAYER.JUMP, this.onPressJump, this);
          Emitter.instance.on(EventCode.PLAYER.RELEASE_CONTROL, this.onReleaseControl, this);
          Emitter.instance.on(EventCode.ENEMY.LEFT_CLICK, this.onTarget, this);
          Emitter.instance.on(EventCode.PLAYER.UN_ATTACK, this.onUnTarget, this);
          this.node.on(EventCode.RIGID.COLLISION_BEGIN, this.onContact, this);
        };

        _proto.onPressMove = function onPressMove(data) {
          var key = data.key;
          this.direction = key == KeyCode.KEY_D ? 1 : -1;
          this.isMoving = true;
        };

        _proto.onPressJump = function onPressJump() {
          if (this.isJumping && this.isDoubleJump) return;
          this.jump();
        };

        _proto.onReleaseControl = function onReleaseControl(data) {
          this.isMoving = false;
          if (this.isJumping) return;
          this.idle();
        };

        _proto.defense = function defense() {//Todo: defense;
        };

        _proto.onContact = function onContact() {
          this.isJumping = false;
          this.isDoubleJump = false;

          if (!this.isMoving) {
            this.idle();
          }
        };

        _proto.onTarget = function onTarget(target) {
          if (!target) return;

          if (target['type'] == EventCode.ENEMY.TYPE.NORMAL) {
            if (this.targetNode) {
              this.onUnTarget(this.targetNode);
            }

            this.targetNode = target;
            target.emit(EventCode.ENEMY.ACTION.TARGETED, true);
          }
        };

        _proto.onUnTarget = function onUnTarget(target) {
          var targetNode = target || this.targetNode;
          if (!targetNode) return;

          if (targetNode['type'] == EventCode.ENEMY.TYPE.NORMAL) {
            targetNode.emit(EventCode.ENEMY.ACTION.TARGETED, false);
          }

          this.targetNode = null;
          this.canAttack = false;
        };

        return CharacterCtrl;
      }(DynamicEntity)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CheatCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Emitter.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, Component, Emitter;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      Component = module.Component;
    }, function (module) {
      Emitter = module.Emitter;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "b9e70o5BCVCOpPCXFJcqV9y", "CheatCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CheatCtrl = exports('CheatCtrl', (_dec = ccclass('CheatCtrl'), _dec2 = property(EditBox), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CheatCtrl, _Component);

        function CheatCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "playerSpeedEB", _descriptor, _assertThisInitialized(_this));

          _this.playerSpeed = 4;
          return _this;
        }

        var _proto = CheatCtrl.prototype;

        _proto.start = function start() {
          this.playerSpeedEB.string = this.playerSpeed.toString();
          Emitter.instance.emit('SET_SPEED', this.playerSpeed);
        };

        _proto.update = function update(deltaTime) {};

        _proto.updateSpeed = function updateSpeed() {
          this.playerSpeed = Number(this.playerSpeedEB.string);
          Emitter.instance.emit('SET_SPEED', this.playerSpeed);
        };

        return CheatCtrl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerSpeedEB", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Config.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c11aPOKJ5Fy5e0hClntWr2", "Config", undefined);

      var config = exports('default', {
        PLAYER: {
          HEATH_POINT: 400,
          MANA_POINT: 400,
          ATTACK_DAMAGE: 100,
          ABILITY_POWER: 20,
          DEFENSE_ARMOR: 20,
          MOVE_SPEED: 4,
          NORMAL_ATTACK_SPEED: 0.8
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataStore.ts", ['cc'], function (exports) {
  var cclegacy, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e5f6bX2PsdMvpUBCvkMo+BY", "DataStore", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DataStore = exports('DataStore', (_dec = ccclass('DataStore'), _dec(_class = /*#__PURE__*/function () {
        function DataStore() {}

        var _proto = DataStore.prototype;

        _proto.setUserStats = function setUserStats() {};

        return DataStore;
      }()) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DynamicEntity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameBaseComponent.ts', './Emitter.ts', './EventCode.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BoxCollider2D, Animation, RigidBody2D, Vec2, Vec3, GameBaseComponent, Emitter, EventCode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BoxCollider2D = module.BoxCollider2D;
      Animation = module.Animation;
      RigidBody2D = module.RigidBody2D;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
    }, function (module) {
      GameBaseComponent = module.GameBaseComponent;
    }, function (module) {
      Emitter = module.Emitter;
    }, function (module) {
      EventCode = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "5a9bfZE/mpBj63oCLQE2Prl", "DynamicEntity", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var action = exports('action', {
        idle: 'idle',
        jump: 'jump',
        defense: 'defense',
        moving: 'run',
        attack: 'attack',
        fall: 'fall'
      });
      var DynamicEntity = exports('DynamicEntity', (_dec = ccclass('DynamicEntity'), _dec2 = property(BoxCollider2D), _dec3 = property(Animation), _dec4 = property(RigidBody2D), _dec(_class = (_class2 = /*#__PURE__*/function (_GameBaseComponent) {
        _inheritsLoose(DynamicEntity, _GameBaseComponent);

        function DynamicEntity() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameBaseComponent.call.apply(_GameBaseComponent, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "boxCollider", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animationChar", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "rigidBody", _descriptor3, _assertThisInitialized(_this));

          _this.moveSpeed = 4;
          _this.attackSpeed = 0;
          _this.speedAnim = 0.4;
          _this.jumpForce = 5;
          _this.direction = 0;
          _this.state = action.idle;
          _this.isJumping = false;
          _this.isDoubleJump = false;
          _this.isMoving = false;
          _this.canAttack = false;
          _this.targetNode = null;
          return _this;
        }

        var _proto = DynamicEntity.prototype;

        _proto.onLoad = function onLoad() {
          this.initEvent();
        };

        _proto.update = function update(deltaTime) {
          this.action(deltaTime);
        };

        _proto.initEvent = function initEvent() {
          Emitter.instance.on('SET_SPEED', this.setSpeed, this);
        };

        _proto.setSpeed = function setSpeed(value) {
          this.moveSpeed = value;
        };

        _proto.action = function action(dt) {
          if (this.isMoving) {
            this.handleMoving(dt);
          }

          this.handleAttack(dt);
          this.handleFall();
        };

        _proto.handleMoving = function handleMoving(dt) {
          if (this.rigidBody) {
            this.move();
          }
        };

        _proto.move = function move() {
          var currentVelocity = this.rigidBody.linearVelocity;
          this.rigidBody.linearVelocity = new Vec2(this.direction * this.moveSpeed, currentVelocity.y);
          this.node.setScale(new Vec3(this.direction, 1, 1));
          !this.isJumping && this.playAnimation(action.moving);
        };

        _proto.handleAttack = function handleAttack(dt) {
          if (!this.targetNode) return;
          this.debugLog('attack', this.attackSpeed);

          if (this.rigidBody) {
            var currentVelocity = this.rigidBody.linearVelocity;
            var playerPos = this.node.position;
            var targetPos = this.targetNode.position;
            var distance = Math.abs(playerPos.x - targetPos.x);
            var targetDirection = targetPos.x > playerPos.x ? 1 : -1;

            if (distance >= 20) {
              this.isMoving = true;
              this.direction = targetDirection;
              this.rigidBody.linearVelocity = new Vec2(this.direction * this.moveSpeed, currentVelocity.y);
              this.node.setScale(new Vec3(this.direction, 1, 1));
              this.playAnimation(action.moving);
            } else if (!this.canAttack) {
              this.isMoving = false;
              this.direction = 0;
              this.canAttack = true;
              this.rigidBody.linearVelocity = new Vec2(0, currentVelocity.y);
            }
          }

          this.canAttack && this.attack(dt);
        };

        _proto.attack = function attack(dt) {
          this.attackSpeed -= dt;

          if (this.attackSpeed <= 0) {
            this.playAnimation(action.attack);
            this.speedAnim = 0.2;
            this.setSpeedAnimation(action.attack, 0.2);
            this.attackSpeed = 1;
            this.targetNode.emit(EventCode.ENEMY.ACTION.HIT, 10);
          } else if (this.speedAnim <= 0) {
            this.playAnimation(action.idle);
          }

          this.speedAnim -= dt;
        };

        _proto.jump = function jump() {
          if (!this.rigidBody) return;

          if (!this.isJumping) {
            var jumpVelocityX = 0;
            this.rigidBody.linearVelocity = new Vec2(jumpVelocityX, this.jumpForce);
            this.isJumping = true;
            this.playAnimation(action.jump);
          } else if (this.isJumping && !this.isDoubleJump) {
            var doubleJumpVelocityX = 0;
            this.rigidBody.linearVelocity = new Vec2(doubleJumpVelocityX, this.jumpForce);
            this.isDoubleJump = true;
          }
        };

        _proto.handleFall = function handleFall() {
          if (!this.rigidBody) return;
          var currentVelocity = this.rigidBody.linearVelocity;

          if (currentVelocity.y < 0 && this.isJumping) {
            this.playAnimation(action.fall);
          }
        };

        _proto.idle = function idle() {
          this.isMoving = false;
          var currentVelocity = this.rigidBody.linearVelocity;
          this.rigidBody.linearVelocity = new Vec2(0, currentVelocity.y);
          this.playAnimation(action.idle);
        };

        _proto.playAnimation = function playAnimation(animString) {
          if (this.state != animString) {
            this.state = animString;
            this.animationChar.stop();
            this.animationChar.play(animString);
          }
        };

        _proto.setSpeedAnimation = function setSpeedAnimation(animString, speed) {
          this.animationChar.getState(animString).speed = speed;
        };

        return DynamicEntity;
      }(GameBaseComponent), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxCollider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animationChar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Emitter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, EventTarget, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2;

      cclegacy._RF.push({}, "2953eLrQTFDOKjMLEjrQ7rN", "Emitter", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var eventEmitter = new EventTarget();
      var Emitter = exports('Emitter', (_dec = ccclass('Emitter'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Emitter, _Component);

        function Emitter() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Emitter.prototype;

        _proto.onLoad = function onLoad() {
          Emitter.instance = eventEmitter;
        };

        return Emitter;
      }(Component), _class2.instance = null, _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnemyController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Emitter.ts', './EventCode.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, Node, Component, Emitter, EventCode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      Emitter = module.Emitter;
    }, function (module) {
      EventCode = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "4ce30ppgMJGRaeBXDLccTIY", "EnemyController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EnemyController = exports('EnemyController', (_dec = ccclass('EnemyController'), _dec2 = property(Animation), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EnemyController, _Component);

        function EnemyController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "anim", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "targetedIcon", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = EnemyController.prototype;

        _proto.onLoad = function onLoad() {
          this.init();
          this.initEvent();
        };

        _proto.start = function start() {
          this.targetedIcon.active = false;
        };

        _proto.init = function init() {
          this.node['type'] = EventCode.ENEMY.TYPE.NORMAL;
        };

        _proto.initEvent = function initEvent() {
          var _this2 = this;

          this.node.on(Node.EventType.MOUSE_DOWN, function (event) {
            _this2.onClick(event);
          });
          this.node.on(EventCode.ENEMY.ACTION.HIT, this.onHit.bind(this));
          this.node.on(EventCode.ENEMY.ACTION.TARGETED, this.onTarget.bind(this));
        };

        _proto.onClick = function onClick(event) {
          Emitter.instance.emit(EventCode.ENEMY.LEFT_CLICK, this.node);
        };

        _proto.onHit = function onHit(damage) {
          this.anim.play('Hit');
        };

        _proto.onTarget = function onTarget(isTarget) {
          this.targetedIcon.active = isTarget;
        };

        return EnemyController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetedIcon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventCode.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f2b7c2/gMBDCZWA4AIBlsxh", "EventCode", undefined);

      var EventCode = exports('default', {
        KEY_BOARD: "KEY_BOARD",
        RIGID: {
          COLLISION_BEGIN: 'COLLISION_BEGIN',
          COLLISION_END: 'COLLISION_END',
          COLLISION_STAY: 'COLLISION_STAY',
          GROUP: {
            GROUND_CHARACTER: 2,
            CHARACTER_CHARACTER: 4
          }
        },
        ENEMY: {
          LEFT_CLICK: 'LEFT_CLICK',
          TYPE: {
            NORMAL: 'ENE_TYPE_NORMAL'
          },
          ACTION: {
            HIT: 'ENE_ACT_HIT',
            TARGETED: "ENE_ACT_TARGETED"
          }
        },
        PLAYER: {
          ATTACK: {
            NORMAL: 'PLAYER_ATT_NORMAL'
          },
          MOVE: "PLAYER_MOVE",
          JUMP: "PLAYER_JUMP",
          RELEASE_CONTROL: "RELEASE_CONTROL",
          UN_ATTACK: "PLAYER_UN_ATT_NORMAL"
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameBaseComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Emitter.ts', './Utils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, Emitter, Utils;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Emitter = module.Emitter;
    }, function (module) {
      Utils = module.Utils;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "fa0817NOqJJ44eZb9OaZuY5", "GameBaseComponent", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameBaseComponent = exports('GameBaseComponent', (_dec = ccclass('GameBaseComponent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameBaseComponent, _Component);

        function GameBaseComponent() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.gameUtils = new Utils();
          return _this;
        }

        var _proto = GameBaseComponent.prototype;

        _proto.onDestroy = function onDestroy() {
          Emitter.instance.targetOff(this);
        };

        _proto.debugLog = function debugLog(title, data) {
          console.log(title, data);
        };

        _proto.debugWarn = function debugWarn(title, data) {
          console.warn(title, data);
        };

        return GameBaseComponent;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfigFC2D.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "53ecbWh9YlHDazecm4bFsiy", "GameConfigFC2D", undefined);

      var GameConfigFC2D = exports('GameConfigFC2D', function GameConfigFC2D() {
        this.indexScene = {
          GameScene: 1,
          LoginScene: 2,
          LoadingScene: 3
        };
        GameConfigFC2D.instance = this;
      });
      GameConfigFC2D.instance = null;
      var GameConfig = new GameConfigFC2D();

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameInitialization.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e33e5gH1pJFCqz2EnKSbXwS", "GameInitialization", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameInitialization = exports('GameInitialization', (_dec = ccclass('GameInitialization'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameInitialization, _Component);

        function GameInitialization() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = GameInitialization.prototype;

        _proto.onLoad = function onLoad() {
          this.init();
        };

        _proto.init = function init() {};

        return GameInitialization;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GroundCellCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, Sprite, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "79978ic6kpIX5g+t9Qv0p30", "GroundCellCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GroundCellCtrl = exports('GroundCellCtrl', (_dec = ccclass('GroundCellCtrl'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GroundCellCtrl, _Component);

        function GroundCellCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "groundDry", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "groundWet", _descriptor2, _assertThisInitialized(_this));

          _this.groundIsDry = true;
          return _this;
        }

        var _proto = GroundCellCtrl.prototype;

        _proto.start = function start() {
          this.intEvent();
          this.groundIsDry = true;
          this.setState(false);
        };

        _proto.intEvent = function intEvent() {
          var _this2 = this;

          this.node.on(Node.EventType.MOUSE_DOWN, function () {
            _this2.setState(true);
          }, this);
        };

        _proto.setState = function setState(isChange) {
          this.groundIsDry = isChange && !this.groundIsDry;
          this.node.getComponent(Sprite).spriteFrame = this.groundIsDry ? this.groundDry : this.groundWet;
        };

        return GroundCellCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "groundDry", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "groundWet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JoystickCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f41450E04tNhZBf4/mHCyPu", "JoystickCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var JoystickCtrl = exports('JoystickCtrl', (_dec = ccclass('JoystickCtrl'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JoystickCtrl, _Component);

        function JoystickCtrl() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = JoystickCtrl.prototype;

        _proto.onLoad = function onLoad() {
          this.initEvent();
        };

        _proto.initEvent = function initEvent() {};

        return JoystickCtrl;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KeyBoardCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventCode.ts', './Emitter.ts', './GameBaseComponent.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, KeyCode, input, Input, EventCode, Emitter, GameBaseComponent;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      KeyCode = module.KeyCode;
      input = module.input;
      Input = module.Input;
    }, function (module) {
      EventCode = module.default;
    }, function (module) {
      Emitter = module.Emitter;
    }, function (module) {
      GameBaseComponent = module.GameBaseComponent;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "d71f3LopcNJ+qZnHBDQG+0M", "KeyBoardCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var KEY_CONFIG = exports('KEY_CONFIG', {
        PLAYER_CONTROL: {
          MOVE_LEFT: KeyCode.KEY_A,
          MOVE_RIGHT: KeyCode.KEY_D,
          JUMP: KeyCode.KEY_W,
          DEFENSE: KeyCode.KEY_S,
          SKILL_1: KeyCode.KEY_Q,
          SKILL_2: KeyCode.KEY_E,
          ULTIMATE: KeyCode.KEY_R,
          ITEM_1: KeyCode.DIGIT_1,
          ITEM_2: KeyCode.DIGIT_2
        }
      });
      var KeyBoardCtrl = exports('KeyBoardCtrl', (_dec = ccclass('KeyBoardCtrl'), _dec(_class = /*#__PURE__*/function (_GameBaseComponent) {
        _inheritsLoose(KeyBoardCtrl, _GameBaseComponent);

        function KeyBoardCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _GameBaseComponent.call.apply(_GameBaseComponent, [this].concat(args)) || this;
          _this.listKeyPressing = [];
          return _this;
        }

        var _proto = KeyBoardCtrl.prototype;

        _proto.onLoad = function onLoad() {
          this.initEvent();
        };

        _proto.initEvent = function initEvent() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        };

        _proto.onKeyDown = function onKeyDown(key) {
          this.listKeyPressing.indexOf(key.keyCode) == -1 && this.listKeyPressing.push(key.keyCode);
          var data = {
            key: key.keyCode,
            isPress: false,
            isHold: false,
            listKeyPressing: this.listKeyPressing
          };

          switch (key.keyCode) {
            case KeyCode.KEY_A:
            case KeyCode.KEY_D:
              Emitter.instance.emit(EventCode.PLAYER.MOVE, data);
              Emitter.instance.emit(EventCode.PLAYER.UN_ATTACK);
              break;

            case KeyCode.KEY_W:
              Emitter.instance.emit(EventCode.PLAYER.JUMP, data);
              Emitter.instance.emit(EventCode.PLAYER.UN_ATTACK);
              break;
          }
        };

        _proto.onKeyUp = function onKeyUp(key) {
          var _this2 = this;

          this.listKeyPressing.map(function (e, index) {
            e == key.keyCode && _this2.listKeyPressing.splice(index, 1);
          });
          var data = {
            key: key.keyCode,
            isPress: false,
            isHold: false,
            listKeyPressing: this.listKeyPressing
          };

          if (this.listKeyPressing.length > 0) {
            this.listKeyPressing.map(function (key) {
              switch (key.keyCode) {
                case KeyCode.KEY_A:
                case KeyCode.KEY_D:
                  Emitter.instance.emit(EventCode.PLAYER.MOVE, data);
                  break;

                case KeyCode.KEY_W:
                  Emitter.instance.emit(EventCode.PLAYER.JUMP, data);
                  break;
              }
            });
          } else {
            Emitter.instance.emit(EventCode.PLAYER.RELEASE_CONTROL, data);
          }
        };

        _proto.onKeyPressing = function onKeyPressing(key) {
          var data = {
            key: key.keyCode,
            isPress: true,
            isHold: true,
            listKeyPressing: this.listKeyPressing
          };

          switch (key.keyCode) {
            case KeyCode.KEY_W:
              Emitter.instance.emit(EventCode.PLAYER.JUMP, data);
              break;
          }
        };

        _proto.onDestroy = function onDestroy() {
          _GameBaseComponent.prototype.onDestroy.call(this);

          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
        };

        return KeyBoardCtrl;
      }(GameBaseComponent)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadGameByPrefabs.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameConfigFC2D.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, GameConfigFC2D;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      GameConfigFC2D = module.GameConfigFC2D;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "fded5teeL5C+JUaYMyP2a1g", "LoadGameByPrefabs", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadGameByPrefabs = exports('LoadGameByPrefabs', (_dec = ccclass('LoadGameByPrefabs'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadGameByPrefabs, _Component);

        function LoadGameByPrefabs() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "persisNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loadingScene", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "loginScene", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "gameScene", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LoadGameByPrefabs.prototype;

        _proto.onLoad = function onLoad() {
          var loadingNode = instantiate(this.loadingScene);
          this.node.addChild(loadingNode);
          loadingNode.setSiblingIndex(GameConfigFC2D.instance.indexScene.LoadingScene);
          var loginNode = instantiate(this.loginScene);
          this.node.addChild(loginNode);
          loginNode.setSiblingIndex(GameConfigFC2D.instance.indexScene.LoginScene);
          var gameNode = instantiate(this.gameScene);
          this.node.addChild(gameNode);
          gameNode.setSiblingIndex(GameConfigFC2D.instance.indexScene.GameScene);
        };

        return LoadGameByPrefabs;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "persisNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "loadingScene", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loginScene", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameScene", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f5b52xF5klDAIY+ewE3nAQn", "LoadingController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoadingController = exports('LoadingController', (_dec = ccclass('LoadingController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingController, _Component);

        function LoadingController() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = LoadingController.prototype;

        _proto.onLoad = function onLoad() {
          this.node.destroy();
        };

        return LoadingController;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, EditBox, sys, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EditBox = module.EditBox;
      sys = module.sys;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "af74cQ+OtxBErWVdG9Qz7iG", "LoginController", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var LoginController = exports('LoginController', (_dec = ccclass('LoginController'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoginController, _Component);

        function LoginController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "boxUserName", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "boxPassword", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = LoginController.prototype;

        _proto.start = function start() {
          this.login();
        };

        _proto.login = function login() {
          var userName = this.boxUserName.string;
          var password = this.boxPassword.string;
          var token = userName + "-" + password;
          sys.localStorage.setItem('token', token);
          sys.localStorage.setItem('user_name', userName);
          sys.localStorage.setItem('password', password);
          this.node.destroy();
        };

        return LoginController;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxUserName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "boxPassword", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './CharacterCtrl.ts', './DataStore.ts', './Emitter.ts', './EventCode.ts', './GameBaseComponent.ts', './GameConfigFC2D.ts', './GameInitialization.ts', './LoadGameByPrefabs.ts', './LoadingController.ts', './LoginController.ts', './BackgroundCtrl.ts', './CheatCtrl.ts', './Config.ts', './DynamicEntity.ts', './GroundCellCtrl.ts', './JoystickCtrl.ts', './KeyBoardCtrl.ts', './MapCtrl.ts', './NodePoolContainerCtrl.ts', './PlayerLayer.ts', './RigidCtrl.ts', './Utils.ts', './EnemyController.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MapCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "a30dbTUyQhAVpLubITG5Kv9", "MapCtrl", undefined); // import { NodePoolContainerCtrl } from './NodePoolContainerCtrl';


      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MapCtrl = exports('MapCtrl', (_dec = ccclass('MapCtrl'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MapCtrl, _Component);

        function MapCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "mapPool", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = MapCtrl.prototype;

        _proto.start = function start() {// this.initMap({name: 'GroundCell', position: v3(-100, 0)});
          // this.initMap({name: 'GroundCell', position: v3(0, 0)});
          // this.initMap({name: 'GroundCell', position: v3(100, 0)});
        };

        _proto.intEvent = function intEvent() {};

        _proto.initMap = function initMap(data) {// NodePoolContainerCtrl.instance.mapPool.forEach((node)=>{
          //     if(data.name == node.name){
          //         this.createComponent(node, data);
          //     }
          // })
        } // createComponent(ojPrefab: Prefab, data) {
        //     const mapComponent = instantiate(ojPrefab);
        //     mapComponent.setParent(this.mapPool);
        //     mapComponent.position = data.position;
        // }
        ;

        return MapCtrl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapPool", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NodePoolContainerCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;

      cclegacy._RF.push({}, "7063ajQgytCppVYHpS8xkda", "NodePoolContainerCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var NodePoolContainerCtrl = exports('NodePoolContainerCtrl', (_dec = ccclass('NodePoolContainerCtrl'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NodePoolContainerCtrl, _Component);

        function NodePoolContainerCtrl() {
          var _this;

          _this = _Component.call(this) || this;

          _initializerDefineProperty(_this, "mapPool", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "character", _descriptor2, _assertThisInitialized(_this));

          NodePoolContainerCtrl.instance = _assertThisInitialized(_this);
          return _this;
        }

        var _proto = NodePoolContainerCtrl.prototype;

        _proto.start = function start() {};

        _proto.update = function update(deltaTime) {};

        return NodePoolContainerCtrl;
      }(Component), _class3.instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapPool", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "character", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NodePoolContainerCtrl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, Component, NodePoolContainerCtrl;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      NodePoolContainerCtrl = module.NodePoolContainerCtrl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "0fbf0L6wP1NDbIA2pG6iaa+", "PlayerLayer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var PlayerLayer = exports('PlayerLayer', (_dec = ccclass('PlayerLayer'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerLayer, _Component);

        function PlayerLayer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "playerPool", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "charPrefab", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PlayerLayer.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.initEvent = function initEvent() {};

        _proto.initPlayer = function initPlayer() {
          NodePoolContainerCtrl.instance.character.forEach(function (character) {});
        };

        return PlayerLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerPool", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "charPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RigidCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventCode.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, BoxCollider2D, Contact2DType, Component, EventCode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BoxCollider2D = module.BoxCollider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      EventCode = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "7d889nf491C8J2ymPMjL4Ut", "RigidCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var RigidCtrl = exports('RigidCtrl', (_dec = ccclass('RigidCtrl'), _dec2 = property(BoxCollider2D), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RigidCtrl, _Component);

        function RigidCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "boxCollider", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = RigidCtrl.prototype;

        _proto.onLoad = function onLoad() {
          this.initEvent();
        };

        _proto.start = function start() {
          //     PhysicsSystem2D.instance.enable = true;
          //     PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
          // EPhysics2DDrawFlags.Pair |
          // EPhysics2DDrawFlags.CenterOfMass |
          // EPhysics2DDrawFlags.Joint |
          // EPhysics2DDrawFlags.Shape;
          this.initNode();
          var collider = this.boxCollider;
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
          collider.on(Contact2DType.STAY_CONTACT, this.stayContact, this);
        };

        _proto.initEvent = function initEvent() {};

        _proto.initNode = function initNode() {
          if (!this.boxCollider) {
            this.boxCollider = this.node.getComponent(BoxCollider2D);
          }
        };

        _proto.onBeginContact = function onBeginContact(selfCollider, otherCollider, contact) {
          this.node.emit(EventCode.RIGID.COLLISION_BEGIN, selfCollider, otherCollider);
        };

        _proto.onEndContact = function onEndContact(selfCollider, otherCollider, contact) {
          this.node.emit(EventCode.RIGID.COLLISION_END, selfCollider, otherCollider);
        };

        _proto.stayContact = function stayContact(selfCollider, otherCollider, contact) {
          this.node.emit(EventCode.RIGID.COLLISION_STAY, selfCollider, otherCollider);
        };

        return RigidCtrl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxCollider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "552dcG9myxDrZRLNfYbOy9V", "Utils", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Utils = exports('Utils', (_dec = ccclass('Utils'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Utils, _Component);

        function Utils() {
          return _Component.apply(this, arguments) || this;
        }

        return Utils;
      }(Component)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});