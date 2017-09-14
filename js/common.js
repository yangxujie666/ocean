webpackJsonp([32],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
	        // CommonJS
	        factory(exports, require('echarts'));
	    } else {
	        // Browser globals
	        factory({}, root.echarts);
	    }
	}(this, function (exports, echarts) {
	    var log = function (msg) {
	        if (typeof console !== 'undefined') {
	            console && console.error && console.error(msg);
	        }
	    }
	    if (!echarts) {
	        log('ECharts is not Loaded');
	        return;
	    }
	    if (!echarts.registerMap) {
	        log('ECharts Map is not loaded')
	        return;
	    }
	    echarts.registerMap('china', {"type":"FeatureCollection","features":[{"id":"710000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@°Ü¯Û"],["@@ƛĴÕƊÉɼģºðʀ\\ƎsÆNŌÔĚänÜƤɊĂǀĆĴĤǊŨxĚĮǂƺòƌâÔ®ĮXŦţƸZûÐƕƑGđ¨ĭMó·ęcëƝɉlÝƯֹÅŃ^Ó·śŃǋƏďíåɛGɉ¿@ăƑ¥ĘWǬÏĶŁâ"],["@@\\p|WoYG¿¥Ij@¢"],["@@¡@V^RqBbAnTXeRz¤L«³I"],["@@ÆEEkWqë @"],["@@fced"]],"encodeOffsets":[[[122886,24033]],[[123335,22980]],[[122375,24193]],[[122518,24117]],[[124427,22618]],[[124862,26043]]]},"properties":{"cp":[121.509062,25.044332],"name":"台湾","childNum":6}},{"id":"130000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@o~Z]ªrºc_ħ²G¼s`jÎŸnüsÂłNX_M`Ç½ÓnUKĜēs¤­©yrý§uģcJe"],["@@U`Ts¿mÂ"],["@@oºƋÄdeVDJj£J|ÅdzÂFt~KŨ¸IÆv|¢r}èonb}`RÎÄn°ÒdÞ²^®lnÐèĄlðÓ×]ªÆ}LiĂ±Ö`^°Ç¶p®đDcŋ`ZÔ¶êqvFÆN®ĆTH®¦O¾IbÐã´BĐɢŴÆíȦpĐÞXR·nndO¤OÀĈƒ­QgµFo|gȒęSWb©osx|hYhgŃfmÖĩnºTÌSp¢dYĤ¶UĈjlǐpäìë|³kÛfw²Xjz~ÂqbTÑěŨ@|oMzv¢ZrÃVw¬ŧĖ¸f°ÐTªqs{S¯r æÝlNd®²Ğ ǆiGĘJ¼lr}~K¨ŸƐÌWöÆzR¤lêmĞLÎ@¡|q]SvKÑcwpÏÏĿćènĪWlĄkT}J¤~ÈTdpddʾĬBVtEÀ¢ôPĎƗè@~kü\\rÊĔÖæW_§¼F´©òDòjYÈrbĞāøŀG{ƀ|¦ðrb|ÀH`pʞkvGpuARhÞÆǶgĘTǼƹS£¨¡ù³ŘÍ]¿ÂyôEP xX¶¹ÜO¡gÚ¡IwÃé¦ÅBÏ|Ç°N«úmH¯âDùyŜŲIÄuĐ¨D¸dɂFOhđ©OiÃ`ww^ÌkÑH«ƇǤŗĺtFu{Z}Ö@U´ʚLg®¯Oı°Ãw ^VbÉsmAê]]w§RRl£ȭµu¯b{ÍDěïÿȧuT£ġěŗƃĝQ¨fVƋƅn­a@³@ďyÃ½IĹÊKŭfċŰóxV@tƯJ]eR¾fe|rHA|h~Ėƍl§ÏlTíb ØoÅbbx³^zÃĶ¶Sj®AyÂhðk`«PËµEFÛ¬Y¨Ļrõqi¼Wi°§Ð±´°^[À|ĠO@ÆxO\\ta\\tĕtû{ġȧXýĪÓjùÎRb^ÎfK[ÝděYfíÙTyuUSyŌŏů@Oi½éŅ­aVcř§ax¹XŻácWU£ôãºQ¨÷Ñws¥qEHÙ|šYQoŕÇyáĂ£MÃ°oťÊP¡mWO¡v{ôvîēÜISpÌhp¨ jdeŔQÖjX³àĈ[n`Yp@UcM`RKhEbpŞlNut®EtqnsÁgAiúoHqCXhfgu~ÏWP½¢G^}¯ÅīGCÑ^ãziMáļMTÃƘrMc|O_¯Ŏ´|morDkO\\mĆJfl@cĢ¬¢aĦtRıÒ¾ùƀ^juųœK­UFyƝīÛ÷ąV×qƥV¿aȉd³BqPBmaËđŻģmÅ®V¹d^KKonYg¯XhqaLdu¥Ípǅ¡KąÅkĝęěhq}HyÃ]¹ǧ£Í÷¿qáµ§g¤o^á¾ZE¤i`ĳ{nOl»WÝĔįhgF[¿¡ßkOüš_ūiǱàUtėGyl}ÓM}jpEC~¡FtoQiHkk{Ãmï"]],"encodeOffsets":[[[119712,40641]],[[121616,39981]],[[116462,37237]]]},"properties":{"cp":[114.502461,38.045474],"name":"河北","childNum":3}},{"id":"140000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ÞĩÒSra}ÁyWix±Üe´lèßÓǏokćiµVZģ¡coTSË¹ĪmnÕńehZg{gtwªpXaĚThȑp{¶Eh®RćƑP¿£Pmc¸mQÝWďȥoÅîɡųAďä³aÏJ½¥PG­ąSM­EÅruµéYÓŌ_dĒCo­Èµ]¯_²ÕjāK~©ÅØ^ÔkïçămÏk]­±cÝ¯ÑÃmQÍ~_apm~ç¡qu{JÅŧ·Ls}EyÁÆcI{¤IiCfUcƌÃp§]ě«vD@¡SÀµMÅwuYY¡DbÑc¡h×]nkoQdaMç~eDÛtT©±@¥ù@É¡ZcW|WqOJmĩl«ħşvOÓ«IqăV¥D[mI~Ó¢cehiÍ]Ɠ~ĥqX·eƷn±}v[ěďŕ]_œ`¹§ÕōIo©b­s^}Ét±ū«³p£ÿ·Wµ|¡¥ăFÏs×¥ŅxÊdÒ{ºvĴÎêÌɊ²¶ü¨|ÞƸµȲLLúÉƎ¤ϊęĔV`_bªS^|dzY|dz¥pZbÆ£¶ÒK}tĦÔņƠPYznÍvX¶Ěn ĠÔzý¦ª÷ÑĸÙUȌ¸dòÜJð´ìúNM¬XZ´¤ŊǸ_tldI{¦ƀðĠȤ¥NehXnYGR° ƬDj¬¸|CĞKqºfƐiĺ©ª~ĆOQª ¤@ìǦɌ²æBÊTŸʂōĖĴŞȀÆÿȄlŤĒötÎ½î¼ĨXh|ªM¤Ðz"],"encodeOffsets":[[116874,41716]]},"properties":{"cp":[112.549248,37.857014],"name":"山西","childNum":1}},{"id":"150000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@Č^â£ĂhĖMÈÄw\\fŦ°W ¢¾luŸDw\\̀ʉÌÛMĀ[bÓEn}¶Vcês¯PqFB|S³C|kñHdiÄ¥sŉÅPóÑÑE^ÅPpy_YtShQ·aHwsOnŉÃs©iqjUSiº]ïW«gW¡ARëśĳĘů`çõh]y»ǃǛҤxÒm~zf}pf|ÜroÈzrKÈĵSƧż؜Ġu¦ö"],["@@sKCGS|úþXgp{ÁX¿ć{ƱȏñZáĔyoÁhA}ŅĆfdŉ_¹Y°ėǩÑ¡H¯¶oMQqð¡Ë|Ñ`ƭŁX½·óÛxğįÅcQs«tȋǅFù^it«Č¯[hAi©á¥ÇĚ×l|¹y¯YȵƓñǙµïċĻ|Düȭ¶¡oŽäÕG\\ÄT¿Òõr¯LguÏYęRƩɷŌO\\İÐ¢æ^Ŋ ĲȶȆbÜGĝ¬¿ĚVĎgª^íu½jÿĕęjık@Ľ]ėl¥ËĭûÁėéV©±ćn©­ȇÍq¯½YÃÔŉÉNÑÅÝy¹NqáʅDǡËñ­ƁYÅy̱os§ȋµʽǘǏƬɱàưN¢ƔÊuľýľώȪƺɂļxZĈ}ÌŉŪĺœĭFЛĽ̅ȣͽÒŵìƩÇϋÿȮǡŏçƑůĕ~Ç¼ȳÐUfdIxÿ\\G zâɏÙOº·pqy£@qþ@Ǟ˽IBäƣzsÂZÁàĻdñ°ŕzéØűzșCìDȐĴĺf®Àľưø@ɜÖÞKĊŇƄ§͑těï͡VAġÑÑ»d³öǍÝXĉĕÖ{þĉu¸ËʅğU̎éhɹƆ̗̮ȘǊ֥ड़ࡰţાíϲäʮW¬®ҌeרūȠkɬɻ̼ãüfƠSצɩςåȈHϚÎKǳͲOðÏȆƘ¼CϚǚ࢚˼ФÔ¤ƌĞ̪Qʤ´¼mȠJˀƲÀɠmǐnǔĎȆÞǠN~ʢĜ¶ƌĆĘźʆȬ˪ĚĒ¸ĞGȖƴƀj`ĢçĶāàŃºēĢĖćYÀŎüôQÐÂŎŞǆŞêƖoˆDĤÕºÑǘÛˤ³̀gńƘĔÀ^ªƂ`ªt¾äƚêĦĀ¼ÐĔǎ¨Ȕ»͠^ˮÊȦƤøxRrŜH¤¸ÂxDÄ|ø˂˜ƮÐ¬ɚwɲFjĔ²Äw°ǆdÀÉ_ĸdîàŎjÊêTĞªŌŜWÈ|tqĢUB~´°ÎFCU¼pĀēƄN¦¾O¶łKĊOjĚj´ĜYp{¦SĚÍ\\T×ªV÷Ší¨ÅDK°ßtŇĔK¨ǵÂcḷ̌ĚǣȄĽFlġUĵŇȣFʉɁMğįʏƶɷØŭOǽ«ƽū¹Ʊő̝Ȩ§ȞʘĖiɜɶʦ}¨֪ࠜ̀ƇǬ¹ǨE˦ĥªÔêFxúQEr´Wrh¤Ɛ \\talĈDJÜ|[Pll̚¸ƎGú´P¬W¦^¦H]prRn|or¾wLVnÇIujkmon£cX^Bh`¥V¦U¤¸}xRj[^xN[~ªxQ[`ªHÆÂExx^wN¶Ê|¨ìMrdYpoRzNyÀDs~bcfÌ`L¾n|¾T°c¨È¢ar¤`[|òDŞĔöxElÖdHÀI`Ď\\Àì~ÆR¼tf¦^¢ķ¶eÐÚMptgjɡČÅyġLûŇV®ÄÈƀĎ°P|ªVVªj¬ĚÒêp¬E|ŬÂc|ÀtƐK f{ĘFĒƌXƲąo½Ę\\¥o}Ûu£ç­kX{uĩ«āíÓUŅßŢqŤ¥lyň[oi{¦LńðFȪȖĒL¿Ìf£K£ʺoqNwğc`uetOj×°KJ±qÆġmĚŗos¬qehqsuH{¸kH¡ÊRǪÇƌbȆ¢´äÜ¢NìÉʖ¦â©Ż؛Ç@Vu»Aylßí¹ĵêÝlISò³C¹Ìâ²i¶Ìoú^H²CǜңǄ z¼g^èöŰ_Ĳĕê}gÁnUI«m]jvV¼euhwqAaW_µj»çjioQR¹ēÃßt@r³[ÛlćË^ÍÉáGOUÛOB±XkÅ¹£k|e]olkVÍ¼ÕqtaÏõjgÁ£§U^RLËnX°ÇBz^~wfvypV ¯ƫĉ˭ȫƗŷɿÿĿƑ˃ĝÿÃǃßËőó©ǐȍŒĖM×ÍEyxþp]ÉvïèvƀnÂĴÖ@V~Ĉ³MEĸÅĖtējyÄDXÄxGQuv_i¦aBçw˛wD©{tāmQ{EJ§KPśƘƿ¥@sCTÉ}ɃwƇy±gÑ}T[÷kÐç¦«SÒ¥¸ëBX½HáÅµÀğtSÝÂa[ƣ°¯¦Pï¡]£ġÒk®G²èQ°óMq}EóƐÇ\\@áügQÍu¥FTÕ¿Jû]|mvāÎYua^WoÀa·­ząÒot×¶CLƗi¯¤mƎHǊ¤îìɾŊìTdåwsRÖgĒųúÍġäÕ}Q¶¿A[¡{d×uQAMxVvMOmăl«ct[wº_ÇÊjbÂ£ĦS_éQZ_lwgOiýe`YYLq§IÁǳ£ÙË[ÕªuƏ³ÍTs·bÁĽäė[b[ŗfãcn¥îC¿÷µ[ŏÀQ­ōĉm¿Á^£mJVmL[{Ï_£F¥Ö{ŹA}×Wu©ÅaųĳƳhB{·TQqÙIķËZđ©Yc|M¡LeVUóK_QWk_ĥ¿ãZ»X\\ĴuUèlG®ěłTĠğDŃOrÍdÆÍz]±ŭ©Å]ÅÐ}UË¥©TċïxgckfWgi\\ÏĒ¥HkµEë{»ÏetcG±ahUiñiWsɁ·cCÕk]wȑ|ća}wVaĚá G°ùnM¬¯{ÈÐÆA¥ÄêJxÙ¢hP¢ÛºµwWOóFÁz^ÀŗÎú´§¢T¤ǻƺSėǵhÝÅQgvBHouʝl_o¿Ga{ïq{¥|ſĿHĂ÷aĝÇqZñiñC³ª»E`¨åXēÕqÉû[l}ç@čƘóO¿¡FUsAʽīccocÇS}£IS~ălkĩXçmĈŀÐoÐdxÒuL^T{r@¢ÍĝKén£kQyÅõËXŷƏL§~}kq»IHėǅjĝ»ÑÞoå°qTt|r©ÏS¯·eŨĕx«È[eM¿yupN~¹ÏyN£{©għWí»Í¾səšǅ_ÃĀɗ±ąĳĉʍŌŷSÉA±åǥɋ@ë£R©ąP©}ĹªƏj¹erLDĝ·{i«ƫC£µ"]],"encodeOffsets":[[[127444,52594]],[[113793,40312]]]},"properties":{"cp":[111.670801,40.818311],"name":"内蒙古","childNum":2}},{"id":"210000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@L@@sa"],["@@MnNm"],["@@dc"],["@@eÀC@b"],["@@fXwkbrÄ`qg"],["@@^jtWQ"],["@@~ Y]c"],["@@G`ĔN^_¿ZÃM"],["@@iX¶BY"],["@@YZ"],["@@L_{Epf"],["@@^WqCT\\"],["@@\\[§t|¤_"],["@@m`n_"],["@@Ïxǌ{q_×^Giip"],["@@@é^BntaÊU]x ¯ÄPĲ­°hʙK³VÕ@Y~|EvĹsÇ¦­L^pÃ²ŸÒG Ël]xxÄ_fT¤Ď¤cPC¨¸TVjbgH²sdÎdHt`B²¬GJję¶[ÐhjeXdlwhðSČ¦ªVÊÏÆZÆŶ®²^ÎyÅÎcPqńĚDMħĜŁH­kçvV[ĳ¼WYÀäĦ`XlR`ôLUVfK¢{NZdĒªYĸÌÚJRr¸SA|ƴgŴĴÆbvªØX~źB|¦ÕE¤Ð`\\|KUnnI]¤ÀÂĊnŎR®Ő¿¶\\ÀøíDm¦ÎbŨabaĘ\\ľãÂ¸atÎSƐ´©v\\ÖÚÌǴ¤Â¨JKrZ_ZfjþhPkx`YRIjJcVf~sCN¤ EhæmsHy¨SðÑÌ\\\\ĐRZk°IS§fqŒßýáĞÙÉÖ[^¯ǤŲê´\\¦¬ĆPM¯£»uïpùzExanµyoluqe¦W^£ÊL}ñrkqWňûPUP¡ôJoo·U}£[·¨@XĸDXm­ÛÝºGUCÁª½{íĂ^cjk¶Ã[q¤LÉö³cux«zZf²BWÇ®Yß½ve±ÃCý£W{Ú^q^sÑ·¨ÍOt¹·C¥GDrí@wÕKţÃ«V·i}xËÍ÷i©ĝɝǡ]{c±OW³Ya±_ç©HĕoƫŇqr³Lys[ñ³¯OSďOMisZ±ÅFC¥Pq{Ã[Pg}\\¿ghćOk^ģÁFıĉĥM­oEqqZûěŉ³F¦oĵhÕP{¯~TÍlªNßYÐ{Ps{ÃVUeĎwk±ŉVÓ½ŽJãÇÇ»Jm°dhcÀffdF~ĀeĖd`sx² ®EżĀdQÂd^~ăÔH¦\\LKpĄVez¤NP ǹÓRÆąJSh­a[¦´ÂghwmBÐ¨źhI|VV|p] Â¼èNä¶ÜBÖ¼L`¼bØæKVpoúNZÞÒKxpw|ÊEMnzEQIZZNBčÚFÜçmĩWĪñtÞĵÇñZ«uD±|Əlĳ¥ãn·±PmÍada CLǑkùó¡³Ï«QaċÏOÃ¥ÕđQȥċƭy³ÃA"]],"encodeOffsets":[[[123686,41445]],[[126019,40435]],[[124393,40128]],[[126117,39963]],[[125322,40140]],[[126686,40700]],[[126041,40374]],[[125584,40168]],[[125453,40165]],[[125362,40214]],[[125280,40291]],[[125774,39997]],[[125976,40496]],[[125822,39993]],[[125509,40217]],[[122731,40949]]]},"properties":{"cp":[123.429096,41.796767],"name":"辽宁","childNum":16}},{"id":"220000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@pä³PClFbbÍzwBGĭZÅi»lY­ċ²SgkÇ£^Sqd¯R©é£¯S\\cZ¹iűƏCuƍÓXoR}M^o£R}oªU­FuuXHlEÅÏ©¤ÛmTþ¤D²ÄufàÀ­XXÈ±AeyYw¬dvõ´KÊ£\\rµÄlidā]|î©¾DÂVH¹Þ®ÜWnCķ W§@\\¸~¤Vp¸póIO¢VOŇürXql~òÉK]¤¥Xrfkvzpm¶bwyFoúvð¼¤ N°ąO¥«³[éǡű_°Õ\\ÚÊĝþâőàerR¨­JYlďQ[ ÏYëÐ§TGztnß¡gFkMāGÁ¤ia ÉÈ¹`\\xs¬dĆkNnuNUuP@vRY¾\\¢GªóĄ~RãÖÎĢùđŴÕhQxtcæëSɽŉíëǉ£ƍG£nj°KƘµDsØÑpyĆ¸®¿bXp]vbÍZuĂ{n^IüÀSÖ¦EvRÎûh@â[ƏÈô~FNr¯ôçR±­HÑlĢ^¤¢OðævxsŒ]ÞÁTĠs¶¿âÆGW¾ìA¦·TÑ¬è¥ÏÐJ¨¼ÒÖ¼ƦɄxÊ~StD@Ă¼Ŵ¡jlºWvÐzƦZÐ²CH AxiukdGgetqmcÛ£Ozy¥cE}|¾cZk¿uŐã[oxGikfeäT@SUwpiÚFM©£è^Ú`@v¶eňf heP¶täOlÃUgÞzŸU`l}ÔÆUvØ_Ō¬Öi^ĉi§²ÃB~¡ĈÚEgc|DC_Ȧm²rBx¼MÔ¦ŮdĨÃâYxƘDVÇĺĿg¿cwÅ\\¹¥Yĭl¤OvLjM_a W`zļMž·\\swqÝSAqŚĳ¯°kRē°wx^ĐkǂÒ\\]nrĂ}²ĊŲÒøãh·M{yMzysěnĒġV·°G³¼XÀ¤¹i´o¤ŃÈ`ÌǲÄUĞd\\iÖmÈBĤÜɲDEh LG¾ƀÄ¾{WaYÍÈĢĘÔRîĐj}ÇccjoUb½{h§Ǿ{KƖµÎ÷GĀÖŠåưÎs­lyiē«`å§H¥Ae^§GK}iã\\c]v©ģZmÃ|[M}ģTɟĵÂÂ`ÀçmFK¥ÚíÁbX³ÌQÒHof{]ept·GŋĜYünĎųVY^ydõkÅZW«WUa~U·SbwGçǑiW^qFuNĝ·EwUtW·Ýďæ©PuqEzwAVXRãQ`­©GMehccďÏd©ÑW_ÏYƅ»é\\ɹ~ǙG³mØ©BšuT§Ĥ½¢Ã_Ã½L¡ýqT^rme\\PpZZbyuybQefµ]UhĿDCmûvaÙNSkCwncćfv~YÇG"],"encodeOffsets":[[130196,42528]]},"properties":{"cp":[125.3245,43.886841],"name":"吉林","childNum":1}},{"id":"230000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@ƨĶTLÇyqpÇÛqe{~oyen}s`qiXGù]Ëp½©lÉÁp]Þñ´FĂ^fäîºkàz¼BUvÈ@"],["@@UµNÿ¥īèçHÍøƕ¶Lǽ|g¨|a¾pVidd~ÈiíďÓQġėÇZÎXb½|ſÃH½KFgɱCģÛÇAnjÕc[VĝǱÃËÇ_ £ń³pj£º¿»WH´¯U¸đĢmtĜyzzNN|g¸÷äűÑ±ĉā~mq^[ǁÑďlw]¯xQĔ¯l°řĴrBÞTxr[tŽ¸ĻN_yX`biNKuP£kZĮ¦[ºxÆÀdhĹŀUÈƗCwáZħÄŭcÓ¥»NAw±qȥnD`{ChdÙFć}¢A±Äj¨]ĊÕjŋ«×`VuÓÅ~_kŷVÝyhVkÄãPsOµfgeŇµf@u_Ù ÙcªNªÙEojVxT@ãSefjlwH\\pŏäÀvlY½d{F~¦dyz¤PÜndsrhfHcvlwjF£G±DÏƥYyÏu¹XikĿ¦ÏqƗǀOŜ¨LI|FRĂn sª|C˜zxAè¥bfudTrFWÁ¹Am|ĔĕsķÆF´N}ćUÕ@Áĳſmuçuð^ÊýowFzØÎĕNőǏȎôªÌŒǄàĀÄ˄ĞŀƒʀĀƘŸˮȬƬĊ°Uzouxe]}AyÈW¯ÌmKQ]Īºif¸ÄX|sZt|½ÚUÎ lk^p{f¤lºlÆW A²PVÜPHÊâ]ÎĈÌÜk´\\@qàsĔÄQºpRij¼èi`¶bXrBgxfv»uUi^v~J¬mVp´£´VWrnP½ì¢BX¬hðX¹^TjVriªjtŊÄmtPGx¸bgRsT`ZozÆO]ÒFôÒOÆŊvÅpcGêsx´DR{AEOr°x|íb³Wm~DVjºéNNËÜ˛ɶ­GxŷCSt}]ûōSmtuÇÃĕNāg»íT«u}ç½BĵÞʣ¥ëÊ¡MÛ³ãȅ¡ƋaǩÈÉQG¢·lG|tvgrrf«ptęŘnÅĢrI²¯LiØsPf_vĠdxM prʹL¤¤eËÀđKïÙVY§]Ióáĥ]ķK¥j|pŇ\\kzţ¦šnņäÔVĂîĪ¬|vW®l¤èØrxm¶ă~lÄƯĄ̈́öȄEÔ¤ØQĄĄ»ƢjȦOǺ¨ìSŖÆƬyQv`cwZSÌ®ü±Ǆ]ŀç¬B¬©ńzƺŷɄeeOĨSfm ĊƀP̎ēz©ĊÄÕÊmgÇsJ¥ƔŊśæÎÑqv¿íUOµªÂnĦÁ_½ä@êí£P}Ġ[@gġ}gɊ×ûÏWXá¢užƻÌsNÍ½ƎÁ§čŐAēeL³àydl¦ĘVçŁpśǆĽĺſÊQíÜçÛġÔsĕ¬Ǹ¯YßċġHµ ¡eå`ļrĉŘóƢFìĎWøxÊkƈdƬv|I|·©NqńRŀ¤éeŊŀàŀU²ŕƀBQ£Ď}L¹Îk@©ĈuǰųǨÚ§ƈnTËÇéƟÊcfčŤ^XmHĊĕË«W·ċëx³ǔķÐċJāwİ_ĸȀ^ôWr­°oú¬ĦŨK~ȰCĐ´Ƕ£fNÎèâw¢XnŮeÂÆĶ¾¾xäLĴĘlļO¤ÒĨA¢Êɚ¨®ØCÔ ŬGƠƦYĜĘÜƬDJg_ͥœ@čŅĻA¶¯@wÎqC½Ĉ»NăëKďÍQÙƫ[«ÃígßÔÇOÝáWñuZ¯ĥŕā¡ÑķJu¤E å¯°WKÉ±_d_}}vyõu¬ï¹ÓU±½@gÏ¿rÃ½DgCdµ°MFYxw¿CG£Rƛ½Õ{]L§{qqą¿BÇƻğëܭǊË|c²}Fµ}ÙRsÓpg±QNqǫŋRwŕnéÑÉK«SeYRŋ@{¤SJ}D Ûǖ֍]gr¡µŷjqWÛham³~S«Þ]"]],"encodeOffsets":[[[127123,51780]],[[134456,44547]]]},"properties":{"cp":[126.642464,45.756967],"name":"黑龙江","childNum":2}},{"id":"320000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@cþÅPi`ZRu¥É\\]~°Y`µÓ^phÁbnÀşúòaĬºTÖŒbe¦¦{¸ZâćNp©Hr|^mjhSEb\\afv`sz^lkljÄtg¤D­¾X¿À|ĐiZȀåB·î}GL¢õcßjayBFµÏC^ĭcÙt¿sğH]j{s©HM¢QnDÀ©DaÜÞ·jgàiDbPufjDk`dPOîhw¡ĥ¥GP²ĐobºrYî¶aHŢ´ ]´rılw³r_{£DB_Ûdåuk|Ũ¯F Cºyr{XFye³Þċ¿ÂkĭB¿MvÛpm`rÚã@Ę¹hågËÖƿxnlč¶Åì½Ot¾dJlVJĂǀŞqvnO^JZż·Q}êÍÅmµÒ]ƍ¦Dq}¬R^èĂ´ŀĻĊIÔtĲyQŐĠMNtR®òLhĚs©»}OÓGZz¶A\\jĨFäOĤHYJvÞHNiÜaĎÉnFQlNM¤B´ĄNöɂtpŬdfåqm¿QûùŞÚb¤uŃJŴu»¹ĄlȖħŴw̌ŵ²ǹǠ͛hĭłƕrçü±Yxcitğ®jű¢KOķCoy`å®VTa­_Ā]ŐÝɞï²ʯÊ^]afYǸÃĆēĪȣJđ͍ôƋÄÄÍīçÛɈǥ£­ÛmY`ó£Z«§°Ó³QafusNıǅ_k}¢m[ÝóDµ¡RLčiXyÅNïă¡¸iĔÏNÌŕoēdōîåŤûHcs}~Ûwbù¹£¦ÓCtOPrE^ÒogĉIµÛÅʹK¤½phMü`oæŀ"],"encodeOffsets":[[121740,32276]]},"properties":{"cp":[118.767413,32.041544],"name":"江苏","childNum":1}},{"id":"330000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@E^dQ]K"],["@@jX^j"],["@@sfbU"],["@@qP\\xz[ck"],["@@R¢FX}°[s_"],["@@Cb\\}"],["@@e|v\\la{u"],["@@v~u}"],["@@QxÂF¯}"],["@@¹nvÞs¯o"],["@@rSkUEj"],["@@bi­ZP"],["@@p[}INf"],["@@À¿"],["@@¹dnb"],["@@rSBnR"],["@@g~h}"],["@@FlEk"],["@@OdPc"],["@@v[u\\"],["@@FjâL~wyoo~sµL\\"],["@@¬e¹aN"],["@@\\nÔ¡q]L³ë\\ÿ®QÖ"],["@@ÊA­©[¬"],["@@Kxv­"],["@@@hlIk]"],["@@pW{o||j"],["@@Md|_mC"],["@@¢X£ÏylD¼XtH"],["@@hlÜ[LykAvyfw^E¤"],["@@fp¤MusR"],["@@®_ma~LÁ¬Z"],["@@iMxZ"],["@@ZcYd"],["@@Z~dOSo|A¿qZv"],["@@@`EN¡v"],["@@|TY{"],["@@@n@m"],["@@XWkCT\\"],["@@ºwZRkĕWO¢"],["@@X®±GrÆª\\ÔáXq{"],["@@ůTG°ĄLHm°UC"],["@@¤aÜx~}dtüGæţŎíĔcŖpMËÐjē¢·ðĄÆMzjWKĎ¢Q¶À_ê_Bıi«pZgf¤Nrq]§ĂN®«H±yƳí¾×ŸīàLłčŴǝĂíÀBŖÕªÁŖHŗŉåqûõi¨hÜ·ñt»¹ýv_[«¸mYL¯QªmĉÅdMgÇjcº«ę¬­K­´B«Âącoċ\\xKd¡gěŧ«®á[~ıxu·ÅKsËÉc¢Ù\\ĭƛëbf¹­ģSĜkáƉÔ­ĈZB{aMµfzŉfåÂŧįƋǝÊĕġć£g³ne­ą»@­¦S®\\ßðChiqªĭiAuA­µ_W¥ƣO\\lċĢttC¨£t`PZäuXßBsĻyekOđġĵHuXBµ]×­­\\°®¬F¢¾pµ¼kŘó¬Wät¸|@L¨¸µrºù³Ù~§WIZW®±Ð¨ÒÉx`²pĜrOògtÁZ}þÙ]¡FKwsPlU[}¦Rvn`hq¬\\nQ´ĘRWb_ rtČFIÖkĦPJ¶ÖÀÖJĈĄTĚòC ²@PúØz©Pî¢£CÈÚĒ±hŖl¬â~nm¨f©iļ«mntuÖZÜÄjL®EÌFª²iÊxØ¨IÈhhst"],["@@o\\VzRZ}y"],["@@@°¡mÛGĕ¨§Ianá[ýƤjfæØLäGr"]],"encodeOffsets":[[[125592,31553]],[[125785,31436]],[[125729,31431]],[[125513,31380]],[[125223,30438]],[[125115,30114]],[[124815,29155]],[[124419,28746]],[[124095,28635]],[[124005,28609]],[[125000,30713]],[[125111,30698]],[[125078,30682]],[[125150,30684]],[[124014,28103]],[[125008,31331]],[[125411,31468]],[[125329,31479]],[[125626,30916]],[[125417,30956]],[[125254,30976]],[[125199,30997]],[[125095,31058]],[[125083,30915]],[[124885,31015]],[[125218,30798]],[[124867,30838]],[[124755,30788]],[[124802,30809]],[[125267,30657]],[[125218,30578]],[[125200,30562]],[[124968,30474]],[[125167,30396]],[[124955,29879]],[[124714,29781]],[[124762,29462]],[[124325,28754]],[[123990,28459]],[[125366,31477]],[[125115,30363]],[[125369,31139]],[[122495,31878]],[[125329,30690]],[[125192,30787]]]},"properties":{"cp":[120.153576,30.287459],"name":"浙江","childNum":45}},{"id":"340000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@^iuLX^"],["@@e©Ehl"],["@@°ZÆëĎµmkǀwÌÕæhºgBĝâqÙĊzÖgņtÀÁĂÆáhEz|WzqD¹°Eŧl{ævÜcA`¤C`|´qxĲkq^³³GšµbíZ¹qpa±ď OH¦Ħx¢gPícOl_iCveaOjChß¸iÝbÛªCC¿mRV§¢A|t^iĠGÀtÚsd]ĮÐDE¶zAb àiödK¡~H¸íæAǿYj{ď¿À½W®£ChÃsikkly]_teu[bFaTign{]GqªoĈMYá|·¥f¥őaSÕėNµñĞ«Im_m¿Âa]uĜp Z_§{Cäg¤°r[_YjÆOdý[I[á·¥Q_nùgL¾mvˊBÜÆ¶ĊJhpc¹O]iŠ]¥ jtsggJÇ§w×jÉ©±EFË­KiÛÃÕYvsm¬njĻª§emná}k«ŕgđ²ÙDÇ¤í¡ªOy×Où±@DñSęćăÕIÕ¿IµĥOjNÕËT¡¿tNæŇàåyķrĕq§ÄĩsWÆßF¶X®¿mwRIÞfßoG³¾©uyHį{Ɓħ¯AFnuPÍÔzVdàôº^Ðæd´oG¤{S¬ćxã}ŧ×Kǥĩ«ÕOEÐ·ÖdÖsƘÑ¨[Û^Xr¢¼§xvÄÆµ`K§ tÒ´Cvlo¸fzŨð¾NY´ı~ÉĔēßúLÃÃ_ÈÏ|]ÂÏFlg`ben¾¢pUh~ƴĖ¶_r sĄ~cƈ]|r c~`¼{À{ȒiJjz`îÀT¥Û³]u}fïQl{skloNdjäËzDvčoQďHI¦rbtHĔ~BmlRV_ħTLnñH±DL¼Lªl§Ťa¸ĚlK²\\RòvDcÎJbt[¤D@®hh~kt°ǾzÖ@¾ªdbYhüóZ ň¶vHrľ\\ÊJuxAT|dmÀO[ÃÔG·ĚąĐlŪÚpSJ¨ĸLvÞcPæķŨ®mÐálwKhïgA¢ųÆ©Þ¤OÈm°K´"]],"encodeOffsets":[[[121722,32278]],[[119475,30423]],[[119168,35472]]]},"properties":{"cp":[117.283042,31.86119],"name":"安徽","childNum":3}},{"id":"350000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@zht´]"],["@@aj^~ĆG©O"],["@@ed¨C}}i"],["@@@vPGsQ"],["@@sBzddW]Q"],["@@S¨Q{"],["@@NVucW"],["@@qptBAq"],["@@¸[mu"],["@@Q\\pD]_"],["@@jSwUadpF"],["@@eXª~"],["@@AjvFso"],["@@fT_Çí\\v|ba¦jZÆy°"],["@@IjJi"],["@@wJIx«¼AoNe{M­"],["@@K±¡ÓČäeZ"],["@@k¡¹Eh~c®wBkUplÀ¡I~Māe£bN¨gZý¡a±Öcp©PhI¢QqÇGj|¥U g[Ky¬ŏv@OptÉEF\\@ åA¬V{XģĐBycpě¼³Ăp·¤¥ohqqÚ¡ŅLs^Ã¡§qlÀhH¨MCe»åÇGD¥zPO£čÙkJA¼ßėuĕeûÒiÁŧSW¥Qûŗ½ùěcÝ§SùĩąSWó«íęACµeRåǃRCÒÇZÍ¢ź±^dlstjD¸ZpuÔâÃH¾oLUêÃÔjjēò´ĄWƛ^Ñ¥Ħ@ÇòmOw¡õyJyD}¢ďÑÈġfZda©º²z£NjD°Ötj¶¬ZSÎ~¾c°¶ÐmxO¸¢Pl´SL|¥AȪĖMņĲg®áIJČĒü` QF¬h|ĂJ@zµ |ê³È ¸UÖŬŬÀEttĸr]ðM¤ĶĲHtÏ AĬkvsq^aÎbvdfÊòSD´Z^xPsĂrvƞŀjJd×ŘÉ ®AÎ¦ĤdxĆqAZRÀMźnĊ»İÐZ YXæJyĊ²·¶q§·K@·{sXãô«lŗ¶»o½E¡­«¢±¨Y®Ø¶^AvWĶGĒĢPlzfļtàAvWYãO_¤sD§ssČġ[kƤPX¦`¶®BBvĪjv©jx[L¥àï[F¼ÍË»ğV`«Ip}ccÅĥZEãoP´B@D¸m±z«Ƴ¿å³BRØ¶Wlâþäą`]Z£Tc ĹGµ¶Hm@_©k¾xĨôȉðX«½đCIbćqK³ÁÄš¬OAwã»aLŉËĥW[ÂGIÂNxĳ¤D¢îĎÎB§°_JGs¥E@¤ućPåcuMuw¢BI¿]zG¹guĮck\\_"]],"encodeOffsets":[[[123250,27563]],[[122541,27268]],[[123020,27189]],[[122916,27125]],[[122887,26845]],[[122808,26762]],[[122568,25912]],[[122778,26197]],[[122515,26757]],[[122816,26587]],[[123388,27005]],[[122450,26243]],[[122578,25962]],[[121255,25103]],[[120987,24903]],[[122339,25802]],[[121042,25093]],[[122439,26024]]]},"properties":{"cp":[119.306239,26.075302],"name":"福建","childNum":18}},{"id":"360000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ĢĨƐgļ¼ÂMD~ņªe^\\^§ý©j×cZØ¨zdÒa¶lÒJìõ`oz÷@¤uŞ¸´ôęöY¼HČƶajlÞƩ¥éZ[|h}^U  ¥pĄžƦO lt¸Æ Q\\aÆ|CnÂOjt­ĚĤdÈF`¶@Ðë ¦ōÒ¨SêvHĢûXD®QgÄWiØPÞìºr¤ǆNĠ¢lĄtZoCƞÔºCxrpĠV®Ê{f_Y`_eq®Aot`@oDXfkp¨|s¬\\DÄSfè©Hn¬^DhÆyøJhØxĢĀLÊƠPżċĄwȠĚ¦G®ǒĤäTŠÆ~Ħw«|TF¡nc³Ïå¹]ĉđxe{ÎÓvOEm°BƂĨİ|Gvz½ª´HàpeJÝQxnÀW­EµàXÅĪt¨ÃĖrÄwÀFÎ|ňÓMå¼ibµ¯»åDT±m[r«_gmQu~¥V\\OkxtL E¢Ú^~ýêPóqoě±_Êw§ÑªåƗā¼mĉŹ¿NQYBąrwģcÍ¥B­ŗÊcØiIƝĿuqtāwO]³YCñTeÉcaubÍ]trluīBÐGsĵıN£ï^ķqss¿FūūVÕ·´Ç{éĈýÿOER_đûIċâJh­ŅıNȩĕB¦K{Tk³¡OP·wnµÏd¯}½TÍ«YiµÕsC¯iM¤­¦¯P|ÿUHvhe¥oFTuõ\\OSsMòđƇiaºćXĊĵà·çhƃ÷Ç{ígu^đgm[×zkKN¶Õ»lčÓ{XSÆv©_ÈëJbVkĔVÀ¤P¾ºÈMÖxlò~ªÚàGĂ¢B±ÌKyáV¼Ã~­`gsÙfIƋlę¹e|~udjuTlXµf`¿Jd[\\L²"],"encodeOffsets":[[116689,26234]]},"properties":{"cp":[115.892151,28.676493],"name":"江西","childNum":1}},{"id":"370000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@Xjd]{K"],["@@itbFHy"],["@@HlGk"],["@@TGy"],["@@K¬U"],["@@WdXc"],["@@PtOs"],["@@LnXhc"],["@@ppVu]Or"],["@@cdzAUa"],["@@udRhnCI"],["@@oIpR"],["@@Ľč{fzƤîKÎMĮ]ZF½Y]â£ph¶¨râøÀÎǨ¤^ºÄGz~grĚĜlĞÆLĆǆ¢Îo¦cvKbgr°WhmZp L]LºcUÆ­nżĤÌĒbAnrOA´ȊcÀbƦUØrĆUÜøĬƞEzVL®öØBkŖÝĐĖ¹ŧ̄±ÀbÎÉnb²ĦhņBĖįĦåXćì@L¯´ywƕCéÃµė ƿ¸lµ¾Z|ZWyFY¨Mf~C¿`à_RÇzwƌfQnny´INoƬèôº|sTJULîVjǎ¾ĒØDz²XPn±ŴPè¸ŔLƔÜƺ_TüÃĤBBċÈöA´faM¨{«M`¶d¡ôÖ°mȰBÔjj´PM|c^d¤u¤Û´ä«ƢfPk¶Môl]Lb}su^ke{lCMrDÇ­]NÑFsmoõľHyGă{{çrnÓEƕZGª¹Fj¢ïWuøCǷë¡ąuhÛ¡^KxC`C\\bÅxì²ĝÝ¿_NīCȽĿåB¥¢·IŖÕy\\¹kxÃ£Č×GDyÃ¤ÁçFQ¡KtŵƋ]CgÏAùSedcÚźuYfyMmhUWpSyGwMPqŀÁ¼zK¶G­Y§Ë@´śÇµƕBm@IogZ¯uTMx}CVKï{éƵP_K«pÛÙqċtkkù]gTğwoɁsMõ³ăAN£MRkmEÊčÛbMjÝGuIZGPģãħE[iµBEuDPÔ~ª¼ęt]ûG§¡QMsğNPŏįzs£Ug{đJĿļā³]ç«Qr~¥CƎÑ^n¶ÆéÎR~Ż¸YI] PumŝrƿIā[xeÇ³L¯v¯s¬ÁY~}ťuŁgƋpÝĄ_ņī¶ÏSR´ÁP~¿Cyċßdwk´SsX|t`Ä ÈðAªìÎT°¦Dda^lĎDĶÚY°`ĪŴǒàŠv\\ebZHŖR¬ŢƱùęOÑM­³FÛWp["]],"encodeOffsets":[[[123806,39303]],[[123821,39266]],[[123742,39256]],[[123702,39203]],[[123649,39066]],[[123847,38933]],[[123580,38839]],[[123894,37288]],[[123043,36624]],[[123344,38676]],[[123522,38857]],[[123628,38858]],[[118260,36742]]]},"properties":{"cp":[117.000923,36.675807],"name":"山东","childNum":13}},{"id":"410000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ýLùµP³swIÓxcŢĞð´E®ÚPtĴXØxÂ¶@«ŕŕQGYfa[şußǩđš_X³ĳÕčC]kbc¥CS¯ëÍB©÷³­Si_}mYTt³xlàcČzÀD}ÂOQ³ÐTĨ¯ƗòËŖ[hłŦv~}ÂZ«¤lPÇ£ªÝŴÅR§ØnhctâknÏ­ľŹUÓÝdKuķI§oTũÙďkęĆH¸Ó\\Ä¿PcnS{wBIvÉĽ[GqµuŇôYgûZca©@½Õǽys¯}lgg@­C\\£asIdÍuCQñ[L±ęk·ţb¨©kK»KC²òGKmĨS`UQnk}AGēsqaJ¥ĐGRĎpCuÌy ã iMcplk|tRkðev~^´¦ÜSí¿_iyjI|ȑ|¿_»d}q^{Ƈdă}tqµ`Ƴĕg}V¡om½faÇo³TTj¥tĠRyK{ùÓjuµ{t}uËRivGçJFjµÍyqÎàQÂFewixGw½Yŷpµú³XU½ġyłåkÚwZX·l¢Á¢KzOÎÎjc¼htoDHr|­J½}JZ_¯iPq{tę½ĕ¦Zpĵø«kQĹ¤]MÛfaQpě±ǽ¾]u­Fu÷nčÄ¯ADp}AjmcEÇaª³o³ÆÍSƇĈÙDIzËčľ^KLiÞñ[aA²zzÌ÷D|[íÄ³gfÕÞd®|`Ć~oĠƑô³ŊD×°¯CsøÀ«ìUMhTº¨¸ǡîSÔDruÂÇZÖEvPZW~ØÐtĄE¢¦Ðy¸bô´oŬ¬²Ês~]®tªapŎJ¨Öº_Ŕ`Ŗ^Đ\\Ĝu~m²Ƹ¸fWĦrƔ}Î^gjdfÔ¡J}\\n C¦þWxªJRÔŠu¬ĨĨmFdM{\\d\\YÊ¢ú@@¦ª²SÜsC}fNècbpRmlØ^gd¢aÒ¢CZZxvÆ¶N¿¢T@uC¬^ĊðÄn|lGlRjsp¢ED}Fio~ÔN~zkĘHVsǲßjŬŢ`Pûàl¢\\ÀEhİgÞē X¼Pk|m"],"encodeOffsets":[[118256,37017]]},"properties":{"cp":[113.665412,34.757975],"name":"河南","childNum":1}},{"id":"420000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@AB"],["@@lskt"],["@@¾«}{ra®pîÃ\\{øCËyyB±b\\òÝjKL ]ĎĽÌJyÚCƈćÎT´Å´pb©ÈdFin~BCo°BĎÃømv®E^vǾ½Ĝ²RobÜeN^ĺ£R¬lĶ÷YoĖ¥Ě¾|sOr°jY`~I¾®I{GqpCgyl{£ÍÍyPLÂ¡¡¸kWxYlÙæŁĢz¾V´W¶ùŸo¾ZHxjwfxGNÁ³Xéæl¶EièIH ujÌQ~v|sv¶Ôi|ú¢FhQsğ¦SiŠBgÐE^ÁÐ{čnOÂÈUÎóĔÊēĲ}Z³½Mŧïeyp·uk³DsÑ¨L¶_ÅuÃ¨w»¡WqÜ]\\Ò§tƗcÕ¸ÕFÏǝĉăxŻČƟOKÉġÿ×wg÷IÅzCg]m«ªGeçÃTC«[t§{loWeC@ps_Bp­rf_``Z|ei¡oċMqow¹DƝÓDYpûsYkıǃ}s¥ç³[§cY§HK«Qy]¢wwö¸ïx¼ņ¾Xv®ÇÀµRĠÐHM±cÏdƒǍũȅȷ±DSyúĝ£ŤĀàtÖÿï[îb\\}pĭÉI±Ñy¿³x¯No|¹HÏÛmjúË~TuęjCöAwě¬Rđl¯ Ñb­ŇTĿ_[IčĄʿnM¦ğ\\É[T·k¹©oĕ@A¾wya¥Y\\¥Âaz¯ãÁ¡k¥ne£ÛwE©Êō¶˓uoj_U¡cF¹­[WvP©whuÕyBF`RqJUw\\i¡{jEPïÿ½fćQÑÀQ{°fLÔ~wXgītêÝ¾ĺHd³fJd]HJ²EoU¥HhwQsƐ»Xmg±çve]DmÍPoCc¾_hhøYrŊU¶eD°Č_N~øĹĚ·`z]Äþp¼äÌQv\\rCé¾TnkžŐÚÜa¼ÝƆĢ¶ÛodĔňÐ¢JqPb ¾|J¾fXƐîĨ_Z¯À}úƲN_ĒÄ^ĈaŐyp»CÇÄKñL³ġM²wrIÒŭxjb[n«øæà ^²­h¯ÚŐªÞ¸Y²ĒVø}Ā^İ´LÚm¥ÀJÞ{JVųÞŃx×sxxƈē ģMřÚðòIfĊŒ\\Ʈ±ŒdÊ§ĘDvČ_Àæ~Dċ´A®µ¨ØLV¦êHÒ¤"]],"encodeOffsets":[[[113712,34000]],[[115612,30507]],[[113649,34054]]]},"properties":{"cp":[114.298572,30.584355],"name":"湖北","childNum":3}},{"id":"430000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@nFTs"],["@@ßÅÆá½ÔXrCOËRïÿĩ­TooQyÓ[ŅBE¬ÎÓXaį§Ã¸G °ITxpúxÚĳ¥ÏĢ¾edÄ©ĸGàGhM¤Â_U}Ċ}¢pczfþg¤ÇòAVM"],["@@©KA·³CQ±Á«³BUƑ¹AtćOwD]JiØSm¯b£ylXHËÑ±H«C^õľAÅ§¤É¥ïyuǙuA¢^{ÌC´­¦ŷJ£^[ª¿ĕ~ƇN skóā¹¿ï]ă~÷O§­@Vm¡Qđ¦¢Ĥ{ºjÔª¥nf´~Õo×ÛąMąıuZmZcÒ ĲĪ²SÊǄŶ¨ƚCÖŎªQØ¼rŭ­«}NÏürÊ¬mjr@ĘrTW ­SsdHzƓ^ÇÂyUi¯DÅYlŹu{hT}mĉ¹¥ěDÿë©ıÓ[Oº£¥ótł¹MÕƪ`PDiÛU¾ÅâìUñBÈ£ýhedy¡oċ`pfmjP~kZaZsÐd°wj§@Ĵ®w~^kÀÅKvNmX\\¨aŃqvíó¿F¤¡@ũÑVw}S@j}¾«pĂrªg àÀ²NJ¶¶DôK|^ª°LX¾ŴäPĪ±£EXd^¶ĲÞÜ~u¸ǔMRhsRe`ÄofIÔ\\Ø  ićymnú¨cj ¢»GČìƊÿÐ¨XeĈĀ¾Oð Fi ¢|[jVxrIQ_EzAN¦zLU`cªxOTu RLÄ¢dVi`p˔vŎµªÉF~Ød¢ºgİàw¸Áb[¦Zb¦z½xBĖ@ªpºlS¸Ö\\Ĕ[N¥ˀmĎăJ\\ŀ`ňSÚĖÁĐiOĜ«BxDõĚivSÌ}iùÜnÐºG{p°M´wÀÒzJ²ò¨ oTçüöoÛÿñőĞ¤ùTz²CȆȸǎŪƑÐc°dPÎğË¶[È½u¯½WM¡­ÉB·rínZÒ `¨GA¾\\pēXhÃRC­üWGġuTé§ŎÑ©ò³I±³}_EÃħg®ęisÁPDmÅ{b[RÅs·kPŽƥóRoOV~]{g\\êYƪ¦kÝbiċƵGZ»Ěõó·³vŝ£ø@pyö_ëIkÑµbcÑ§y×dYØªiþ¨[]f]Ņ©C}ÁN»hĻħƏĩ"]],"encodeOffsets":[[[115640,30489]],[[112543,27312]],[[116690,26230]]]},"properties":{"cp":[112.982279,28.19409],"name":"湖南","childNum":3}},{"id":"440000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@QdAua"],["@@lxDLo"],["@@sbhNLo"],["@@Ă ā"],["@@WltO[["],["@@Kr]S"],["@@eI]y"],["@@I|Mym"],["@@Û³LS¼Y"],["@@nvºBëui©`¾"],["@@zdÛJw®"],["@@°¯"],["@@a yAª¸ËJIxØ@ĀHAmÃV¡ofuo"],["@@sŗÃÔėAƁZÄ ~°ČPäh"],["@@¶ÝÌvmĞh­ıQ"],["@@HdSjĒ¢D}waru«ZqadYM"],["@@el\\LqqU"],["@@~rMo\\"],["@@f^C"],["@@øPªoj÷ÍÝħXČx°Q¨ıXNv"],["@@gÇƳo[~tly"],["@@EÆC¿"],["@@OP"],["@@wđógĝ[³¡VÙæÅöMÌ³¹pÁaËýý©D©ÜJŹƕģGą¤{ÙūÇO²«BƱéAÒĥ¡«BhlmtÃPµyU¯ucd·w_bŝcīímGO|KPȏŹãŝIŕŭŕ@Óoo¿ē±ß}ŭĲWÈCőâUâǙIğŉ©IĳE×Á³AówXJþ±ÌÜÓĨ£L]ĈÙƺZǾĆĖMĸĤfÎĵlŨnÈĐtFFĤêk¶^k°f¶g}®Faf`vXŲxl¦ÔÁ²¬Ð¦pqÊÌ²iXØRDÎ}Ä@ZĠsx®AR~®ETtĄZƈfŠŠHâÒÐAµ\\S¸^wĖkRzalŜ|E¨ÈNĀňZTpBh£\\ĎƀuXĖtKL¶G|»ĺEļĞ~ÜĢÛĊrOÙîvd]n¬VÊĜ°RÖpMƂªFbwEÀ©\\¤]ŸI®¥D³|Ë]CöAŤ¦æ´¥¸Lv¼¢ĽBaôF~®²GÌÒEYzk¤°ahlVÕI^CxĈPsBƒºV¸@¾ªR²ĨN]´_eavSivc}p}Đ¼ƌkJÚe th_¸ ºx±ò_xNË²@ă¡ßH©Ùñ}wkNÕ¹ÇO½¿£ĕ]ly_WìIÇª`uTÅxYĒÖ¼kÖµMjJÚwn\\hĒv]îh|ÈƄøèg¸Ķß ĉĈWb¹ƀdéĘNTtP[öSvrCZaGubo´ŖÒÇĐ~¡zCIözx¢PnÈñ @ĥÒ¦]ƞV}³ăĔñiiÄÓVépKG½ÄÓávYoC·sitiaÀyŧÎ¡ÈYDÑům}ý|m[węõĉZÅxUO}÷N¹³ĉo_qtăqwµŁYÙǝŕ¹tïÛUÃ¯mRCºĭ|µÕÊK½Rē ó]GªęAx»HO£|ām¡diď×YïYWªŉOeÚtĐ«zđ¹TāúEá²\\ķÍ}jYàÙÆſ¿Çdğ·ùTßÇţʄ¡XgWÀǇğ·¿ÃOj YÇ÷Qěi"]],"encodeOffsets":[[[117381,22988]],[[116552,22934]],[[116790,22617]],[[116973,22545]],[[116444,22536]],[[116931,22515]],[[116496,22490]],[[116453,22449]],[[113301,21439]],[[118726,21604]],[[118709,21486]],[[113210,20816]],[[115482,22082]],[[113171,21585]],[[113199,21590]],[[115232,22102]],[[115739,22373]],[[115134,22184]],[[113056,21175]],[[119573,21271]],[[119957,24020]],[[115859,22356]],[[116561,22649]],[[116285,22746]]]},"properties":{"cp":[113.280637,23.125178],"name":"广东","childNum":24}},{"id":"450000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@H TQ§A"],["@@ĨÊªLƊDÎĹĐCǦė¸zÚGn£¾rªŀÜt¬@ÖÚSx~øOŒŶÐÂæȠ\\ÈÜObĖw^oÞLf¬°bI lTØBÌF£Ć¹gñĤaYt¿¤VSñK¸¤nM¼JE±½¸ñoÜCƆæĪ^ĚQÖ¦^f´QüÜÊz¯lzUĺš@ìp¶n]sxtx¶@~ÒĂJb©gk{°~c°`Ô¬rV\\la¼¤ôá`¯¹LCÆbxEræOv[H­[~|aB£ÖsºdAĐzNÂðsÞÆĤªbab`ho¡³F«èVlo¤ÔRzpp®SĪº¨ÖºNĳd`a¦¤F³ºDÎńĀìCĜº¦Ċ~nS|gźvZkCÆj°zVÈÁƔ]LÊFZgčP­kini«qÇczÍY®¬Ů»qR×ō©DÕ§ƙǃŵTÉĩ±ıdÑnYYĲvNĆĆØÜ Öp}e³¦m©iÓ|¹ħņ|ª¦QF¢Â¬ʖovg¿em^ucà÷gÕuíÙćĝ}FĻ¼Ĺ{µHKsLSđƃrč¤[AgoSŇYMÿ§Ç{FśbkylQxĕ]T·¶[BÑÏGáşşƇeăYSs­FQ}­BwtYğÃ@~CÍQ ×WjË±rÉ¥oÏ ±«ÓÂ¥kwWűmcih³K~µh¯e]lµélEģEďsmÇŧē`ãògK_ÛsUʝćğ¶höO¤Ǜn³c`¡y¦CezYwa[ďĵűMę§]XÎ_íÛ]éÛUćİÕBƣ±dy¹T^dûÅÑŦ·PĻþÙ`K¦¢ÍeĥR¿³£[~äu¼dltW¸oRM¢ď\\z}Æzdvň{ÎXF¶°Â_ÒÂÏL©ÖTmu¼ãlīkiqéfA·Êµ\\őDc¥ÝFyÔćcűH_hLÜêĺĐ¨c}rn`½Ì@¸¶ªVLhŒ\\Ţĺk~Ġið°|gtTĭĸ^xvKVGréAébUuMJVÃO¡qĂXËSģãlýà_juYÛÒBG^éÖ¶§EGÅzěƯ¤EkN[kdåucé¬dnYpAyČ{`]þ¯TbÜÈk¡ĠvàhÂƄ¢Jî¶²"]],"encodeOffsets":[[[111707,21520]],[[107619,25527]]]},"properties":{"cp":[108.320004,22.82402],"name":"广西","childNum":2}},{"id":"460000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@¦Ŝil¢XƦƞòïè§ŞCêɕrŧůÇąĻõ·ĉ³œ̅kÇm@ċȧŧĥĽʉ­ƅſȓÒË¦ŝE}ºƑ[ÍĜȋ gÎfǐÏĤ¨êƺ\\Ɔ¸ĠĎvʄȀÐ¾jNðĀÒRZǆzÐŘÎ°H¨Ƣb²_Ġ "],"encodeOffsets":[[112750,20508]]},"properties":{"cp":[110.33119,20.031971],"name":"海南","childNum":1}},{"id":"510000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@LqKr"],["@@[ĻéV£_ţġñpG réÏ·~ąSfy×Í·ºſƽiÍıƣıĻmHH}siaX@iÇ°ÁÃ×t«­T¤JJJyJÈ`Ohß¦¡uËhIyCjmÿwZGTiSsOB²fNmsPa{M{õE^Hj}gYpaeu¯oáwHjÁ½M¡pMuåmni{fk\\oÎqCwEZ¼KĝAy{m÷LwO×SimRI¯rKõBS«sFe]fµ¢óY_ÆPRcue°Cbo×bd£ŌIHgtrnyPt¦foaXďxlBowz_{ÊéWiêEGhÜ¸ºuFĈIxf®Y½ĀǙ]¤EyF²ċw¸¿@g¢§RGv»áW`ÃĵJwi]t¥wO­½a[×]`Ãi­üL¦LabbTÀåc}ÍhÆh®BHî|îºÉk­¤Sy£ia©taį·Ɖ`ō¥UhOĝLk}©Fos´JmµlŁuønÑJWÎªYÀïAetTŅÓGË«bo{ıwodƟ½OġÜÂµxàNÖ¾P²§HKv¾]|BÆåoZ`¡Ø`ÀmºĠ~ÌÐ§nÇ¿¤]wğ@srğu~Io[é±¹ ¿ſđÓ@qg¹zƱřaí°KtÇ¤V»Ã[ĩǭƑ^ÇÓ@áťsZÏÅĭƋěpwDóÖáŻneQËq·GCœýS]x·ýq³OÕ¶Qzßti{řáÍÇWŝŭñzÇWpç¿JXĩè½cFÂLiVjx}\\NŇĖ¥GeJA¼ÄHfÈu~¸Æ«dE³ÉMA|bÒćhG¬CMõƤąAvüVéŀ_VÌ³ĐwQj´·ZeÈÁ¨X´Æ¡Qu·»ÕZ³ġqDoy`L¬gdp°şp¦ėìÅĮZ°Iähzĵf²å ĚÑKpIN|Ñz]ń·FU×é»R³MÉ»GM«kiér}Ã`¹ăÞmÈnÁîRǀ³ĜoİzŔwǶVÚ£À]ɜ»ĆlƂ²ĠþTº·àUȞÏʦ¶I«dĽĢdĬ¿»Ĕ×h\\c¬ä²GêëĤł¥ÀǿżÃÆMº}BÕĢyFVvwxBèĻĒ©ĈtCĢɽŠȣ¦āæ·HĽîôNÔ~^¤Ɗu^s¼{TA¼ø°¢İªDè¾Ň¶ÝJ®Z´ğ~Sn|ªWÚ©òzPOȸbð¢|øĞŒQìÛÐ@ĞǎRS¤Á§di´ezÝúØã]HqkIþËQÇ¦ÃsÇ¤[E¬ÉŪÍxXƒ·ÖƁİlƞ¹ª¹|XÊwnÆƄmÀêErĒtD®ċæcQE®³^ĭ¥©l}äQtoŖÜqÆkµªÔĻĴ¡@Ċ°B²Èw^^RsºTĀ£ŚæQPJvÄz^Đ¹Æ¯fLà´GC²dt­ĀRt¼¤ĦOðğfÔðDŨŁĞƘïPÈ®âbMüÀXZ ¸£@Å»»QÉ­]dsÖ×_Í_ÌêŮPrĔĐÕGĂeZÜîĘqBhtO ¤tE[h|YÔZśÎs´xº±Uñt|OĩĠºNbgþJy^dÂY Į]Řz¦gC³R`Āz¢Aj¸CL¤RÆ»@­Ŏk\\Ç´£YW}z@Z}Ã¶oû¶]´^NÒ}èNªPÍy¹`S°´ATeVamdUĐwʄvĮÕ\\uÆŗ¨Yp¹àZÂmWh{á}WØǍÉüwga§áCNęÎ[ĀÕĪgÖÉªXøx¬½Ů¦¦[NÎLÜUÖ´òrÙŠxR^JkĳnDX{U~ET{ļº¦PZcjF²Ė@pg¨B{u¨ŦyhoÚD®¯¢ WòàFÎ¤¨GDäz¦kŮPġqË¥À]eâÚ´ªKxīPÖ|æ[xÃ¤JÞĥsNÖ½I¬nĨY´®ÐƐmDŝuäđđEbee_v¡}ìęǊē}qÉåT¯µRs¡M@}ůaa­¯wvƉåZw\\Z{åû^"]],"encodeOffsets":[[[108815,30935]],[[110617,31811]]]},"properties":{"cp":[104.065735,30.659462],"name":"四川","childNum":2}},{"id":"520000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@G\\lY£in"],["@@q|mc¯tÏVSÎ"],["@@hÑ£IsNgßHHªķÃh_¹¡ĝÄ§ń¦uÙùgS¯JH|sÝÅtÁïyMDč»eÕtA¤{b\\}G®u\\åPFqwÅaDK°ºâ_£ùbµmÁÛĹM[q|hlaªāI}Ñµ@swtwm^oµDéĽŠyVky°ÉûÛR³e¥]RÕěħ[ƅåÛDpJiVÂF²I»mN·£LbÒYbWsÀbpkiTZĄă¶Hq`ĥ_J¯ae«KpÝx]aĕÛPÇȟ[ÁåŵÏő÷Pw}TÙ@Õs«ĿÛq©½m¤ÙH·yǥĘĉBµĨÕnđ]K©œáGçş§ÕßgǗĦTèƤƺ{¶ÉHÎd¾ŚÊ·OÐjXWrãLyzÉAL¾ę¢bĶėy_qMĔąro¼hĊw¶øV¤w²Ĉ]ÊKx|`ź¦ÂÈdrcÈbe¸`I¼čTF´¼Óýȃr¹ÍJ©k_șl³´_pĐ`oÒh¶pa^ÓĔ}D»^Xy`d[KvJPhèhCrĂĚÂ^Êƌ wZL­Ġ£ÁbrzOIlMMĪŐžËr×ÎeŦtw|¢mKjSǘňĂStÎŦEtqFT¾Eì¬¬ôxÌO¢ K³ŀºäYPVgŎ¦ŊmŞ¼VZwVlz¤£Tl®ctĽÚó{G­AÇge~Îd¿æaSba¥KKûj®_Ä^\\Ø¾bP®¦x^sxjĶI_Ä Xâ¼Hu¨Qh¡À@Ëô}±GNìĎlT¸`V~R°tbÕĊ`¸úÛtÏFDu[MfqGH·¥yAztMFe|R_GkChZeÚ°tov`xbDnÐ{E}ZèxNEÞREn[Pv@{~rĆAB§EO¿|UZ~ìUf¨J²ĂÝÆsªB`s¶fvö¦Õ~dÔq¨¸º»uù[[§´sb¤¢zþF¢ÆÀhÂW\\ıËIÝo±ĭŠ£þÊs}¡R]ěDg´VG¢j±®èºÃmpU[Áëº°rÜbNu¸}º¼`niºÔXĄ¤¼ÔdaµÁ_ÃftQQgR·Ǔv}Ý×ĵ]µWc¤F²OĩųãW½¯K©]{LóµCIµ±Mß¿h©āq¬o½~@i~TUxŪÒ¢@£ÀEîôruńb[§nWuMÆLl¿]x}ĳ­½"]],"encodeOffsets":[[[112158,27383]],[[112105,27474]],[[112095,27476]]]},"properties":{"cp":[106.713478,26.578343],"name":"贵州","childNum":3}},{"id":"530000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@[ùx½}ÑRHYīĺûsÍniEoã½Ya²ė{c¬ĝgĂsAØÅwďõzFjw}«Dx¿}Uũlê@HÅ­F¨ÇoJ´Ónũuą¡Ã¢pÒÅØ TF²xa²ËXcÊlHîAßËŁkŻƑŷÉ©hW­æßUËs¡¦}teèÆ¶StÇÇ}Fd£jĈZĆÆ¤Tč\\D}O÷£U§~ŃGåŃDĝ¸Tsd¶¶Bª¤u¢ŌĎo~t¾ÍŶÒtD¦ÚiôözØX²ghįh½Û±¯ÿm·zR¦Ɵ`ªŊÃh¢rOÔ´£Ym¼èêf¯ŪĽncÚbw\\zlvWªâ ¦gmĿBĹ£¢ƹřbĥkǫßeeZkÙIKueT»sVesbaĕ  ¶®dNĄÄpªy¼³BE®lGŭCǶwêżĔÂepÍÀQƞpC¼ŲÈ­AÎô¶RäQ^Øu¬°_Èôc´¹ò¨PÎ¢hlĎ¦´ĦÆ´sâÇŲPnÊD^¯°Upv}®BPÌªjǬxSöwlfòªvqĸ|`H­viļndĜ­Ćhňem·FyÞqóSį¯³X_ĞçêtryvL¤§z¦c¦¥jnŞklD¤øz½ĜàĂŧMÅ|áƆàÊcðÂFÜáŢ¥\\\\ºİøÒÐJĴîD¦zK²ǏÎEh~CD­hMn^ÌöÄ©ČZÀaüfɭyœpį´ěFűk]Ôě¢qlÅĆÙa¶~ÄqêljN¬¼HÊNQ´ê¼VØ¸E^ŃÒyM{JLoÒęæe±Ķygã¯JYÆĭĘëo¥Šo¯hcK«z_prC´ĢÖY¼ v¸¢RÅW³Â§fÇ¸Yi³xR´ďUË`êĿUûuĆBƣöNDH«ĈgÑaB{ÊNF´¬c·Åv}eÇÃGB»If¦HňĕM~[iwjUÁKE¾dĪçWIèÀoÈXòyŞŮÈXâÎŚj|àsRyµÖPr´þ ¸^wþTDŔHr¸RÌmfżÕâCôoxĜƌÆĮÐYtâŦÔ@]ÈǮƒ\\Ī¼Ä£UsÈ¯LbîƲŚºyhr@ĒÔƀÀ²º\\êpJ}ĠvqtĠ@^xÀ£È¨mËÏğ}n¹_¿¢×Y_æpÅA^{½Lu¨GO±Õ½ßM¶wÁĢÛPƢ¼pcĲx|apÌ¬HÐŊSfsðBZ¿©XÏÒKk÷Eû¿SrEFsÕūkóVǥŉiTL¡n{uxţÏhôŝ¬ğōNNJkyPaqÂğ¤K®YxÉƋÁ]āęDqçgOgILu\\_gz]W¼~CÔē]bµogpÑ_oď`´³Țkl`IªºÎȄqÔþ»E³ĎSJ»_f·adÇqÇc¥Á_Źw{L^É±ćxU£µ÷xgĉp»ĆqNē`rĘzaĵĚ¡K½ÊBzyäKXqiWPÏÉ¸½řÍcÊG|µƕƣGË÷k°_^ý|_zċBZocmø¯hhcæ\\lMFlư£ĜÆyHF¨µêÕ]HAàÓ^it `þßäkĤÎT~Wlÿ¨ÔPzUCNVv [jâôDôď[}z¿msSh¯{jïğl}šĹ[őgK©U·µË@¾m_~q¡f¹ÅË^»f³ø}Q¡ÖË³gÍ±^Ç\\ëÃA_¿bWÏ[¶ƛé£F{īZgm@|kHǭƁć¦UĔť×ë}ǝeďºȡȘÏíBÉ£āĘPªĳ¶ŉÿy©nď£G¹¡I±LÉĺÑdĉÜW¥}gÁ{aqÃ¥aıęÏZï`"],"encodeOffsets":[[104636,22969]]},"properties":{"cp":[102.712251,25.040609],"name":"云南","childNum":1}},{"id":"540000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ÂhľxŖxÒVºÅâAĪÝȆµę¯Ňa±r_w~uSÕňqOj]ɄQ£ZUDûoY»©M[L¼qãË{VÍçWVi]ë©Ä÷àyƛhÚU°adcQ~Mx¥cc¡ÙaSyFÖk­uRýq¿ÔµQĽ³aG{¿FµëªéĜÿª@¬·K·àariĕĀ«V»ŶĴūgèLǴŇƶaftèBŚ£^âǐÝ®M¦ÁǞÿ¬LhJ¾óƾÆºcxwf]Y´¦|QLn°adĊ\\¨oǀÍŎ´ĩĀd`tÊQŞŕ|¨C^©Ĉ¦¦ÎJĊ{ëĎjª²rÐl`¼Ą[t|¦Stè¾PÜK¸dƄı]s¤î_v¹ÎVòŦj£Əsc¬_Ğ´|Ł¦Av¦w`ăaÝaa­¢e¤ı²©ªSªÈMĄwÉØŔì@T¤Ę\\õª@þo´­xA sÂtŎKzó´ÇĊµ¢r^nĊ­Æ¬×üG¢³ {âĊ]G~bÀgVjzlhǶfOfdªB]pjTOtĊn¤}®¦Č¥d¢¼»ddY¼t¢eȤJ¤}Ǿ¡°§¤AÐlc@ĝsªćļđAçwxUuzEÖġ~AN¹ÄÅȀŻ¦¿ģŁéì±Hãd«g[Ø¼ēÀcīľġ¬cJµÐʥVȝ¸ßS¹ý±ğkƁ¼ą^ɛ¤Ûÿb[}¬ōõÃ]ËNm®g@Bg}ÍF±ǐyL¥íCIĳÏ÷Ñį[¹¦[âšEÛïÁÉdƅß{âNÆāŨß¾ě÷yC£k­´ÓH@Â¹TZ¥¢į·ÌAÐ§®Zcv½Z­¹|ÅWZqgW|ieZÅYVÓqdqbc²R@c¥Rã»GeeƃīQ}J[ÒK¬Ə|oėjġĠÑN¡ð¯EBčnwôɍėª²CλŹġǝʅįĭạ̃ūȹ]ΓͧgšsgȽóϧµǛęgſ¶ҍć`ĘąŌJÞä¤rÅň¥ÖÁUětęuůÞiĊÄÀ\\Æs¦ÓRb|Â^řÌkÄŷ¶½÷f±iMÝ@ĥ°G¬ÃM¥n£Øąğ¯ß§aëbéüÑOčk£{\\eµª×MÉfm«Ƒ{Å×Gŏǩãy³©WÑăû··Qòı}¯ãIéÕÂZ¨īès¶ZÈsæĔTŘvgÌsN@îá¾ó@ÙwU±ÉTå»£TđWxq¹Zobs[×¯cĩvėŧ³BM|¹kªħ¥TzNYnÝßpęrñĠĉRS~½ěVVµõ«M££µBĉ¥áºae~³AuĐh`Ü³ç@BÛïĿa©|z²Ý¼D£àč²ŸIûI āóK¥}rÝ_Á´éMaň¨~ªSĈ½½KÙóĿeƃÆB·¬ën×W|Uº}LJrƳlŒµ`bÔ`QÐÓ@s¬ñIÍ@ûws¡åQÑßÁ`ŋĴ{ĪTÚÅTSÄ³Yo|Ç[Ç¾µMW¢ĭiÕØ¿@MhpÕ]jéò¿OƇĆƇpêĉâlØwěsǩĵ¸cbU¹ř¨WavquSMzeo_^gsÏ·¥Ó@~¯¿RiīB\\qTGªÇĜçPoÿfñòą¦óQīÈáPābß{ZŗĸIæÅhnszÁCËìñÏ·ąĚÝUm®ó­L·ăUÈíoù´Êj°ŁŤ_uµ^°ìÇ@tĶĒ¡ÆM³Ģ«İĨÅ®ğRāðggheÆ¢zÊ©Ô\\°ÝĎz~ź¤PnMĪÖB£kné§żćĆKĒ°¼L¶èâz¨u¦¥LDĘz¬ýÎmĘd¾ßFzhg²Fy¦ĝ¤ċņbÎ@yĄæm°NĮZRÖíJ²öLĸÒ¨Y®ƌÐVàtt_ÚÂyĠz]ŢhzĎ{ÂĢXc|ÐqfO¢¤ögÌHNPKŖUú´xx[xvĐCûĀìÖT¬¸^}Ìsòd´_KgžLĴÀBon|H@Êx¦BpŰŌ¿fµƌA¾zǈRx¶FkĄźRzŀ~¶[´HnªVƞuĒ­È¨ƎcƽÌm¸ÁÈM¦x͊ëÀxǆBú^´W£dkɾĬpw˂ØɦļĬIŚÊnŔa¸~J°îlɌxĤÊÈðhÌ®gT´øàCÀ^ªerrƘd¢İP|Ė ŸWªĦ^¶´ÂLaT±üWƜǀRÂŶUńĖ[QhlLüAÜ\\qRĄ©"],"encodeOffsets":[[90849,37210]]},"properties":{"cp":[91.132212,29.660361],"name":"西藏","childNum":1}},{"id":"610000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@p¢ȮµûGĦ}Ħðǚ¶òƄjɂz°{ºØkÈęâ¦jªBg\\ċ°s¬]jú EȌǆ¬stRÆdĠİwÜ¸ôW¾ƮłÒ_{Ìû¼jº¹¢GǪÒ¯ĘZ`ºŊecņą~BÂgzpâēòYǠȰÌTÎ¨ÂW|fcă§uF@N¢XLRMº[ğȣſï|¥Jkc`sŉǷY¹W@µ÷Kãï³ÛIcñ·VȋÚÒķø©þ¥yÓğęmWµÎumZyOŅƟĥÓ~sÑL¤µaÅY¦ocyZ{y c]{Ta©`U_Ěē£ωÊƍKùK¶ȱÝƷ§{û»ÅÁȹÍéuĳ|¹cÑdìUYOuFÕÈYvÁCqÓTǢí§·S¹NgV¬ë÷Át°DØ¯C´ŉƒópģ}ċcEËFéGU¥×K§­¶³BČ}C¿åċ`wġB·¤őcƭ²ő[Å^axwQOÿEËßŚĤNĔwƇÄńwĪ­o[_KÓª³ÙnKÇěÿ]ďă_d©·©Ýŏ°Ù®g]±ßå¬÷m\\iaǑkěX{¢|ZKlçhLtŇîŵœè[É@ƉĄEtƇÏ³­ħZ«mJ×¾MtÝĦ£IwÄå\\Õ{OwĬ©LÙ³ÙgBƕŀrÌĢŭO¥lãyC§HÍ£ßEñX¡­°ÙCgpťzb`wIvA|§hoĕ@E±iYd¥OĻ¹S|}F@¾oAO²{tfÜ¢FǂÒW²°BĤh^Wx{@¬­F¸¡ķn£P|ªĴ@^ĠĈæbÔc¶lYi^MicĎ°Â[ävï¶gv@ÀĬ·lJ¸sn|¼u~a]ÆÈtŌºJpþ£KKf~¦UbyäIĺãnÔ¿^­ŵMThĠÜ¤ko¼Ŏìąǜh`[tRd²Ĳ_XPrɲlXiL§à¹H°Ȧqº®QCbAŌJ¸ĕÚ³ĺ§ `d¨YjiZvRĺ±öVKkjGȊÄePĞZmļKÀ[`ösìhïÎoĬdtKÞ{¬èÒÒBÔpĲÇĬJŊ¦±J«Y§@·pHµàåVKepWftsAÅqC·¬ko«pHÆuK@oHĆÛķhxenS³àǍrqƶRbzy¸ËÐl¼EºpĤ¼x¼½~Ğà@ÚüdK^mÌSj"],"encodeOffsets":[[110234,38774]]},"properties":{"cp":[108.948024,34.263161],"name":"陕西","childNum":1}},{"id":"620000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@VuUv"],["@@ũEĠtt~nkh`Q¦ÅÄÜdwAb×ĠąJ¤DüègĺqBqj°lI¡ĨÒ¤úSHbjÎB°aZ¢KJO[|A£Dx}NĂ¬HUnrk kp¼Y kMJn[aGáÚÏ[½rc}aQxOgsPMnUsncZsKúvAtÞġ£®ĀYKdnFw¢JE°Latf`¼h¬we|Æbj}GA·~W`¢MC¤tL©Ĳ°qdfObÞĬ¹ttu`^ZúE`[@Æsîz®¡CƳƜG²R¢RmfwĸgÜą G@pzJM½mhVy¸uÈÔO±¨{LfæU¶ßGĂq\\ª¬²I¥IŉÈīoıÓÑAçÑ|«LÝcspīðÍgtë_õ\\ĉñLYnĝgRǡÁiHLlõUĹ²uQjYi§Z_c¨´ĹĖÙ·ŋIaBD­R¹ȥr¯GºßK¨jWkɱOqWĳ\\a­Q\\sg_ĆǛōëp»£lğÛgSŶN®À]ÓämĹãJaz¥V}Le¤Lýo¹IsŋÅÇ^bz³tmEÁ´a¹cčecÇNĊãÁ\\č¯dNj]jZµkÓdaćå]ğĳ@ ©O{¤ĸm¢E·®«|@Xwg]Aģ±¯XǁÑǳªcwQÚŝñsÕ³ÛV_ý¥\\ů¥©¾÷w©WÕÊĩhÿÖÁRo¸V¬âDb¨hûxÊ×ǌ~Zâg|XÁnßYoº§ZÅŘv[ĭÖʃuďxcVbnUSfB¯³_TzºÎO©çMÑ~M³]µ^püµÄY~y@X~¤Z³[Èōl@®Å¼£QK·Di¡ByÿQ_´D¥hŗy^ĭÁZ]cIzýah¹MĪğPs{ò²Vw¹t³ŜË[Ñ}X\\gsF£sPAgěp×ëfYHāďÖqēŭOÏëdLü\\it^c®RÊº¶¢H°mrY£B¹čIoľu¶uI]vģSQ{UŻÅ}QÂ|Ì°ƅ¤ĩŪU ęĄÌZÒ\\v²PĔ»ƢNHĂyAmƂwVm`]ÈbH`Ì¢²ILvĜH®¤Dlt_¢JJÄämèÔDëþgºƫaʎÌrêYi~ Îİ¤NpÀA¾Ĕ¼bð÷®üszMzÖĖQdȨýv§Tè|ªHÃ¾a¸|Ð ƒwKĢx¦ivr^ÿ ¸l öæfƟĴ·PJv}n\\h¹¶v·À|\\ƁĚN´ĜçèÁz]ġ¤²¨QÒŨTIlªťØ}¼˗ƦvÄùØEÂ«FïËIqōTvāÜŏíÛßÛVj³âwGăÂíNOPìyV³ŉĖýZso§HÑiYw[ß\\X¦¥c]ÔƩÜ·«jÐqvÁ¦m^ċ±R¦΋ƈťĚgÀ»IïĨʗƮ°ƝĻþÍAƉſ±tÍEÕÞāNUÍ¡\\ſčåÒʻĘm ƭÌŹöʥëQ¤µ­ÇcƕªoIýIÉ_mkl³ăƓ¦j¡YzŇi}Msßõīʋ }ÁVm_[n}eı­Uĥ¼ªI{Î§DÓƻėojqYhĹT©oūĶ£]ďxĩǑMĝq`B´ƃ˺Чç~²ņj@¥@đ´ί}ĥtPńÇ¾V¬ufÓÉCtÓ̻¹£G³]ƖƾŎĪŪĘ̖¨ʈĢƂlɘ۪üºňUðǜȢƢż̌ȦǼĤŊɲĖÂ­Kq´ï¦ºĒǲņɾªǀÞĈĂD½ĄĎÌŗĞrôñnN¼â¾ʄľԆ|Ǆ֦ज़ȗǉ̘̭ɺƅêgV̍ʆĠ·ÌĊv|ýĖÕWĊǎÞ´õ¼cÒÒBĢ͢UĜð͒s¨ňƃLĉÕÝ@ɛƯ÷¿Ľ­ĹeȏĳëCȚDŲyê×Ŗyò¯ļcÂßYtÁƤyAã˾J@ǝrý@¤rz¸oP¹ɐÚyáHĀ[JwcVeȴÏ»ÈĖ}ƒŰŐèȭǢόĀƪÈŶë;Ñ̆ȤМľĮEŔĹŊũ~ËUă{ĻƹɁύȩþĽvĽƓÉ@ēĽɲßǐƫʾǗĒpäWÐxnsÀ^ƆwW©¦cÅ¡Ji§vúF¶¨c~c¼īeXǚ\\đ¾JwÀďksãAfÕ¦L}waoZD½Ml«]eÒÅaÉ²áo½FõÛ]ĻÒ¡wYR£¢rvÓ®y®LFLzĈôe]gx}|KK}xklL]c¦£fRtív¦PĤoH{tK"]],"encodeOffsets":[[[108619,36299]],[[108589,36341]]]},"properties":{"cp":[103.823557,36.058039],"name":"甘肃","childNum":2}},{"id":"630000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@InJm"],["@@CÆ½OŃĦsΰ~Ē³¦@@Ņi±è}ШƄ˹A³r_ĞǒNĪĐw¤^ŬĵªpĺSZgrpiƼĘÔ¨C|ÍJ©Ħ»®VĲ~f\\m `UnÂ~ʌĬàöNt~ňjy¢ZiƔ¥Ąk´nl`JÊJþ©pdƖ®È£¶ìRʦźõƮËnʼėæÑƀĎ[¢VÎĂMÖÝÎF²sƊƀÎBļýƞ¯ʘƭðħ¼Jh¿ŦęΌƇ¥²Q]Č¥nuÂÏri¸¬ƪÛ^Ó¦d¥[Wàx\\ZjÒ¨GtpþYŊĕ´zUOëPîMĄÁxH´áiÜUàîÜŐĂÛSuŎrJðÌ¬EFÁú×uÃÎkrĒ{V}İ«O_ÌËĬ©ÓŧSRÑ±§Ģ£^ÂyèçěM³Ƃę{[¸¿uºµ[gt£¸OƤĿéYõ·kĀq]juw¥DĩƍõÇPéÄ½G©ã¤GuȧþRcÕĕNyyût­øï»a½ē¿BMoį£Íj}éZËqbʍƬh¹ìÿÓAçãnIÃ¡I`ks£CG­ěUy×Cy@¶ʡÊBnāzGơMē¼±O÷õJËĚăVĪũƆ£¯{ËL½ÌzżVR|ĠTbuvJvµhĻĖHAëáa­OÇðñęNwœľ·LmI±íĠĩPÉ×®ÿscB³±JKßĊ«`ađ»·QAmOVţéÿ¤¹SQt]]Çx±¯A@ĉĳ¢Óļ©l¶ÅÛrŕspãRk~¦ª]Į­´FRåd­ČsCqđéFn¿ÅƃmÉx{W©ºƝºįkÕƂƑ¸wWūÐ©ÈF£\\tÈ¥ÄRÈýÌJ lGr^×äùyÞ³fjc¨£ÂZ|ǓMĝÏ@ëÜőRĝ÷¡{aïȷPu°ËXÙ{©TmĠ}Y³­ÞIňµç½©C¡į÷¯B»|St»]vųs»}MÓ ÿʪƟǭA¡fs»PY¼c¡»¦cċ­¥£~msĉPSi^o©AecPeǵkgyUi¿h}aHĉ^|á´¡HØûÅ«ĉ®]m¡qĉ¶³ÈyôōLÁstB®wn±ă¥HSòė£Së@×œÊăxÇN©©T±ª£Ĳ¡fb®Þbb_Ą¥xu¥B{łĝ³«`dƐt¤ťiñÍUuºí`£^tƃĲc·ÛLO½sç¥Ts{ă\\_»kÏ±q©čiìĉ|ÍI¥ć¥]ª§D{ŝŖÉR_sÿc³ĪōƿÎ§p[ĉc¯bKmR¥{³Ze^wx¹dƽÅ½ôIg §Mĕ ƹĴ¿ǣÜÍ]Ý]snåA{eƭ`ǻŊĿ\\ĳŬűYÂÿ¬jĖqßb¸L«¸©@ěĀ©ê¶ìÀEH|´bRľÓ¶rÀQþvl®ÕETzÜdb hw¤{LRdcb¯ÙVgƜßzÃôì®^jUèXÎ|UäÌ»rK\\ªN¼pZCüVY¤ɃRi^rPŇTÖ}|br°qňbĚ°ªiƶGQ¾²x¦PmlŜ[Ĥ¡ΞsĦÔÏâ\\ªÚŒU\\f¢N²§x|¤§xĔsZPòʛ²SÐqF`ªVÞŜĶƨVZÌL`¢dŐIqr\\oäõFÎ·¤»Ŷ×h¹]ClÙ\\¦ďÌį¬řtTӺƙgQÇÓHţĒ´ÃbEÄlbʔC|CŮkƮ[ʼ¬ň´KŮÈΰÌĪ¶ƶlðļATUvdTGº̼ÔsÊDÔveOg"]],"encodeOffsets":[[[105308,37219]],[[95370,40081]]]},"properties":{"cp":[101.778916,36.623178],"name":"青海","childNum":2}},{"id":"640000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@KëÀęĞ«Oęȿȕı]ŉ¡åįÕÔ«ǴõƪĚQÐZhv K°öqÀÑS[ÃÖHƖčËnL]ûcÙß@ĝ¾}w»»oģF¹»kÌÏ·{zP§B­¢íyÅt@@á]Yv_ssģ¼ißĻL¾ġsKD£¡N_X¸}B~HaiÅf{«x»ge_bsKF¯¡IxmELcÿZ¤­ĢÝsuBLùtYdmVtNmtOPhRw~bd¾qÐ\\âÙH\\bImlNZ»loqlVmGā§~QCw¤{A\\PKNY¯bFkC¥sks_Ã\\ă«¢ħkJi¯rrAhĹûç£CUĕĊ_ÔBixÅÙĄnªÑaM~ħpOu¥sîeQ¥¤^dkKwlL~{L~hw^ófćKyE­K­zuÔ¡qQ¤xZÑ¢^ļöÜ¾Ep±âbÊÑÆ^fk¬NC¾YpxbK~¥eÖäBlt¿Đx½I[ĒǙWf»Ĭ}d§dµùEuj¨IÆ¢¥dXªƅx¿]mtÏwßRĶX¢͎vÆzƂZò®ǢÌʆCrâºMÞzÆMÒÊÓŊZÄ¾r°Î®Ȉmª²ĈUªĚîøºĮ¦ÌĘk^FłĬhĚiĀĖ¾iİbjÕ"],["@@mfwěwMrŢªv@G"]],"encodeOffsets":[[[109366,40242]],[[108600,36303]]]},"properties":{"cp":[106.278179,38.46637],"name":"宁夏","childNum":2}},{"id":"650000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@QØĔ²X¨~ǘBºjʐßØvKƔX¨vĊOÃ·¢i@~cĝe_«E}QxgɪëÏÃ@sÅyXoŖ{ô«ŸuXêÎf`C¹ÂÿÐGĮÕĞXŪōŸMźÈƺQèĽôe|¿ƸJR¤ĘEjcUóº¯Ĩ_ŘÁMª÷Ð¥OéÈ¿ÖğǤǷÂFÒzÉx[]­Ĥĝœ¦EP}ûƥé¿İƷTėƫœŕƅƱB»Đ±ēO¦E}`cȺrĦáŖuÒª«ĲπdƺÏØZƴwʄ¤ĖGĐǂZĶèH¶}ÚZצʥĪï|ÇĦMŔ»İĝǈì¥Βba­¯¥ǕǚkĆŵĦɑĺƯxūД̵nơʃĽá½M»òmqóŘĝčË¾ăCćāƿÝɽ©ǱŅ¹đ¥³ðLrÁ®ɱĕģŉǻ̋ȥơŻǛȡVï¹Ň۩ûkɗġƁ§ʇė̕ĩũƽō^ƕUv£ƁQïƵkŏ½ΉÃŭÇ³LŇʻ«ƭ\\lŭD{ʓDkaFÃÄa³ŤđÔGRÈƚhSӹŚsİ«ĐË[¥ÚDkº^Øg¼ŵ¸£EÍöůŉT¡c_ËKYƧUśĵÝU_©rETÏʜ±OñtYwē¨{£¨uM³x½şL©Ùá[ÓÐĥ Νtģ¢\\śnkOw¥±T»ƷFɯàĩÞáB¹ÆÑUwŕĽw[mG½Èå~Æ÷QyěCFmĭZīŵVÁƿQƛûXS²b½KÏ½ĉS©ŷXĕ{ĕK·¥Ɨcqq©f¿]ßDõU³h­gËÇïģÉɋwk¯í}I·œbmÉřīJɥĻˁ×xoɹīlc¤³Xù]ǅA¿w͉ì¥wÇN·ÂËnƾƍdÇ§đ®ƝvUm©³G\\}µĿQyŹlăµEwǇQ½yƋBe¶ŋÀůo¥AÉw@{Gpm¿AĳŽKLh³`ñcËtW±»ÕSëüÿďDu\\wwwù³VLŕOMËGh£õP¡erÏd{ġWÁč|yšg^ğyÁzÙs`s|ÉåªÇ}m¢Ń¨`x¥ù^}Ì¥H«YªƅAÐ¹n~ź¯f¤áÀzgÇDIÔ´AňĀÒ¶ûEYospõD[{ù°]uJqU|Soċxţ[õÔĥkŋÞŭZËºóYËüċrw ÞkrťË¿XGÉbřaDü·Ē÷AÃª[ÄäIÂ®BÕĐÞ_¢āĠpÛÄȉĖġDKwbmÄNôfƫVÉviǳHQµâFù­Âœ³¦{YGd¢ĚÜO {Ö¦ÞÍÀP^bƾl[vt×ĈÍEË¨¡Đ~´î¸ùÎhuè`¸HÕŔVºwĠââWò@{ÙNÝ´ə²ȕn{¿¥{l÷eé^eďXj©î\\ªÑòÜìc\\üqÕ[Č¡xoÂċªbØ­ø|¶ȴZdÆÂońéG\\¼C°ÌÆn´nxÊOĨŪƴĸ¢¸òTxÊǪMīĞÖŲÃɎOvʦƢ~FRěò¿ġ~åŊúN¸qĘ[Ĕ¶ÂćnÒPĒÜvúĀÊbÖ{Äî¸~Ŕünp¤ÂH¾ĄYÒ©ÊfºmÔĘcDoĬMŬS¤s²ʘÚžȂVŦ èW°ªB|ĲXŔþÈJĦÆæFĚêYĂªĂ]øªŖNÞüAfɨJ¯ÎrDDĤ`mz\\§~D¬{vJÂ«lµĂb¤pŌŰNĄ¨ĊXW|ų ¿¾ɄĦƐMTòP÷fØĶK¢ȝ˔Sô¹òEð­`Ɩ½ǒÂň×äı§ĤƝ§C~¡hlåǺŦŞkâ~}FøàĲaĞfƠ¥Ŕd®U¸źXv¢aƆúŪtŠųƠjdƺƺÅìnrh\\ĺ¯äɝĦ]èpĄ¦´LƞĬ´ƤǬ˼Ēɸ¤rºǼ²¨zÌPðŀbþ¹ļD¢¹\\ĜÑŚ¶ZƄ³àjĨoâȴLÊȮĐ­ĚăÀêZǚŐ¤qȂ\\L¢ŌİfÆs|zºeªÙæ§΢{Ā´ƐÚ¬¨Ĵà²łhʺKÞºÖTiƢ¾ªì°`öøu®Ê¾ãØ"],"encodeOffsets":[[88824,50096]]},"properties":{"cp":[87.617733,43.792818],"name":"新疆","childNum":1}},{"id":"110000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ĽOÁûtŷmiÍt_H»Ĩ±d`¹­{bwYr³S]§§o¹qGtm_SŧoaFLgQN_dV@Zom_ć\\ßcÂ±x¯oœRcfe£o§ËgToÛJíĔóu|wP¤XnO¢ÉŦ¯rNÄā¤zâŖÈRpŢZÚ{GrFt¦Òx§ø¹RóäV¤XdżâºWbwŚ¨Ud®bêņ¾jnŎGŃŶnzÚSeîĜZczî¾i]ÍQaúÍÔiþĩȨWĢü|Ėu[qb[swP@ÅğP¿{\\¥A¨ÏÑ¨j¯X\\¯MKpA³[Hīu}}"],"encodeOffsets":[[120023,41045]]},"properties":{"cp":[116.405285,39.904989],"name":"北京","childNum":1}},{"id":"120000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@ŬgX§Ü«E¶FÌ¬O_ïlÁgz±AXeµÄĵ{¶]gitgIj·¥îakS¨ÐƎk}ĕ{gBqGf{¿aU^fIư³õ{YıëNĿk©ïËZŏR§òoY×Ógcĥs¡bġ«@dekąI[nlPqCnp{ō³°`{PNdƗqSÄĻNNâyj]äÒD ĬH°Æ]~¡HO¾X}ÐxgpgWrDGpù^LrzWxZ^¨´T\\|~@IzbĤjeĊªz£®ĔvěLmV¾Ô_ÈNW~zbĬvG²ZmDM~~"],"encodeOffsets":[[120237,41215]]},"properties":{"cp":[117.190182,39.125596],"name":"天津","childNum":1}},{"id":"310000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@ɧư¬EpƸÁxc"],["@@©ª"],["@@MA"],["@@QpİE§ÉC¾"],["@@bŝÕÕEȣÚƥêImɇǦèÜĠÚÃƌÃ͎ó"],["@@ǜûȬɋŭ×^sYɍDŋŽąñCG²«ªč@h_p¯A{oloY¬j@Ĳ`gQÚhr|ǀ^MĲvtbe´R¯Ô¬¨Yô¤r]ìƬį"]],"encodeOffsets":[[[124702,32062]],[[124547,32200]],[[124808,31991]],[[124726,32110]],[[124903,32376]],[[124438,32149]]]},"properties":{"cp":[121.472644,31.231706],"name":"上海","childNum":6}},{"id":"500000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@vjG~nGŘŬĶȂƀƾ¹¸ØÎezĆT¸}êÐqHðqĖä¥^CÆIj²p\\_ æüY|[YxƊæu°xb®Űb@~¢NQt°¶Sæ Ê~rǉĔëĚ¢~uf`faĔJåĊnÖ]jƎćÊ@£¾a®£Ű{ŶĕFègLk{Y|¡ĜWƔtƬJÑxq±ĢN´òKLÈÃ¼D|s`ŋć]Ã`đMûƱ½~Y°ħ`ƏíW½eI½{aOIrÏ¡ĕŇapµÜƅġ^ÖÛbÙŽŏml½SêqDu[RãË»ÿw`»y¸_ĺę}÷`M¯ċfCVµqŉ÷Zgg`d½pDOÎCn^uf²ènh¼WtƏxRGg¦pVFI±G^Ic´ecGĹÞ½sëĬhxW}KÓe­XsbkF¦LØgTkïƵNï¶}Gyw\\oñ¡nmĈzj@Óc£»Wă¹Ój_m»¹·~MvÛaq»­ê\\ÂoVnÓØÍ²«bq¿efE Ĝ^Q~ Évýş¤²ĮpEİ}zcĺL½¿gÅ¡ýE¡ya£³t\\¨\\vú»¼§·Ñr_oÒý¥u_n»_At©ÞÅ±ā§IVeëY}{VPÀFA¨ąB}q@|Ou\\FmQFÝMwå}]|FmÏCawu_p¯sfÙgYDHl`{QEfNysB¦zG¸rHeN\\CvEsÐùÜ_·ÖĉsaQ¯}_UxÃđqNH¬Äd^ÝŰR¬ã°wećJE·vÝ·HgéFXjÉê`|ypxkAwWĐpb¥eOsmzwqChóUQl¥F^lafanòsrEvfQdÁUVfÎvÜ^eftET¬ôA\\¢sJnQTjPØxøK|nBzĞ»LYFDxÓvr[ehľvN¢o¾NiÂxGpâ¬zbfZo~hGi]öF||NbtOMn eA±tPTLjpYQ|SHYĀxinzDJÌg¢và¥Pg_ÇzIIII£®S¬ØsÎ¼£N"],["@@ifjN@s"]],"encodeOffsets":[[[109628,30765]],[[111725,31320]]]},"properties":{"cp":[106.504962,29.533155],"name":"重庆","childNum":2}},{"id":"810000","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@AlBk"],["@@mn"],["@@EpFo"],["@@ea¢pl¸Eõ¹hj[]ÔCÎ@lj¡uBX´AI¹[yDU]W`çwZkmcMpÅv}IoJlcafŃK°ä¬XJmÐ đhI®æÔtSHnEÒrÈc"],["@@rMUwAS®e"]],"encodeOffsets":[[[117111,23002]],[[117072,22876]],[[117045,22887]],[[116975,23082]],[[116882,22747]]]},"properties":{"cp":[114.173355,22.320048],"name":"香港","childNum":5}},{"id":"820000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@kÊd°å§s"],"encodeOffsets":[[116279,22639]]},"properties":{"cp":[113.54909,22.198951],"name":"澳门","childNum":1}}],"UTF8Encoding":true});
	}));

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*
	    通用表单验证方法
	    Validform version 5.3.2
		By sean during April 7, 2010 - March 26, 2013
		For more information, please visit http://validform.rjboy.cn
		Validform is available under the terms of the MIT license.
		
		Demo:
		$(".demoform").Validform({//$(".demoform")指明是哪一表单需要验证,名称需加在form表单上;
			btnSubmit:"#btn_sub", //#btn_sub是该表单下要绑定点击提交表单事件的按钮;如果form内含有submit按钮该参数可省略;
			btnReset:".btn_reset",//可选项 .btn_reset是该表单下要绑定点击重置表单事件的按钮;
			tiptype:1, //可选项 1=>pop box,2=>side tip(parent.next.find; with default pop),3=>side tip(siblings; with default pop),4=>side tip(siblings; none pop)，默认为1，也可以传入一个function函数，自定义提示信息的显示方式（可以实现你想要的任何效果，具体参见demo页）;
			ignoreHidden:false,//可选项 true | false 默认为false，当为true时对:hidden的表单元素将不做验证;
			dragonfly:false,//可选项 true | false 默认false，当为true时，值为空时不做验证；
			tipSweep:true,//可选项 true | false 默认为false，只在表单提交时触发检测，blur事件将不会触发检测（实时验证会在后台进行，不会显示检测结果）;
			label:".label",//可选项 选择符，在没有绑定nullmsg时查找要显示的提示文字，默认查找".Validform_label"下的文字;
			showAllError:false,//可选项 true | false，true：提交表单时所有错误提示信息都会显示，false：一碰到验证不通过的就停止检测后面的元素，只显示该元素的错误信息;
			postonce:true, //可选项 表单是否只能提交一次，true开启，不填则默认关闭;
			ajaxPost:true, //使用ajax方式提交表单数据，默认false，提交地址就是action指定地址;
			datatype:{//传入自定义datatype类型，可以是正则，也可以是函数（函数内会传入一个参数）;
				"*6-20": /^[^\s]{6,20}$/,
				"z2-4" : /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/,
				"username":function(gets,obj,curform,regxp){
					//参数gets是获取到的表单元素值，obj为当前表单元素，curform为当前验证的表单，regxp为内置的一些正则表达式的引用;
					var reg1=/^[\w\.]{4,16}$/,
						reg2=/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,8}$/;
					
					if(reg1.test(gets)){return true;}
					if(reg2.test(gets)){return true;}
					return false;
					
					//注意return可以返回true 或 false 或 字符串文字，true表示验证通过，返回字符串表示验证失败，字符串作为错误提示显示，返回false则用errmsg或默认的错误提示;
				},
				"phone":function(){
					// 5.0 版本之后，要实现二选一的验证效果，datatype 的名称 不 需要以 "option_" 开头;	
				}
			},
			usePlugin:{
				swfupload:{},
				datepicker:{},
				passwordstrength:{},
				jqtransform:{
					selector:"select,input"
				}
			},
			beforeCheck:function(curform){
				//在表单提交执行验证之前执行的函数，curform参数是当前表单对象。
				//这里明确return false的话将不会继续执行验证操作;	
			},
			beforeSubmit:function(curform){
				//在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
				//这里明确return false的话表单将不会提交;	
			},
			callback:function(data){
				//返回数据data是json格式，{"info":"demo info","status":"y"}
				//info: 输出提示信息;
				//status: 返回提交数据的状态,是否提交成功。如可以用"y"表示提交成功，"n"表示提交失败，在ajax_post.php文件返回数据里自定字符，主要用在callback函数里根据该值执行相应的回调操作;
				//你也可以在ajax_post.php文件返回更多信息在这里获取，进行相应操作；
				//ajax遇到服务端错误时也会执行回调，这时的data是{ status:**, statusText:**, readyState:**, responseText:** }；
				
				//这里执行回调操作;
				//注意：如果不是ajax方式提交表单，传入callback，这时data参数是当前表单对象，回调函数会在表单验证全部通过后执行，然后判断是否提交表单，如果callback里明确return false，则表单不会提交，如果return true或没有return，则会提交表单。
			}
		});
		
		Validform对象的方法和属性：
		tipmsg：自定义提示信息，通过修改Validform对象的这个属性值来让同一个页面的不同表单使用不同的提示文字；
		dataType：获取内置的一些正则；
		eq(n)：获取Validform对象的第n个元素;
		ajaxPost(flag,sync,url)：以ajax方式提交表单。flag为true时，跳过验证直接提交，sync为true时将以同步的方式进行ajax提交，传入了url地址时，表单会提交到这个地址；
		abort()：终止ajax的提交；
		submitForm(flag,url)：以参数里设置的方式提交表单，flag为true时，跳过验证直接提交，传入了url地址时，表单会提交到这个地址；
		resetForm()：重置表单；
		resetStatus()：重置表单的提交状态。传入了postonce参数的话，表单成功提交后状态会设置为"posted"，重置提交状态可以让表单继续可以提交；
		getStatus()：获取表单的提交状态，normal：未提交，posting：正在提交，posted：已成功提交过；
		setStatus(status)：设置表单的提交状态，可以设置normal，posting，posted三种状态，不传参则设置状态为posting，这个状态表单可以验证，但不能提交；
		ignore(selector)：忽略对所选择对象的验证；
		unignore(selector)：将ignore方法所忽略验证的对象重新获取验证效果；
		addRule(rule)：可以通过Validform对象的这个方法来给表单元素绑定验证规则；
		check(bool,selector):对指定对象进行验证(默认验证当前整个表单)，通过返回true，否则返回false（绑定实时验证的对象，格式符合要求时返回true，而不会等ajax的返回结果），bool为true时则只验证不显示提示信息；
		config(setup):可以通过这个方法来修改初始化参数，指定表单的提交地址，给表单ajax和实时验证的ajax里设置参数；
	*/

	(function($,win,undef){
		var errorobj=null,//指示当前验证失败的表单元素;
			msgobj=null,//pop box object 
			msghidden=true;//msgbox hidden?

		var tipmsg={//默认提示文字;
			tit:"提示信息",
			w:{
				"*":"不能为空！",
				"*6-16":"请填写6到16位任意字符！",
				"n":"请填写数字！",
				"n6-16":"请填写6到16位数字！",
				"s":"不能输入特殊字符！",
				"s6-18":"请填写6到18位字符！",
				"p":"请填写邮政编码！",
				"m":"请填写手机号码！",
				"e":"邮箱地址格式不对！",
				"url":"请填写网址！"
			},
			def:"请填写正确信息！",
			undef:"datatype未定义！",
			reck:"两次输入的内容不一致！",
			r:"通过信息验证！",
			c:"正在检测信息…",
			s:"请{填写|选择}{0|信息}！",
			v:"所填信息没有经过验证，请稍后…",
			p:"正在提交数据…"
		}
		$.Tipmsg=tipmsg;
		
		var Validform=function(forms,settings,inited){
			var settings=$.extend({},Validform.defaults,settings);
			settings.datatype && $.extend(Validform.util.dataType,settings.datatype);
			
			var brothers=this;
			brothers.tipmsg={w:{}};
			brothers.forms=forms;
			brothers.objects=[];
			
			//创建子对象时不再绑定事件;
			if(inited===true){
				return false;
			}
			
			forms.each(function(){
				//已经绑定事件时跳过，避免事件重复绑定;
				if(this.validform_inited=="inited"){return true;}
				this.validform_inited="inited";
				
				var curform=this;
				curform.settings=$.extend({},settings);
				
				var $this=$(curform);
				
				//防止表单按钮双击提交两次;
				curform.validform_status="normal"; //normal | posting | posted;
				
				//让每个Validform对象都能自定义tipmsg;	
				$this.data("tipmsg",brothers.tipmsg);

				//bind the blur event;
				$this.delegate("[datatype]","blur",function(){
					//判断是否是在提交表单操作时触发的验证请求；
					var subpost=arguments[1];
					Validform.util.check.call(this,$this,subpost);
				});
				
				$this.delegate(":text","keypress",function(event){
					if(event.keyCode==13 && $this.find(":submit").length==0){
						$this.submit();
					}
				});
				
				//点击表单元素，默认文字消失效果;
				//表单元素值比较时的信息提示增强;
				//radio、checkbox提示信息增强;
				//外调插件初始化;
				Validform.util.enhance.call($this,curform.settings.tiptype,curform.settings.usePlugin,curform.settings.tipSweep);
				
				curform.settings.btnSubmit && $this.find(curform.settings.btnSubmit).bind("click",function(){
					$this.trigger("submit");
					return false;
				});
							
				$this.submit(function(){
					var subflag=Validform.util.submitForm.call($this,curform.settings);
					subflag === undef && (subflag=true);
					return subflag;
				});
				
				$this.find("[type='reset']").add($this.find(curform.settings.btnReset)).bind("click",function(){
					Validform.util.resetForm.call($this);
				});
				
			});
			
			//预创建pop box;
			if( settings.tiptype==1 || (settings.tiptype==2 || settings.tiptype==3) && settings.ajaxPost ){		
				creatMsgbox();
			}
		}
		
		Validform.defaults={
			tiptype:1,
			tipSweep:false,
			showAllError:false,
			postonce:false,
			ajaxPost:false
		}
		
		Validform.util={
			dataType:{
				"*":/[\w\W]+/,
				"*6-16":/^[\w\W]{6,16}$/,
				"n":/^\d+$/,
				"n6-16":/^\d{6,16}$/,
				"s":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
				"s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,
				"p":/^[0-9]{6}$/,
				"m":/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
				"e":/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
				"url":/^(\w+:\/\/)?\w+(\.\w+)+.*$/
			},
			
			toString:Object.prototype.toString,
			
			isEmpty:function(val){
				return val==="" || val===$.trim(this.attr("tip"));
			},
			
			getValue:function(obj){
				var inputval,
					curform=this;
					
				if(obj.is(":radio")){
					inputval=curform.find(":radio[name='"+obj.attr("name")+"']:checked").val();
					inputval= inputval===undef ? "" : inputval;
				}else if(obj.is(":checkbox")){
					inputval="";
					curform.find(":checkbox[name='"+obj.attr("name")+"']:checked").each(function(){ 
						inputval +=$(this).val()+','; 
					})
					inputval= inputval===undef ? "" : inputval;
				}else{
					inputval=obj.val();
				}
				inputval=$.trim(inputval);
				
				return Validform.util.isEmpty.call(obj,inputval) ? "" : inputval;
			},
			
			enhance:function(tiptype,usePlugin,tipSweep,addRule){
				var curform=this;
				
				//页面上不存在提示信息的标签时，自动创建;
				curform.find("[datatype]").each(function(){
					if(tiptype==2){
						if($(this).parent().next().find(".Validform_checktip").length==0){
							$(this).parent().next().append("<span class='Validform_checktip' />");
							$(this).siblings(".Validform_checktip").remove();
						}
					}else if(tiptype==3 || tiptype==4){
						if($(this).siblings(".Validform_checktip").length==0){
							$(this).parent().append("<span class='Validform_checktip' />");
							$(this).parent().next().find(".Validform_checktip").remove();
						}
					}
				})
				
				//表单元素值比较时的信息提示增强;
				curform.find("input[recheck]").each(function(){
					//已经绑定事件时跳过;
					if(this.validform_inited=="inited"){return true;}
					this.validform_inited="inited";
					
					var _this=$(this);
					var recheckinput=curform.find("input[name='"+$(this).attr("recheck")+"']");
					recheckinput.bind("keyup",function(){
						if(recheckinput.val()==_this.val() && recheckinput.val() != ""){
							if(recheckinput.attr("tip")){
								if(recheckinput.attr("tip") == recheckinput.val()){return false;}
							}
							_this.trigger("blur");
						}
					}).bind("blur",function(){
						if(recheckinput.val()!=_this.val() && _this.val()!=""){
							if(_this.attr("tip")){
								if(_this.attr("tip") == _this.val()){return false;}	
							}
							_this.trigger("blur");
						}
					});
				});
				
				//hasDefaultText;
				curform.find("[tip]").each(function(){//tip是表单元素的默认提示信息,这是点击清空效果;
					//已经绑定事件时跳过;
					if(this.validform_inited=="inited"){return true;}
					this.validform_inited="inited";
					
					var defaultvalue=$(this).attr("tip");
					var altercss=$(this).attr("altercss");
					$(this).focus(function(){
						if($(this).val()==defaultvalue){
							$(this).val('');
							if(altercss){$(this).removeClass(altercss);}
						}
					}).blur(function(){
						if($.trim($(this).val())===''){
							$(this).val(defaultvalue);
							if(altercss){$(this).addClass(altercss);}
						}
					});
				});
				
				//enhance info feedback for checkbox & radio;
				curform.find(":checkbox[datatype],:radio[datatype]").each(function(){
					//已经绑定事件时跳过;
					if(this.validform_inited=="inited"){return true;}
					this.validform_inited="inited";
					
					var _this=$(this);
					var name=_this.attr("name");
					curform.find("[name='"+name+"']").filter(":checkbox,:radio").bind("click",function(){
						//避免多个事件绑定时的取值滞后问题;
						setTimeout(function(){
							_this.trigger("blur");
						},0);
					});
					
				});
				
				//select multiple;
				curform.find("select[datatype][multiple]").bind("click",function(){
					var _this=$(this);
					setTimeout(function(){
						_this.trigger("blur");
					},0);
				});
				
				//plugins here to start;
				Validform.util.usePlugin.call(curform,usePlugin,tiptype,tipSweep,addRule);
			},
			
			usePlugin:function(plugin,tiptype,tipSweep,addRule){
				/*
					plugin:settings.usePlugin;
					tiptype:settings.tiptype;
					tipSweep:settings.tipSweep;
					addRule:是否在addRule时触发;
				*/

				var curform=this,
					plugin=plugin || {};
				//swfupload;
				if(curform.find("input[plugin='swfupload']").length && typeof(swfuploadhandler) != "undefined"){
					
					var custom={
							custom_settings:{
								form:curform,
								showmsg:function(msg,type,obj){
									Validform.util.showmsg.call(curform,msg,tiptype,{obj:curform.find("input[plugin='swfupload']"),type:type,sweep:tipSweep});	
								}	
							}	
						};

					custom=$.extend(true,{},plugin.swfupload,custom);
					
					curform.find("input[plugin='swfupload']").each(function(n){
						if(this.validform_inited=="inited"){return true;}
						this.validform_inited="inited";
						
						$(this).val("");
						swfuploadhandler.init(custom,n);
					});
					
				}
				
				//datepicker;
				if(curform.find("input[plugin='datepicker']").length && $.fn.datePicker){
					plugin.datepicker=plugin.datepicker || {};
					
					if(plugin.datepicker.format){
						Date.format=plugin.datepicker.format; 
						delete plugin.datepicker.format;
					}
					if(plugin.datepicker.firstDayOfWeek){
						Date.firstDayOfWeek=plugin.datepicker.firstDayOfWeek; 
						delete plugin.datepicker.firstDayOfWeek;
					}

					curform.find("input[plugin='datepicker']").each(function(n){
						if(this.validform_inited=="inited"){return true;}
						this.validform_inited="inited";
						
						plugin.datepicker.callback && $(this).bind("dateSelected",function(){
							var d=new Date( $.event._dpCache[this._dpId].getSelected()[0] ).asString(Date.format);
							plugin.datepicker.callback(d,this);
						});
						$(this).datePicker(plugin.datepicker);
					});
				}
				
				//passwordstrength;
				if(curform.find("input[plugin*='passwordStrength']").length && $.fn.passwordStrength){
					plugin.passwordstrength=plugin.passwordstrength || {};
					plugin.passwordstrength.showmsg=function(obj,msg,type){
						Validform.util.showmsg.call(curform,msg,tiptype,{obj:obj,type:type,sweep:tipSweep});
					};
					
					curform.find("input[plugin='passwordStrength']").each(function(n){
						if(this.validform_inited=="inited"){return true;}
						this.validform_inited="inited";
						
						$(this).passwordStrength(plugin.passwordstrength);
					});
				}
				
				//jqtransform;
				if(addRule!="addRule" && plugin.jqtransform && $.fn.jqTransSelect){
					if(curform[0].jqTransSelected=="true"){return;};
					curform[0].jqTransSelected="true";
					
					var jqTransformHideSelect = function(oTarget){
						var ulVisible = $('.jqTransformSelectWrapper ul:visible');
						ulVisible.each(function(){
							var oSelect = $(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);
							//do not hide if click on the label object associated to the select
							if( !(oTarget && oSelect.oLabel && oSelect.oLabel.get(0) == oTarget.get(0)) ){$(this).hide();}
						});
					};
					
					/* Check for an external click */
					var jqTransformCheckExternalClick = function(event) {
						if ($(event.target).parents('.jqTransformSelectWrapper').length === 0) { jqTransformHideSelect($(event.target)); }
					};
					
					var jqTransformAddDocumentListener = function (){
						$(document).mousedown(jqTransformCheckExternalClick);
					};
					
					if(plugin.jqtransform.selector){
						curform.find(plugin.jqtransform.selector).filter('input:submit, input:reset, input[type="button"]').jqTransInputButton();
						curform.find(plugin.jqtransform.selector).filter('input:text, input:password').jqTransInputText();			
						curform.find(plugin.jqtransform.selector).filter('input:checkbox').jqTransCheckBox();
						curform.find(plugin.jqtransform.selector).filter('input:radio').jqTransRadio();
						curform.find(plugin.jqtransform.selector).filter('textarea').jqTransTextarea();
						if(curform.find(plugin.jqtransform.selector).filter("select").length > 0 ){
							 curform.find(plugin.jqtransform.selector).filter("select").jqTransSelect();
							 jqTransformAddDocumentListener();
						}
						
					}else{
						curform.jqTransform();
					}
					
					curform.find(".jqTransformSelectWrapper").find("li a").click(function(){
						$(this).parents(".jqTransformSelectWrapper").find("select").trigger("blur");	
					});
				}

			},
			
			getNullmsg:function(curform){
				var obj=this;
				var reg=/[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z\s]+/g;
				var nullmsg;
				
				var label=curform[0].settings.label || ".Validform_label";
				label=obj.siblings(label).eq(0).text() || obj.siblings().find(label).eq(0).text() || obj.parent().siblings(label).eq(0).text() || obj.parent().siblings().find(label).eq(0).text();
				label=label.replace(/\s(?![a-zA-Z])/g,"").match(reg);
				label=label? label.join("") : [""];

				reg=/\{(.+)\|(.+)\}/;
				nullmsg=curform.data("tipmsg").s || tipmsg.s;
				
				if(label != ""){
					nullmsg=nullmsg.replace(/\{0\|(.+)\}/,label);
					if(obj.attr("recheck")){
						nullmsg=nullmsg.replace(/\{(.+)\}/,"");
						obj.attr("nullmsg",nullmsg);
						return nullmsg;
					}
				}else{
					nullmsg=obj.is(":checkbox,:radio,select") ? nullmsg.replace(/\{0\|(.+)\}/,"") : nullmsg.replace(/\{0\|(.+)\}/,"$1");
				}
				nullmsg=obj.is(":checkbox,:radio,select") ? nullmsg.replace(reg,"$2") : nullmsg.replace(reg,"$1");
				
				obj.attr("nullmsg",nullmsg);
				return nullmsg;
			},
			
			getErrormsg:function(curform,datatype,recheck){
				var regxp=/^(.+?)((\d+)-(\d+))?$/,
					regxp2=/^(.+?)(\d+)-(\d+)$/,
					regxp3=/(.*?)\d+(.+?)\d+(.*)/,
					mac=datatype.match(regxp),
					temp,str;
				
				//如果是值不一样而报错;
				if(recheck=="recheck"){
					str=curform.data("tipmsg").reck || tipmsg.reck;
					return str;
				}
				
				var tipmsg_w_ex=$.extend({},tipmsg.w,curform.data("tipmsg").w);
				
				//如果原来就有，直接显示该项的提示信息;
				if(mac[0] in tipmsg_w_ex){
					return curform.data("tipmsg").w[mac[0]] || tipmsg.w[mac[0]];
				}
				
				//没有的话在提示对象里查找相似;
				for(var name in tipmsg_w_ex){
					if(name.indexOf(mac[1])!=-1 && regxp2.test(name)){
						str=(curform.data("tipmsg").w[name] || tipmsg.w[name]).replace(regxp3,"$1"+mac[3]+"$2"+mac[4]+"$3");
						curform.data("tipmsg").w[mac[0]]=str;
						
						return str;
					}
					
				}
				
				return curform.data("tipmsg").def || tipmsg.def;
			},

			_regcheck:function(datatype,gets,obj,curform){
				var curform=curform,
					info=null,
					passed=false,
					reg=/\/.+\//g,
					regex=/^(.+?)(\d+)-(\d+)$/,
					type=3;//default set to wrong type, 2,3,4;
					
				//datatype有三种情况：正则，函数和直接绑定的正则;
				
				//直接是正则;
				if(reg.test(datatype)){
					var regstr=datatype.match(reg)[0].slice(1,-1);
					var param=datatype.replace(reg,"");
					var rexp=RegExp(regstr,param);

					passed=rexp.test(gets);

				//function;
				}else if(Validform.util.toString.call(Validform.util.dataType[datatype])=="[object Function]"){
					passed=Validform.util.dataType[datatype](gets,obj,curform,Validform.util.dataType);
					if(passed === true || passed===undef){
						passed = true;
					}else{
						info= passed;
						passed=false;
					}
				
				//自定义正则;	
				}else{
					//自动扩展datatype;
					if(!(datatype in Validform.util.dataType)){
						var mac=datatype.match(regex),
							temp;
							
						if(!mac){
							passed=false;
							info=curform.data("tipmsg").undef||tipmsg.undef;
						}else{
							for(var name in Validform.util.dataType){
								temp=name.match(regex);
								if(!temp){continue;}
								if(mac[1]===temp[1]){
									var str=Validform.util.dataType[name].toString(),
										param=str.match(/\/[mgi]*/g)[1].replace("\/",""),
										regxp=new RegExp("\\{"+temp[2]+","+temp[3]+"\\}","g");
									str=str.replace(/\/[mgi]*/g,"\/").replace(regxp,"{"+mac[2]+","+mac[3]+"}").replace(/^\//,"").replace(/\/$/,"");
									Validform.util.dataType[datatype]=new RegExp(str,param);
									break;
								}	
							}
						}
					}
					
					if(Validform.util.toString.call(Validform.util.dataType[datatype])=="[object RegExp]"){
						passed=Validform.util.dataType[datatype].test(gets);
					}
						
				}
				
				
				if(passed){
					type=2;
					info=obj.attr("sucmsg") || curform.data("tipmsg").r||tipmsg.r;
					
					//规则验证通过后，还需要对绑定recheck的对象进行值比较;
					if(obj.attr("recheck")){
						var theother=curform.find("input[name='"+obj.attr("recheck")+"']:first");
						if(gets!=theother.val()){
							passed=false;
							type=3;
							info=obj.attr("errormsg")  || Validform.util.getErrormsg.call(obj,curform,datatype,"recheck");
						}
					}
				}else{
					info=info || obj.attr("errormsg") || Validform.util.getErrormsg.call(obj,curform,datatype);
					
					//验证不通过且为空时;
					if(Validform.util.isEmpty.call(obj,gets)){
						info=obj.attr("nullmsg") || Validform.util.getNullmsg.call(obj,curform);
					}
				}
				
				return{
						passed:passed,
						type:type,
						info:info
				};
				
			},
			
			regcheck:function(datatype,gets,obj){
				/*
					datatype:datatype;
					gets:inputvalue;
					obj:input object;
				*/
				var curform=this,
					info=null,
					passed=false,
					type=3;//default set to wrong type, 2,3,4;
					
				//ignore;
				if(obj.attr("ignore")==="ignore" && Validform.util.isEmpty.call(obj,gets)){				
					if(obj.data("cked")){
						info="";	
					}
					
					return {
						passed:true,
						type:4,
						info:info
					};
				}

				obj.data("cked","cked");//do nothing if is the first time validation triggered;
				
				var dtype=Validform.util.parseDatatype(datatype);
				var res;
				for(var eithor=0; eithor<dtype.length; eithor++){
					for(var dtp=0; dtp<dtype[eithor].length; dtp++){
						res=Validform.util._regcheck(dtype[eithor][dtp],gets,obj,curform);
						if(!res.passed){
							break;
						}
					}
					if(res.passed){
						break;
					}
				}
				return res;
				
			},
			
			parseDatatype:function(datatype){
				/*
					字符串里面只能含有一个正则表达式;
					Datatype名称必须是字母，数字、下划线或*号组成;
					datatype="/regexp/|phone|tel,s,e|f,e";
					==>[["/regexp/"],["phone"],["tel","s","e"],["f","e"]];
				*/

				var reg=/\/.+?\/[mgi]*(?=(,|$|\||\s))|[\w\*-]+/g,
					dtype=datatype.match(reg),
					sepor=datatype.replace(reg,"").replace(/\s*/g,"").split(""),
					arr=[],
					m=0;
					
				arr[0]=[];
				arr[0].push(dtype[0]);
				for(var n=0;n<sepor.length;n++){
					if(sepor[n]=="|"){
						m++;
						arr[m]=[];
					}
					arr[m].push(dtype[n+1]);
				}
				
				return arr;
			},

			showmsg:function(msg,type,o,triggered){
				/*
					msg:提示文字;
					type:提示信息显示方式;
					o:{obj:当前对象, type:1=>正在检测 | 2=>通过, sweep:true | false}, 
					triggered:在blur或提交表单触发的验证中，有些情况不需要显示提示文字，如自定义弹出提示框的显示方式，不需要每次blur时就马上弹出提示;
					
					tiptype:1\2\3时都有坑能会弹出自定义提示框
					tiptype:1时在triggered bycheck时不弹框
					tiptype:2\3时在ajax时弹框
					tipSweep为true时在triggered bycheck时不触发showmsg，但ajax出错的情况下要提示
				*/
				
				//如果msg为undefined，那么就没必要执行后面的操作，ignore有可能会出现这情况;
				if(msg==undef){return;}
				
				//tipSweep为true，且当前不是处于错误状态时，blur事件不触发信息显示;
				if(triggered=="bycheck" && o.sweep && (o.obj && !o.obj.is(".Validform_error") || typeof type == "function")){return;}

				$.extend(o,{curform:this});
					
				if(typeof type == "function"){
					type(msg,o,Validform.util.cssctl);
					return;
				}
				
				if(type==1 || triggered=="byajax" && type!=4){
					msgobj.find(".Validform_info").html(msg);
				}
				
				//tiptypt=1时，blur触发showmsg，验证是否通过都不弹框，提交表单触发的话，只要验证出错，就弹框;
				if(type==1 && triggered!="bycheck" && o.type!=2 || triggered=="byajax" && type!=4){
					msghidden=false;
					msgobj.find(".iframe").css("height",msgobj.outerHeight());
					msgobj.show();
					setCenter(msgobj,100);
				}

				if(type==2 && o.obj){
					o.obj.parent().next().find(".Validform_checktip").html(msg);
					Validform.util.cssctl(o.obj.parent().next().find(".Validform_checktip"),o.type);
				}
				
				if((type==3 || type==4) && o.obj){
					o.obj.siblings(".Validform_checktip").html(msg);
					Validform.util.cssctl(o.obj.siblings(".Validform_checktip"),o.type);
				}

			},

			cssctl:function(obj,status){
				switch(status){
					case 1:
						obj.removeClass("Validform_right Validform_wrong").addClass("Validform_checktip Validform_loading");//checking;
						break;
					case 2:
						obj.removeClass("Validform_wrong Validform_loading").addClass("Validform_checktip Validform_right");//passed;
						break;
					case 4:
						obj.removeClass("Validform_right Validform_wrong Validform_loading").addClass("Validform_checktip");//for ignore;
						break;
					default:
						obj.removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");//wrong;
				}
			},
			
			check:function(curform,subpost,bool){
				/*
					检测单个表单元素;
					验证通过返回true，否则返回false、实时验证返回值为ajax;
					bool，传入true则只检测不显示提示信息;
				*/
				var settings=curform[0].settings;
				var subpost=subpost || "";
				var inputval=Validform.util.getValue.call(curform,$(this));
				
				//隐藏或绑定dataIgnore的表单对象不做验证;
				if(settings.ignoreHidden && $(this).is(":hidden") || $(this).data("dataIgnore")==="dataIgnore"){
					return true;
				}
				
				//dragonfly=true时，没有绑定ignore，值为空不做验证，但验证不通过;
				if(settings.dragonfly && !$(this).data("cked") && Validform.util.isEmpty.call($(this),inputval) && $(this).attr("ignore")!="ignore"){
					return false;
				}
				
				var flag=Validform.util.regcheck.call(curform,$(this).attr("datatype"),inputval,$(this));
				
				//值没变化不做检测，这时要考虑recheck情况;
				//不是在提交表单时触发的ajax验证;
				if(inputval==this.validform_lastval && !$(this).attr("recheck") && subpost==""){
					return flag.passed ? true : false;
				}

				this.validform_lastval=inputval;//存储当前值;
				
				var _this;
				errorobj=_this=$(this);
				
				if(!flag.passed){
					//取消正在进行的ajax验证;
					Validform.util.abort.call(_this[0]);
					
					if(!bool){
						//传入"bycheck"，指示当前是check方法里调用的，当tiptype=1时，blur事件不让触发错误信息显示;
						Validform.util.showmsg.call(curform,flag.info,settings.tiptype,{obj:$(this),type:flag.type,sweep:settings.tipSweep},"bycheck");
						
						!settings.tipSweep && _this.addClass("Validform_error");
					}
					return false;
				}
				
				//验证通过的话，如果绑定有ajaxurl，要执行ajax检测;
				//当ignore="ignore"时，为空值可以通过验证，这时不需要ajax检测;
				var ajaxurl=$(this).attr("ajaxurl");
				if(ajaxurl && !Validform.util.isEmpty.call($(this),inputval) && !bool){
					var inputobj=$(this);

					//当提交表单时，表单中的某项已经在执行ajax检测，这时需要让该项ajax结束后继续提交表单;
					if(subpost=="postform"){
						inputobj[0].validform_subpost="postform";
					}else{
						inputobj[0].validform_subpost="";
					}
					
					if(inputobj[0].validform_valid==="posting" && inputval==inputobj[0].validform_ckvalue){return "ajax";}
					
					inputobj[0].validform_valid="posting";
					inputobj[0].validform_ckvalue=inputval;
					Validform.util.showmsg.call(curform,curform.data("tipmsg").c||tipmsg.c,settings.tiptype,{obj:inputobj,type:1,sweep:settings.tipSweep},"bycheck");
					
					Validform.util.abort.call(_this[0]);
					
					var ajaxsetup=$.extend(true,{},settings.ajaxurl || {});
									
					var localconfig={
						type: "POST",
						cache:false,
						url: ajaxurl,
						data: "param="+encodeURIComponent(inputval)+"&name="+encodeURIComponent($(this).attr("name")),
						success: function(data){
							if($.trim(data.status)==="y"){
								inputobj[0].validform_valid="true";
								data.info && inputobj.attr("sucmsg",data.info);
								Validform.util.showmsg.call(curform,inputobj.attr("sucmsg") || curform.data("tipmsg").r||tipmsg.r,settings.tiptype,{obj:inputobj,type:2,sweep:settings.tipSweep},"bycheck");
								_this.removeClass("Validform_error");
								errorobj=null;
								if(inputobj[0].validform_subpost=="postform"){
									curform.trigger("submit");
								}
							}else{
								inputobj[0].validform_valid=data.info;
								Validform.util.showmsg.call(curform,data.info,settings.tiptype,{obj:inputobj,type:3,sweep:settings.tipSweep});
								_this.addClass("Validform_error");
							}
							_this[0].validform_ajax=null;
						},
						error: function(data){
							if(data.status=="200"){
								if(data.responseText=="y"){
									ajaxsetup.success({"status":"y"});
								}else{
									ajaxsetup.success({"status":"n","info":data.responseText});	
								}
								return false;
							}
							
							//正在检测时，要检测的数据发生改变，这时要终止当前的ajax。不是这种情况引起的ajax错误，那么显示相关错误信息;
							if(data.statusText!=="abort"){
								var msg="status: "+data.status+"; statusText: "+data.statusText;
							
								Validform.util.showmsg.call(curform,msg,settings.tiptype,{obj:inputobj,type:3,sweep:settings.tipSweep});
								_this.addClass("Validform_error");
							}
							
							inputobj[0].validform_valid=data.statusText;
							_this[0].validform_ajax=null;
							
							//localconfig.error返回true表示还需要执行temp_err;
							return true;
						}
					}
					
					if(ajaxsetup.success){
						var temp_suc=ajaxsetup.success;
						ajaxsetup.success=function(data){
							localconfig.success(data);
							temp_suc(data,inputobj);
						}
					}
					
					if(ajaxsetup.error){
						var temp_err=ajaxsetup.error;
						ajaxsetup.error=function(data){
							//localconfig.error返回false表示不需要执行temp_err;
							localconfig.error(data) && temp_err(data,inputobj);
						}	
					}

					ajaxsetup=$.extend({},localconfig,ajaxsetup,{dataType:"json"});
					_this[0].validform_ajax=$.ajax(ajaxsetup);
					
					return "ajax";
				}else if(ajaxurl && Validform.util.isEmpty.call($(this),inputval)){
					Validform.util.abort.call(_this[0]);
					_this[0].validform_valid="true";
				}
				
				if(!bool){
					Validform.util.showmsg.call(curform,flag.info,settings.tiptype,{obj:$(this),type:flag.type,sweep:settings.tipSweep},"bycheck");
					_this.removeClass("Validform_error");
				}
				errorobj=null;
				
				return true;
			
			},
			
			submitForm:function(settings,flg,url,ajaxPost,sync){
				/*
					flg===true时跳过验证直接提交;
					ajaxPost==="ajaxPost"指示当前表单以ajax方式提交;
				*/
				var curform=this;
				
				//表单正在提交时点击提交按钮不做反应;
				if(curform[0].validform_status==="posting"){return false;}
				
				//要求只能提交一次时;
				if(settings.postonce && curform[0].validform_status==="posted"){return false;}
				
				var beforeCheck=settings.beforeCheck && settings.beforeCheck(curform);
				if(beforeCheck===false){return false;}
				
				var flag=true,
					inflag;
					
				curform.find("[datatype]").each(function(){
					//跳过验证;
					if(flg){
						return false;
					}
					
					//隐藏或绑定dataIgnore的表单对象不做验证;
					if(settings.ignoreHidden && $(this).is(":hidden") || $(this).data("dataIgnore")==="dataIgnore"){
						return true;
					}
					
					var inputval=Validform.util.getValue.call(curform,$(this)),
						_this;
					errorobj=_this=$(this);
					
					inflag=Validform.util.regcheck.call(curform,$(this).attr("datatype"),inputval,$(this));
					
					if(!inflag.passed){
						Validform.util.showmsg.call(curform,inflag.info,settings.tiptype,{obj:$(this),type:inflag.type,sweep:settings.tipSweep});
						_this.addClass("Validform_error");
						
						if(!settings.showAllError){
							_this.focus();
							flag=false;
							return false;
						}
						
						flag && (flag=false);
						return true;
					}
					
					//当ignore="ignore"时，为空值可以通过验证，这时不需要ajax检测;
					if($(this).attr("ajaxurl") && !Validform.util.isEmpty.call($(this),inputval)){
						if(this.validform_valid!=="true"){
							var thisobj=$(this);
							Validform.util.showmsg.call(curform,curform.data("tipmsg").v||tipmsg.v,settings.tiptype,{obj:thisobj,type:3,sweep:settings.tipSweep});
							_this.addClass("Validform_error");
							
							thisobj.trigger("blur",["postform"]);//continue the form post;
							
							if(!settings.showAllError){
								flag=false;
								return false;
							}
							
							flag && (flag=false);
							return true;
						}
					}else if($(this).attr("ajaxurl") && Validform.util.isEmpty.call($(this),inputval)){
						Validform.util.abort.call(this);
						this.validform_valid="true";
					}

					Validform.util.showmsg.call(curform,inflag.info,settings.tiptype,{obj:$(this),type:inflag.type,sweep:settings.tipSweep});
					_this.removeClass("Validform_error");
					errorobj=null;
				});
				
				if(settings.showAllError){
					curform.find(".Validform_error:first").focus();
				}

				if(flag){
					var beforeSubmit=settings.beforeSubmit && settings.beforeSubmit(curform);
					if(beforeSubmit===false){return false;}
					
					curform[0].validform_status="posting";
								
					if(settings.ajaxPost || ajaxPost==="ajaxPost"){
						//获取配置参数;
						var ajaxsetup=$.extend(true,{},settings.ajaxpost || {});
						//有可能需要动态的改变提交地址，所以把action所指定的url层级设为最低;
						ajaxsetup.url=url || ajaxsetup.url || settings.url || curform.attr("action");
						
						//byajax：ajax时，tiptye为1、2或3需要弹出提示框;
						Validform.util.showmsg.call(curform,curform.data("tipmsg").p||tipmsg.p,settings.tiptype,{obj:curform,type:1,sweep:settings.tipSweep},"byajax");

						//方法里的优先级要高;
						//有undefined情况;
						if(sync){
							ajaxsetup.async=false;
						}else if(sync===false){
							ajaxsetup.async=true;
						}
						
						if(ajaxsetup.success){
							var temp_suc=ajaxsetup.success;
							ajaxsetup.success=function(data){
								settings.callback && settings.callback(data);
								curform[0].validform_ajax=null;
								if($.trim(data.status)==="y"){
									curform[0].validform_status="posted";
								}else{
									curform[0].validform_status="normal";
								}
								
								temp_suc(data,curform);
							}
						}
						
						if(ajaxsetup.error){
							var temp_err=ajaxsetup.error;
							ajaxsetup.error=function(data){
								settings.callback && settings.callback(data);
								curform[0].validform_status="normal";
								curform[0].validform_ajax=null;
								
								temp_err(data,curform);
							}	
						}
						
						var localconfig={
							type: "POST",
							async:true,
							data: curform.serializeArray(),
							success: function(data){
								if($.trim(data.status)==="y"){
									//成功提交;
									curform[0].validform_status="posted";
									Validform.util.showmsg.call(curform,data.info,settings.tiptype,{obj:curform,type:2,sweep:settings.tipSweep},"byajax");
								}else{
									//提交出错;
									curform[0].validform_status="normal";
									Validform.util.showmsg.call(curform,data.info,settings.tiptype,{obj:curform,type:3,sweep:settings.tipSweep},"byajax");
								}
								
								settings.callback && settings.callback(data);
								curform[0].validform_ajax=null;
							},
							error: function(data){
								var msg="status: "+data.status+"; statusText: "+data.statusText;
										
								Validform.util.showmsg.call(curform,msg,settings.tiptype,{obj:curform,type:3,sweep:settings.tipSweep},"byajax");
								
								settings.callback && settings.callback(data);
								curform[0].validform_status="normal";
								curform[0].validform_ajax=null;
							}
						}
						
						ajaxsetup=$.extend({},localconfig,ajaxsetup,{dataType:"json"});
						
						curform[0].validform_ajax=$.ajax(ajaxsetup);

					}else{
						if(!settings.postonce){
							curform[0].validform_status="normal";
						}
						
						var url=url || settings.url;
						if(url){
							curform.attr("action",url);
						}
						
						return settings.callback && settings.callback(curform);
					}
				}
				
				return false;
				
			},
			
			resetForm:function(){
				var brothers=this;
				brothers.each(function(){
					this.reset && this.reset();
					this.validform_status="normal";
				});
				
				brothers.find(".Validform_right").text("");
				brothers.find(".passwordStrength").children().removeClass("bgStrength");
				brothers.find(".Validform_checktip").removeClass("Validform_wrong Validform_right Validform_loading");
				brothers.find(".Validform_error").removeClass("Validform_error");
				brothers.find("[datatype]").removeData("cked").removeData("dataIgnore").each(function(){
					this.validform_lastval=null;
				});
				brothers.eq(0).find("input:first").focus();
			},
			
			abort:function(){
				if(this.validform_ajax){
					this.validform_ajax.abort();	
				}
			}
			
		}
		
		$.Datatype=Validform.util.dataType;
		
		Validform.prototype={
			dataType:Validform.util.dataType,
			
			eq:function(n){
				var obj=this;
				
				if(n>=obj.forms.length){
					return null;	
				}
				
				if(!(n in obj.objects)){
					obj.objects[n]=new Validform($(obj.forms[n]).get(),{},true);
				}
				
				return obj.objects[n];

			},
			
			resetStatus:function(){
				var obj=this;
				$(obj.forms).each(function(){
					this.validform_status="normal";	
				});
				
				return this;
			},
			
			setStatus:function(status){
				var obj=this;
				$(obj.forms).each(function(){
					this.validform_status=status || "posting";	
				});
				
				return this;
			},
			
			getStatus:function(){
				var obj=this;
				var status=$(obj.forms)[0].validform_status;
				
				return status;
			},
			
			ignore:function(selector){
				var obj=this;
				var selector=selector || "[datatype]"
				
				$(obj.forms).find(selector).each(function(){
					$(this).data("dataIgnore","dataIgnore").removeClass("Validform_error");
				});
				
				return this;
			},
			
			unignore:function(selector){
				var obj=this;
				var selector=selector || "[datatype]"
				
				$(obj.forms).find(selector).each(function(){
					$(this).removeData("dataIgnore");
				});
				
				return this;
			},
			
			addRule:function(rule){
				/*
					rule => [{
						ele:"#id",
						datatype:"*",
						errormsg:"出错提示文字！",
						nullmsg:"为空时的提示文字！",
						tip:"默认显示的提示文字",
						altercss:"gray",
						ignore:"ignore",
						ajaxurl:"valid.php",
						recheck:"password",
						plugin:"passwordStrength"
					},{},{},...]
				*/
				var obj=this;
				var rule=rule || [];
				
				for(var index=0; index<rule.length; index++){
					var o=$(obj.forms).find(rule[index].ele);
					for(var attr in rule[index]){
						attr !=="ele" && o.attr(attr,rule[index][attr]);
					}
				}
				
				$(obj.forms).each(function(){
					var $this=$(this);
					Validform.util.enhance.call($this,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep,"addRule");
				});
				
				return this;
			},
			
			ajaxPost:function(flag,sync,url){
				var obj=this;
				
				$(obj.forms).each(function(){
					//创建pop box;
					if( this.settings.tiptype==1 || this.settings.tiptype==2 || this.settings.tiptype==3 ){
						creatMsgbox();
					}
					
					Validform.util.submitForm.call($(obj.forms[0]),this.settings,flag,url,"ajaxPost",sync);
				});
				
				return this;
			},
			
			submitForm:function(flag,url){
				/*flag===true时不做验证直接提交*/
				

				var obj=this;
				
				$(obj.forms).each(function(){
					var subflag=Validform.util.submitForm.call($(this),this.settings,flag,url);
					subflag === undef && (subflag=true);
					if(subflag===true){
						this.submit();
					}
				});
				
				return this;
			},
			
			resetForm:function(){
				var obj=this;
				Validform.util.resetForm.call($(obj.forms));
				
				return this;
			},
			
			abort:function(){
				var obj=this;
				$(obj.forms).each(function(){
					Validform.util.abort.call(this);
				});
				
				return this;
			},
			
			check:function(bool,selector){
				/*
					bool：传入true，只检测不显示提示信息;
				*/
				
				var selector=selector || "[datatype]",
					obj=this,
					curform=$(obj.forms),
					flag=true;
				
				curform.find(selector).each(function(){
					Validform.util.check.call(this,curform,"",bool) || (flag=false);
				});
				
				return flag;
			},
			
			config:function(setup){
			/*
				config={
					url:"ajaxpost.php",//指定了url后，数据会提交到这个地址;
					ajaxurl:{
						timeout:1000,
						...
					},
					ajaxpost:{
						timeout:1000,
						...
					}
				}
			*/
				var obj=this;
				setup=setup || {};
				$(obj.forms).each(function(){
					var $this=$(this);
					this.settings=$.extend(true,this.settings,setup);
					Validform.util.enhance.call($this,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep);
				});
				
				return this;
			}
		}

		$.fn.Validform=function(settings){
			return new Validform(this,settings);
		};
		
		function setCenter(obj,time){
			var left=($(window).width()-obj.outerWidth())/2,
				top=($(window).height()-obj.outerHeight())/2,
				
			top=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(top>0?top:0);

			obj.css({
				left:left
			}).animate({
				top : top
			},{ duration:time , queue:false });
		}
		
		function creatMsgbox(){
			if($("#Validform_msg").length!==0){return false;}
			msgobj=$('<div id="Validform_msg"><div class="Validform_title">'+tipmsg.tit+'<a class="Validform_close" href="javascript:void(0);">&chi;</a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%"></iframe></div></div>').appendTo("body");//提示信息框;
			msgobj.find("a.Validform_close").click(function(){
				msgobj.hide();
				msghidden=true;
				if(errorobj){
					errorobj.focus().addClass("Validform_error");
				}
				return false;
			}).focus(function(){this.blur();});

			$(window).bind("scroll resize",function(){
				!msghidden && setCenter(msgobj,400);
			});
		};
		
		//公用方法显示&关闭信息提示框;
		$.Showmsg=function(msg){
			creatMsgbox();
			Validform.util.showmsg.call(win,msg,1,{});
		};
		
		$.Hidemsg=function(){
			msgobj.hide();
			msghidden=true;
		};
		
	})(jQuery,window);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * echarts 百度地图扩展，必须在echarts初始化前使用
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Neil (杨骥, 511415343@qq.com)
	 */
	(function(global,factory){
	     true ? module.exports = factory() :
	        typeof define === 'function' && define.amd ? define(factory) :
	            (global.BMapExt = factory());
	}(this,function(){

	    /**
	     * 构造函数
	     *
	     * @param {String|HTMLElement|BMap.Map} obj
	     * @param {BMap} BMap
	     * @param {echarts} ec
	     * @parma {Object=} mapOption 百度地图初始化选项
	     * @constructor
	     */
	    function BMapExt(obj, BMap, ec, mapOption) {
	        this._init(obj, BMap, ec, mapOption);
	    };

	    /**
	     * echarts 容器元素
	     *
	     * @type {HTMLElement}
	     * @private
	     */
	    BMapExt.prototype._echartsContainer = null;

	    /**
	     * 百度地图实例
	     *
	     * @type {BMap.Map}
	     * @private
	     */
	    BMapExt.prototype._map = null;

	    /**
	     * 使用的echarts实例
	     *
	     * @type {ECharts}
	     * @private
	     */
	    BMapExt.prototype._ec = null;

	    /**
	     * geoCoord
	     *
	     * @type {Object}
	     * @private
	     */
	    BMapExt.prototype._geoCoord = [];

	    /**
	     * 记录地图的便宜量
	     *
	     * @type {Array.<number>}
	     * @private
	     */
	    BMapExt.prototype._mapOffset = [0, 0];


	    /**
	     * 初始化方法
	     *
	     * @param {String|HTMLElement|BMap.Map} obj
	     * @param {BMap} BMap
	     * @param {echarts} ec
	     * @private
	     */
	    BMapExt.prototype._init = function (obj, BMap, ec, mapOption) {
	        var self = this;
	        self._map = obj.constructor == BMap.Map ? obj : new BMap.Map(obj, mapOption);

	        /**
	         * Overlay类,用来生成覆盖物
	         *
	         * @constructor
	         * @extends BMap.Overlay
	         */
	        function Overlay() {}

	        Overlay.prototype = new BMap.Overlay();

	        /**
	         * 初始化
	         *
	         * @param {BMap.Map} map
	         * @override
	         */
	        Overlay.prototype.initialize = function (map) {
	            var size = map.getSize();
	            var div = self._echartsContainer = document.createElement('div');
	            div.style.position = 'absolute';
	            div.style.height = size.height + 'px';
	            div.style.width = size.width + 'px';
	            div.style.top = 0;
	            div.style.left = 0;
	            map.getPanes().labelPane.appendChild(div);
	            return div;
	        };

	        /**
	         * @override
	         */
	        Overlay.prototype.draw = function () {};

	        var myOverlay = new Overlay();

	        /**
	         * 获取echarts容器
	         *
	         * @return {HTMLElement}
	         * @public
	         */
	        self.getEchartsContainer = function () {
	            return self._echartsContainer;
	        };

	        /**
	         * 获取map实例
	         *
	         * @return {BMap.Map}
	         * @public
	         */
	        self.getMap = function () {
	            return self._map;
	        }

	        /**
	         * 自定义拖拽事件
	         */
	        self.onmoving = null;
	        self.onmoveend = null;

	        /**
	         * 自定义缩放事件
	         */
	        self.onzoom = null;

	        /**
	         * 经纬度转换为屏幕像素
	         *
	         * @param {Array.<number>} geoCoord  经纬度
	         * @return {Array.<number>}
	         * @public
	         */
	        self.geoCoord2Pixel = function (geoCoord) {
	            var point = new BMap.Point(geoCoord[0], geoCoord[1]);
	            var pos = self._map.pointToOverlayPixel(point);
	            return [pos.x, pos.y];
	        };

	        /**
	         * 屏幕像素转换为经纬度
	         *
	         * @param {Array.<number>} pixel  像素坐标
	         * @return {Array.<number>}
	         * @public
	         */
	        self.pixel2GeoCoord = function (pixel) {
	            var point = self._map.overlayPixelToPoint({
	                x: pixel[0],
	                y: pixel[1]
	            });
	            return [point.lng, point.lat];
	        };

	        /**
	         * 初始化echarts实例
	         *
	         * @return {ECharts}
	         * @public
	         */
	        self.initECharts = function () {
	            self._ec = ec.init.apply(self, arguments);
	            self._bindEvent();
	            self._addMarkWrap();
	            return self._ec;
	        };

	        // addMark wrap for get position from baidu map by geo location
	        // by kener at 2015.01.08
	        self._addMarkWrap = function () {
	            function _addMark (seriesIdx, markData, markType) {
	                var data;
	                if (markType == 'markPoint') {
	                    var data = markData.data;
	                    if (data && data.length) {
	                        for (var k = 0, len = data.length; k < len; k++) {
	                            self._AddPos(data[k]);
	                        }
	                    }
	                }
	                else {
	                    data = markData.data;
	                    if (data && data.length) {
	                        for (var k = 0, len = data.length; k < len; k++) {
	                            self._AddPos(data[k][0]);
	                            self._AddPos(data[k][1]);
	                        }
	                    }
	                }
	                self._ec._addMarkOri(seriesIdx, markData, markType);
	            }
	            self._ec._addMarkOri = self._ec._addMark;
	            self._ec._addMark = _addMark;
	        };

	        /**
	         * 获取ECharts实例
	         *
	         * @return {ECharts}
	         * @public
	         */
	        self.getECharts = function () {
	            return self._ec;
	        };

	        /**
	         * 获取地图的偏移量
	         *
	         * @return {Array.<number>}
	         * @public
	         */
	        self.getMapOffset = function () {
	            return self._mapOffset;
	        };

	        /**
	         * 对echarts的setOption加一次处理
	         * 用来为markPoint、markLine中添加x、y坐标，需要name与geoCoord对应
	         *
	         * @param {Object}
	         * @public
	         */
	        self.setOption = function (option, notMerge) {
	            var series = option.series || {};

	            // 记录所有的geoCoord
	            for (var i = 0, item; item = series[i++];) {
	                var geoCoord = item.geoCoord;
	                if (geoCoord) {
	                    for (var k in geoCoord) {
	                        self._geoCoord[k] = geoCoord[k];
	                    }
	                }
	            }

	            // 添加x、y
	            for (var i = 0, item; item = series[i++];) {
	                var markPoint = item.markPoint || {};
	                var markLine = item.markLine || {};

	                var data = markPoint.data;
	                if (data && data.length) {
	                    for (var k = 0, len = data.length; k < len; k++) {
	                        self._AddPos(data[k]);
	                    }
	                }

	                data = markLine.data;
	                if (data && data.length) {
	                    for (var k = 0, len = data.length; k < len; k++) {
	                        self._AddPos(data[k][0]);
	                        self._AddPos(data[k][1]);
	                    }
	                }
	            }

	            self._ec.setOption(option, notMerge);
	        }

	        /**
	         * 增加x、y坐标
	         *
	         * @param {Object} obj  markPoint、markLine data中的项，必须有name
	         * @param {Object} geoCoord
	         */
	        self._AddPos = function (obj) {
	            var coord = this._geoCoord[obj.name]
	            var pos = this.geoCoord2Pixel(coord);
	            obj.x = pos[0] - self._mapOffset[0];
	            obj.y = pos[1] - self._mapOffset[1];
	        };

	        /**
	         * 绑定地图事件的处理方法
	         *
	         * @private
	         */
	        self._bindEvent = function () {
	            self._map.addEventListener('zoomend', _zoomChangeHandler);

	            self._map.addEventListener('moving', _moveHandler('moving'));
	            self._map.addEventListener('moveend', _moveHandler('moveend'));

	            self._ec.getZrender().on('dragstart', _dragZrenderHandler(true));
	            self._ec.getZrender().on('dragend', _dragZrenderHandler(false));
	        }

	        /**
	         * 地图缩放触发事件
	         *
	         * @private
	         */
	        function _zoomChangeHandler() {
	            _fireEvent('zoom');
	        }

	        /**
	         * 地图移动、如拖拽触发事件
	         *
	         * @param {string} type moving | moveend  移动中|移动结束
	         * @return {Function}
	         * @private
	         */
	        function _moveHandler(type) {
	            return function () {
	                // 记录便宜量
	                var offsetEle =
	                    self._echartsContainer.parentNode.parentNode.parentNode;
	                self._mapOffset = [
	                    - parseInt(offsetEle.style.left) || 0,
	                    - parseInt(offsetEle.style.top) || 0
	                ];
	                self._echartsContainer.style.left = self._mapOffset[0] + 'px';
	                self._echartsContainer.style.top = self._mapOffset[1] + 'px';

	                _fireEvent(type);
	            }
	        }

	        /**
	         * Zrender拖拽触发事件
	         *
	         * @param {boolean} isStart
	         * @return {Function}
	         * @private
	         */
	        function _dragZrenderHandler(isStart) {
	            return function () {
	                var func = isStart ? 'disableDragging' : 'enableDragging';
	                self._map[func]();
	            }
	        }

	        /**
	         * 触发事件
	         *
	         * @param {stirng}  type 事件类型
	         * @private
	         */
	        function _fireEvent(type) {
	            var func = self['on' + type];
	            if (func) {
	                func();
	            } else {
	                self.refresh();
	            }
	        }

	        /**
	         * 刷新页面
	         *
	         * @public
	         */
	        self.refresh = function () {
	            if (self._ec) {
	                var option = self._ec.getOption();
	                var component = self._ec.component || {};
	                var legend = component.legend;
	                var dataRange = component.dataRange;

	                if (legend) {
	                    option.legend.selected = legend.getSelectedMap();
	                }

	                if (dataRange) {
	                    option.dataRange.range = dataRange._range;
	                }
	                self._ec.clear();
	                self.setOption(option);
	            }
	        };

	        self._map.addOverlay(myOverlay);
	    };

	    return BMapExt;
	}));

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var serviceHost = 'http://img.9cfcf.com';
	var localChartDataName = '/chartData.json'; 
	var echarts = __webpack_require__(3);
	exports.charts = {   
	    localData:null,
	    init: function(params) {

	        if (!params || !params.container || !params.id) {
	            console.log("参数有误");
	            return null;
	        }

	        //图表容器
	        var $container = $.type(params.container) == "string" ?
	            $("#" + params.container) : $(params.container);
	        if ($container.length == 0) {
	            console.log("图表容器" + params.container + "不存在");
	            return null;
	        }

	        var myChart = echarts.init($container[0]);

	        setOptions(myChart, params);
	        return myChart;
	    }
	};
	try{
	     $.ajax({ //获取本地图表数据
	        type: 'GET',
	        url: localChartDataName,
	        success: function(data) {
	           exports.charts.localData=eval(data);
	           console.log(exports.charts.localData)
	        },
	        error: function(e) {        
	        },
	        async: false
	    });
	}catch(e){
	    console.log(e);
	}



	//设置图表option
	function setOptions(myChart, params) {

	    if(!params.useOnline && exports.charts.localData)
	    {
	        useLocalData(myChart, params);
	    }
	    else
	    {
	        useOnlineData(myChart, params);
	    }
	}

	function useLocalData(myChart, params){
	    var result={};
	    $.each(exports.charts.localData,function(){
	        if(this.id==params.id)
	            result.json=this.json;
	    })

	    if(result.json)
	        buildChart(result,myChart,params);
	    else
	        useOnlineData(myChart, params);//本地不存在,尝试线上
	}

	function useOnlineData(myChart, params){
	      $.ajax({ //获取图表option
	        type: 'GET',
	        url: serviceHost + '/api/chart/GetChart?id=' + params.id,
	        success: function(result) {
	            buildChart(result, myChart, params);            
	        },
	        error: function(e) {
	            console.log(e);
	        }
	    });
	}

	function buildChart(result,myChart,params){
	    if (result == null || !result.json)
	        console.log("获取图表id=" + params.id + " 的数据失败");

	    var option;
	    eval(result.json);
	    if (params.option) option = $.extend(true, option, params.option);

	    myChart.setOption(option, true);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

});