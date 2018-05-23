function initColor(colorStyle){
    var color={};
    if(colorStyle=='dark'){

        color.fullScreenButtonColor='white';
        color.sizeBarColor='white';

        color.titleTextColor='rgb(26,48,72)';
        color.titleDivColor='rgb(140,160,170)';

//        color.authorDivColor='rgb(50,70,90)';
//        color.authorDivColor='rgb(15,40,60)';
        color.authorDivColor='rgb(140,160,170)';

        color.mainTransition1='rgb(25,35,45)';
        color.mainTransition2='rgb(50,70,90)';

        color.whiteBarTransition1='rgb(127,127,127)';
        color.whiteBarTransition2='rgb(255,255,255)';

        color.greyBarTransition1='rgb(74, 90, 103)';
        color.greyBarTransition2='rgb(140, 160, 170)';

        color.optionTextColor='white';
        color.screenTextColor='white';
        color.nodeLabelColor='white';
        color.panelTitleColor='white';
        color.nodeLabelHighlightColor='red';
        color.nodeLabelHighlightStroke='red';

        color.svgColor='rgb(15,40,60)';
//        color.axisSVGColor='rgb(140,160,170)';
        color.nodeColor ='rgb(70,190,210)';
        color.markerColor='yellow';
        color.nodeHighlightColor='white';
        color.nodeGreyColor ='rgb(190,200,200)';
        color.nodeHighlightStroke='red';
        color.edgeColor='yellow';
        color.edgeHightLightColor='red';

        color.sizeLabelColor='black';

        color.yearSliderHighlightColor='red';
        color.yearSliderColor='rgb(40,120,200)';
        color.axisTickColor='rgb(15,40,60)';
        color.axisColor='rgb(15,40,60)';
        color.yearPathColor='rgb(15,40,60)';
        color.yearPathHighlightColor='white';
        color.yearPathHighLightStroke='red';

        color.textDisableColor='grey';

        color.buttonStyle={
            on:{
                div:'rgb(185,200,200)',
                text:'rgb(10,40,60)'
            },
            off:{
                div:'rgb(50,70,90)',
                text:'rgb(135,155,165)'
            }
        };


        color.divRender={};
        color.divRender.highlight={
            textColor:'rgb(16,38,51)',
            bodyDivBackground:color.greyBarTransition2,
            titleDivBackground:color.greyBarTransition2,
            transitionDivBackground:'-webkit-linear-gradient(right, '+color.greyBarTransition2+','+color.greyBarTransition1+')',
            lineBackground:color.greyBarTransition2,
            leftLineBackground:color.greyBarTransition2,
            transitionLineBackground:'-webkit-linear-gradient(right, '+color.greyBarTransition2+','+color.greyBarTransition1+')'
        };
        color.divRender.recovery={
            textColor:'white',
            bodyDivBackground:color.mainTransition2,
            titleDivBackground:color.mainTransition2,
            transitionDivBackground:'-webkit-linear-gradient(right, '+color.mainTransition2+','+color.mainTransition1+')',
            lineBackground:color.mainTransition2,
            leftLineBackground:color.greyBarTransition2,
            transitionLineBackground:'-webkit-linear-gradient(right, '+color.mainTransition2+','+color.mainTransition1+')'
        };
    }
    else if(colorStyle=='light'){

        color.fullScreenButtonColor='black';
        color.sizeBarColor='black';

        color.titleTextColor='rgb(26,48,72)';
        color.titleDivColor='rgb(170,190,200)';

        //color.authorDivColor='rgb(50,70,90)';
        color.authorDivColor='rgb(216,235,241)';
        color.svgColor='rgb(255,255,255)';
//        color.axisSVGColor='rgb(140,160,170)'


        color.mainTransition1='rgb(160,170,180)';
        color.mainTransition2='rgb(216,235,240)';

        color.whiteBarTransition1='rgb(180,180,180)';
        color.whiteBarTransition2='rgb(255,255,255)';

        color.greyBarTransition1='rgb(140, 155, 160)';
        color.greyBarTransition2='rgb(200, 220, 225)';

        color.optionTextColor='rgb(15,40,60)';
        color.screenTextColor='rgb(15,40,60)';
        color.nodeLabelColor='black';
        color.panelTitleColor='rgb(15,40,60)';
        color.nodeLabelHighlightColor='red';
        color.nodeLabelHighlightStroke='red';


        color.nodeColor ='rgb(70,190,210)';
        color.nodeHighlightColor='rgb(50,70,90)';
        color.nodeGreyColor ='rgb(150,240,250)';

        color.nodeHighlightStroke='red';
//        color.edgeColor='yellow';
//        color.edgeColor='rgb(102,194,165)';
//        color.edgeColor='rgb(252,141,98)';
//        color.edgeColor='rgb(31,120,180)';
        color.edgeColor='rgb(190,186,218)';
//        color.edgeColor='rgb(255,255,179)';
        color.edgeHightLightColor='red';

        color.sizeLabelColor='white';

        color.yearSliderHighlightColor='red';
        color.yearSliderColor='rgb(40,120,200)';
        color.axisTickColor='rgb(15,40,60)';
        color.yearPathColor='rgb(140,160,160)';
        color.yearPathHighlightColor='white';
        color.yearPathHighLightStroke='red';

        color.textDisableColor='grey';

        color.buttonStyle={
            on:{
                div:'rgb(60,100,120)',
                text:'rgb(255,255,255)'
            },
            off:{
                div:'rgb(140,160,170)',
                text:'rgb(60,90,110)'
            }
        }


        color.divRender={};
        color.divRender.highlight={
            textColor:'rgb(16,38,51)',
            bodyDivBackground:color.greyBarTransition2,
            titleDivBackground:color.greyBarTransition2,
            transitionDivBackground:'-webkit-linear-gradient(left, '+color.greyBarTransition2+','+color.greyBarTransition1+')',
            lineBackground:color.greyBarTransition2,
            leftLineBackground:color.greyBarTransition2,
            transitionLineBackground:'-webkit-linear-gradient(left, '+color.greyBarTransition2+','+color.greyBarTransition1+')'
        };
        color.divRender.recovery={
            textColor:'black',
            bodyDivBackground:color.mainTransition2,
            titleDivBackground:color.mainTransition2,
            transitionDivBackground:'-webkit-linear-gradient(left, '+color.mainTransition2+','+color.mainTransition1+')',
            lineBackground:color.mainTransition2,
            leftLineBackground:color.greyBarTransition2,
            transitionLineBackground:'-webkit-linear-gradient(left, '+color.mainTransition2+','+color.mainTransition1+')'
        };
    }
    return color;
}
function initAuthorData(){
    authorData ={

        "281604":[
            {
                "title":"The Skyline Operator",
                "image":'image/Stephan.jpg',
                "author":"Stephan Borzsonyi",
                "apartment":'Universitat Passau',
                "location":"D-94030 Passau, Germany D-81667 ",
                'email':'Email:borzsonyi@db.fmi.uni-passau.de'
            },
            {
                "title":"The Skyline Operator",
                "image":'image/Donald.jpg',
                "author":"Donald Kossmann",
                "apartment":'Technische Universitat Munchen',
                "location":"D-81667 M¨unchen, Germany",
                'email':'Email:kossmann@in.tue.de'
            }

        ],



        "1140731":[//1141410
            {
                "title":"LANDMARC: Indoor Location Sensing Using Active RFID.",
                "author":"Lionel M. Ni",
                "image":"image/1141410_L.jpg",
                "basicInfo":"Chair Professor and Head Department of Computer Science and Engineering The Hong Kong University of Science and Technology",
                "papers":294,
                "citations":18010,
                "Hindex":57,
                "field":'High-speed Networks'
            },
            {
                "title":"LANDMARC: Indoor Location Sensing Using Active RFID.",
                "author":"Yunhao Liu",
                "image":"image/1141410_Y.jpg",
                "basicInfo":"Chang Jiang Professor and Dean of School of Software, Tsinghua University",
                "papers":319,
                "citations":10680,
                "Hindex":48,
                "field":"Wireless Sensor Networks/RFID"
            }],
        "1140582":[//1141261
            {
                "title":"Analysis of a hybrid cutoff priority scheme for multiple classes of traffic in multimedia wireless networks",
                "author":"Bo Li",
                "image":"image/default.jpg",
                "basicInfo":"Hong Kong University of Science and Technology, Hong Kong",
                "papers":107,
                "citations":2084,
                "Hindex":24
            },
            {
                "title":"Analysis of a hybrid cutoff priority scheme for multiple classes of traffic in multimedia wireless networks",

                "author":"Samuel T. Chanson",
                "image":"image/chanson.jpg",
                "basicInfo":"Univ. of British Columbia, Vancouver, B.C., Canada",
                "papers":147,
                "citations":2028,
                "Hindex":20
            }],
        "501699":[//1141410
            {
                "title":"Manifold-ranking based image retrieval",
                "author":"Hongjiang Zhang",
                "image":"image/502309_1.jpg",
                "basicInfo":"Managing Director,Microsoft Research Asia Advanced Technology Center 5/F, Beijing Sigma Center",
                "papers":304,
                "citations":29948,
                "Hindex":87,
                "field":'Large-scale video retrieval'
            },
            {
                "title":"Manifold-ranking based image retrieval",
                "author":"Changshui Zhang",
                "image":"image/502309_2.jpg",
                "basicInfo":"Professor Dept of Automation Tsinghua University",
                "papers":276,
                "citations":5501,
                "Hindex":38,
                'field':"Face recognition / Image analysis"
            }],
        "default":[//1141410
            {
                "title":"null",
                "author":"null",
                "image":"image/default.jpg",
                "papers":'null',
            },
            {
                "title":"null",
                "author":"null",
                "image":"image/default.jpg",
                "papers":'null',
            }
            ]

    }
}
function initRightClickMenu(){
    var clear=function(){
        d3.select('.rightClickMenu')
            .styles({
                visibility:'hidden'
            });
        d3.selectAll('.clicked')
            .each(function(d){
                if(d.self){
                    d.self.style('fill',function(d){return "url(#linearGradient"+ d.id+")"});
                    d.self.style('stroke',color.nodeHighlightStroke);
                    d.self.style('stroke-width','0px');
                    d.self.attr('class','node');
                    d.clicked=false;
                }

            })
        d3.selectAll('.subYearPath').remove();
        if(data.postData[focusedID].subNodeYearData){
            var subNodeYearData=data.postData[focusedID].subNodeYearData;
            for (var i=0;i<subNodeYearData.length;i++){
                subNodeYearData[i][1]=0;
            }
        }
    }
    var commonMenuList=[
        {
            text:'clear all highlight effects',
            id:0,
            click:clear
        }

    ];
    var menuDiv=d3.select('body')
        .append('div')
        .attr('class','rightClickMenu')
        .styles({
            position:'fixed',
            visibility:'hidden',
            width:'auto',
            height:'auto'
//            left:'500px',
//            top:'500px'
        });
    menuDiv.selectAll('whatever')
        .data(commonMenuList)
        .enter()
        .append('div')
        .on('mouseover',function(d){
            d3.select(this)
                .styles({
                    background:'blue'
                })
            d3.select(this)
                .select('text')
                .styles({
                    color:'white'
                })
        })
        .on('mouseout',function(d){
            d3.select(this)
                .styles({
                    background:'white'
                })
            d3.select(this)
                .select('text')
                .styles({
                    color:'black'
                })
        })
        .attr('style','cursor: pointer; fill: rgb(0, 0, 0);')
        .styles({
            background:'white'
        })
        .attrs({
            class:'menuOption'
        })
        .append('text')
        .styles({
            'font-family':'Arial',
            'color':'black'
        })
        .html(function(d){
            return d.text;
        })
        .on('click',function(d){
            return d.click();
        })

    document.oncontextmenu = function(e){
        if(window.event) e = window.event;
        console.log(e.clientX,e.clientY);
        d3.select('.rightClickMenu')
            .styles({
                visibility:'visible',
                top:e.clientY+px,
                left:e.clientX+2+px
            });
        return false;
    }
}
function initVenueList(){
    venueList={
        "13067568": {
            "oldVenue": "",
            "venue": "CU"
        },
        "11344560": {
            "oldVenue": "In Proceedings of the Vision, Modeling, and Visualization Workshop (VMV 09",
            "venue": "VMV"
        },
        "11934211": {
            "oldVenue": "",
            "venue": ""
        },
        "14165028": {
            "oldVenue": "In Proc. of MobiDE",
            "venue": "MDE"
        },
        "1949002": {
            "oldVenue": "In Proc. of the 1st DELOS Workshop on Information Seeking, Searching and Querying in Digital Libraries",
            "venue": "ISSQ"
        },
        "12123167": {
            "oldVenue": "Computer and Graphics",
            "venue": "CG"
        },
        "24512199": {
            "oldVenue": "International Conference on Indoor Positioning and Indoor Navigation (IPIN), pp.I-S, IS-17",
            "venue": "IPIN"
        },
        "10644003": {
            "oldVenue": "Comp. Graph. Forum (Proc. EG",
            "venue": "EuroVis"
        },
        "14283791": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics",
            "venue": "TVCG"
        },
        "19270250": {
            "oldVenue": "In: EG 2012 - State of the Art Reports",
            "venue": "EuroVis"
        },
        "3723685": {
            "oldVenue": "ACM Proc. of Symposium on Solid Modeling and Applications",
            "venue": "SMA"
        },
        "20077299": {
            "oldVenue": "Computer Graphics Forum",
            "venue": "EuroVis"
        },
        "4877550": {
            "oldVenue": "In Proc. Afrigraph",
            "venue": "EuroVis"
        },
        "19635110": {
            "oldVenue": "ACM Transactions on Graphics",
            "venue": "TOG"
        },
        "14111591": {
            "oldVenue": "In Proceedings of the International Conference on Robotics and Automation (ICRA",
            "venue": "ICRA"
        },
        "27371047": {
            "oldVenue": "In DASFAA (2",
            "venue": "DASFAA"
        },
        "14267315": {
            "oldVenue": "Data, 15th International Conference on System Theory and Control (accepted",
            "venue": "ICSTC"
        },
        "19930580": {
            "oldVenue": "In IJCAI",
            "venue": "IJCAI"
        },
        "5533267": {
            "oldVenue": "ACM AFRIGRAPH04, Stellenbosch, Cape Town, South Africa",
            "venue": "TOG"
        },
        "11807711": {
            "oldVenue": "Computer Graphics Forum (EUROGRAPHICS",
            "venue": "EuroVis"
        },
        "3872607": {
            "oldVenue": "In Proceedings of Spring Conference on Computer Graphics 2007",
            "venue": "SCCG"
        },
        "9475665": {
            "oldVenue": "In SIGMOD",
            "venue": "SIGMOD"
        },
        "19384895": {
            "oldVenue": "IS&T/SPIE Electronic Imaging",
            "venue": "EI"
        },
        "6320": {
            "oldVenue": "In Proceedings of the 8th DASSFA Conference, Kyoto, Japan",
            "venue": "DASSFA"
        },
        "24321726": {
            "oldVenue": "In: Proceedings of the International Conference on Educational Data Mining",
            "venue": "ICEDM"
        },
        "14271226": {
            "oldVenue": "IEEE Transactions on",
            "venue": "TVCG"
        },
        "7768159": {
            "oldVenue": "",
            "venue": ""
        },
        "10643998": {
            "oldVenue": "ACM Transactions on Graphics (SIGGRAPH",
            "venue": "TOG"
        },
        "10896050": {
            "oldVenue": "In Proc. SMI",
            "venue": "SMI"
        },
        "24657228": {
            "oldVenue": "Artificial Life",
            "venue": "AL"
        },
        "15292918": {
            "oldVenue": "In Proc. 29th IEEE Int. Conf. Data Eng",
            "venue": "ICDE"
        },
        "19515503": {
            "oldVenue": "in Collaborative Computing: Networking, Applications and Worksharing (CollaborateCom), 2012 8th International Conference on",
            "venue": "CC"
        },
        "13791906": {
            "oldVenue": "In Proceedings of the 2011 SIGGRAPH Asia Conference, SA",
            "venue": "TOG"
        },
        "9646343": {
            "oldVenue": "In SSTD",
            "venue": "SSTD"
        },
        "19766323": {
            "oldVenue": "IEEE TVCG",
            "venue": "TVCG"
        },
        "11740967": {
            "oldVenue": "IEEE TVCG",
            "venue": "TVCG"
        },
        "11781769": {
            "oldVenue": "In Proc. 7th Intl Conf. Web Engineering",
            "venue": "ICWE"
        },
        "14271223": {
            "oldVenue": "In: Proceedings of the SIGGRAPH Asia Conference",
            "venue": "TOG"
        },
        "19270249": {
            "oldVenue": "ACM Trans. Graphics",
            "venue": "TOG"
        },
        "3872606": {
            "oldVenue": "In Proceedings of the 8th international symposium on Smart Graphics",
            "venue": "ISSG"
        },
        "104921": {
            "oldVenue": "In Proceedings of the 12th annual ACM international workshop on Geographic information systems (GIS04",
            "venue": "GIS"
        },
        "13801082": {
            "oldVenue": "ACM Trans. Graph. (SIGGRAPH Asia",
            "venue": "TOG"
        },
        "10436022": {
            "oldVenue": "Visualization Symposium, 2008. PacificVIS 08. IEEE Pacific",
            "venue": "PacificVis"
        },
        "11857012": {
            "oldVenue": "In Proceedings of UIST",
            "venue": "UIST"
        },
        "12985264": {
            "oldVenue": "In Proceedings of the International Conference on Robotics and Automation (ICRA",
            "venue": "ICRA"
        },
        "9863978": {
            "oldVenue": "ACM Trans. Graphics",
            "venue": "TOG"
        },
        "14284238": {
            "oldVenue": "Institute of Computer Graphics and Algorithms, Vienna University of Technology, Favoritenstrasse",
            "venue": "CGA"
        },
        "13801084": {
            "oldVenue": "ACM Trans. on Graph (SIGGRAPH Asia",
            "venue": "TOG"
        },
        "24024984": {
            "oldVenue": "Scientific Visualization: Advanced Concepts, Dagstuhl Follow-Ups, chapter 10. The article was originally written in 2005 after the Dagstuhl Seminar on Scientific Visualization and reflects the",
            "venue": "SV"
        },
        "26849404": {
            "oldVenue": "In SSTD",
            "venue": "SSTD"
        },
        "13001645": {
            "oldVenue": "In 12th International Conference on Mobile Data Management (MDM",
            "venue": "MDM"
        },
        "20023618": {
            "oldVenue": "In Communications Control and Signal Processing (ISCCSP), 2012 5th International Symposium on",
            "venue": "ISCCSP"
        },
        "6311": {
            "oldVenue": "In Proceedings of the 3rd International Conference on Image and Video Retrieval (CIVR04",
            "venue": "CIVR"
        },
        "6317": {
            "oldVenue": "in: IJCAT",
            "venue": "IJCAI"
        },
        "7271174": {
            "oldVenue": "In Proceedings of 25th IEEE International Conference on Distributed Computing Systems (ICDCS05",
            "venue": "ICDCS"
        },
        "19305088": {
            "oldVenue": "In: CIKM",
            "venue": "CIKM"
        },
        "15524770": {
            "oldVenue": "Digital Geometry Algorithms. Theoretical Foundations and Applications to Computational Imaging",
            "venue": "DGA"
        },
        "6319": {
            "oldVenue": "Proceedings of the Smart Graphics Symposium (SG 2004), Lecture Notes in Computer Science",
            "venue": "SG"
        },
        "6345269": {
            "oldVenue": "In Papadias",
            "venue": "PA"
        },
        "19497771": {
            "oldVenue": "In Proceedings of the 12th SIAM international conference on data mining (SDM), Anaheim, CA",
            "venue": "SDM"
        },
        "24583268": {
            "oldVenue": "In Proc. ACM Intl. Conf. on Web search and data mining (WSDM",
            "venue": "WSDM"
        },
        "13919249": {
            "oldVenue": "In International Conference on Human-Computer Interaction",
            "venue": "CHI"
        },
        "24259897": {
            "oldVenue": "ACM Trans. Graph",
            "venue": "TOG"
        },
        "19656156": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics (Proc. SciVis",
            "venue": "TVCG"
        },
        "4620296": {
            "oldVenue": "In EDBT",
            "venue": "EDBT"
        },
        "24509024": {
            "oldVenue": "",
            "venue": ""
        },
        "1135312": {
            "oldVenue": "In EDBT",
            "venue": "EDBT"
        },
        "19377832": {
            "oldVenue": "in IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS",
            "venue": "IROS"
        },
        "10214848": {
            "oldVenue": "In Proc. SAC",
            "venue": "SAC"
        },
        "7705267": {
            "oldVenue": "IEEE Trans. Visualization and Computer Graphics",
            "venue": "TVCG"
        },
        "10175227": {
            "oldVenue": "ACM Trans. Graph",
            "venue": "TOG"
        },
        "3875729": {
            "oldVenue": "In: Proc. of Pacific Graphics 2003, Los Alamitos, IEEE Computer Society",
            "venue": "PG"
        },
        "4285223": {
            "oldVenue": "Wiley Interdisciplinary Reviews: Data Mining and Knowledge Discovery",
            "venue": "WileyDMKD"
        },
        "11585905": {
            "oldVenue": "IEEE Trans. Vis. Comput. Graph",
            "venue": "TVCG"
        },
        "9684872": {
            "oldVenue": "In ICDE",
            "venue": "ICDE"
        },
        "9094237": {
            "oldVenue": "VLDB",
            "venue": "VLDB"
        },
        "13360158": {
            "oldVenue": "In Proceedings of the International Conference on Mobile Data Management",
            "venue": "MDM"
        },
        "14007440": {
            "oldVenue": "In CHI12",
            "venue": "CHI"
        },
        "19261675": {
            "oldVenue": "In IJCAI",
            "venue": "IJCAI"
        },
        "14266603": {
            "oldVenue": "In Human Computation Workshop",
            "venue": "HC"
        },
        "14077755": {
            "oldVenue": "Comp. Graph. Forum (Proc. Eurographics",
            "venue": "EuroVis"
        },
        "19261678": {
            "oldVenue": "In PLDI",
            "venue": "PLDI"
        },
        "9907894": {
            "oldVenue": "in Streamspin, ?? Proc. of the 10th IEEE International Conference on Mobile Data Management: Systems, Services and Middleware",
            "venue": "MDM"
        },
        "9094238": {
            "oldVenue": "In SSTD",
            "venue": "SSTD"
        },
        "14395706": {
            "oldVenue": "In Proceedings of the 28th international conference on Human factors in computing systems, CHI 10",
            "venue": "CHI"
        },
        "25655424": {
            "oldVenue": "In Proceedings of the 17th International Conference on 3D Web Technology, ACM",
            "venue": "3WT"
        },
        "19305091": {
            "oldVenue": "In: WAIM",
            "venue": "WAIM"
        },
        "19305090": {
            "oldVenue": "",
            "venue": ""
        },
        "9898494": {
            "oldVenue": "In IEEE Internationa Conference on Computer Vision (ICCV) Workshops",
            "venue": "ICCV"
        },
        "19265458": {
            "oldVenue": "ACM Transactions on Graphics (Proc. SIGGRAPH",
            "venue": "TOG"
        },
        "24509029": {
            "oldVenue": "in Proceedings of Int. Conf. Ubiquitous Positioning Indoor Navigation & Location Based Service",
            "venue": "ICUP"
        },
        "19265457": {
            "oldVenue": "ACM Trans. Graph. (SIGGRAPH Asia",
            "venue": "TOG"
        },
        "19354694": {
            "oldVenue": "In Proceedings of the 13th ACM Conference on Electronic Commerce",
            "venue": "EC"
        },
        "9417929": {
            "oldVenue": "in MDD, SOA und IT-Management (MSI 2008",
            "venue": "MSI"
        },
        "5623544": {
            "oldVenue": "In: Lernen - Wissen - Adaption Workshop (LWA",
            "venue": "LWA"
        },
        "14469444": {
            "oldVenue": "ACM Trans. on Graphics (Proc. SIGGRAPH",
            "venue": "TOG"
        },
        "19971169": {
            "oldVenue": "SIGMOD Record",
            "venue": "SIGMOD"
        },
        "10168854": {
            "oldVenue": "In Proc. of Human Vision and Electronic Imaging X, SPIE/IS&T",
            "venue": "SPIE"
        },
        "4227137": {
            "oldVenue": "In ADBIS 06: Proceedings of 10th East European Conference of Advances in Databases and Information Systems",
            "venue": "ADBIS"
        },
        "19305089": {
            "oldVenue": "In: CIKM",
            "venue": "CIKM"
        },
        "14140923": {
            "oldVenue": "In Proceedings of the ACM SIGGRAPH/Eurographics Symposium on Non-Photorealistic Animation and Rendering, NPAR 11",
            "venue": "NPAR"
        },
        "19282020": {
            "oldVenue": "on Graphis (Proc. of SIGGRAPH",
            "venue": "TOG"
        },
        "15524769": {
            "oldVenue": "In: Proc. 14th International Workshop on Combinatorial Image Analysis, IWCIA2011",
            "venue": "IWCIA"
        },
        "10060292": {
            "oldVenue": "Proc. SIGGRAPH ASIA",
            "venue": "TOG"
        },
        "19291301": {
            "oldVenue": "Computer Graphics Forum (Proceedings of Eurographics 2013",
            "venue": "EuroVis"
        },
        "26883189": {
            "oldVenue": "In Proceedings of DNIS",
            "venue": "DNIS"
        },
        "11972166": {
            "oldVenue": "In Proceedings of Graphics Interface 2010",
            "venue": "GI"
        },
        "15227562": {
            "oldVenue": "In Proceedings of the 26th AAAI Conference on Artificial Intelligence, AAAI 12",
            "venue": "AAAI"
        },
        "4027690": {
            "oldVenue": "In Proc of the 5th international Symposium on NonPhotorealistic Animation and Rendering",
            "venue": "AR"
        },
        "14151775": {
            "oldVenue": "in ICDE",
            "venue": "ICDE"
        },
        "26357499": {
            "oldVenue": "In 2012 IEEE International Symposium on Mixed and Augmented Reality (ISMAR",
            "venue": "ISMAR"
        },
        "3906448": {
            "oldVenue": "In SimVis, SCS",
            "venue": "SCS"
        },
        "14151772": {
            "oldVenue": "Proceedings of the VLDB Endowment",
            "venue": "VLDB"
        },
        "28243468": {
            "oldVenue": "",
            "venue": ""
        },
        "19906748": {
            "oldVenue": "ACM Trans. on Graphics (Proc. SIGGRAPH Asia",
            "venue": "TOG"
        },
        "264621": {
            "oldVenue": "Shape Analysis and Structuring, Mathematics and Visualization, chapter 1",
            "venue": "SAS"
        },
        "7543667": {
            "oldVenue": "In Proc. UIST",
            "venue": "UIST"
        },
        "13317506": {
            "oldVenue": "International Journal of Managing Information Technology (IJMIT) vol.3, no.4",
            "venue": "IJMIT"
        },
        "14088347": {
            "oldVenue": "In: Proceedings of the 2011 ACM SIGMOD International Conference on Management of Data, SIGMOD 2011",
            "venue": "SIGMOD"
        },
        "9271624": {
            "oldVenue": "Proc. Int. Conference in Central Europe on Computer Graphics, Visualization and Computer Vision",
            "venue": "CV"
        },
        "9066791": {
            "oldVenue": "In Proceedings of the 25th Wirel. Commun. Mob. Comput. (in press) ACCESS IN WMC ENVIRONMENTS International Conference on Distributed Computing Systems (ICDCS",
            "venue": "ICDCS"
        },
        "5492733": {
            "oldVenue": "in Wireless Broadcast Environments, Proc. 23rd IEEE Intl Conf. Data Eng. (ICDE",
            "venue": "ICDE"
        },
        "782850": {
            "oldVenue": "Procedings of IEEE Eurographics Symposium on Visualization",
            "venue": "EuroVis"
        },
        "13365680": {
            "oldVenue": "IEEE International",
            "venue": "ICDE"
        },
        "11662021": {
            "oldVenue": "In: DASFAA",
            "venue": "DASFAA"
        },
        "10608423": {
            "oldVenue": "In Proceedings of the International Conference on Advanced Visual Interfaces, AVI 10",
            "venue": "AVI"
        },
        "11709278": {
            "oldVenue": "CGF (EUROGRAPHICS",
            "venue": "EuroVis"
        },
        "19248971": {
            "oldVenue": "ACM TOCHI",
            "venue": "TOCHI"
        },
        "11773063": {
            "oldVenue": "In Advances in Computer Graphics and Computer Vision - VISIGRAPP 2008, Communications in Computer and Information Science (CCIS",
            "venue": "CCIS"
        },
        "20077031": {
            "oldVenue": "In TODS",
            "venue": "TODS"
        },
        "1196775": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics",
            "venue": "TVCG"
        },
        "15191657": {
            "oldVenue": "ACM Trans. Graph",
            "venue": "TOG"
        },
        "10481239": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics",
            "venue": "TVCG"
        },
        "264681": {
            "oldVenue": "Computer Graphics Forum",
            "venue": "EuroVis"
        },
        "10188592": {
            "oldVenue": "In: ICDE",
            "venue": "ICDE"
        },
        "9897224": {
            "oldVenue": "in Proc. MDM",
            "venue": ""
        },
        "13198002": {
            "oldVenue": "In Proc. SIGGRAPH 2011",
            "venue": "TOG"
        },
        "12974013": {
            "oldVenue": "ICIAR 2010. LNCS",
            "venue": "ICIAR"
        },
        "12974016": {
            "oldVenue": "In: Proc. 7th IASTED Int. Conf. Signal Processing, Pattern Recognition and Applications",
            "venue": "IASTED"
        },
        "11048295": {
            "oldVenue": "ACM Trans. Graph. (SIGGRAPH Asia",
            "venue": "TOG"
        },
        "25677789": {
            "oldVenue": "SSDBM 2012. LNCS",
            "venue": "SSDBM"
        },
        "5259671": {
            "oldVenue": "In: Proceedings of Vision, Modeling and Visualization 2006",
            "venue": "VMV"
        },
        "26989": {
            "oldVenue": "",
            "venue": ""
        },
        "3906455": {
            "oldVenue": "In 14th International Conference in Central Europe on Computer Graphics, Visualization and Computer Vision, WSCG06",
            "venue": "EuroVis"
        },
        "13134051": {
            "oldVenue": "",
            "venue": ""
        },
        "9986008": {
            "oldVenue": "Proc. of Shape Modeling International",
            "venue": "SMI"
        },
        "19389228": {
            "oldVenue": "SIGGRAPH Asia",
            "venue": "TOG"
        },
        "19252085": {
            "oldVenue": "In Proc. of SIGMOD",
            "venue": "SIGMOD"
        },
        "4929339": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics (Proc. of Visualization) 13:6",
            "venue": "TVCG"
        },
        "27346484": {
            "oldVenue": "In Proceedings of the Tenth Annual International Conference on International Computing Education Research, ICER 13",
            "venue": "ICER"
        },
        "19288975": {
            "oldVenue": "In Proceedings of the 25th ACM Symposium on User Interface Software and Technology",
            "venue": "UIST"
        },
        "19288977": {
            "oldVenue": "In Proc",
            "venue": "UIST"
        },
        "20108101": {
            "oldVenue": "IEEE Transactions on Computational Intelligence and AI in Games",
            "venue": "TCIA"
        },
        "9677161": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics",
            "venue": "TVCG"
        },
        "4111208": {
            "oldVenue": "In SCA",
            "venue": "EuroVis"
        },
        "11098548": {
            "oldVenue": "International Journal of Computer Vision",
            "venue": "IJCV"
        },
        "13835653": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics",
            "venue": "TVCG"
        },
        "26173847": {
            "oldVenue": "in \"ACM SIGGRAPH / Eurographics Symposium on Computer Animation",
            "venue": "CA"
        },
        "14228769": {
            "oldVenue": "n o 1, p. 1-13 [DOI : 10.1016/J.GMOD.2011.07.001], http://hal.inria.fr/inria00536840",
            "venue": "DOI"
        },
        "9417271": {
            "oldVenue": "In Smart Graphics",
            "venue": "SG"
        },
        "13373366": {
            "oldVenue": "In: Service-Oriented Computing. ICSOC/ServiceWave 2009 Workshops",
            "venue": "ICSOC"
        },
        "13378249": {
            "oldVenue": "J. GooInformatica",
            "venue": "GI"
        },
        "9944824": {
            "oldVenue": "Artif. Intell",
            "venue": "AAAI"
        },
        "13942156": {
            "oldVenue": "IEEE Commun. Mag",
            "venue": "COMMAG"
        },
        "19930585": {
            "oldVenue": "In Workshops at the Twenty-Sixth AAAI Conference on Artificial Intelligence",
            "venue": "AAAI"
        },
        "19930584": {
            "oldVenue": "In MobiSys",
            "venue": "MobiSys"
        },
        "13036547": {
            "oldVenue": "In: GIS 07 Proceedings of the 15th annual ACM international symposium on Advances in",
            "venue": "GIS"
        },
        "1135500": {
            "oldVenue": "Proceedings of the working conference on Advanced visual interfaces",
            "venue": "AVI"
        },
        "9601456": {
            "oldVenue": "In Proceedings of EUROGRAPHICS Workshop on Sketch-Based Interfaces and Modeling",
            "venue": "EuroVis"
        },
        "414552": {
            "oldVenue": "4th Int. Conf. on Integrated Design and Manufacture in Mechanical Engineering",
            "venue": "IDM"
        },
        "14020227": {
            "oldVenue": "ACM Trans. Graph",
            "venue": "TOG"
        },
        "14299973": {
            "oldVenue": "In Proc. of IEEE Pacific Visualization Symposium",
            "venue": "PacificVis"
        },
        "11876613": {
            "oldVenue": "Journal of WSCG",
            "venue": "WSCG"
        },
        "13378250": {
            "oldVenue": "IEEE Trans. Mob. Comput",
            "venue": "TMC"
        },
        "10232556": {
            "oldVenue": "In Vision, Modeling, and Visualization",
            "venue": "VMV"
        },
        "10232557": {
            "oldVenue": "In Proceedings of the 6th international symposium on Non-photorealistic animation and rendering, NPAR 08",
            "venue": "NPAR"
        },
        "1032395": {
            "oldVenue": "ACM ,Press",
            "venue": "TOG"
        },
        "15261002": {
            "oldVenue": "ACM Trans. Graph",
            "venue": "TOG"
        },
        "14123600": {
            "oldVenue": "PVLDB",
            "venue": "VLDB"
        },
        "25654786": {
            "oldVenue": "In EUROGRAPHICS State-of-the-art Report",
            "venue": "EuroVis"
        },
        "9748082": {
            "oldVenue": "In VLDB",
            "venue": ""
        },
        "19949746": {
            "oldVenue": "In SIGGRAPH",
            "venue": "TOG"
        },
        "24712245": {
            "oldVenue": "in \"ACM SIGGRAPH / Eurographics Symposium on Computer Animation",
            "venue": "CA"
        },
        "24349875": {
            "oldVenue": "In Proceedings of the 7th international conference on Advances in visual computing - Volume Part I, ISVC11",
            "venue": "ISVC"
        },
        "19389229": {
            "oldVenue": "",
            "venue": ""
        },
        "22815206": {
            "oldVenue": "In Beyond Time and Errors  Novel Evaluation Methods for Visualization (BELIV",
            "venue": "BELIV"
        },
        "10008": {
            "oldVenue": "IEEE Transactions on Knowledge and Data Engineering (TKDE",
            "venue": "TKDE"
        },
        "7017550": {
            "oldVenue": "Proc. First Intl Conf. Mobile and Ubiquitous Computing: Networks and Services",
            "venue": "MUC"
        },
        "15292925": {
            "oldVenue": "Proc. 18th SIGSPATIAL Intl Conf. Advances in Geographic Information Systems",
            "venue": "PLDI"
        },
        "15274369": {
            "oldVenue": "in CIKM",
            "venue": "CIKM"
        },
        "19795996": {
            "oldVenue": "The Visual Comp. (Proc. CGI",
            "venue": "CGI"
        },
        "10405247": {
            "oldVenue": "In EUROGRAPHICS Workshop on Sketch-Based Interfaces and Modeling, SBIM 2008",
            "venue": "SBIM"
        },
        "5548117": {
            "oldVenue": "Wireless Networks",
            "venue": "WN"
        },
        "2430814": {
            "oldVenue": "In MDM",
            "venue": "MDM"
        },
        "10693007": {
            "oldVenue": "In Proc. of Eurographics State-of-the-art Report",
            "venue": "EuroVis"
        },
        "15292928": {
            "oldVenue": "in DASFAA 2012",
            "venue": "DASFAA"
        },
        "434215": {
            "oldVenue": "In Proceedings of the 14th International Conference on Scientific and Statistical Database Management(SSDBM02",
            "venue": "SSDBM"
        },
        "14046900": {
            "oldVenue": "",
            "venue": ""
        },
        "15030243": {
            "oldVenue": "ACM SIGKDD Explorations Newsletter",
            "venue": "KDD"
        },
        "26080259": {
            "oldVenue": "In: 7th German Conference on Robotics (ROBOTIK 2012",
            "venue": "ROBOT"
        },
        "4046077": {
            "oldVenue": "Computer Graphics Forum",
            "venue": "EuroVis"
        },
        "414565": {
            "oldVenue": "",
            "venue": ""
        },
        "19330938": {
            "oldVenue": "In Proc. First Workshop on CPS Education (CPS-Ed",
            "venue": "CPS"
        },
        "11806291": {
            "oldVenue": "In ICDE",
            "venue": "ICDE"
        },
        "10652493": {
            "oldVenue": "ACM Transactions on Graphics",
            "venue": "TOG"
        },
        "10569677": {
            "oldVenue": "IEEE Data Eng. Bull",
            "venue": "ICDE"
        },
        "15297703": {
            "oldVenue": "Structure-Aware Shape Processing",
            "venue": "SASP"
        },
        "24524137": {
            "oldVenue": "Cornell University",
            "venue": "CU"
        },
        "4044135": {
            "oldVenue": "In In 4th International Symposium on Smart Graphics, SG04",
            "venue": "SG"
        },
        "19282809": {
            "oldVenue": "ACM Trans. Graph. (SIGGRAPH",
            "venue": "TOG"
        },
        "9628673": {
            "oldVenue": "In SIGMOD Conference",
            "venue": "SIGMOD"
        },
        "3725164": {
            "oldVenue": "In Mathematics of Surfaces XI: 11th IMA International Conference, Springer Lecture Notes in Computer Science (LNCS",
            "venue": "Surface"
        },
        "3725576": {
            "oldVenue": "In: SYMPOSIUM ON INTERACTIVE 3D GRAPHICS AND GAMES, I3D, 2005. Proceedings",
            "venue": "I3D"
        },
        "9409219": {
            "oldVenue": "In VMV 2008",
            "venue": "VMV"
        },
        "14088346": {
            "oldVenue": "In: Proceedings of the 31st Symposium on Principles of Database Systems, PODS 2012",
            "venue": "PODS"
        },
        "24581291": {
            "oldVenue": "In KDD",
            "venue": "KDD"
        },
        "19389234": {
            "oldVenue": "ACM Transactions on Graphics - Proceedings of ACM SIGGRAPH Asia",
            "venue": "TOG"
        },
        "4879025": {
            "oldVenue": "Proceedings of the Workshop on Text-Based Information Retrieval TIR 06",
            "venue": "TIR"
        },
        "3778243": {
            "oldVenue": "In Proceedings of the 9th International Conference on Extending Database Technology (EDBT), Heraklion",
            "venue": "EDBT"
        },
        "19942528": {
            "oldVenue": "Discrete Differential Forms for Computational Modeling",
            "venue": "CM"
        },
        "14130885": {
            "oldVenue": "In: IEEE transactions on visualization and computer graphics 18.8",
            "venue": "TVCG"
        },
        "12076829": {
            "oldVenue": "In Proc. Smart Graphics",
            "venue": "SG"
        },
        "13812765": {
            "oldVenue": "ACM Transactions on Graphics",
            "venue": "TOG"
        },
        "11104272": {
            "oldVenue": "Trans. Vis. Comput. Graph",
            "venue": "TVCG"
        },
        "19333396": {
            "oldVenue": "In: Web Science",
            "venue": "WS"
        },
        "22873677": {
            "oldVenue": "",
            "venue": ""
        },
        "15243229": {
            "oldVenue": "TACCESS",
            "venue": "TACCESS"
        },
        "11125204": {
            "oldVenue": "Proceedings of the International Conference on Motion in Games (MiG",
            "venue": "ICM"
        },
        "15201235": {
            "oldVenue": "In Proceedings of the ACM Symposium on Applied Perception",
            "venue": "AP"
        },
        "19557472": {
            "oldVenue": "in: IEEE Conference on Computer Vision and Pattern Recognition (CVPR",
            "venue": "CVPR"
        },
        "1430147": {
            "oldVenue": "Axiomathes",
            "venue": "AX"
        },
        "14345901": {
            "oldVenue": "ACM Trans. Graph",
            "venue": "TOG"
        },
        "9601473": {
            "oldVenue": "Comput. Graph. Forum",
            "venue": "EuroVis"
        },
        "9601471": {
            "oldVenue": "In Proc. of ACM Symposium on",
            "venue": "UIST"
        },
        "9601475": {
            "oldVenue": "IEEE Trans. Vis. & Comp. Graphics",
            "venue": "TVCG"
        },
        "19308906": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics",
            "venue": "TVCG"
        },
        "7679936": {
            "oldVenue": "",
            "venue": ""
        },
        "13818296": {
            "oldVenue": "Comp. Graph. Forum",
            "venue": "EuroVis"
        },
        "13994706": {
            "oldVenue": "IEEE Transactions on Visualization and Computer Graphics",
            "venue": "TVCG"
        },
        "24335483": {
            "oldVenue": "IEEE Transactions on",
            "venue": "TVCG"
        },
        "693374": {
            "oldVenue": "In Mathematical Foundations of Scientific Visualization, Computer Graphics, and Massive Data Exploration, Mathematics and Visualization",
            "venue": "EuroVis"
        }
    }
}
function changeAnimateMode() {
    var animateMode = this.animateMode;
    //console.log(this);
    if (animateMode == flipBook) {
        this.changeToMovieMode();

    }
    else if (animateMode == movie) {
        this.changeToFlipBookMode();
    }
}
function changeToMovieMode() {
    this.animateMode = movie;
    var that = this;
    var yearFilter = this.yearFilter;
    var minYear = this.minYear;
    var maxYear = this.maxYear;
    var axisSVG = this.axisSVG;
    var xScale = this.xScale;
    var yScale = this.yScale;
    var yearSliderDrag = this.yearSliderDrag;
    axisSVG.select('.movieSlider').remove();
    d3.select('.movieModeDiv')
        .style('background', color.buttonStyle.on.div);
    d3.select('.movieModeText')
        .style('color', color.buttonStyle.on.text);
    d3.select('.flipBookModeDiv')
        .style('background', color.buttonStyle.off.div);
    d3.select('.flipBookModeText')
        .style('color', color.buttonStyle.off.text);
    if (yearFilter) {
        if (yearFilter[0] == minYear && yearFilter[1] == maxYear) {
            var defaultYearDuration = 3;
            var rYear = defaultYearDuration + minYear;
            axisSVG.select('#rightAxisCircle')
                .attrs({
                    cx: function (d) {
                        d.x = xScale(rYear);
                        return d.x;
                    }
                });
            yearFilter[1] = rYear;
        }
        var left = axisSVG.select('#leftAxisCircle');
        var right = axisSVG.select('#rightAxisCircle');
        var leftX = parseFloat(left.attr('cx'));
        var rightX = parseFloat(right.attr('cx'));
        var y = parseFloat(left.attr('cy'));
        var movieSliderData = [{
            p1: {
                x: leftX,
                y: y
            },
            p2: {
                x: rightX,
                y: y
            },
            index: 1
        }];

        axisSVG.selectAll('whatever')
            .data(movieSliderData)
            .enter()
            .append('path')
            .attr('class', 'movieSlider axisController')
            .attr('index', 1)
            .attr('id', 'movieSlider')
            .styles({
                'stroke-width': 4,
                'stroke': 'white'
            })
            .attr('d', function (d) {
                var e = {};
                clone(d, e);
                var avg = (d.p1.x + d.p2.x) / 2;
                e.p1.x = avg;
                e.p2.x = avg;
                return yearSliderPathData(e);
            })
            .on('mouseover', function (d) {
                d3.select(this)
                    .style('stroke-width', 8)
            })
            .on('mouseout', function (d) {
                d3.select(this)
                    .style('stroke-width', 4)
            })
            .transition()
            .duration(100)
            .attr('d', yearSliderPathData)
            .styles({
                'stroke-width': 4,
                'stroke': 'white',
                'cursor': 'hand'
            })
            .on('end', function () {
                var ids = ['leftAxisCircle', 'rightAxisCircle'];
                axisSVG.select('#leftAxisCircle')
                    .attr('class', 'axisCircle axisController')
                    .style('filter', 'url(#moveToLeft_filter)')
                    .style('visibility', 'visible');
                axisSVG.select('#rightAxisCircle')
                    .attr('class', 'axisCircle axisController')
                    .style('filter', 'url(#moveToRight_filter)');
                axisSVG.selectAll('.axisController').sort(function (a, b) {
                    return d3.descending(a.index, b.index);
                });
            });
        axisSVG.select('.movieSlider')

            .each(function (d) {
                d.that = that;
            })
            .call(yearSliderDrag);
        this.greyBackground();
        updateAnimation(false, that);
    }


}

function changeToFlipBookMode() {
    var drawnodes = this.drawnodes;
    var drawedges = this.drawedges;
    var data = this.data;
    var focusedID = this.focusedID;
    var axisSVG = this.axisSVG;
    this.animateMode = flipBook;
    drawnodes.selectAll('*').remove();
    drawedges.selectAll('*').remove();
    this.preLayout(data.postData[focusedID]);
    d3.select('.movieModeDiv')
        .style('background', color.buttonStyle.off.div);
    d3.select('.movieModeText')
        .style('color', color.buttonStyle.off.text);
    d3.select('.flipBookModeDiv')
        .style('background', color.buttonStyle.on.div);
    d3.select('.flipBookModeText')
        .style('color', color.buttonStyle.on.text);
    axisSVG.select('.movieSlider').remove();
    axisSVG.selectAll('.axisCircle')
        .style('filter', 'url(#leftOrRight_filter)');
}
function drawAnimateControlPanel() {
    var that = this;
    var axisSVG = this.axisSVG;
    axisSVG.selectAll('*').remove();

    var authorDiv = d3.select('.authorDiv_' + this.position);
    var width = authorDiv._groups[0][0].clientWidth;
    var height = authorDiv._groups[0][0].clientHeight;
    axisSVG.attrs({
        width: width,
        height: height
    });


    var nameFunDic = {
        play: play,
        playBack: playBack,
        pause: pause,
        stop: stop,
        temporal: temporalTimeLine,
        general: generalTimeLine
    };
    var buttonControl = function (d, thisNode) {
        var layer = d.layer;
        //var thisNode=d3.select(this);
        var thisID = thisNode.attr('id');
        if (thisID == 'play')nameFunDic.play(thisNode, layer);
        else if (thisID == 'playBack')nameFunDic.playBack(thisNode, layer);
        else if (thisID == 'pause')nameFunDic.pause(thisNode, layer);
        else if (thisID == 'stop')nameFunDic.stop(thisNode, layer);
        else if (thisID == 'temporalTimeLine')nameFunDic.general(thisNode, layer);
        else if (thisID == 'generalTimeLine')nameFunDic.temporal(thisNode, layer);
    };
    var controlPanelButtonsData = [
        {
            name: 'play',
            fun: play,
            fun1: pause
        },
        {
            name: 'playBack',
            fun: playBack,
            fun1: pause
        },
        {
            name: 'pause',
            fun: function () {
            }
        },
        {
            name: 'stop',
            fun: stop
        },
        {
            name: 'moveToLeft',
            fun: function () {
            }
        },
        {
            name: 'moveToRight',
            fun: function () {
            }
        },
        {
            name: 'leftOrRight',
            fun: function () {
            }
        },
        {
            name: 'speedUp',
            fun: function () {
            }
        },
        {
            name: 'speedUp',
            fun: function () {
            }
        },
        {
            name: 'speedDown',
            fun: function () {
            }
        },
        {
            name: 'lock',
            fun: function () {
            }
        },
        {
            name: 'temporalTimeLine',
            fun: generalTimeLine
        },
        {
            name: 'generalTimeLine',
            fun: temporalTimeLine
        }

    ];
    axisSVG.selectAll('filter')
        .data(controlPanelButtonsData)
        .enter()
        .append('filter')
        .attrs({
            class: 'ButtonFilter',
            id: function (d) {
                return d.name + '_filter';
            },
            x: 0,
            y: 0,
            width: 1,
            height: 1
        })
        .each(function (d) {
            var thisFilter = d3.select(this);
            thisFilter.append('feImage')
                .attrs({
                    'xlink:href': 'image/animateControlPanel/' + d.name + '.png'
                })
        });
    var midControlPanelButtonData = [
        //{
        //    name:'playBack',
        //    fun:playBack,
        //    fun1:pause
        //},
        {
            name: 'play',
            fun: play,
            fun1: pause,
            layer: that
        },
        {
            name: 'stop',
            fun: stop,
            layer: that
        }
    ];
    var midNum = midControlPanelButtonData.length;
    var midButtonRadius = 10;
    var midButtonY = 20;
    var midButtonDistance = 10;
    var temporalButtonLength = 60;
    var controlPanelLength = (midNum - 1) * (midButtonRadius * 2 + midButtonDistance) + midButtonDistance + temporalButtonLength;
    var width = parseFloat(axisSVG.style('width'));
    var initX = (width - controlPanelLength) / 2;
//    var initX=35;

    axisSVG.selectAll('controlButton')
        .data(midControlPanelButtonData)
        .enter()
        .append('circle')
        .attrs({
            cx: function (d, i) {
                return initX + i * (2 * midButtonRadius + midButtonDistance);
            },
            cy: midButtonY,
            r: midButtonRadius,
            id: function (d) {
                return d.name;
            },
            name: function (d) {
                return d.name;
            },
            class: function (d) {
                return 'controlButton' + ' ' + 'controlButton_' + d.name + '_' + that.source;
            }
        })
        .on('click', function (d) {
            d3.selectAll('#' + d.name)
                .each(function (e) {
                    if (d3.select(this).attr('class') != 'ButtonFilter') {
                        var thisNode = d3.select(this);
                        buttonControl(e, thisNode);
                    }
                });
        })
        //.on('click',buttonControl)
        .styles({
            'filter': function (d) {
                return 'url(#' + d.name + '_filter)';
            },
            'cursor': 'hand'
        });
    var temporalButtonData = [{
        name: 'generalTimeLine',
        fun: temporalTimeLine,
        x: initX + controlPanelLength - temporalButtonLength + 10,
        y: midButtonRadius,
        height: midButtonRadius * 2,
        width: temporalButtonLength,
        layer: that
    }];
    axisSVG.selectAll('whatever')
        .data(temporalButtonData)
        .enter()
        .append('rect')
        .each(function (d) {
            d3.select(this)
                .attrs({
                    id: d.name,
                    x: d.x,
                    y: d.y,
                    width: d.width,
                    height: d.height
                })
                .style('filter', function (d) {
                    return 'url(#' + d.name + '_filter)';
                })
                .style('cursor', 'hand')
                .on('click', function (d) {
                    d3.selectAll('#' + d.name)
                        .each(function (e) {
                            if (d3.select(this).attr('class') != 'ButtonFilter') {
                                var thisNode = d3.select(this);
                                buttonControl(e, thisNode);
                            }
                        });
                })
        })

}
function updateAnimation(flag, that) {
    var animateMode = that.animateMode;
    var minYear = that.minYear;
    var maxYear = that.maxYear;
    var data = that.data;
    var focusedID = that.focusedID;
    var svg = that.svg;
    if (animateMode == flipBook && !flag) {
        if (that.yearFilter[0] == minYear && that.yearFilter[1] == maxYear) {
            that.yearFilter = [minYear, maxYear];
        }
        else {
            that.yearFilter = [that.yearFilter[1], maxYear];
        }
    }

    var yearFilter = that.yearFilter;
    var graphData = {};
    //clone(data.postData[focusedID],graphData);
    var newD = that.filterDataByYear(data.postData[focusedID], [that.yearFilter[0], that.yearFilter[1]], that);

    that.preYear = yearFilter[0];
    var preYear = that.preYear;
    if (yearFilter[0] != minYear || yearFilter[1] != maxYear) {
        if (animateMode == flipBook && !flag)newD.keepAll = true;
    }

    if (animateMode == flipBook) {
        if (!flag) {
            that.layout(optionNumber, true, 'flowMap', newD);
        }
        else {
            that.layout(optionNumber, false, false, newD);
        }
    }
    if (animateMode == movie) {
//        yearFilter=[minYear,minYear+3];
        that.layout(optionNumber, false, false, newD);
    }
    svg.selectAll('.node')
        .each(function (d) {
            var thisNode = d3.select(this);
            if (thisNode.attr('transitionStatus') == 'start')thisNode.remove();
        });
}
function playBack(thisNode) {
    changeFilter(thisNode, 'pause');
    if (animateMode == flipBook) {
        //updateAnimation();
        //yearAxisTransition(yearFilter[0],yearFilter[1]);
    }
    else {
        var remainYear = yearFilter[0] - minYear;
        var animationNum = remainYear;
        var currentYearDuration = yearFilter[1] - yearFilter[0];
        yearFilters = [];
        for (var i = 0; i < animationNum - 1; i++) {
//            yearFilters.push([yearFilter[0]+(i+1)*currentYearDuration,yearFilter[1]+(i+1)*currentYearDuration])
            yearFilters.push([yearFilter[0] - (i + 1), yearFilter[1] - (i + 1)])
        }
        yearFilters.push([minYear, minYear + currentYearDuration]);
        recurMovieTransition(yearFilters);
    }
}
function play(thisNode, that) {
    changeFilter(thisNode, 'pause');
    var animateMode = that.animateMode;
    var maxYear = that.maxYear;
    var minYear = that.minYear;
    var temporal = that.temporal;
    var requestMethod = that.requestMethod;
    var ifTemporal = that.ifTemporal;
    that.transitionFlag = true;

    if (animateMode == flipBook) {
        that.updateAnimation(false, that);
        var yearFilter = that.yearFilter;
        console.log(yearFilter);
        that.yearAxisTransition(yearFilter[0], yearFilter[1], that);
    }
    else {
        var remainYear = maxYear - that.yearFilter[1];
        var currentYearDuration = that.yearFilter[1] - that.yearFilter[0];
//        var animationNum=Math.ceil(remainYear/currentYearDuration);
        var animationNum = remainYear;
        var division = temporal.maxDivision;

        that.yearFilters = [];
        var yearFilters = that.yearFilters;
        if (ifTemporal) {
            for (var i = 1; i < division.length; i++) {
                var len = division[i].length;
                yearFilters.push([division[i][0].year.toInt(), division[i][len - 1].year.toInt()]);
            }
        }
        else {
            for (var i = 0; i < animationNum - 1; i++) {
//            yearFilters.push([yearFilter[0]+(i+1)*currentYearDuration,yearFilter[1]+(i+1)*currentYearDuration])
                yearFilters.push([that.yearFilter[0] + (i + 1), that.yearFilter[1] + (i + 1)])
            }
            yearFilters.push([maxYear - currentYearDuration, maxYear]);
        }


        //console.log(yearFilters);
        //console.log(yearFilters);
//        var sliderDuration=yearDelay*currentYearDuration;
        recurMovieTransition(yearFilters, that);


    }
}
function recurMovieTransition(yearFilters, that) {
    var yearDelay = that.yearDelay;
    var axisSVG = that.axisSVG;
    var xScale = that.xScale;
    var sliderDuration = yearDelay;
    var yearFilter = that.yearFilter;
    var k = 0

    if (yearFilters.length > 0) {

        axisSVG.select('#leftAxisCircle')
            .transition()
            //                    .delay(k*yearDelay*currentYearDuration)
            .duration(sliderDuration)
            .ease(d3.easeLinear)
            .attrs({
                cx: function (d) {
                    d.x = xScale(yearFilters[0][0]);
                    return d.x;
                }
            })
        axisSVG.select('#rightAxisCircle')
            .transition()
            .duration(sliderDuration)
            //                    .delay(k*yearDelay*currentYearDuration)
            .ease(d3.easeLinear)
            .attrs({
                cx: function (d) {
                    d.x = xScale(yearFilters[0][1]);
                    return d.x;
                }
            })
            .on('end', function (d) {
                that.yearFilter = [yearFilters[0][0], yearFilters[0][1]];
                updateAnimation(false, that);
                yearFilters = yearFilters.splice(1, yearFilters.length - 1);

                recurMovieTransition(yearFilters, that)
            })
        axisSVG.select('.movieSlider')
            .transition()
            .duration(sliderDuration)
            //                    .delay(k*yearDelay*currentYearDuration)
            .ease(d3.easeLinear)
            .attrs({
                d: function (d) {
                    d.p1.x = xScale(yearFilters[0][0]);
                    d.p2.x = xScale(yearFilters[0][1]);
                    k += 1;
                    return yearSliderPathData(d);
                }
            })
    }
    else {
        axisSVG.selectAll('.controlButton')
            .each(function (d) {
                if (d.name == 'pause') {
                    d3.select(this)
                        .attrs({
                            id: function (d) {
                                d.name = 'play';
                                return d.name;
                            }
                        })
                        .styles({
                            filter: function (d) {
                                return 'url(#' + d.name + '_filter)';
                            }
                        })
                }
            });

    }
}
function pause(thisNode, that) {
    var name = thisNode.attr('name');
    changeFilter(thisNode, name);
    var adjustData = adjustSliderPosition(false, that);
    var adjustDirection = adjustData.direction;
    var adjustYear = adjustData.year;
    d3.selectAll('*').interrupt();
    updateAnimation(true, that);

//        addNodes(adjustYear);
//    }
//    that.removeAnimation();
    //console.log(that.yearFilter)
//    console.log('pause');
}
function stop(thisNode, that) {
    var axisSVG = that.axisSVG;
    var svg_g = that.svg_g;
    var animateMode = that.animateMode;
    var drawnodes = that.drawnodes;
    var drawedges = that.drawedges;
    var data = that.data;
    var focusedID = that.focusedID;
    var minYear = that.minYear;
    axisSVG.selectAll('.controlButton')
        .each(function (d) {
            if (d.name == 'pause') {
                d3.select(this)
                    .attrs({
                        id: function (d) {
                            d.name = 'play';
                            return d.name;
                        }
                    })
                    .styles({
                        filter: function (d) {
                            return 'url(#' + d.name + '_filter)';
                        }
                    })
            }
        });
    if (animateMode == flipBook) {
        d3.selectAll('*').interrupt();
        drawnodes.selectAll('*').remove();
        drawedges.selectAll('*').remove();
        that.preLayout(data.postData[focusedID]);
    }
    else {
        d3.selectAll('*').interrupt();
        var adjustData = adjustSliderPosition('stop', that);
        var adjustDirection = adjustData.direction;
        var adjustYear = adjustData.year;
        if (adjustDirection == 'left') {
            that.removeEdges();
        }
        else {
//        addNodes(adjustYear);
        }
        svg_g.select('#nodeG2').remove();
        svg_g.select('#edgeG2').remove();
        svg_g.select('#nodeG4').selectAll('*').remove();
        svg_g.select('#edgeG4').selectAll('*').remove();
        //that.yearFilter=[minYear,minYear+3];
        updateAnimation(false, that);
        //that.preLayout(data.postData[focusedID]);
        //that.changeToMovieMode();
    }

}
function temporalTimeLine(thisNode, that) {
    thisNode
        .attrs({
            id: function (d) {
                d.name = 'temporalTimeLine';
                return d.name;
            }
        })
        .styles({
            filter: function (d) {
                return 'url(#' + d.name + '_filter)'
            }
        });
    that.ifTemporal = true;
    that.changeToMovieMode();
//    updateAnimation();
    var division;
    var temporal = that.temporal;
    //division = temporal.maxDivision;
    var maxDivision = division;
    if(getUrlParam('twitter') == 20) {
        maxDivision = [
            [{year: '1', flow: 1}, {year: '4', flow: 1}],
            [{year: '4', flow: 1}, {year: '8', flow: 1}]
        ];
    }
    else if (getUrlParam('aminerV8_id') == 1182989) {
        maxDivision = [
            [{year: '2007', flow: 1}, {year: '2011', flow: 1}],
            [{year: '2011', flow: 1}, {year: '2013', flow: 1}],
            [{year: '2013', flow: 1}, {year: '2016', flow: 1}]
        ];
    }

    temporal.maxDivision = maxDivision;
    var firstPart = maxDivision[0];
    var yearFilter = that.yearFilter;
    var axisSVG = that.axisSVG;
    var xScale = that.xScale;
    yearFilter = [firstPart[0].year.toInt(), firstPart[firstPart.length - 1].year.toInt()];

    axisSVG.select('.movieSlider')
        .transition()
        .duration(100)
        //                    .delay(k*yearDelay*currentYearDuration)
        .ease(d3.easeLinear)
        .attrs({
            d: function (d) {
                d.p1.x = xScale(yearFilter[0]);
                d.p2.x = xScale(yearFilter[1]);
                return yearSliderPathData(d);
            }
        })
        .on('end', function () {
            updateAnimation(false, that);
        })
    axisSVG.select('#leftAxisCircle')
        .transition()
        //                    .delay(k*yearDelay*currentYearDuration)
        .duration(100)
        .ease(d3.easeLinear)
        .attrs({

            cx: function (d) {
                d.x = xScale(yearFilter[0]);
                return d.x;
            }
        })
        .styles({
            visibility: 'visible'
        });
    axisSVG.select('#rightAxisCircle')
        .transition()
        .duration(100)
        //                    .delay(k*yearDelay*currentYearDuration)
        .ease(d3.easeLinear)
        .attrs({
            cx: function (d) {
                d.x = xScale(yearFilter[1]);
                return d.x;
            }
        });
    axisSVG.select('#leftAxisCircle')
        .attrs({
            'class': 'axisCircle axisController',
            index: function (d) {
                return d.index
            }
        });
    axisSVG.select('#rightAxisCircle')
        .attrs({
            'class': 'axisCircle axisController',
            index: function (d) {
                return d.index
            }
        });
    axisSVG.selectAll('.axisController').sort(function (a, b) {
        return d3.descending(a.index, b.index)
    });


}
function generalTimeLine(thisNode, that) {

    thisNode
        .attrs({
            id: function (d) {
                d.name = 'generalTimeLine';
                return d.name;
            }
        })
        .styles({
            filter: function (d) {
                return 'url(#' + d.name + '_filter)'
            }
        });
    that.ifTemporal = false;
}
function removeEdges() {
    var svg = this.svg;
    svg.selectAll('path')
        .each(function (d) {
            var thisEdge = d3.select(this);
            var status = thisEdge.attr('transitionStatus');
            if (status == 'start') {
                thisEdge.remove();
            }
        })
}
function removeAnimation() {
    var animateMode = this.animateMode;
    var svg = this.svg;
    var yearFilter = this.yearFilter;
    if (animateMode == flipBook) {
        var types = ['.backgroundNode', 'path', '.node', '.size', '.label'];
        for (var i = 0; i < types.length; i++) {
            var type = types[i];
            var selector = svg;
            if (type == 'path')selector = selector.select('.edgeField');
            selector.selectAll(type)
                .each(function (e, i) {
                    var thisObj = d3.select(this);
                    if (thisObj.attr('class') != 'legend') {
                        if (thisObj.attr('transitionStatus') == null) {
                            thisObj.remove();
                        }
                    }

                })
        }
    }
    svg.select('.rightYear')
        .html(yearFilter[1])
        .transition()
        .duration(100)
        .tween("text", function () {
            var i = d3.interpolateRound(yearFilter[1], yearFilter[1]);
            return function (t) {
                this.textContent = i(t);
            };
        })
    svg.selectAll('.backgroundNode').remove()
//        .each(function(d){
//            var thisNode=d3.select(this);
//            var r=thisNode.attr('r').toFloat();
//            thisNode.transition()
//                .duration(100)
//                .attr('r',r)
//        });
    svg.selectAll('.node')
        .each(function (d) {
            var thisNode = d3.select(this);
            thisNode.attrs({
                transitionStatus: 'end'
            });
            if (thisNode.attr('r')) {
                var r = thisNode.attr('r').toFloat();
                thisNode.transition()
                    .duration(100)
                    .attr('r', r)
            }

        });
    svg.selectAll('.size')
        .each(function (d) {
            var thisNode = d3.select(this);
            var size = thisNode.html().toFloat();
            thisNode.attrs({
                transitionStatus: 'end'
            })
            thisNode.transition()
                .duration(100)
                .tween("text", function (d) {
                    var i = d3.interpolateRound(size, size);
                    return function (t) {
                        this.textContent = i(t);
                    };
                })
        });
}
function changeFilter(thisNode, id) {
    thisNode
        .style('filter', 'url(#' + id + '_filter)');
    thisNode
        .attr('id', function (d) {
            d.name = id;
            return d.name
        });

}

function DirectedGraph(data) {
    this.nodes = data.node;
    this.edges = data.edge;
    this.graph = {};
    this.edgeSourceTargetDic = {};
    this.initEdgeSourceTargetDic={};
    this.edgeSourceDic = {};
    this.edgeTargetDic = {};
    this.minYear = 10000;
    this.maxYear = 0;
    this.deletedEdges=[];
    this.maximalSpanningTree={};
    this.spanningTree = {
        nodes: [],
        edges: [],
        deletedTreeEdges: [],
        deletedNonTreeEdges: [],
        deletedEdges: []
    };
    this.ifGetBFSTree=false;
    this.BFSTree='';
    this.getEdgeDic = function (keyType,filter) {
        if(arguments.length==1)filter='flow';
        var dic = {};
        for (var i = 0; i < this.edges.length; i++) {
            if(this.edges[i][filter]>0&&!this.edges[i].disable){
                var key = this.edges[i][keyType];
                if (dic[key])dic[key].push(this.edges[i]);
                else dic[key] = [this.edges[i]];
            }

        }
        return dic;
    };
//    this.getEdgeSourceTargetDic=function (){
//        var dic={};
//        for(var i=0;i<this.edges.length;i++){
//            var source=this.edges[i].source;
//            var target=this.edges[i].target;
//            var key=String(source)+'_'+String(target);
//            dic[key]=this.edges[i];
//        }
//        this.edgeSourceTargetDic=dic;
//    };
    this.init = function () {
//        this.getEdgeSourceTargetDic();
        this.initNodeRelation();
        this.getYearDuration();
        this.initEdgeYearWeight();
        this.storeInitEdgeSourceTargetDic();
        this.build();
    };
    this.initNodeRelation = function () {
        for (var i = 0; i < this.nodes.length; i++) {
            var node = this.nodes[i];
            node.children = [];
            node.parents = [];
        }
    };
    this.storeInitEdgeSourceTargetDic=function(){
        var dic={};
        for(var i=0;i<this.edges.length;i++){
            var source=this.edges[i].source;
            var target=this.edges[i].target;
            var key=source+'_'+target;
            var newEdge={};
            clone(this.edges[i],newEdge);
            dic[key]=newEdge;
        }
        this.initEdgeSourceTargetDic=dic;
    };
    this.getYearDuration = function () {
        for (var i = 0; i < this.edges.length; i++) {
            for (var key in this.edges[i].weight) {
                var year = parseInt(key);
                if (year > this.maxYear)this.maxYear = year;
                if (year < this.minYear)this.minYear = year;
            }
        }
    };
    this.initEdgeYearWeight = function () {
        for (var i = 0; i < this.edges.length; i++) {
            var edge = this.edges[i];
            if(!edge.yearWeight){
                var sum = 0;
                for (var year in edge.weight) {
                    sum += edge.weight[year];
                }
                var yearWeight = 0;
                for (var year in edge.weight) {
//                yearWeight += Math.sqrt(this.maxYear - year.toInt() + 1) * edge.weight[year];
                    yearWeight += this.maxYear - year.toInt() + 1 * edge.weight[year];
                }
                yearWeight /= sum;
                edge.yearWeight = yearWeight;
                edge.yearFlow = yearWeight*edge.flow;
            }

        }
    };
    this.resetYearFlow=function(){
        for(var i=0;i<this.edges.length;i++){
            var edge=this.edges[i];
            edge.yearFlow=edge.flow*edge.yearWeight;
        }
    };
    this.addEdge = function (edge) {
        var source = edge.source;
        var target = edge.target;
        var key = source + '_' + target;
        if (this.edgeSourceTargetDic[key]) {
//            console.log('edge already exists in current graph');
        }
        else {
            this.edges.push(edge);
            this.edgeSourceTargetDic[key] = edge;
            var sourceNode = this.nodes[source];
            var targetNode = this.nodes[target];
            sourceNode.children.push(targetNode);
            targetNode.parents.push(sourceNode);
        }
    };
    this.removeEdge = function (edge) {
        var source = edge.source;
        var target = edge.target;
        var key = source + '_' + target;
        if (!this.edgeSourceTargetDic[key]) {
            console.log('this edge not exists in current graph');
        }
        else {
            //delete dic
//            delete this.edgeSourceTargetDic[key];
            this.edgeSourceTargetDic[key]=null;
            var newEdges = [];
            for (var i = 0; i < this.edges.length; i++) {
                var thisEdge = this.edges[i];
                var thisKey = thisEdge.source + '_' + thisEdge.target;
                if (thisKey != key) {
                    newEdges.push(thisEdge);
                }
            }
            //delete edge
//            this.edges = newEdges;
            this.edges = newEdges;
            //delete node in children and parents
            var sourceNode = this.nodes[source];
            var targetNode = this.nodes[target];
            var newChildren = [];
            var newParents = [];
            if (sourceNode.children.length > 0) {
                for (var j = 0; j < sourceNode.children.length; j++) {
                    var child = sourceNode.children[j];
                    var childID = child.id;
                    if (childID != target) {
                        newChildren.push(child);
                    }
                }
            }
            if (targetNode.parents.length > 0) {
                for (var j = 0; j < targetNode.parents.length; j++) {
                    var parent = targetNode.parents[j];
                    var parentID = parent.id;
                    if (parentID != source) {
                        newParents.push(parent);
                    }
                }
            }
            sourceNode.children = newChildren;
            targetNode.parents = newParents;
            this.deletedEdges.push(edge);
        }

    };
    this.build = function () {
//        console.log(this.nodes);
        this.nodes = this.nodes;
        this.root = '';
        var tmpEdges=[];
        clone(this.edges, tmpEdges);
        this.edges = []
        for (var i = 0; i < tmpEdges.length; i++) {
            var edge = tmpEdges[i];
            this.addEdge(edge);
        }
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].focused == 'true') {
                this.root = this.nodes[i];
                break;
            }
        }

    };
    this.checkConnection = function (method) {
        if (this.root) {
            var visitedNodes = [this.root.id];
            if (method == 'DFS') {
                this.DFS(this.root, visitedNodes);
            }
            if (method == 'BFS' || arguments.length == 0) {
                visitedNodes = [];
                this.BFS(this.root, visitedNodes);
            }
            var disableList=[];
            for(var i=0;i<this.nodes.length;i++){
                if(this.nodes[i].disable)disableList.push(this.nodes[i].id);
            }
            if ((visitedNodes.length == this.nodes.length-disableList.length)) {

                return true;
            }
            else {
                return false;
            }
        }
    };

    this.BFS = function (node, visitedNodes) {
        //have some problems that can not traverse all the graph
        var nodeStep = [];
        var rootWeight = 1;
        var root = node;
        var level = 0;
        var k = 0.5;
        nodeStep.push(root);
        var BFSEdge=[];
        var bfsNodes=[];
        while (nodeStep[0]) {
            var newStep = [];
            for (var i = 0; i < nodeStep.length; i++) {
                var step = nodeStep[i];
                if ((!step.disable)&&(!in_array(step.id, visitedNodes))) {
                    visitedNodes.push(step.id);
                    if (!step.BFSWeight)step.BFSWeight = rootWeight * Math.pow(k, level);
                    if (step.children) {
                        for (var j = 0; j < step.children.length; j++) {
                            if(!step.children[j].disable){
                                var source = step.id;
                                var target = step.children[j].id;
                                var key = source + '_' + target;
                                var edge = this.edgeSourceTargetDic[key];
                                if (!edge.BFSWeight)edge.BFSWeight = rootWeight * Math.pow(k, level);

                                if (!in_array(step.children[j].id, visitedNodes)) {
                                    if(!in_array(target, bfsNodes)){
                                        bfsNodes.push(target);
                                        BFSEdge.push(edge);
                                    }
                                    newStep.push(step.children[j]);
                                }
                            }

                        }
                    }

                }
            }
            level += 1;
            nodeStep = newStep;
        }
        if(this.ifGetBFSTree){
            var newNodes=[];
            var newEdges=[];
            clone(this.nodes,newNodes);
            clone(BFSEdge,newEdges)
            var BFSTreeData={node:newNodes,edge:newEdges};
            var BFSTree=new DirectedGraph(BFSTreeData);
            BFSTree.init();
            this.BFSTree=BFSTree;
        }


    };
    this.DFS = function (node, visitedNodes) {
//        console.log('nodeID:'+node.id);
        if (node.children.length > 0) {
            var children = node.children;
            for (var i = 0; i < children.length; i++) {
                if (!in_array(children[i].id, visitedNodes)&&(!children[i].disable)) {
                    visitedNodes.push(children[i].id);
                    this.DFS(children[i], visitedNodes);
                }
            }
        }
    };
    this.sortEdge = function (attr, order) {
//        var weightKey='BFSWeight';
        var weightKey = 'yearWeight';
        if (arguments.length == 0) {
            attr = 'flow';
            order = 'decrease';
        }
        if (arguments.length == 1) {
            order = 'decrease';
        }
        this.edges.sort(function (a, b) {
            if (order == 'increase')return a[attr] * a[weightKey] - b[attr] * b[weightKey];
            else if (order == 'decrease')return b[attr] * b[weightKey] - a[attr] * a[weightKey];

        });
    };
    this.filterTopFlow=function(k){
        this.sortEdge('flow','increase');
        while(this.checkConnection()&&this.edges.length>this.nodes.length*k){
            var edge;
            for (var i = 0; i < this.edges.length; i++) {
                if (!this.edges[i].deleteTimes) {
                    edge = this.edges[i];
                    break;
                }
            }
            this.removeEdge(edge);
            if (!this.checkConnection()) {
                edge.deleteTimes = 1;
                this.addEdge(edge);

            }
        }
    };
    this.recurRemoveEdge=function(edge){
        this.removeEdge(edge);
        if(edge.originEdge){
            this.recurRemoveEdge(edge.originEdge);
        }
    };
    this.openCircle=function(node){
        if(node.children){
            var newChildren=[];
            for(var i=0;i<node.children.length;i++){
                var child=node.children[i];
                if(child.pseudoNode){
                    if(!child.disable)newChildren.push(child);
                }
                else{
                    newChildren.push(child);
                }
            }
            node.children = newChildren;
            for(var i=0;i<node.children.length;i++){
                var child=node.children[i];
                if(!child.disable){
                    if(!child.pseudoNode){
                        var source=node.id;
                        var target=child.id;
                        var key=source+'_'+target;
                        var edge=this.edgeSourceTargetDic[key];
                        if(edge.disable)edge.disable=false;
                        this.openCircle(child);
                    }
                    else{
                        child.disable = true;
                        if(child.children){
                            for(var j=0;j<child.children.length;j++){
                                var source=child.id;
                                var target=child.children[j].id;
                                var key=source+'_'+target;
                                var edge=this.edgeSourceTargetDic[key];
                                edge.disable=true;
                                edge.originEdge.disable=false;
                            }
                        }
                        var tmpChildren=[];
                        for(var j=0;j<node.children;j++){
                            if(!node.children[j].pseudoNode){
                                if(!node.children[j].disable)tmpChildren.push(node.children[j]);
                            }
                        }
                        if(child.circleEdges){
                            var source=node.id;
                            var target=child.id;
                            var key=source+'_'+target;
                            var originEdge=this.edgeSourceTargetDic[key].originEdge;
                            var newChild=this.nodes[originEdge.target];
                            newChild.disable=false;
                            tmpChildren.push(newChild);
                            for(var j=0;j<child.circleEdges.length;j++){
                                var edge=child.circleEdges[j];
                                if(edge.target!=originEdge.target)edge.disable=false;
                                else{

                                    this.recurRemoveEdge(edge);
                                }
                            }
                        }

                        if(child.innerNodesIDList){
                            for(var j=0;j<child.innerNodesIDList.length;j++){
                                var id=child.innerNodesIDList[j];
                                var innerNode=this.nodes[id];
                                innerNode.disable=false;
                            }
                        }
                        node.children=tmpChildren;
                        if(!this.checkConnection()){
                            console.log('does not connected');
                        }
                        else{
                            this.openCircle(this.root);
                        }
                    }
                }
            }
        }
    };
    this.contractCircle = function (circle) {
        var edgeSourceDic=this.getEdgeDic('source');
        var edgeTargetDic=this.getEdgeDic('target');
        var len=this.nodes.length;
        var newNode={
            id:len,
            children:[],
            parents:[],
            innerNodesIDList:[],
            intoThisNodeEdges:[],
            outThisNodeEdges:[],
            circleEdges:[],
            pseudoNode:true
        };
        this.nodes.push(newNode);
        var circleIDList=[];
        for(var i=0;i<circle.edges.length;i++){
            var edge=circle.edges[i];
            var source=edge.source;
            var target=edge.target;
            this.nodes[source].disable = true;
            this.nodes[target].disable = true;
            if(!in_array(source, circleIDList))circleIDList.push(source);
            if(!in_array(target, circleIDList))circleIDList.push(target);
            newNode.circleEdges.push(edge);
        }
        newNode.innerNodesIDList=circleIDList;
        for(var i=0;i<circleIDList.length;i++){
            if(edgeSourceDic[circleIDList[i]]){
                for(var j=0;j<edgeSourceDic[circleIDList[i]].length;j++){
                    var edge=edgeSourceDic[circleIDList[i]][j];
                    edge.disable = true;
                    if(!in_array(edge.target,circleIDList)){
                        if(this.directedTree){
                            var directedTreeEdgeTargetDic=this.directedTree.getEdgeDic('target');
                            var tmpEdge=directedTreeEdgeTargetDic[edge.target];
                            if(tmpEdge.originEdge){
                                var key=tmpEdge[0].originEdge.source+'_'+tmpEdge[0].originEdge.target;
                                edge = this.edgeSourceTargetDic[key];
                            }
                        }
                        var newEdge={};
                        clone(edge, newEdge);
                        newEdge.disable=false;
                        newEdge.pseudoEdge=true;
                        newEdge.originEdge=edge;
                        newEdge.source = newNode.id;

                        this.addEdge(newEdge);

                        newNode.outThisNodeEdges.push(edge);
                    }
                }
                for(var j=0;j<edgeTargetDic[circleIDList[i]].length;j++){
                    var edge=edgeTargetDic[circleIDList[i]][j];
                    edge.disable = true;
                    if(!in_array(edge.source,circleIDList)){
                        if(this.directedTree){
                            var directedTreeEdgeSourceDic=this.directedTree.getEdgeDic('source');
                            var tmpEdge;
//                            if(directedTreeEdgeSourceDic[edge.source]){
//                                tmpEdge=directedTreeEdgeSourceDic[edge.source][0];
//                                edge = {};
//                                key = tmpEdge.source+'_'+tmpEdge.target;
//                                edge = this.edgeSourceTargetDic[key];
//                            }
//                            else{
                                var maxEdge={circleFlow:-100000000};
                                for(var k=0;k<edgeSourceDic[edge.source].length;k++){
                                    if(in_array(edgeSourceDic[edge.source][k].target,circleIDList)){
                                        tmpEdge=edgeSourceDic[edge.source][k];
                                        if(tmpEdge.circleFlow>maxEdge.circleFlow)maxEdge=tmpEdge;
                                    }

                                }
                                key = maxEdge.source+'_'+maxEdge.target;
                                edge = this.edgeSourceTargetDic[key];
//                            }

                        }

                        var newEdge={};
                        clone(edge, newEdge);
                        newEdge.disable=false;
                        newEdge.pseudoEdge=true;
                        newEdge.originEdge=edge;
                        newEdge.target = newNode.id;

                        this.addEdge(newEdge);

                        newNode.intoThisNodeEdges.push(edge);
                    }
                }
            }
        }
    };
    this.generateMaximalSpanningTree = function () {

        //the method is provided by Guangdi Li http://www.mathworks.com/matlabcentral/profile/authors/1714285-guangdi-li
        //Email: lowellli121@gmail.com
        //http://mcbench.cs.mcgill.ca/benchmark/24327-maximumminimum-weight-spanning-tree-directed?query=%2F%2FForStmt%2F%2FAssignStmt%5Bname(lhs())%3D%27NameExpr%27+and+name(rhs())%3D%27NameExpr%27+and+rhs()%2F%40kind%3D%27VAR%27%5D
        /*
         %1 Discard the arcs entering the root if any; For each node other than the root, select the entering arc with the highest cost; Let the selected n-1 arcs be the set S.
         %  If no cycle is formed, G( N,S ) is a MST. Otherwise, continue.
         %2 For each cycle formed, contract the nodes in the cycle into a pseudo-node (k), and modify the cost of each arc which enters a node (j) in the cycle from some node (i)
         %  outside the cycle according to the following equation.  c(i,k)=c(i,j)-(c(x(j),j)-min_{j}(c(x(j),j)) where c(x(j),j) is the cost of the arc in the cycle which enters j.
         %3 For each pseudo-node, select the entering arc which has the smallest modified cost; Replace the arc which enters the same real node in S by the new selected arc.
         %4 Go to step 2 with the contracted graph.
         */
        //the below code is written by Yue Su
        //in our data there should not exist a path that target to the root
        //select the entering arc with the highest cost
        var treeNodes=[];
        var treeEdges=[];
        var tmpEdges=[];
        clone(this.nodes, treeNodes);
        for(var i=0;i<treeNodes.length;i++){
            if(!(treeNodes[i].focused=='true')){
                var id=parseInt(treeNodes[i].id);
                var nodeEdge=[];
                var maxEdge={yearFlow:0};
                for(var j=0;j<this.edges.length;j++){
                    if(this.edges[j].target==id){
                        if(this.edges[j].yearFlow>maxEdge.yearFlow)maxEdge=this.edges[j];
                    }
                }
                tmpEdges.push(maxEdge);
            }
        }
        clone(tmpEdges,treeEdges);
        var treeData={node:treeNodes,edge:treeEdges};
//        for(var i=0;i<treeEdges.length;i++){
//            console.log(edge[])
//        }
        var directedTree=new DirectedGraph(treeData);
        this.directedTree=directedTree;
        directedTree.init();
        directedTree.sortEdge('source','increase');

        for(var i=0;i<this.edges.length;i++){
            this.edges[i].circleFlow=this.edges[i].yearFlow;
        }
        for(var i=0;i<directedTree.edges.length;i++){
            directedTree.edges[i].circleFlow=directedTree.edges[i].yearFlow;
        }

        //detect circle
        while(!directedTree.checkConnection()){

            //find circle for each node
            for(var i=0;i<directedTree.nodes.length;i++){

                var node=directedTree.nodes[i];
                if(!node.disable){
                    var id=node.id;
                    var pathTarget = {id: id, preEdge: [], currentIDList: [id], next: []};
                    var paths=[];
                    directedTree.findCircle(id, id, id, pathTarget,paths,false);
                    if(paths[0]){
                        //circle find
                        //contract the nodes in the cycle into a pseudo-node (k)
                        var len=this.nodes.length;

                        var circleIDList=[];
                        for(var j=0;j<paths[0].edges.length;j++){

                            var edge=paths[0].edges[j];
                            var source=edge.source;
                            var target=edge.target;
                            if(!in_array(source, circleIDList))circleIDList.push(source);
                            if(!in_array(target, circleIDList))circleIDList.push(target);

                            if(!directedTree.nodes[source].circleTarget)directedTree.nodes[source].circleTarget=target;
                            if(!directedTree.nodes[target].circleSource)directedTree.nodes[target].circleSource=source;
                        }
                        var edgeTargetToCircle=[];
                        var circleEdgeDic={};
                        for(var j=0;j<circleIDList.length;j++){
                            var circleNodeID=circleIDList[j];
                            var parents=this.nodes[circleNodeID].parents;
                            var len=0;
                            for(var x=0;x<parents.length;x++){
                                if(!parents[x].disable)len+=1;
                            }
                            if(len>1){
                                var circleSource=directedTree.nodes[circleNodeID].circleSource;
                                var circleEdgeKey=circleSource+'_'+circleNodeID;
                                var circleEdge=this.edgeSourceTargetDic[circleEdgeKey];
                                circleEdgeDic[circleNodeID]=circleEdge;
                                for(var k=0;k<parents.length;k++){
                                    if(!in_array(parents[k].id,circleIDList)&&!parents[k].disable){
//                                    if(parents[k].id!=circleSource&&!parents[k].disable){
                                        var edgeKey=parents[k].id+'_'+circleNodeID;
                                        var edge=this.edgeSourceTargetDic[edgeKey];
                                        edge.circleFlow-=circleEdge.circleFlow;
                                        edgeTargetToCircle.push(edge);
                                    }
                                }
                            }
                        }
//                    console.log(edgeTargetToCircle);
                        var maxCircleFlowEdge={circleFlow:-100000000};
                        for(var j=0;j<edgeTargetToCircle.length;j++){
                            if(edgeTargetToCircle[j].circleFlow>maxCircleFlowEdge.circleFlow){
                                maxCircleFlowEdge=edgeTargetToCircle[j];
                            }
                        }
                        var circleTarget=maxCircleFlowEdge.target;
                        var targetCircleEdge=circleEdgeDic[circleTarget];
//                        console.log('try remove:  '+targetCircleEdge.source+'->'+targetCircleEdge.target)
//                        recurRemove(targetCircleEdge);
                        function recurRemove(targetCircleEdge){
                            if(targetCircleEdge.originEdge){
                                directedTree.removeEdge(targetCircleEdge);

//                                console.log('try remove:  '+targetCircleEdge.originEdge.source+'->'+targetCircleEdge.originEdge.target);
                                recurRemove(targetCircleEdge.originEdge)
                            }
                        }

                        var tmpEdge={};
                        clone(maxCircleFlowEdge,tmpEdge);
                        maxCircleFlowEdge=tmpEdge;
                        function recurAdd(maxCircleFlowEdge){
                            directedTree.addEdge(maxCircleFlowEdge);
                            if(maxCircleFlowEdge.originEdge){
//                                console.log('try add:  '+maxCircleFlowEdge.originEdge.source+'->'+maxCircleFlowEdge.originEdge.target)
                                recurAdd(maxCircleFlowEdge.originEdge)
                            }
                        }
//                        console.log('try add:  '+maxCircleFlowEdge.source+'->'+maxCircleFlowEdge.target)
                        recurAdd(maxCircleFlowEdge);

                        directedTree.contractCircle(paths[0]);
                        this.contractCircle(paths[0]);
//                        console.log(directedTree.edgeSourceTargetDic)
//                        console.log('merge ',circleIDList,'as node');
                        for(var j=0;j<directedTree.nodes.length;j++){
//                            delete directedTree.nodes[j].circleSource;
                            directedTree.nodes[j].circleSource=null;
//                            delete directedTree.nodes[j].circleTarget;
                            directedTree.nodes[j].circleTarget=null;
                        }
                        break;

                    }
                }




            }
        }
        var tmpcurrentEdges=[];
        var tmpcurrentNodes=[];
        for(var tmpkey in directedTree.edgeSourceTargetDic){
            var tmpsource=parseInt(tmpkey.split('_')[0]);
            var tmptarget=parseInt(tmpkey.split('_')[1]);
            if(!directedTree.edgeSourceTargetDic[tmpkey].pseudoEdge){
//                console.log(tmpkey);
                var tmpedge={};
                clone(directedTree.edgeSourceTargetDic[tmpkey],tmpedge);
                if(tmpedge.disable)delete tmpedge.disable;
                tmpcurrentEdges.push(tmpedge)
            }
        }
        for(var i=0;i<directedTree.nodes.length;i++){
            var node=directedTree.nodes[i];
            if(!node.pseudoNode){
                var newNode={};
                clone(node, newNode);
                if(newNode.children)delete newNode.children;
                if(newNode.parents)delete newNode.parents;
                if(newNode.disable)delete newNode.disable;
                tmpcurrentNodes.push(newNode);
            }
        }
        var tmpGraphData={node:tmpcurrentNodes,edge:tmpcurrentEdges};
        var tmpGraph=new DirectedGraph(tmpGraphData);

        tmpGraph.init();
        tmpGraph.ifGetBFSTree=true;
        tmpGraph.checkConnection();
//        tmpcurrentEdges.sort(function(a,b){return d3.ascending(a.target, b.target)});
//
//        tmpcurrentEdges.sort(function(a,b){return d3.ascending(a.source, b.source)});
//        for(var i=0;i<tmpcurrentEdges.length;i++){
//            console.log(tmpcurrentEdges[i].source+'->'+tmpcurrentEdges[i].target);
//        }
//        console.log(tmpcurrentEdges);
//        directedTree.openCircle(directedTree.root);
//        var newTreeEdges=[];
//        var newTreeNodes=[];
//        for(var i=0;i<directedTree.edges.length;i++){
//            var edge=directedTree.edges[i];
//            var source=edge.source;
//            var target=edge.target;
//            var edgeStr=source+'->'+target;
//
//            if(!edge.disable&&!edge.pseudoEdge){
////                console.log(edgeStr);
//                newTreeEdges.push(edge);
//            }
//        }
//        for(var i=0;i<directedTree.nodes.length;i++){
//            var node=directedTree.nodes[i];
//            if(!node.disable)newTreeNodes.push(node);
//        }
//        var spanningTreeData={node:newTreeNodes,edge:newTreeEdges};
//        var spanningTree=new DirectedGraph(spanningTreeData);
//        spanningTree.init();
        var spanningTree=tmpGraph.BFSTree;
        this.maximalSpanningTree=spanningTree;
        spanningTree.deletedTreeEdges=[];
        spanningTree.deletedNonTreeEdges=[];
        var originEdgeDic=this.initEdgeSourceTargetDic;
        var mstEdgeDic=spanningTree.edgeSourceTargetDic;
        for(var key in originEdgeDic){
            if(!mstEdgeDic[key]){
                var deletedEdge=originEdgeDic[key];
                this.maximalSpanningTree.deletedTreeEdges.push(deletedEdge);
            }
        }
//        if(!directedTree.checkConnection()){
//            //can not traverse all nodes from the root, means that there exist one or more cycle in the current graph
//            for(var i=0;i<this.nodes.length;i++){
//
//            }
//        }
//        else{
//
//        }

    };
    this.generateSpanningTree = function () {
        this.resetYearFlow();
        while (!this.checkIfSpanningTree()) {
            this.edges=this.edges.sort(function(a,b){return a.source- b.source});
            this.sortEdge('flow', 'increase');
            var edge;
            for (var i = 0; i < this.edges.length; i++) {
                if (!this.edges[i].deleteTimes) {
                    edge = this.edges[i];
                    break;
                }
            }
            this.removeEdge(edge);
            if (!this.checkConnection()) {
                edge.deleteTimes = 1;
                this.addEdge(edge);

            }
            else {
                this.spanningTree.deletedEdges.push(edge);
                var source = edge.source;
                var target = edge.target;
                var originTarget = edge.target;
                var pathTarget = {id: target, preEdge: [], currentIDList: [target], next: []};
                var paths = [];

//                this.findAllPathBetween(source, target, originTarget, pathTarget, paths);
//                this.findMaxPathBetween(source, target, originTarget, pathTarget, paths);
                paths = this.findMaxPathBetween(source, target);
                //console.log(paths.length);
                if (paths.length > 0) {
                    var maxAvgFlowPath={avgFlow:0};
                    for(var i=0;i<paths.length;i++){
                        paths[i].avgFlow=paths[i].totalFlow/paths[i].edges.length;
                        if(paths[i].avgFlow>maxAvgFlowPath.avgFlow)maxAvgFlowPath=paths[i];
                    }

                    for (var i = 0; i < maxAvgFlowPath.edges.length; i++) {
                        maxAvgFlowPath.edges[i].yearFlow += edge.yearFlow;
                        maxAvgFlowPath.totalFlow += edge.yearFlow;
                    }
//                    paths.sort(function (a, b) {
//                        return b.totalFlow - a.totalFlow;
//                    });
//                    paths.sort(function (a, b) {
//                        return a.length - b.length;
//                    });
                    this.spanningTree.deletedTreeEdges.push({
                        originEdge: edge,
                        newPath: maxAvgFlowPath
                    })
                }
                else {
                    this.spanningTree.deletedNonTreeEdges.push(edge);
                }


            }
        }
//        for(var i=0;i<this.spanningTree.deletedEdges.length;i++){
//            var edge=this.spanningTree.deletedEdges[i];
//            var source=edge.source;
//            var target=edge.target;
//            var originTarget=edge.target;
//            var pathTarget={id:target, preEdge:[],currentIDList:[target],next:[]};
//            var paths=[];
//            this.findAllPathBetween(source,target,originTarget,pathTarget,paths);
////            console.log(paths.length);
//            if(paths.length>0){
//                for(var j=0;j<paths[0].edges.length;j++){
//                    paths[0].edges[j].flow+=edge.flow;
//                    paths[0].totalFlow+=edge.flow;
//                }
//                paths.sort(function(a,b){
//                    return b.totalFlow-a.totalFlow;
//                });
//                paths.sort(function(a,b){
//                    return a.length-b.length;
//                });
//                this.spanningTree.deletedTreeEdges.push({
//                    originEdge:edge,
//                    newPath:paths[0]
//                })
//            }
//            else{
//                this.spanningTree.deletedNonTreeEdges.push(edge);
//            }
//        }

    };
    this.checkIfSpanningTree = function () {
        if (this.checkConnection("DFS") && (this.nodes.length - this.edges.length == 1)) {
            return true;
        }
        else {
            return false;
        }
    };
    this.findCircle=function(source, target, originTarget, pathTarget, paths,circleFlag){
        this.edgeTargetDic = this.getEdgeDic('target','flow');
        var targetParents = this.edgeTargetDic[target];
        pathTarget.next = [];
        if (targetParents) {
            for (var i = 0; i < targetParents.length; i++) {
                var newSource = targetParents[i].source;
                if (!circleFlag) {
                    if(newSource == source){
                        circleFlag=true;
                    }
                    var newPreEdge = [];
                    var key = newSource + '_' + target;
                    var newCurrentIDList = [];
                    var reverseKey = target + '_' + newSource;
                    if ((newSource!=originTarget&&(!in_array(newSource, pathTarget.currentIDList)))||newSource==originTarget) {
                        clone(pathTarget.preEdge, newPreEdge);
                        clone(pathTarget.currentIDList, newCurrentIDList);
                        newPreEdge.push(key);
                        newCurrentIDList.push(newSource);
                        var newPathTarget = {id: newSource, preEdge: newPreEdge, currentIDList: newCurrentIDList, next: []};
                        pathTarget.next.push(newPathTarget);
                        if (!circleFlag) {
                            this.findCircle(source, newSource, originTarget, newPathTarget, paths,circleFlag)
                        }

                        else {
                            var circle = {};
                            circle.edges = [];
                            circle.length = newPathTarget.preEdge.length;
                            circle.totalFlow = 0;
                            for (var j = 0; j < circle.length; j++) {
                                var edge = this.edgeSourceTargetDic[newPathTarget.preEdge[j]]
                                circle.edges.push(edge);
                                circle.totalFlow += edge.flow;
                            }
                            paths.push(circle);

                        }

                    }
                }



            }
        }
    }
    this.findAllPathBetween = function (source, target, originTarget, pathTarget, paths) {

        this.edgeTargetDic = this.getEdgeDic('target','flow');
        var targetParents = this.edgeTargetDic[target];
        pathTarget.next = [];
        if (targetParents) {
            for (var i = 0; i < targetParents.length; i++) {
                var newSource = targetParents[i].source;
                if (newSource != originTarget) {
                    var newPreEdge = [];
                    var key = newSource + '_' + target;
                    var newCurrentIDList = [];
                    var reverseKey = target + '_' + newSource;
                    if ((!in_array(newSource, pathTarget.currentIDList))) {
                        clone(pathTarget.preEdge, newPreEdge);
                        clone(pathTarget.currentIDList, newCurrentIDList);
                        newPreEdge.push(key);
                        newCurrentIDList.push(newSource);
                        var newPathTarget = {id: newSource, preEdge: newPreEdge, currentIDList: newCurrentIDList, next: []};
                        pathTarget.next.push(newPathTarget);
                        if (newSource != source) {
                            this.findAllPathBetween(source, newSource, originTarget, newPathTarget, paths)
                        }
                        else {
                            var newPath = {};
                            newPath.edges = [];
                            newPath.length = newPathTarget.preEdge.length;
                            newPath.totalFlow = 0;
                            for (var j = 0; j < newPath.length; j++) {
                                var edge = this.edgeSourceTargetDic[newPathTarget.preEdge[j]]
                                newPath.edges.push(edge);
                                newPath.totalFlow += edge.flow;
                            }


                            paths.push(newPath);

    //                            var pathStr='';
    //                            for(var j=0;j<newPath.edges.length;j++){
    //                                pathStr+=newPath.edges[j].target;
    //                                pathStr+='<-'
    //                            }
    //                            pathStr+=newPath.edges[newPath.edges.length-1].source;
    //                            console.log(pathStr);

                        }

                    }
                }


            }
        }

    };
    this.dijkstra=function(source,target){
        var dijGraph=new dijkstraGraph();
        var nodes=this.nodes;
        var edges=this.edges;
        var dijNodes=[];
        for(var i=0;i<nodes.length;i++){
            var newNode=dijGraph.addNode(nodes[i].id);
            dijNodes.push(newNode);
        }
        var maxYearFlow=d3.max(edges,function(d){return d.yearFlow})+1;
        for(var i=0;i<edges.length;i++){
            var edgeSource=edges[i].source;
            var edgeTarget=edges[i].target;
            var sourceNode=dijNodes[edgeSource];
            var targetNode=dijNodes[edgeTarget];
            sourceNode.addEdge(targetNode,maxYearFlow-edges[i].yearFlow);
        }
        return dijkstra(dijGraph,dijNodes[source],dijNodes[target]);
    };
    this.findMaxPathBetween=function(source,target){
        var paths=[];
//        while(1){
        var shortestPathEdges=this.dijkstra(source, target);

//            var minEdge={yearFlow:Number.POSITIVE_INFINITY};
        var newPath={};
        newPath.edges = [];
        newPath.totalFlow = 0;
        newPath.length = 0;
        for(var i=0;i<shortestPathEdges.length;i++){
            var edge=this.edgeSourceTargetDic[shortestPathEdges[i]];
            newPath.edges.push(edge);
            newPath.totalFlow+=edge.yearFlow;
            newPath.length=newPath.edges.length;
//                if(edge.yearFlow<minEdge.yearFlow)minEdge=edge;
        }
        if(newPath.length>0)paths.push(newPath);
//            minEdge.ignoreInDijkstra=true;
//        }
        return paths;
    };
    this.findMaxPathBetweenOld=function(source, target, originTarget, pathTarget, paths){
        if(paths.length>=50){
            return
        }
        this.edgeTargetDic = this.getEdgeDic('target','yearFlow');
        var targetParents = this.edgeTargetDic[target];
        pathTarget.next = [];
        if (targetParents) {
            for (var i = 0; i < targetParents.length; i++) {
                var newSource = targetParents[i].source;
                if (newSource != originTarget) {
                    var newPreEdge = [];
                    var key = newSource + '_' + target;
                    var newCurrentIDList = [];
                    var reverseKey = target + '_' + newSource;
                    if ((!in_array(newSource, pathTarget.currentIDList))) {
                        clone(pathTarget.preEdge, newPreEdge);
                        clone(pathTarget.currentIDList, newCurrentIDList);
                        newPreEdge.push(key);
                        newCurrentIDList.push(newSource);
                        var newPathTarget = {id: newSource, preEdge: newPreEdge, currentIDList: newCurrentIDList, next: []};
                        pathTarget.next.push(newPathTarget);
                        if (newSource != source) {
                            this.findMaxPathBetween(source, newSource, originTarget, newPathTarget, paths)
                        }
                        else {
                            var newPath = {};
                            newPath.edges = [];
                            newPath.length = newPathTarget.preEdge.length;
                            newPath.totalFlow = 0;
                            for (var j = 0; j < newPath.length; j++) {
                                var edge = this.edgeSourceTargetDic[newPathTarget.preEdge[j]];
                                newPath.edges.push(edge);
                                newPath.totalFlow += edge.yearFlow;
                            }
                            var minEdge=d3.min(newPath.edges,function(d){
                                return d.yearFlow;
                            });
                            for(var j=0;j<this.edges.length;j++){
                                this.edges[j].yearFlow-=minEdge;
                            }
                            if(paths.length>=50){
                                return
                            }
                            paths.push(newPath);
    //                            var pathStr='';
    //                            for(var j=0;j<newPath.edges.length;j++){
    //                                pathStr+=newPath.edges[j].target;
    //                                pathStr+='<-'
    //                            }
    //                            pathStr+=newPath.edges[newPath.edges.length-1].source;
    //                            console.log(pathStr);

                        }

                    }
                }


            }
        }
    }
}
function updateCheckBox(d) {
    var status = sourceCheckedStatus;
    if (status.left && status.right) {
        d3.selectAll('.' + d.type + 'CheckBox').attrs({
            disabled: function () {
                return null;
            }
        })
    }
    else if (status.left) {
        d3.select('.' + d.type + 'CheckBox_left')
            .attrs({
                disabled: true
            })
    }
    else if (status.right) {
        d3.select('.' + d.type + 'CheckBox_right')
            .attrs({
                disabled: true
            })
    }
}
function updateSvgBySourceCheckBox() {
    var status = sourceCheckedStatus;
    var ratio = {};
    var totalWidth = usefulWidth;

    if (status.left && status.right) {
        ratio.left = 0.5;
        ratio.mid = 0.5;
        ratio.right = 0;
        ratio.control = 1;
        leftLayer.dataSourceVisibility = 'visible';
        rightLayer.dataSourceVisibility = 'visible';
        leftLayer.ifLayout = true;
        rightLayer.ifLayout = true;
        currentLayer = null;
    }
    else if (status.left) {
        ratio.left = 0.63;
        ratio.mid = 0;
        ratio.right = 0.37;
        ratio.control = 0.63;
        leftLayer.dataSourceVisibility = 'hidden';
        rightLayer.dataSourceVisibility = 'hidden';
        currentLayer = leftLayer;
        leftLayer.ifLayout = true;
        rightLayer.ifLayout = false;
    }
    else if (status.right) {
        ratio.left = 0;
        ratio.mid = 0.63;
        ratio.right = 0.37;
        ratio.control = 0.63;
        leftLayer.dataSourceVisibility = 'hidden';
        rightLayer.dataSourceVisibility = 'hidden';
        currentLayer = rightLayer;
        leftLayer.ifLayout = false;
        rightLayer.ifLayout = true;
    }
    var newWidth = {};
    newWidth.left = totalWidth * ratio.left;
    newWidth.right = totalWidth * ratio.right;
    newWidth.mid = totalWidth * ratio.mid;
    newWidth.control = totalWidth * ratio.control;
    //console.log(newWidth);
    var transitionData = [
        {class: '.graphDiv_left', ease: 'linear', duration: 1000, width: newWidth.left, layer: leftLayer},
        {class: '.authorDiv_left', ease: 'linear', duration: 1000, width: newWidth.left, layer: leftLayer},
        {class: '.graphDiv_right', ease: 'linear', duration: 1000, width: newWidth.mid, layer: rightLayer},
        {class: '.authorDiv_right', ease: 'linear', duration: 1000, width: newWidth.mid, layer: rightLayer},
        {class: '.paperDiv', ease: 'linear', duration: 1000, width: newWidth.right},
        {class: '.topControlDiv', ease: 'linear', duration: 1000, width: newWidth.control},
        {class: '.bottomControlDiv', ease: 'linear', duration: 1000, width: newWidth.control},
    ];
    transitionData.forEach(function (item) {
        d3.select(item.class)
            //.transition()
            //.ease(item.ease)
            //.duration(item.duration)
            .styles({
                width: item.width + px
            });
        if (item.class == '.graphDiv_left' || item.class == '.graphDiv_right' || item.class == '.authorDiv_left' || item.class == '.authorDiv_right') {
            item.layer.svg
                .attrs({
                    width: item.width
                });
            item.layer.axisSVG
                .attrs({
                    width: item.width
                });
            item.layer.size = {
                width: item.layer.svg.attr("width") * 0.9,
                height: item.layer.svg.attr("height") * 1
            };

        }
    });
    requestData();
    //var layers=[leftLayer,rightLayer];
    //layers.forEach(function(layer){
    //    if(layer.size.width==0)return;
    //    var tmpData={};
    //    clone(layer.data.sourceData[layer.focusedID],tmpData);
    //    layer.processData(tmpData);
    //    if(layer.focusedID&&layer.preFocusedID){
    //        layer.layout(optionNumber,true, 'incremental',layer.data.postData[layer.focusedID]);
    //    }
    //    else{
    //        layer.preLayout(layer.data.postData[layer.focusedID]);
    //    }
    //});
    var animationModeDiv = d3.select('.directionDiv');
    var bottomDiv = d3.select('.bottomControlDiv');
    var bottomLength = bottomDiv.style('width').split('px')[0];
    var animaLength = animationModeDiv.style('width').split('px')[0];
    var leftDistance = (bottomLength - animaLength) / 2;
    animationModeDiv.styles({
        'margin-left': leftDistance + px
    });

}
function changeOption(d) {
    if (d.fatherID == 3) {
        optionNumber.nodeLabelOption = parseInt(d.selectID);
    }
    else if (d.fatherID == 4) {
        if (d['selectID'] == 0) nodeOpacityOption = 'uniform';
        else if (d['selectID'] == 1) nodeOpacityOption = 'citation';
        else if (d['selectID'] == 2) nodeOpacityOption = 'avgCitation';

        requestData();
    }
    else if (d.fatherID == 5) {
        if (d['selectID'] == 0)edgeThickNessOption = 'flowStrokeWidth';
        else if (d['selectID'] == 1) edgeThickNessOption = 'citationStrokeWidth';
        //requestData();
        var edgeBrush = d3.brushX()
            .extent([[0, -5], [100, 5]])
            .on("end", currentLayer.edgeBrushed);
        currentLayer.edgeAxisX.domain(eDomain[edgeThickNessOption]);
        gEdgeSizeBarBrush.call(edgeBrush).call(edgeBrush.move, [currentLayer.edgeAxisX(eMin[edgeThickNessOption]), currentLayer.edgeAxisX(eMax[edgeThickNessOption])]);

    }
    else if (d.fatherID == 2) {
        optionNumber.style = d.selectID.toInt();
        if (d.selectID == 0) {
            colorStyle = 'dark';
        }
        else if (d.selectID == 1) {
            colorStyle = 'light';
        }
        initSetting(colorStyle);
        initFullScreenAndSizeBar();
        gTranslation();
        drawFullScreenIcon(gFullScreen, fullScreenButtonTranWidth, fullScreenButtonTranHeight);
        requestData();
    }
    else if (d.fatherID == 0) {
        var aminerV8ID = getUrlParam('aminerV8_id');
        var citeseerxID = getUrlParam('citeseerx_id');
        if (d.selectID == 0) {
            if (source != 'aminerV8') {
                var url = 'graph.html?'
                if (aminerV8ID)url += 'aminerV8_id=' + aminerV8ID + '&';
                if (citeseerxID)url += 'citeseerx_id=' + citeseerxID + '&';
                url += 'selected=aminerV8';
                window.open(url);

            }

        }
        else if (d.selectID == 1) {
            if (source != 'citeseerx') {
                var url = 'graph.html?'
                if (aminerV8ID)url += 'aminerV8_id=' + aminerV8ID + '&';
                if (citeseerxID)url += 'citeseerx_id=' + citeseerxID + '&';
                url += 'selected=citeseerx';
                window.open(url);

            }

        }
    }
    else if (d.fatherID == 1) {
        //optionNumber.clusterNum=parseInt(d.cluster);
        clusterCount = String(d.cluster);
        requestData();
    }
}
function doubleClick(d){
//    console.log(d);
//    var oldKey=d.oldKey;
//    $.getJSON('http://'+server+':5001/GetTree/?callback=?',{target:paperID},function(tree){
//        incrementalTree=tree;
////        console.log(incrementalTree);
//        processData(data);
//
//    })
}
function dragmove(d) {
    var that = d.that;
    that.ifDrag = true;
    that.markerAdjust = false;
    var pathData = that.pathData;
    var relation = that.relation;
    var currentData = that.currentData;
    var ralation = that.relation;
    var focusedID = that.focusedID;
    var data = that.data;
    var nodes = data.postData[focusedID].node;
    var edges = data.postData[focusedID].edge;

    var oldX = d.x;
    var oldY = d.y;
    d.x = d3.event.x;
    d.y = d3.event.y;
    var x = d.x;
    var y = d.y;
    var x1 = x - oldX;
    var y1 = y - oldY;
    var delta_x;
    var delta_y;

    var k = that.zoomK || 1;
    for (var i = 0; i < relation[d.id].edges.length; i++) {
        for (var j = 0; j < edges[relation[d.id].edges[i]].nodes.length; j++) {
            if (d.id == edges[relation[d.id].edges[i]].nodes[j]) {
                break;
            }
        }
        var dx = 0;
        var dy = 0;
        if (edges[i].dx)dx = edges[i].dx;
        if (edges[i].dy)dy = edges[i].dy;
        var points = edges[relation[d.id].edges[i]].points;
        var length = edges[relation[d.id].edges[i]].points.length;

        if (j == 1) {
            points[length - 1].x += d3.event.dx + dx;
            points[length - 1].y += d3.event.dy + dy;
        }
        else {
            points[j].x += d3.event.dx + dx;
            points[j].y += d3.event.dy + dy;

        }
        var edgeLabelX = (points[0].x + points[length - 1].x) / 2;
        var edgeLabelY = (points[0].y + points[length - 1].y) / 2;
        if (d.edgeLabelElem[i]) {
            d.edgeLabelElem[i].attrs({
                x: edgeLabelX,
                y: edgeLabelY
            })
        }

    }

    if (d.focused == 'true')d.self.attrs({x: d.x + d.imageShift / k, y: d.y + d.imageShift / k});
    else d.self.attrs({cx: d.x, cy: d.y});
    function updatePaths(paths) {
        paths.forEach(function (path) {
            path.attr('d', function (d) {
                    return pathData(d, that, k);
                })
                .style("stroke-dasharray", function (d) {
                    var thisEdge = d3.select(this);
                    var edgeLength = thisEdge.node().getTotalLength();
                    return edgeLength;
                });
        })
    }

    if (d.pathElem) {
        updatePaths(d.pathElem);
    }
    if (d.backgroundPathElem) {
        updatePaths(d.backgroundPathElem);
    }
    if (d.relatedEdges) {
        updatePaths(d.relatedEdges);
    }
    if (d.textElem)for (var i = 0; i < d.textElem.textElem.length; i++) {
//        console.log(d.textElem.textElem[i].attr("delta_x"),d.textElem.textElem[i].attr("delta_y"));

        var thisLabel = d.textElem.textElem[i];
        var indexStr = thisLabel.attr('index');
        var prefix = indexStr.split('_')[0];
        var index = indexStr.split('_')[1];
        thisLabel.attrs({
            x: x,
            y: y + d[prefix + 'Y'][index] / initDMax * (dMax+dMin-8) / k
        });
        //d.textElem.textElem[i].attrs({
        //    x:function(d){return x-delta_x;},
        //    y:function(d){return y-delta_y;}
        //})
    }
    if (d.idElem) {
        //delta_x= d.idElem.attr("delta_x");
        //delta_y= d.idElem.attr("delta_y");
        d.idElem.attrs({
            x: x,
            y: function (d) {
                return y + d.nodeSizeTextShiftY / k;
            }
        });
        //d.idElem.attrs({
        //    x:function(d){return x-delta_x;},
        //    y:function(d){return y-delta_y;}
        //})
    }
    //if(d.selfEdgeElem){
    //    var selfPath=selfPathData(x, y, d.size);
    //    d.selfEdgeElem.attrs({
    //        d:selfPath
    //    });
    //}
    //if(d.selfEdgeLabelElem){
    //    var oriX=parseInt(d.selfEdgeLabelElem.attr('x'));
    //    var oriY=parseInt(d.selfEdgeLabelElem.attr('y'));
    //    d.selfEdgeLabelElem.attrs({
    //        x:oriX+x1,
    //        y:oriY+y1
    //    })
    //}

    //var str_size= d.size.toString();
//    console.log(d.size, str_size.length);
//    console.log(d.idElem);
//    console.log(d.textElem.textElem[0].attr("x"));
    ifDrag = false;

}

function requestTitleList(d, clusterId) {
    var yearFilter = this.yearFilter;
    var source = this.source;
    var clusterCount = this.clusterCount;
    var that = this;
    var rootID = getUrlParam(source + '_id');
    var pageSize = 50;
    var year = 0;
    var requestData = {
        page_size: pageSize,
        year: year,
        rootID: rootID,
        clusterCount: clusterCount,
        selectedCluster: clusterId,
        source: source,
        yearFilter: [yearFilter[0], yearFilter[1] - 1]

    };
    var url = 'http://' + server + ':' + port + '/GetCluster/';
    var success = function (data) {
        d.nodes = data;
        if (currentLayer) {
            clusterSummary(d);
            that.nodeList(d);
        }

    };
    ajax(url, success, requestData);
}
function processVenue(d) {
    d.venueList = []
    var venueDic = {};
    for (var i = 0; i < d.nodeidlist.length; i++) {
        var id = d.nodeidlist[i];
        if (venueList[id]) {
            if (venueList[id].venue) {
                var venue = venueList[id]['venue'];
                if (venueDic[venue])venueDic[venue] += 1;
                else venueDic[venue] = 1
            }


        }
        else {
            for (var key in venueDic) {
                venueDic[key] += 1;
                break;
            }
        }
    }
    for (var venue in venueDic) {
        d.venueList.push({venue: venue, count: venueDic[venue]});
    }
    d.venueList.sort(function (a, b) {
        return d3.descending(a.count, b.count)
    })
//    console.log(d.venueList);
}
function clusterSummary(d) {
    var rightContent = d3.select('.rightContentDiv');
    var rightWidth = rightContent.style('width').split('px')[0];
    var rightHeight = rightContent.style('height').split('px')[0];
    //console.log('current right content height'+rightHeight)
    //console.log('current right content width'+rightWidth)
//    var clusterSummaryHeight=rightHeight*0.13;
//    var clusterSummaryWidth=rightWidth;
//    var topMargin=rightWidth*0.05;
    //processVenue
//    processVenue(d)
//    var venueList=d.venueList;

    d3.select('.CSDTitleDiv').remove();
    d3.select('.CSDBodyDiv').remove();
    d3.select('.NVDTitleDiv').remove();
    d3.select('.NVDBodyDiv').remove();
    var clusterSummary = d3.select('.clusterSummaryDiv')
        .styles({
            width: rightWidth + px,
            height: 'auto',
            //position:'absolute',
            //left:0+px,
            //top:topMargin+px
        });
    var CSDTitleDiv = clusterSummary.append('div')
        .styles({
            //'margin-top':rightWidth*0.05+px
            //combine with init.js line 297
        })
        .attr('class', 'CSDTitleDiv');
    var CSDBodyDiv = clusterSummary.append('div').attr('class', 'CSDBodyDiv')
        .styles({
            'margin-top': rightWidth * 0.05 + px
        });

    CSDTitleDiv.append('text')
        .styles({
            'margin-left': rightMarginLeft + px,
            'font-family': 'Arial Black',
            'font-size': '16px',
            'color': color.panelTitleColor
        })
        .html('<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selected Group');
    CSDBodyDiv.append('div').attr('class', 'clusterInfoDiv').append('text')
        .styles({
            'margin-left': rightMarginLeft + px,
            'margin-top': rightWidth * 0.05 + px,
            'font-family': 'Arial ',
            'font-size': '14px',
            'color': color.panelTitleColor
        })
        .html(function () {
            return '<b>Group Size: </b>' + d.size;
        })
    CSDBodyDiv.append('div').attr('class', 'clusterInfoDiv').append('div')
        .styles({
            //'word-break':'break-all',
            'margin-left': rightMarginLeft + px,
            'margin-top': rightWidth * 0.05 + px,
            'font-family': 'Arial ',
            'font-size': '14px',
            'color': color.panelTitleColor
        })
        .append('g')
        .each(function () {
            var g = d3.select(this);
            g.append('text')
                .html('<b>Content Summary: </b>')
            g.append('text')
                .style('display', tfidfStatus)
                .attr('class', 'tfidfSummary')
                .html(function () {
//            if(d.focused=='true'){
////                if(authorData[focusedID]){
////                    return '<b>Paper Title: </b>'+authorData[focusedID][0].field+','+authorData[focusedID][1].field;
////                }
////                else{
////                    return '<b>Paper Title: </b>'+authorData['default'][0].field+','+authorData['default'][1].field;
////                }
//            }
//            else{
                    var str = '';
                    var keywords = d.keywords;
                    for (var i = 0, len = keywords.length; i < len; i++) {
                        if (keywords[i]) {
                            if (i != len - 1) {
                                if (i >= 3 && (i + 1) % 4 == 0) {
                                    str += keywords[i];
                                    str += ' ';
                                }
                                else {
                                    str += keywords[i];
                                    str += ' ';
                                }

                            }
                            else if (i == len - 1) {
                                str += keywords[i];
                            }
                        }
                    }
                    return keywords.join(', ');
                    //}
                })
            g.append('text')
                .attr('class', 'freqSummary')
                .style('display', freqStatus)
                //.style('visibility','hidden')
                .html(function () {
//            if(d.focused=='true'){
////                if(authorData[focusedID]){
////                    return '<b>Paper Title: </b>'+authorData[focusedID][0].field+','+authorData[focusedID][1].field;
////                }
////                else{
////                    return '<b>Paper Title: </b>'+authorData['default'][0].field+','+authorData['default'][1].field;
////                }
//            }
//            else{
                    var str = '';
                    var keywords = d.bigrams;
                    for (var i = 0, len = keywords.length; i < len; i++) {
                        if (keywords[i]) {
                            if (i != len - 1) {
                                if (i >= 3 && (i + 1) % 4 == 0) {
                                    str += keywords[i];
                                    str += ' ';
                                }
                                else {
                                    str += keywords[i];
                                    str += ' ';
                                }

                            }
                            else if (i == len - 1) {
                                str += keywords[i];
                            }
                        }
                    }
                    return keywords.join(', ');
                    //}
                })
        })


//    if(venueList.length>=3){
//        CSDBodyDiv.append('div').attr('class','clusterInfoDiv').append('div')
//            .styles({
//                'margin-left':rightMarginLeft+px,
//                'margin-top':rightWidth*0.05+px,
//                'font-family':'Arial ',
//                'font-size':'14px',
//                'color':color.panelTitleColor
//            })
//            .html(function(d){
//
//                var venueStr=''
//                for(var i=0;i<3;i++){
//                    venueStr+=venueList[i].venue+'('+venueList[i].count+')'+' ';
//                }
//                return '<b>Venue: </b>'+venueStr
//            })
//    }

//    CSDBodyDiv.append('div').attr('class','clusterInfoDiv').append('div')
//        .styles({
//            'margin-left':rightMarginLeft+px,
//            'margin-top':rightWidth*0.05+px,
//            'font-family':'Arial ',
//            'font-size':'14px',
//            'color':'white'
//        })
//        .html(
//        function(){
//            return '<b>Max Citation: </b>'+d.nodes[0].citation_count;
//        }
//    )
//    CSDBodyDiv.append('div').attr('class','clusterInfoDiv').append('div')
//        .styles({
//            'margin-left':rightMarginLeft+px,
//            'margin-top':rightWidth*0.05+px,
//            'font-family':'Arial ',
//            'font-size':'14px',
//            'color':'white'
//        })
//        .html(
//        function(){
//            var len=d.nodes.length;
//            var sum=0;
//            var avg;
//            for(var i= 0;i<len;i++){
//                if(parseInt(d.nodes[i].citation_count)>0){
//                   sum+=parseInt(d.nodes[i].citation_count);
//                }
//            }
//            avg = sum/len;
//            return '<b>Average Citation: </b>'+avg.toFixed(2);
//        }
//    )
}
function nodeList(d) {
    var that = this;
    var nodeValue = that.nodeValue;
//    console.log(d.id);
//    nodeValue(d);
    selectedNode = d.id;
    var CSDHeight = d3.select('.clusterSummaryDiv')._groups[0][0].offsetHeight;

    var leftDiv = d3.select('.rightContentDiv');
    var leftHeight = leftDiv.style('height').split('px')[0];
    var leftWidth = leftDiv.style('width').split('px')[0];

    var leftContentWidth = d3.select('.leftTopBarDiv').style('width').split('px')[0];
    var leftTransitionWidth = leftWidth - leftContentWidth;
//    var leftTransitionWidth=d3.select('.leftTransitionTopBarDiv').style('width').split('px')[0];
//    var ruler=d3.select('.ruler');
//    console.log(leftWidth,leftContentWidth,leftTransitionWidth);
    var fontFamily = 'Arial Black';
    var fontSize = 16;
//    ruler.styles({
//        'font-family':'Arial Black',
//        'font-size':'16px'
//    });
    var title = 'Selected Papers';

    var titleHeight = title.visualHeight(fontFamily, fontSize);
    var LeftRatio = 0.114;
    var titleTopRatio = 0.114;
    var bodyMargin = 0.03 * leftWidth;

    d3.select('.NLDTitleDiv').remove();
    d3.select('.NLDTransitionDiv').remove();
    d3.select('.NLDBodyDiv').remove();
    var nodeList = d3.select('.nodeListDiv')
        .styles({
            height: '60%',
            //height:leftHeight-CSDHeight+px,
            'margin-top': leftWidth * 0.05 + px
        })
    //.styles({
    //    'margin-top':50+px
    //})
//        .attr('onkeydown','keyboardEvent(event.keyCode||event.which);')
//        .attr('tabindex',1);
    var leftRatio = (leftContentWidth / leftWidth) * 100;
    var transitionRatio = 100 - leftRatio;
    var transitionMethod = '-webkit-linear-gradient';
    var NLDBodyBackground = transitionBackground(transitionMethod, 'left', transitionRatio, color.mainTransition1, color.mainTransition2)
    //console.log(NLDBodyBackground);
    //NLDBodyBackground='-webkit-linear-gradient(left,rgb(50,70,90) 0%,rgb(50,70,90) '+leftRatio+'%,rgb(50,70,90) '+leftRatio+'%,rgb(25,35,45) 100%)'

//  var NLDBodyBackground1='-webkit-linear-gradient(left,rgb(50,70,90) 0%,rgb(50,70,90) '+leftRatio+'%,rgb(143, 162, 168) '+leftRatio+'%,rgb(74, 90, 103) 100%)'

    var NLDTitleDiv = nodeList.append('div').attr('class', 'NLDTitleDiv')
        .styles({
//            float:'left',
            background: NLDBodyBackground,
//            position:'absolute',
            width: leftWidth + px,
            height: titleHeight + px
//            left:leftWidth*LeftRatio+px,
//            top:leftWidth*titleTopRatio+px
        });

    var NLDBodyDiv = nodeList.append('div').attr('class', 'NLDBodyDiv')
        .on('mouseover', function () {
            var thisDiv = d3.select(this);
            thisDiv.styles({
//                background:NLDBodyBackground1,
                'overflow-y': 'scroll'
            });
//            console.log(thisDiv);
//            console.log(this);
        })
        .on('mouseout', function () {
            var thisDiv = d3.select(this);
            thisDiv.styles({
//                background:NLDBodyBackground,
                'overflow-y': 'hidden'
            })
        })
        .styles({
//            position:'absolute',
            'overflow-y': 'hidden',
            'overflow-x': 'hidden',
            background: NLDBodyBackground,
            width: leftWidth + px,
            //height:leftHeight-titleHeight-CSDHeight+px
            height: '100%'
//            'margin-left':leftWidth*LeftRatio+px
//            top:leftWidth*titleTopRatio+leftWidth*0.1+px
        });

    var listData = [];
    var pageSize = 50;
    if (d.nodes.length < pageSize)pageSize = d.nodes.length;
    for (var i = 0; i < pageSize; i++) {
        listData[i] = {};
        listData[i].paperID = d.nodes[i].id;
        listData[i].paperTitle = d.nodes[i].title;
    }
    NLDTitleDiv.append('text')
        .styles({
            'margin-left': leftTransitionWidth + px,
            'font-family': 'Arial Black',
            'font-size': '16px',
            'color': color.panelTitleColor
        })
        .html(title);
    for (var i = 0, length = listData.length; i < length; i++) {

        var TitleDiv = NLDBodyDiv.append('div')
            .attr('class', 'nodeTitleDiv')
            .attr('id', function () {
                maxListID = i;
                return 'listID' + i;
            })
            .attr('paperID', listData[i].paperID)
            .attr('cursor', 'hand')
            .styles({
                width: leftWidth + px,
                height: 'auto',
                background: color.mainTransition2
//                'margin-bottom':bodyMargin+px
            })
            .on('click', nodeValue);

//        .each(function(d,i){
//            if(i==0){
//                var thisDiv=d3.select(this);
//                thisDiv.attr('id','firstPaper');
//            }
//        })
//        NLDTitleDiv.append('div')
//            .styles({
//                float:'left',
//                background:'rgb(50,70,90)',
//                width:
//            })
        var textDiv = TitleDiv.append('div')
            .attr('class', 'leftTextDiv')
            .styles({
                float: 'right',
                background: color.mainTransition2,
                width: leftContentWidth - leftTransitionWidth + px,
                'margin-top': bodyMargin / 2 + px,
                'margin-right': leftTransitionWidth + px
            });

        textDiv.append('text')
            .attr('class', 'nodeTitleText')
            .attr('style', 'cursor: pointer; fill: rgb(0, 0, 0);')
            .styles({

                'font-family': 'Microsoft YaHei',
                'font-size': '14px',
                'color': color.panelTitleColor
            })
            .html(listData[i].paperTitle);
//        console.log(textDiv[0][0].offsetHeight);
        var transitionHeight = textDiv._groups[0][0].offsetHeight;
        TitleDiv.styles({
            height: transitionHeight + bodyMargin + px
        })
        var transitionDiv = TitleDiv.append('div')
            .attr('class', 'leftTransitionDiv')
            .styles({
                float: 'right',
                width: leftTransitionWidth + px,
                height: transitionHeight + bodyMargin + px,
                'background-image': '-webkit-linear-gradient(right, ' + color.mainTransition2 + ',' + color.mainTransition1 + ')'
            })
        if (i < length - 1) {
            var leftAndTransitionLineDiv = NLDBodyDiv.append('div')
                .attr('id', function () {
                    return 'lineID' + i;
                })
                .styles({
                    width: leftWidth + px,
                    height: 1 + px
                });
            var leftLineDiv = leftAndTransitionLineDiv.append('div')
                .attr('class', 'leftLineDiv')
                .styles({
                    float: 'right',
                    width: leftContentWidth - leftTransitionWidth + px,
                    height: 1 + px,
                    background: color.greyBarTransition2,
                    'margin-right': leftTransitionWidth + px
//                    'margin-bottom':bodyMargin+px
                });
            var leftTransitionLineDiv = leftAndTransitionLineDiv.append('div')
                .attr('class', 'leftTransitionLineDiv')
                .styles({
                    float: 'right',
                    width: leftTransitionWidth + px,
                    height: 1 + px,
                    'background-image': '-webkit-linear-gradient(right, ' + color.mainTransition2 + ',' + color.mainTransition1 + ')'


                })
        }
    }

    var firstPaper = document.getElementById('listID0');
//    console.log(firstPaper.id);
    selectedID = 0;
//    var firstPaper=d3.select("#firstPaper");
    firstPaper.click();
//        .on('click',nodeValue);


}
function nodeValue(d) {
///*
    var rightContent = d3.select('.leftAndTransitionContentDiv');
    var rightWidth = rightContent.style('width').split('px')[0];
    var rightHeight = rightContent.style('height').split('px')[0];
    var marginBottom = rightWidth * 0.114;

    function DivRender() {
        this.highLight = color.divRender.highlight;
        this.recovery = color.divRender.recovery;
        this.manner = '';
        this.render = function (div, lineDiv) {
            var styleData;
            if (this.manner == 'highLight') {
                styleData = this.highLight;
            }
            else if (this.manner == 'recovery') {
                styleData = this.recovery;
            }
            var titleDiv = div.select('.leftTextDiv');
            var transitionDiv = div.select('.leftTransitionDiv');
            var text = titleDiv.select('.nodeTitleText');
            text.styles({
                color: styleData.textColor
            })
            div.styles({
                background: styleData.bodyDivBackground
            });
            titleDiv.styles({
                background: styleData.titleDivBackground
            });
            transitionDiv.styles({
                'background-image': styleData.transitionDivBackground

            });
            for (var i = 0; i < 2; i++) {
                if (lineDiv[i]._groups[0][0]) {
                    var leftLine = lineDiv[i].select('.leftLineDiv');
                    var leftTransition = lineDiv[i].select('.leftTransitionLineDiv');
                    lineDiv[i].styles({
                        background: styleData.lineBackground
                    });
                    leftLine.styles({
                        background: styleData.leftLineBackground
                    });
                    leftTransition.styles({
                        'background-image': styleData.transitionLineBackground
                    })

                }
            }
        }
    }

    var render = new DivRender();

    var selectedDiv = d3.select('#listID' + selectedID);
    var selectedLine = [d3.select('#lineID' + (selectedID - 1)), d3.select('#lineID' + selectedID)];
    render.manner = 'recovery';
    render.render(selectedDiv, selectedLine);

//        .style('background','rgb(50,70,90)')
    var thisDiv = d3.select(this);
    var paperID = thisDiv.attr('paperid');
    var url = 'http://' + server + ':' + port + '/GetNode/';
    var success = function (data) {
        //if(typeofObj(data)=='[object String]')data = JSON.parse(data);
        var paper = data;
        var id = parseInt(thisDiv.attr('id').split('D')[1]);
        var thisLine = [d3.select('#lineID' + (id - 1)), d3.select('#lineID' + id)];
        render.manner = 'highLight';
        render.render(thisDiv, thisLine);


        selectedID = id;

//    thisDiv.style('background','#34b9f7');


//    }
//    console.log(nodes[selectedNode].nodes[thisDiv.attr('listId')]);
//    console.log(thisDiv.attr('listId'));
        d3.select('.NVDTitleDiv').remove();
        d3.select('.NVDBodyDiv').remove();
//    console.log(thisDiv);
//    var text=thisDiv.select('text');
        var title = paper.title;
        var abstract = paper.abstract;
        var authors = paper.authors;
        var year = paper.year;
        var citation = paper.citation;
        var field = paper.field;
        var venue = paper.venue;
//    console.log(title);

        var nodeValue = d3.select('.nodeValueDiv')
            .styles({
                'margin-right': rightMarginLeft + px,
                //position:'absolute',
                width: rightWidth,
                height: '100%',
                'margin-top': 0 + px
            });
//    var NVDTitleDiv=nodeValue.append('div').attr('class','NVDTitleDiv');
        var NVDTitleDiv = nodeValue.append('div').attr('class', 'NVDTitleDiv');
        NVDTitleDiv.append('text')
            .styles({
                'font-family': 'Arial Black',
                'font-size': '16px',
                'color': color.panelTitleColor
            })
            .html('Selected Paper');

        var NVDBodyDiv = nodeValue.append('div').attr('class', 'NVDBodyDiv');
        var textList = ['Title: ', 'Authors: ', 'Year: ', 'Citation: ', 'Venue: ', 'Abstract: '];
        var valueList = [title, authors, year, citation, venue, abstract];
        for (var i = 0, length = textList.length; i < length; i++) {
            var newDiv = NVDBodyDiv.append('div')
                .attrs({
                    class: 'nodeValueItemDiv'
                })
                .styles({
                    'margin-top': 10 + px
                })
                .append('text')
                .styles({
                    'font-family': 'Arial Black',
                    'font-size': '14px',
                    'color': color.panelTitleColor
                })
                .html(textList[i]);
            newDiv.append('text')
                .styles({
                    'font-family': 'Microsoft YaHei',
                    'font-size': '14px',
                    'color': color.panelTitleColor
                })
                .html(valueList[i]);
        }
        var safeHeight = rightHeight * 3 / 5;
        var NVDHeight = d3.select('.NVDBodyDiv')._groups[0][0].offsetHeight;
        if (NVDHeight > safeHeight) {
            NVDBodyDiv.styles({
                    height: '90%',
                    overflow: 'hidden'
                })
                .on('mouseover', function () {
                    d3.select(this).style('overflow-y', 'scroll');
                })
                .on('mouseout', function () {
                    d3.select(this).style('overflow', 'hidden');
                })
        }
    }
    var source = currentLayer.source;
    ajax(url, success, {id: paperID, source: source});

//*/
}
function reverseData(){
//    if(dataType=='multiple'){
//        for (var j=0;j<json_edges_list.length;j++){
//            reverseXY(json_nodes_list[j],json_edges_list[j]);
//        }
//    }
//    else{
//        reverseXY(nodes,edges);
//    }

    reverseXY(data.postData[focusedID]);
}
function changeColor(text,thisDivClass){
    var anotherText;
    if (thisDivClass=='horizontal'){
        anotherText=d3.select('.verticalText');
    }
    else{
        anotherText=d3.select('.horizontalText');
    }
    var color=text.style('color');
    if(color=='rgb(128, 128, 128)'){
        text.style('color','rgb(255, 255, 255)');
        anotherText.style('color','rgb(128, 128, 128)');

//            .each(function(d){
//                if(d.style('color')=='rgb(128, 128, 128)')d.style('color','rgb(255, 255, 255)');
//                else if(d.style('color')=='rgb(255, 255, 255)')d.style('color','rgb(128, 128, 128)');
//            })
    }


}
function reverse() {
    var thisDiv=d3.select(this);
    var thisDivClass=thisDiv.attr('class');
    var text=thisDiv.select('text');
    if(thisDivClass=='horizontal'&currentDirection=='vertical'){
        currentDirection='horizontal';
        selectedReverse=1;


    }
    else if(thisDivClass=='vertical'&currentDirection=='horizontal'){
        selectedReverse=0;
        currentDirection='vertical';

    }
    changeColor(text,thisDivClass);
    reverseData()
    coordinateOffset(data.postData[focusedID]);

    getCurves(data.postData[focusedID]);
    clear();
    layout(optionNumber,true,'flowMap',data.postData[focusedID]);
}
function reverseXY(d){
    var nodes=d.node;
    var edges=d.edge;
    for (var i=0;i<nodes.length;i++){
        var t=nodes[i].x;
        nodes[i].x=nodes[i].y;
        nodes[i].y=t;
    }
//    for (var i=0;i<curves.length;i++){
//        for (var j=0;j<curves[i].points.length;j++){
//            var t=curves[i].points[j].x;
//            curves[i].points[j].x=curves[i].points[j].y;
//            curves[i].points[j].y=t;
//        }
//    }
    for (var i=0;i<edges.length;i++){
        for(var j=0;j<edges[i].assists.length;j++){
            var t=edges[i].assists[j][0];
            edges[i].assists[j][0]=edges[i].assists[j][1];
            edges[i].assists[j][1]=t;
        }
    }
}
function clear(){
    svg.selectAll('.node').remove();
    svg.selectAll('path').remove();
    svg.selectAll('text').remove();

}
function yearSliderDragMove(d){
    var that= d.that;
    var data=that.data;
    var animateMode=that.animateMode;
    var xScale=that.xScale;
    var yScale=that.yScale;
    var axisSVG=that.axisSVG;
    var focusedID=that.focusedID;
    var nodeYearData=data.postData[focusedID].nodeYearData;
    var maxYear=nodeYearData.maxYear;
    var minYear=nodeYearData.minYear;
    if(animateMode==flipBook){
        d.x=d3.event.x;
        var thisNode=d3.select(this);
        if(thisNode.attr('id')=='leftAxisCircle'){
            if(d.x>=xScale(minYear)&&d.x<=parseFloat(axisSVG.select('#rightAxisCircle').attr('cx'))){
                thisNode.attr('cx',d.x);
            }
        }
        else{
            if(d.x>=parseFloat(axisSVG.select('#leftAxisCircle').attr('cx'))&& d.x<=xScale(maxYear)){
                thisNode.attr('cx',d.x);
            }
        }
    }
    else if(animateMode='movie'){
        var thisObj=d3.select(this);
        var rightAxisCircle=axisSVG.select('#rightAxisCircle');
        var leftAxisCircle=axisSVG.select('#leftAxisCircle');
        var movieSlider=axisSVG.select('.movieSlider');
        var rx=parseFloat(rightAxisCircle.attr('cx'));
        var lx=parseFloat(leftAxisCircle.attr('cx'));
        var dx=d3.event.dx;
        var id=thisObj.attr('id');
        if((id == 'rightAxisCircle'&& rx<=xScale(maxYear)) && rx>=lx&&lx!=rx||(id == 'leftAxisCircle'&& lx>=xScale(minYear)&&lx<=rx&&lx!=rx)){
            if(thisObj.attr('class')!='movieSlider'){
                thisObj
                    .attrs({
                        cx:function(d){
                            d.x = d.x+dx;
                            return d.x;
                        }
                    });
                if(id == 'leftAxisCircle'){
                    movieSlider.attrs({
                        d:function(d){
                            d.p1.x+=dx;
                            return yearSliderPathData(d);
                        }
                    })
                }
                else{
                    movieSlider.attrs({
                        d:function(d){
                            d.p2.x+=dx;
                            return yearSliderPathData(d);
                        }
                    })
                }

            }
        }
        else if(id =='movieSlider'||lx == rx){
            if(lx>=xScale(minYear)&&rx<=xScale(maxYear)){
            axisSVG.selectAll('.axisCircle')
                .attrs({
                    cx:function(d){
                        d.x = d.x+dx;
                        return d.x;
                    }
                });
                movieSlider.attrs({
                    d:function(d){
                        d.p1.x+=dx;
                        d.p2.x+=dx;
                        return yearSliderPathData(d);
                    }
                })
            }
        }


    }
}
function yearSliderDragStart(d){
//    var thisNode=d3.select(this);
//    thisNode.style('fill',color.yearSliderHighlightColor);
}
function yearSliderDragEnd(d){
    var that= d.that;
//    var thisNode=d3.select(this);
//    thisNode.style('fill',color.yearSliderColor);

    adjustSliderPosition(false, that);
//    if(animateMode=='movie'){
        updateAnimation(true,that);
//    }
//    play()
}
function adjustSliderPosition(measure,that){
    var direction='';
    var endYear;
    var yearFilter=that.yearFilter;
    var axisSVG=that.axisSVG;
    var minYear=that.minYear;
    var maxYear=that.maxYear;
    var duration=yearFilter[1]-yearFilter[0];
    var xScale=that.xScale;
    var yScale=that.yScale;
    var yearPosition=that.yearPosition;
    //var lx,rx;
    axisSVG.selectAll('.axisCircle')
        .each(function(d){
            var thisNode=d3.select(this);
            var id= d.id;
            var x=parseFloat(thisNode.attr('cx'));
            if(measure=='stop'){
                that.yearFilter=[minYear,minYear+duration];
                if(id == 'leftAxisCircle'){
                    thisNode.attrs({
                            cx:function(d){d.x = xScale(that.yearFilter[0]);lx = d.x;return d.x;}
                        })
                }
                else{
                    thisNode.attrs({
                            cx:function(d){d.x = xScale(that.yearFilter[1]);rx = d.x;return d.x;}
                        })
                }

            }
            else{
                for(var year in yearPosition){
                    if(x>=yearPosition[year][0]&&x<yearPosition[year][1]){
                        endYear=year;
                        if(xScale(year)>x){
                            direction='right';
                        }
                        else{
                            direction='left';
                        }
                        if(id == 'leftAxisCircle'){
                            that.yearFilter[0]=year.toInt();
                            lx = xScale(year);
                        }
                        else{
                            that.yearFilter[1]=year.toInt();
                            rx = xScale(year);
                        }
                        d.x=xScale(year);
                        thisNode.attrs({
                                cx:d.x
                            });

                        break;
                    }
                }
            }

        });
    axisSVG.select('.movieSlider')
        .transition()
        .duration(100)
        .attr('d',function(d){
            d.p1.x = lx;
            d.p2.x = rx;
            return yearSliderPathData(d);
        });
    return {year:endYear,direction:direction};
}
function yearSliderPathData(d){
    return 'M' + d.p1.x + ' ' + d.p1.y + 'L' + d.p2.x + ' ' + d.p2.y
}
function nodeClick(d,that){
    console.log(d);
    var axisSVG=that.axisSVG;
    var svg=that.svg;
    var data=that.data;
    var nodeClass=d.self.attr('class');
    var focusedID=that.focusedID;
    if(nodeClass=='node') {
        d.self.attr('class','node clicked');
        d.self.style('stroke',color.nodeHighlightStroke);
        d.self.style('stroke-width', function (d) {
            d.strokeWidth=2;
            return d.strokeWidth;
        });
        d.self.style('fill',color.nodeHighlightColor);

        if(d.textElem)for(var i=0;i<d.textElem.textElem.length;i++){
            d.textElem.textElem[i]
                .styles({
                    'fill':color.nodeLabelHighlightColor
                });
        }
//
    }
    else if(nodeClass=='node clicked'){
//                d.self.style('stroke','rgb(0,220,225)');
        d.self.style('fill',function(d){return "url(#linearGradient"+ d.id+")"});
        d.self.style('stroke',color.nodeHighlightStroke);
        d.self.style('stroke-width', function (d) {
            d.strokeWidth=0;
            return d.strokeWidth;
        });
        d.self.attr('class','node');
        if(d.textElem)for(var i=0;i<d.textElem.textElem.length;i++){
            d.textElem.textElem[i].styles({
                'fill':color.nodeLabelColor,
//                'stroke':'none',
//                'stroke-width':0+px
            });
        }
//
    }
    svg.selectAll('.linearGradient')
        .each(function(){
            d3.select(this).selectAll('stop')
                .each(function(d,i){
                    var thisStop=d3.select(this);
                    if(i == 1||i == 2)thisStop.attr('offset',0);
                })
        })
    axisSVG.selectAll('.yearPath')
        .each(function(){
            d3.select(this).style('fill',color.yearPathColor);
//                    d3.select(this).style('stroke',color.);
            d3.select(this).attr('class','yearPath');
        })
    var clusterID=d.oldKey;
    var yearPath=d3.selectAll('.yearPath');

    var yearDic=d.newNodeYearInfo;
    var subNodeYearData=[];
    if(data.postData[focusedID].subNodeYearData){
        subNodeYearData=data.postData[focusedID].subNodeYearData;
    }
    else{
        clone(data.postData[focusedID].nodeYearData.data,subNodeYearData)
        for (var i=0;i<subNodeYearData.length;i++){
            subNodeYearData[i][1]=0;
        }
    }
    var subNodeYearDic={};
    for(var i=0;i<subNodeYearData.length;i++){
        var key=subNodeYearData[i][0];
        var value=subNodeYearData[i][1];
        subNodeYearDic[key]=value;
    }
    axisSVG.selectAll('.subYearPath').remove();
    if(d.clicked){
        for(var key in yearDic){
            subNodeYearDic[key]-=yearDic[key];
        }
        var tmpData=[]
        for(var key in subNodeYearDic){
            tmp=[key, subNodeYearDic[key]]
            tmpData.push(tmp);
        }
        data.postData[focusedID].subNodeYearData=tmpData;
        d.clicked=false;
        that.drawNodeYearDataSet(data.postData[focusedID].subNodeYearData,'subYearPath')
        that.recoveryPath(d);
    }
    else{
        for(var key in yearDic){
            subNodeYearDic[key]+=yearDic[key];
        }
        var tmpData=[]
        for(var key in subNodeYearDic){
            tmp=[key, subNodeYearDic[key]]
            tmpData.push(tmp);
        }
        data.postData[focusedID].subNodeYearData=tmpData;
        d.clicked=true;
        that.drawNodeYearDataSet(data.postData[focusedID].subNodeYearData,'subYearPath')
        that.highlightPath(d);
    }

//            console.log(d);

    that.requestTitleList(d, clusterID);

}
function ifObjectHasProperty(obj){
    var flag=false;
    for(var key in obj){
        flag=true;
        break
    }
    return flag
}
function recoveryPath(d){
    var directedGraph=this.directedGraph;
    var currentEdgeSourceTargetDic=this.currentEdgeSourceTargetDic;
    var thisID=parseInt(d.id)
    var rootID=directedGraph.root.id.toInt();
    var backPath=directedGraph.findMaxPathBetween(rootID,thisID);
    if(backPath.length>0){
        for(var i=0;i<backPath[0].edges.length;i++){
            var edge=backPath[0].edges[i];
            var source=edge.source;
            var target=edge.target;
            var key=source+'_'+target;
            var currentEdges=[];
            if(currentEdgeSourceTargetDic[key]){
                currentEdges=currentEdgeSourceTargetDic[key];
                for(var j=0;j<currentEdges.length;j++){
                    if(currentEdges[j].highlightedByNodeDic[thisID]){
                        delete currentEdges[j].highlightedByNodeDic[thisID];
                    }
                    if(!ifObjectHasProperty(currentEdges[j].highlightedByNodeDic)){
                        var pathClass='.'+currentEdges[j].class;
                        var path=d3.select(pathClass)
                            .each(function(d){
                                d.levelIndex=0
                            })
                            .styles({
                                stroke:color.edgeColor
                            });
                        var pathMarker=path.data()[0].marker;
                        pathMarker.styles({
                            fill:color.markerColor
                        });
                    }


                }
            }
        }
    }
}
function highlightPath(d){
    var that=this;
    var directedGraph=this.directedGraph;
    var currentEdgeSourceTargetDic=this.currentEdgeSourceTargetDic;
    var thisID=parseInt(d.id);
    var rootID=directedGraph.root.id.toInt();
    var backPath=directedGraph.findMaxPathBetween(rootID,thisID);
    if(backPath.length>0){
        for(var i=0;i<backPath[0].edges.length;i++){
            var edge=backPath[0].edges[i];
            var source=edge.source;
            var target=edge.target;
            var key=source+'_'+target;
            var currentEdges=[];
            if(currentEdgeSourceTargetDic[key]){
                currentEdges=currentEdgeSourceTargetDic[key];
                for(var j=0;j<currentEdges.length;j++){
                    if(currentEdges[j].highlightedByNodeDic){
                        currentEdges[j].highlightedByNodeDic[thisID]=1;
                    }
                    else{
                        currentEdges[j].highlightedByNodeDic={};
                        currentEdges[j].highlightedByNodeDic[thisID]=1;
                    }
                    var pathClass='.'+currentEdges[j].class;
                    var path=d3.select(pathClass)
                        .each(function(d){
                            d.levelIndex=1
                        })
                        .styles({
                            stroke:color.edgeHightLightColor
                        });
                    if(path.data()[0].marker){
                        var pathMarker=path.data()[0].marker;
                        pathMarker.styles({
                            fill:color.edgeHightLightColor
                        });
                    }
                }
            }
        }
        that.drawedges.select('.edgeField').selectAll('path')
            .sort(function(a,b){
                return d3.ascending(a.levelIndex,b.levelIndex);
            });
    }

}
function mouseover(d,that){
    var k=leftLayer.zoomK||1;
    var transitionFlag=that.transitionFlag;
    if(transitionFlag==false){
        function changeNode(d,that,changePath){
            if(d&&d.self){
                d.self.style('stroke',color.nodeHighlightStroke);
                d.self.style('stroke-width', function (d) {
                    d.strokeWidth=2;
                    return d.strokeWidth/k;
                });
            }
            if(d&&d.textElem){
                for(var i=0;i<d.textElem.textElem.length;i++){
                    d.textElem.textElem[i]
                        .styles({
                            'fill':color.nodeLabelHighlightColor
                            //visibility: function () {
                            //    if(d.textElem.textElem[i]._groups[0][0].classList[2]=='tfidf'){
                            //        return 'hidden';
                            //    }
                            //    else return null;
                            //}
//                'stroke':color.nodeLabelHighlightStroke,
//                'stroke-width':1+px
                        });

                    //.attr('x',function(e){return e.x+ e.fullLabelDeltaX/k;})
                    //.html(function(e){return e.nodeFullName;});
                }
            }
            if(d&&d.pathElem&&changePath){
                for(var i=0;i<d.pathElem.length;i++){
                    d.pathElem[i].each(function (p) {
                        if(!p.isBackgroundEdge){
                            var self=d3.select(this);
                            self.style('stroke',color.edgeHightLightColor);
                            self.style('visibility','visible');
                            p.levelIndex=1;
                            if(p.marker){
                                p.marker.style('fill',color.edgeHightLightColor);
                                p.marker.style('visibility','visible');
                            }
                        }
                    })
                }
                that.drawedges.select('.edgeField').selectAll('path')
                    .sort(function(a,b){
                        return d3.ascending(a.levelIndex,b.levelIndex);
                    });
            }
            if(d&&d.idElem)d.idElem.style('fill',color.sizeLabelColor);
        }
        changeNode(d,that,true);
        d.sourceNodes.forEach(function (node) {
            changeNode(node,that);
        });
        d.targetNodes.forEach(function(node){
            changeNode(node,that);
        });


    }

}
function mouseout(d,that){
    var k=leftLayer.zoomK||1;
    var transitionFlag=that.transitionFlag;
    if(transitionFlag==false){
        function changeNode(d,that,changePath){
            var thisnode=d3.select(this);
            if(d&&d.self&&d.self.attr('class')=='node'){
                d.self.style('stroke','none');
                d.self.style('stroke-width', function (d) {
                    d.strokeWidth=0;
                    return d.strokeWidth;
                });
                if(d.idElem)d.idElem.style('fill',color.sizeLabelColor);
                if(d.textElem)for(var i=0;i<d.textElem.textElem.length;i++){
                    d.textElem.textElem[i]
                        .styles({
                            'fill':color.nodeLabelColor
                            //visibility: function () {
                            //    if(d.textElem.textElem[i]._groups[0][0].classList[2]=='tfidf'){
                            //        return null;
                            //    }
                            //    else return 'hidden';
                            //}
                        })
                        //.attr('x',function(e){return e.x+ e.labelDeltaX/k;})
                        //.html(function(e){return e.nodeName;});
                }
            }
            else{
                if(d&&d.textElem)for(var i=0;i<d.textElem.textElem.length;i++){
                    //d.textElem.textElem[i]
                    //    .attr('x',function(e){return e.x+ e.labelDeltaX/k;})
                    //    .html(function(e){return e.nodeName;});
                }
            }
            if(d&&d.pathElem&&changePath){
                for(var i=0;i<d.pathElem.length;i++){

                    d.pathElem[i].each(function (p) {
                        if(!p.isBackgroundEdge){
                            var self=d3.select(this);
                            if (p.marker) {
                                p.marker.style('fill', color.markerColor);
                                p.marker.style('visibility', 'hidden');
                            }
                            if (!ifObjectHasProperty(self.data()[0].highlightedByNodeDic)) {
                                self.style('stroke', color.edgeColor);
                                self.style('visibility','hidden');
                            }
                        }

                    });

                }
            }
            that.drawedges.select('.edgeField').selectAll('path')
                .each(function(d){
                    d.levelIndex=0
                });
        }
        changeNode(d,that,true);
        d.sourceNodes.forEach(function (node) {
            changeNode(node,that);
        });
        d.targetNodes.forEach(function(node){
            changeNode(node,that);
        });
    }


}

function drawBackgroundYear(transition){
//    var initX=300;
//    var initY=250;
    var dataSourceVisibility=this.dataSourceVisibility;
    var focusedID=this.focusedID;
    var time_g=this.time_g;
    var yearFilter=this.yearFilter;
    var animateMode=this.animateMode;
    var minYear=this.minYear;
    var maxYear=this.maxYear;
    var initX=30;
    var initY=30;
    var family='Arial';
    var size='30';
    var weight='bold';
    var color='grey';
    var textValue;
    if(focusedID.split('_')[0]=='twitter'){
        var july='July';
        var julyLen=july.visualLength(family,size);
        time_g.append('text')
            .attrs({
                class:'july',
                x:initX,
                y:initY
            })
            .styles({
                'font-size':size,
                'font-family': family,
                'font-weight':weight,
                'fill':color
            })
            .html(july)
        initX+=julyLen+20;

//        textValue=['July'+yearFilter[0]+' ',' - ',' July'+yearFilter[1]];
    }
//    else{
        textValue=[String(yearFilter[0]),' - ',String(yearFilter[1]-1)];
//    }
    var textData=[
        {
            type:'leftYear',
            value:textValue[0],
            x:initX,
            y:initY,
            size:size,
            family:family,
            weight:weight,
            color:color
        },
        {
            type:'middleText',
            value:textValue[1],
            x:initX+textValue[0].visualLength(family,size),
            y:initY,
            size:size,
            family:family,
            weight:weight,
            color:color
        },
        {
            type:'rightYear',
            value:textValue[2],
            x:initX+textValue[0].visualLength(family,size)+textValue[1].visualLength(family,size),
            y:initY,
            size:size,
            family:family,
            weight:weight,
            color:color
        }
    ];
    var yearLength='2000-2000'.visualLength(family,size);
    var yearHeight='2000-2000'.visualHeight(family,size);
    var sourceText=this.sourceTextDic[this.source];
    var sourceLength=sourceText.visualLength(family,size);
    var sourceX=initX+yearLength/2-sourceLength/2;
    var sourceY=initY+yearHeight+5;

    if(transition){
        if(animateMode==flipBook){
            time_g.select('.rightYear')
                .html(function(d){

                    if(yearFilter[1]==maxYear&&yearFilter[0]==minYear){
                        d.value=String(minYear);
                    }
                    else{
                        d.value=String(yearFilter[0]);
                    }
                    return d.value;
                })
                .transition()
                .ease(d3.easeLinear)
                .delay(1000)
                .duration(function(d){
                    if(yearFilter[1]==maxYear&&yearFilter[0]==minYear){
                        return 2000*(maxYear- minYear)
                    }
                    else{
                        return 2000*(maxYear- yearFilter[0])
                    }

                })
                .tween("text", function() {
                    var that = d3.select(this);
                    if(yearFilter[1]==maxYear&&yearFilter[0]==minYear){
                        var i = d3.interpolateRound(minYear, maxYear);
                        return function(t) {
                            that.text(i(t));
                        };
                    }
                    else{
                        var i = d3.interpolateRound(yearFilter[0], maxYear);
                        return function(t) {
                            that.text(i(t));
                        };
                    }
                })
        }
        else{

        }
    }
    else{
        time_g.selectAll('*')
            .each(function(d){
                if(d3.select(this).attr('class')!='july'){
                    d3.select(this).remove()
                }
            });
        time_g.append('text')
            .styles({
                'font-family':family,
                'font-size':size,
                'font-weight':weight,
                fill:color,
                visibility:dataSourceVisibility
            })
            .attrs({
                class:'dataSource',
                x:sourceX,
                y:sourceY
            })
            .html(sourceText);
        time_g.selectAll('whatever')
            .data(textData)
            .enter()
            .append('text')
            .each(function(d){
                d3.select(this)
                    .attrs({
                        class:d.type,
                        x:d.x,
                        y:d.y
                    })
                    .styles({
                        'font-size':d.size,
                        'font-family': d.family,
                        'font-weight':d.weight,
                        'fill':d.color
                    })
                    .html(d.value)
            })

    }

}
function getEdgeScale(edges, type) {
    var edgeFlowList = [];
    var edgeWeightList = [];
    var edgeCitationList = [];
    for (var i = 0; i < edges.length; i++) {
        edgeFlowList.push(edges[i].flow);
        edgeCitationList.push(edges[i].citation);
        var weightSum = 0;
        for (var key in edges[i].weight) {
            weightSum += edges[i].weight[key];
        }
        edgeWeightList.push(weightSum);
    }
    var range = [eMin[edgeThickNessOption], eMax[edgeThickNessOption]];
    var flowScale = d3.scaleLinear()
        .domain([d3.min(edgeFlowList), d3.max(edgeFlowList)])
        .range(range);
    var weightScale = d3.scaleLinear()
        .domain([d3.min(edgeWeightList), d3.max(edgeWeightList)])
        .range(range);
    var uniformScale = function () {
        return 2;
    };
    var scaleDic = {
        'weight': weightScale,
        'flow': flowScale,
        'citation': weightScale,
        'uniform': uniformScale
    };
    return scaleDic[type];
}
function drawEdges(optionNumber, doTransition, transitionType, d) {
    this.pathElem = [];
    this.tmpEdgeAssistCount = 0;
    var that = this;
    var pathElem = this.pathElem;
    var tmpEdgeAssistCount = this.tmpEdgeAssistCount;
    var data = this.data;
    var focusedID = this.focusedID;
    var drawedges = this.drawedges;
    var nodes = d.node;
    var edges = d.edge;
    var k = this.zoomK || 1;
    var pathData = this.pathData;
    var duration = this.duration;
    var screenPreEdges = data.screenPreviousData[focusedID].edge;
    var edgeFlowList = [];
    var edgeWeightList = [];
    var edgeLabelElem = this.edgeLabelElem;
    var drawEdgeLabel = this.drawEdgeLabel;
    for (var i = 0; i < edges.length; i++) {
        edges[i].transitionCount = 0;
        edgeFlowList.push(edges[i].flow);
        var weightSum = 0;
        for (var key in edges[i].weight) {
            weightSum += edges[i].weight[key];
        }
        edgeWeightList.push(weightSum);
    }
    if (!(that.flowScale) && !(that.flowScale)) {
        that.flowScale = d3.scaleLinear()
            .domain([d3.min(edgeFlowList), d3.max(edgeFlowList)])
            .range([2, 6]);
        that.weightScale = d3.scaleLinear()
            .domain([d3.min(edgeWeightList), d3.max(edgeWeightList)])
            .range([2, 6]);
    }
    var markerSize = 25;
    var g = drawedges.append('g').attr('class', 'edgeField');
    var markerG = drawedges.append('g').attr('class', 'markerField');
    var currentLevel = drawedges.attr('id');
    var svgEdges = g.selectAll('path.curves')
        .data(edges)
        .enter()
        .append('path')
        .attrs({
            class: function (d, i) {
                d.levelIndex = 0;
                d.class = currentLevel + 'path' + i;

                return d.class;
            },
            id: function (d) {
                var yearID = '';
                for (var key in d.weight) {
                    yearID += key + '_';
                }
                return yearID;
            },
            year: function (d) {
                return d.year;
            },
            source: function (d) {
                return d.source;
            },
            target: function (d) {
                return d.target;
            }
        })
        .style("opacity", function (d) {
            if (d.edgeType == 'dash') {
                return 0.2;
            }
        })
        .style("visibility", function (d) {
            if (d.isForegroundSourceEdge || d.isForegroundTargetEdge || d.isNontreeEdge) {
                return 'hidden';
            }
            //if(d.isBackgroundEdge || d.isNontreeEdge) {
            //    return 'hidden';
            //}
            //else if(d.isForegroundSourceEdge){
            //    return 'hidden';
            //    //return 'visible';
            //}
            //else if(d.isForegroundTargetEdge){
            //    //return 'hidden';
            //    return 'visible';
            //}
            else {
                return 'visible';
            }
        })
        .style("stroke", color.edgeColor)
        .style('fill', 'none')
        .style("stroke-width", function (d) {
            d.that = that;
            d.strokeWidth = d.ratio * d[edgeThickNessOption];
            return d.strokeWidth / k;
        })
        .each(function (d, i) {
            d.that = that;
            var stroke = d.ratio * d[edgeThickNessOption] || 1;
            var size = 13 / (stroke);
            var marker = markerG.append("svg:defs").selectAll("marker")
                .data([{marker: 1}])
                .enter().append("svg:marker")
                .attr("id", function (d) {
                    d.id = currentLevel + "markerArrow" + i + '_' + that.focusedID;
                    return d.id;
                })
                .attr('class', 'marker')
                .attr("viewBox", "0 0 10 10")
                .attr("refX", 0)
                .attr("refY", 4)
                .attr("markerWidth", size)
                .attr("markerHeight", size)
                .attr("orient", 'auto')
                .append("svg:path")
                //                .attr("d", "M0,3 L0,8 L8,3 L0,3")
                .attr("d", "M0,0 L0,8 L8,4 L0,0")
                .style("fill", color.markerColor);
            var thisEdge = d3.select(this);
            d.self = thisEdge;
            marker.style("visibility", "hidden");
            d.marker = marker;
            thisEdge.attr("marker-end", function () {
                return "url(#" + currentLevel + "markerArrow" + i + '_' + that.focusedID + ")"
            });
            pathElem.push(d);
        });
    if (doTransition) {
        g.selectAll('path')
            .each(function (d) {
                d.marker.style('fill', 'none')
            });
        g.selectAll('path')
            .attr('d', function (d) {
                return pathData(d, that);
            });
        g.selectAll('path')
            .each(function (d) {
                //if(d.isBackgroundEdge) {
                //    d3.select(this).style('visibility', 'hidden');
                //}
                if(d.isBackgroundEdge){
                    d.transitionCount = that.yearFilter[0] - d.flipBookStartYear;
                    var thisPath=d3.select(this);
                    var pathLength=thisPath.node().getTotalLength();
                    var oldStrokeWidth;
                    var newStrokeWidth=0;
                    pathLength=parseInt(pathLength);
                    thisPath
                        .styles({
                            'stroke-dasharray': function () {
                                return pathLength;
                            },
                            'stroke-dashoffset': function () {
                                return pathLength;
                            },
                            'stroke-width': 0,
                            'fill': 'none'
                        })
                        .transition()
                        .duration(0)
                        .delay(1000)
                        .ease(d3.easeLinear)
                        .on('start', function repeat() {
                            if(d.transitionCount+ d.flipBookStartYear> d.flipBookEndYear){
                                thisPath.style('stroke-width',d[edgeThickNessOption])
                                    .style('stroke-dashoffset',0);
                                d3.selectAll('.transitionPath').remove();
                                currentLayer.svg.select('.edgeField').selectAll('path')
                                    .each(function (d) {
                                        if(d.isBackgroundEdge) {
                                            d3.select(this)
                                                .style('visibility','visible');
                                        }
                                    });
                                return;
                            }
                            var yearKey= d.flipBookStartYear+'_'+(d.flipBookStartYear+ d.transitionCount);
                            oldStrokeWidth=newStrokeWidth;
                            newStrokeWidth= d.flipBookRatio[yearKey]* d[edgeThickNessOption];

                            d.transitionCount+=1;

                            var pathD=thisPath.attr('d');
                            var newPath=g.append('path')
                                .attrs({
                                    d:pathD,
                                    class:'transitionPath'
                                })
                                .styles({
                                    //'stroke-dasharray': function () {
                                    //    return pathLength;
                                    //},
                                    //'stroke-dashoffset': function () {
                                    //    return pathLength;
                                    //},
                                    'stroke-width':oldStrokeWidth,
                                    'fill': 'none',
                                    'stroke': color.edgeColor
                                })
                                .transition()
                                .duration(1000)
                                .ease(d3.easeLinear)
                                //.styleTween('stroke-dashoffset', function () {
                                //    return d3.interpolateRound(pathLength,0)
                                //})
                                .styleTween('stroke-width',function(){
                                    return d3.interpolateNumber(oldStrokeWidth,newStrokeWidth);
                                })
                                //.on('end', function () {
                                //    d3.select(this)
                                //        .style('stroke',color.edgeColor);
                                //})
                                .transition()
                                .duration(1000)
                                .delay(1000)
                                .ease(d3.easeLinear)
                                .on('start', repeat)
                        })
                }
                //if(d.isForegroundTargetEdge){
                if (d.isForegroundSourceEdge) {
                    d.transitionCount = that.yearFilter[0] - d.flipBookStartYear;
                    var thisPath = d3.select(this);
                    var pathLength = thisPath.node().getTotalLength();
                    var oldStrokeWidth;
                    var newStrokeWidth = 0;
                    pathLength = parseInt(pathLength);
                    thisPath.styles({
                            'stroke-dasharray': function () {
                                return pathLength;
                            },
                            'stroke-dashoffset': function () {
                                return pathLength;
                            },
                            'stroke-width': 0,
                            'fill': 'none'
                        })
                        .transition()
                        .duration(0)
                        //.delay(2000)
                        .ease(d3.easeLinear)
                        .on('start', function repeat() {
                            if(d.source == 20 && d.target == 18) {
                                console.log(d.flipBookRatio);
                            }
                            if (d.transitionCount + d.flipBookStartYear > d.flipBookEndYear) {
                                thisPath.style('stroke-width', d[edgeThickNessOption])
                                    .style('stroke-dashoffset', 0);
                                d3.selectAll('.transitionPath').remove();
                                currentLayer.svg.select('.edgeField').selectAll('path')
                                    .each(function (d) {
                                        if (d.isBackgroundEdge) {
                                            d3.select(this)
                                                .style('visibility', 'visible');
                                        }
                                    });
                                return;
                            }
                            var yearKey = d.flipBookStartYear + '_' + (d.flipBookStartYear + d.transitionCount);
                            oldStrokeWidth = newStrokeWidth;
                            newStrokeWidth = d.flipBookRatio[yearKey] * d[edgeThickNessOption];
                            d.transitionCount += 1;

                            var pathD = thisPath.attr('d');
                            var newPath = g.append('path')
                                .attrs({
                                    d: pathD,
                                    class: 'transitionPath'
                                })
                                .styles({
                                    'stroke-dasharray': function () {
                                        return pathLength;
                                    },
                                    'stroke-dashoffset': function () {
                                        return pathLength;
                                    },
                                    'stroke-width': 0,
                                    'fill': 'none',
                                    'stroke': function () {
                                        if (oldStrokeWidth < newStrokeWidth) {
                                            return color.edgeHightLightColor
                                        }
                                        else return color.edgeColor
                                    }
                                })
                                .transition()
                                .duration(1000)
                                .ease(d3.easeLinear)
                                .styleTween('stroke-dashoffset', function () {
                                    return d3.interpolateRound(pathLength, 0)
                                })
                                .styleTween('stroke-width', function () {
                                    return d3.interpolateNumber(newStrokeWidth, newStrokeWidth);
                                })
                                .on('end', function () {
                                    d3.select(this)
                                        .style('stroke', color.edgeColor);
                                })
                                .transition()
                                .duration(1000)
                                .delay(1000)
                                .ease(d3.easeLinear)
                                .on('start', repeat)
                        })
                }
            });

        //.on('start', function (d) {
        //    var thisEdge = d3.select(this);
        //    //var originStrokeWidth = thisEdge.style('stroke-width');
        //    thisEdge.attrs({
        //            transitionStatus: function (d) {
        //                d.transitionStatus = 'start';
        //                return d.transitionStatus;
        //            },
        //            //'originStrokeWidth': originStrokeWidth
        //        })
        //        .styles({
        //            'stroke': 'red',
        //            'stroke-width': '3px'
        //        });
        //    if (d.marker)d.marker.attrs({
        //        transitionStatus: function (d) {
        //            d.transitionStatus = 'start';
        //            return d.transitionStatus;
        //        }
        //    })
        //})
        //.on('end', function (d) {
        //    d.marker.style('fill', color.markerColor);
        //    var thisEdge = d3.select(this);
        //    var originStrokeWidth = thisEdge.attr('originStrokeWidth');
        //
        //    thisEdge.attrs({
        //            transitionStatus: function (d) {
        //                d.transitionStatus = 'end';
        //                return d.transitionStatus;
        //            }
        //        })
        //        .styles({
        //            'stroke': 'yellow',
        //            'stroke-width': originStrokeWidth
        //        });
        //    if (d.marker)d.marker.attrs({
        //        transitionStatus: function (d) {
        //            d.transitionStatus = 'end';
        //            return d.transitionStatus;
        //        }
        //    })
        //})
    }
    else {
        svgEdges.data(edges)
            .attrs({
                d: function (d) {
                    return pathData(d, that);
                },
                transitionStatus: 'end'
            })
            .each(function (d) {
                var thisEdge = d3.select(this);
                var edgeClass = thisEdge.attr('class');
                var pathData = thisEdge.attr('d').split('M')[1].split(' ');
                var textX = (parseFloat(pathData[0]) + parseFloat(pathData[2])) / 2;
                var textY = (parseFloat(pathData[1]) + parseFloat(pathData[3])) / 2;

                var edgeLabel = drawEdgeLabel(optionNumber.edgeLabelOption, d.flow, d.citation, textX, textY, edgeClass, d.dx, d.dy);
                thisEdge.edgeLabel = edgeLabel;
                thisEdge.attrs({
                    dx: d.dx,
                    dy: d.dy
                });
                edgeLabelElem.push(edgeLabel);
            });
    }
    this.getYearEdgeRelation();
}
function drawEdgeLabel(option, flow, citation, textX, textY, edgeClass, dx, dy) {
    var fontSize = 14;
    var drawedges = this.drawedges;
    if (option == 1) {
        var txt = drawedges.append('text').attr('class', 'edgeLabel').attr('id', 'edgeLabel' + edgeClass)
            .attrs({
                dx: dx,
                dy: dy,
                x: textX,
                y: textY
            })
            .html(citation)
            .styles({
                'font-family': 'Microsoft Yahei',
                'font-size': fontSize + px,
                fill: 'yellow'
            });

    }
    else if (option == 2) {
        var txt = drawedges.append('text').attr('class', 'edgeLabel').attr('id', 'edgeLabel' + edgeClass)
            .attrs({
                dx: dx,
                dy: dy,
                x: textX,
                y: textY
            })
            .html(flow)
            .styles({
                'font-family': 'Microsoft Yahei',
                'font-size': fontSize + px,
                fill: 'yellow'
            });
    }
    return txt;
}
function getYearEdgeRelation() {
    var yearEdgeDic = {};
    var edgeClassList = [];
    var edges = d3.selectAll('path')
        .each(function (d) {
            var thisEdge = d3.select(this);
            var id = thisEdge.attr('id');
            var edgeClass = thisEdge.attr('class');
            if (edgeClass)edgeClassList.push(edgeClass);
            if (id) {
                var yearID = id.split('_');
                yearID.pop();
                for (var i = 0, length = yearID.length; i < length; i++) {
                    if (!yearEdgeDic[yearID[i]]) {
                        yearEdgeDic[yearID[i]] = [];
                        yearEdgeDic[yearID[i]].push(thisEdge)
                    }
                    else {
                        yearEdgeDic[yearID[i]].push(thisEdge);
                    }
                }
            }
        });
    return yearEdgeDic;
}
function drawSelfEdgeLabel(option, flow, weight, textX, textY, edgeClass) {
    var fontSize = 14;
    var drawedges = this.drawedges;
    if (option == 1) {
        d3.select('.ruler').style('font-size', fontSize + px);
        var dx = String(weight).visualLength() / 2;
        var txt = drawedges.append('text').attr('class', 'selfEdgeLabel').attr('id', 'selfEdgeLabel' + edgeClass)
            .attrs({

                x: textX - dx,
                y: textY
            })
            .html(weight)
            .styles({
                'font-family': 'Microsoft Yahei',
                'font-size': fontSize + px,
                fill: color.edgeColor
            });

    }
    else if (option == 2) {
        d3.select('.ruler').style('font-size', fontSize + px);

        var dx = String(flow).visualLength() / 2;

        var txt = drawedges.append('text').attr('class', 'selfEdgeLabel').attr('id', 'selfEdgeLabel' + edgeClass)
            .attrs({

                x: textX - dx,
                y: textY
            })
            .html(flow)
            .styles({
                'font-family': 'Microsoft Yahei',
                'font-size': fontSize + px,
                fill: color.edgeColor
            });
    }
    return txt;
}
function drawSelfEdge(optionNumber, doTransition, transitionType, data) {
    var nodes = data.node;
    var edges = data.edge;
    d3.selectAll('.selfEdge').remove();
    d3.selectAll('.selfEdgeLabel').remove();

    getSelfData(nodes);
    drawselfedges.selectAll('selfEdge').data(nodes)
        .enter()
        .append('g')
        .each(function (d) {
            var thisG = d3.select(this);
            if (d.selfEdge > 0) {
                thisG.append('path')
                    .attr('d', function (d) {
                        return d.selfPathStr;
                    })
                    .attr('class', 'selfEdge')
                    .attr('stroke-width', '2px')
                    .style('stroke', color.edgeColor)
                    .attr('fill', 'none')
                    .each(function (d, i) {
                        selfEdgeElem[d.id] = d3.select(this);
                        var selfLabel = drawSelfEdgeLabel(optionNumber.edgeLabelOption, d.selfEdge, parseInt(d.selfEdge * d.size), d.selfEdgeLabelX, d.selfEdgeLabelY, 'selfEdge');
                        selfEdgeLabelElem[d.id] = selfLabel;
                        var stroke = getSelfEdgeStrokeWidth(d);

                        var size = 13 / (stroke);
                        var marker = svg.append("svg:defs")
                            .append("svg:marker")
                            .attr("id", "selfMarkerArrow" + i)
                            .attr('class', 'marker')
                            .attr("viewBox", "0 0 10 10")
                            .attr("refX", 0.2)
                            .attr("refY", 1.1)
                            .attr("markerWidth", size)
                            .attr("markerHeight", size)
                            .attr("orient", 'auto')
                            .append("svg:path")
                            .attr("d", "M0,1 L0,2.666 L2.666,1 L0,1");
                        var thisEdge = d3.select(this);
                        thisEdge.marker = marker;
                    });

            }

        });
    d3.selectAll('.node').each(function (d) {
        if (selfEdgeElem[d.id])d.selfEdgeElem = selfEdgeElem[d.id];
        if (selfEdgeLabelElem[d.id])d.selfEdgeLabelElem = selfEdgeLabelElem[d.id];
    })
}

function drawLabels(optionNumber, doTransition, transitionType, d) {
    var data = this.data;
    var that = this;
    var sizeScale = this.sizeScale;
    var drawnodes = this.drawnodes;
    var focusedID = this.focusedID;
    var screenPreNodes = data.screenPreviousData[focusedID].node;
    var nodeClick = this.nodeClick;
    var mouseover = this.mouseover;
    var mouseout = this.mouseout;
    var textElem = this.textElem;
    var drag = this.drag;
    var k = this.zoomK || 1;
    var preYearNode = this.preYearNode;
    var clusterSummary = this.clusterSummary;
    var nodeList = this.nodeList;
    var nodes = d.node;
    var edges = d.edge;
    var fontSize = dMax/2;
    var fontFamily = 'Microsoft YaHei';
    var pre;
    if (this.preLabelLayer) {
        pre = this.preNodeLayer;
    }
    var g = drawnodes.append('g')
        .attr('class', 'labelLayer');
    this.preLabelLayer = g;
//    d3.select('.ruler')
//        .styles({
//            'font-size':fontSize+'px',
//            'font-family':'Microsoft YaHei'
//
//        });

    var x;
    if (nodes.length > 20) {
        x = 2;
    }
    else {
        x = 2;
    }
    nodes.forEach(function (node) {
        if (node.focused == 'true') {
            node.frequencyKeywords = node.keywords;
        }
    });
    function getAuthorVenue(d, i) {
//        console.log(d);
        var author = d.author_venue.author;
        var venue = d.author_venue.venue;
        var label = [author, venue];
        return label[i];
    }

    function setLabelAttributes(nodes) {
        g.selectAll('node_label')
            .data(nodes).enter()
            .append('g')
            .attr('id', function (d) {
                return 'g'+ d.id + '_' + i;
            })
            .each(function () {
                var thisLabelG = d3.select(this);
                thisLabelG.append('text')
                    .styles({
                        'font-size': function (d) {
                            d.fontSize = fontSize;
                            return fontSize / k + 'px'
                        },
                        'font-family': 'Microsoft YaHei',
                        fill: function () {
                            return color.nodeLabelColor;
                        },
                        visibility: 'hidden',
                        'text-anchor' : 'middle'
                    })
                    .html(function (d, j) {
                        if (optionNumber.nodeLabelOption < 2) {
                            if ((x == 2) || ((x == 1) && d.focused == 'true') || ((x == 1) && (i == 0))) {
                                var keywords = d.keywords;
                                if (keywords[i] && keywords[i].length > 2)return keywords[i].substring(0, 1).toUpperCase() + keywords[i].substring(1);
                            }
                        }
                        else if (optionNumber.nodeLabelOption == 2) {
                            if ((x == 2) || ((x == 1) && d.focused == 'true' && d.id != 0) || ((x == 1) && i == 0 && d.id != 0)) {
                                if (d.id != 0) {
                                    var label = getAuthorVenue(d, i);
                                    return label;
                                }
                            }
                        }
                    })
                    .attr('index', 'nodeFirstLabelTextShift_' + i)
                    .attrs({
                        "x": function (d) {
                            //下面这段if很神奇，虽然没什么实际的作用，但是去掉之后y会出问题，没时间找问题在哪了
                            if (d.keywords[i] && d.keywords[i].length > 2) {
                                var len = d.keywords[i].visualLength(fontFamily, fontSize);
                            }
                            return d.x;
                        },
                        "y": function (d) {
                            if (!d.nodeFirstLabelTextShiftY)d.nodeFirstLabelTextShiftY = [0, 0, 0];
                            d.nodeFirstLabelTextShiftY[i] = sizeScale.sizeScale(d.size) + (i + 1) * 'A'.visualHeight();
                            return d.y + d.nodeFirstLabelTextShiftY[i] / k;
                        },
                        "id": function (d) {
                            return 'label' + d.id
                        },
                        "disable": true,
                        "class": "label TFIDFLevel" + i + ' tfidf'
                    })
                    .on('dblclick', doubleClick)
                    .on('click', function (d) {
                        return nodeClick(d, that);
                    })
                    .on('mouseover', function (d) {
                        return mouseover(d, that);
                    })
                    .on('mouseout', function (d) {
                        return mouseout(d, that);
                    })
                    .each(function (d) {
                        d.that = that;
                    })
                    .call(drag)
                    .style('cursor', 'hand')
                    .each(function (d, i) {
                        if (d.size == 0) {
                            d3.select(this).remove();
                        }
                        if (textElem[d.id] == null) {
                            textElem[d.id] = {
                                textElem: [],
                                id: d.id
                            };
                            textElem[d.id].textElem.push(d3.select(this));
                        }
                        else {
                            textElem[d.id].textElem.push(d3.select(this));
                        }

                    });
                thisLabelG.append('text')
                    .styles({
                        'font-size': function (d) {
                            d.fontSize = fontSize;
                            return fontSize / k + 'px'
                        },
                        'font-family': 'Microsoft YaHei',
                        fill: function () {
                            return color.nodeLabelColor;
                        },
                        'text-anchor' : 'middle'
                    })
                    .attr('index', 'nodeSecondLabelTextShift_' + i)
                    .html(function (d, j) {
                        if (optionNumber.nodeLabelOption == 0) {
                            if ((x == 2) || ((x == 1) && d.focused == 'true') || ((x == 1) && (i == 0))) {
                                var keywords = d.onegram;
                                if (keywords[i] && keywords[i].length > 2)return keywords[i].substring(0, 1).toUpperCase() + keywords[i].substring(1);
                            }
                        }
                        else if (optionNumber.nodeLabelOption == 1) {
                            if ((x == 2) || ((x == 1) && d.focused == 'true' && d.id != 0) || ((x == 1) && i == 0 && d.id != 0)) {
                                if (d.id != 0) {
                                    var label = getAuthorVenue(d, i);
                                    return label;
                                }
                            }
                        }
                    })
                    .attrs({
                        "x": function (d) {

                            return d.x ;
                        },
                        "y": function (d) {
                            if (!d.nodeSecondLabelTextShiftY)d.nodeSecondLabelTextShiftY = [0, 0, 0];
                            d.nodeSecondLabelTextShiftY[i] = sizeScale.sizeScale(d.size) + (i + 1) * 'A'.visualHeight();
                            return d.y + d.nodeSecondLabelTextShiftY[i] / k;
                        },
                        "id": function (d) {
                            return 'label' + d.id
                        },
                        "disable": true,
                        "class": "label FrequencyLevel" + i + ' freq'
                    })
                    .on('dblclick', doubleClick)
                    .on('click', function (d) {
                        return nodeClick(d, that);
                    })
                    .on('mouseover', function (d) {
                        return mouseover(d, that);
                    })
                    .on('mouseout', function (d) {
                        return mouseout(d, that);
                    })
                    .each(function (d) {
                        d.that = that;
                    })
                    .call(drag)
                    .style('cursor', 'hand')
                    .styles({
                        'visibility': function () {
                            if (i <= 1) {
                                return 'visible';
                            }
                            else {
                                return 'hidden';
                            }
                        }
                    })
                    .each(function (d, i) {
                        if (d.size == 0) {
                            d3.select(this).remove();
                        }
                        if (textElem[d.id] == null) {
                            textElem[d.id] = {
                                textElem: [],
                                id: d.id
                            };
                            textElem[d.id].textElem.push(d3.select(this));
                        }
                        else {
                            textElem[d.id].textElem.push(d3.select(this));
                        }

                    });

                //thisLabelG.append('text')
                //    .styles({
                //        'font-size': function (d) {
                //            d.fontSize = fontSize;
                //            return fontSize / k + 'px'
                //        },
                //        'font-family': 'Microsoft YaHei',
                //        fill: function () {
                //            return color.nodeLabelColor;
                //        },
                //        visibility: 'hidden'
                //    })
                //    .html(function (d, j) {
                //        if ((x == 2) || ((x == 1) && d.focused == 'true' && d.id != 0) || ((x == 1) && i == 0 && d.id != 0)) {
                //            if (d.id != 0) {
                //                var label = getAuthorVenue(d, i);
                //                return label;
                //            }
                //        }
                //    })
                //    .attrs({
                //        "x": function (d) {
                //            if (!d.nodeThirdLabelTextShiftX)d.nodeThirdLabelTextShiftX = [0, 0, 0];
                //
                //            if (d.id != 0) {
                //                var label = getAuthorVenue(d, i);
                //                if (label) {
                //                    d.nodeThirdLabelTextShiftX[i] = -label.visualLength(fontFamily, fontSize) / 2;
                //                }
                //            }
                //            return d.x + d.nodeThirdLabelTextShiftX[i] / k;
                //        },
                //        "y": function (d) {
                //            if (!d.nodeThirdLabelTextShiftY)d.nodeThirdLabelTextShiftY = [0, 0, 0];
                //            d.nodeThirdLabelTextShiftY[i] = sizeScale.sizeScale(d.size) + (i + 1) * 'A'.visualHeight();
                //            return d.y + d.nodeThirdLabelTextShiftY[i] / k;
                //        },
                //        "id": function (d) {
                //            return 'label' + d.id
                //        },
                //        "disable": true,
                //        "class": "label venueLabel"
                //    })
                //    .on('dblclick', doubleClick)
                //    .on('click', function (d) {
                //        return nodeClick(d, that);
                //    })
                //    .on('mouseover', function (d) {
                //        return mouseover(d, that);
                //    })
                //    .on('mouseout', function (d) {
                //        return mouseout(d, that);
                //    })
                //    .each(function (d) {
                //        d.that = that;
                //    })
                //    .call(drag)
                //    .style('cursor', 'hand')
                //    .each(function (d, i) {
                //        if (d.size == 0) {
                //            d3.select(this).remove();
                //        }
                //        if (textElem[d.id] == null) {
                //            textElem[d.id] = {
                //                textElem: [],
                //                id: d.id
                //            };
                //            textElem[d.id].textElem.push(d3.select(this));
                //        }
                //        else {
                //            textElem[d.id].textElem.push(d3.select(this));
                //        }
                //
                //    });

            });
    }

    for (var i = 0; i < 3; i++) {
        if (doTransition) {
            setLabelAttributes(nodes);
            g.selectAll('.label')
                .style('fill', 'none')
                .transition()
                .delay(function (d) {
                    return d.delay[0];
                })
                .duration(function (d) {
                    return d.duration;
                })
                .style('fill', function () {
                    return color.nodeLabelColor;
                })
                .on('start', function (d) {
                    console.log('#g'+ d.id + '_' +i);
                    pre.select('#g'+ d.id + '_' +i).remove();
                    console.log(pre.select('#g'+ d.id + '_' +i));
                    var thisNode = d3.select(this);
                    thisNode.attrs({
                        transitionStatus: function (d) {
                            d.transitionStatus = 'start';
                            return d.transitionStatus;
                        }
                    })
                })
                .on('end', function (d) {
                    var thisNode = d3.select(this);
                    thisNode.attrs({
                        transitionStatus: function (d) {
                            d.transitionStatus = 'end';
                            return d.transitionStatus;
                        }
                    })
                });
        }
        else {
            setLabelAttributes(nodes);
            g.selectAll('.label').attr('transitionStatus', 'end');
        }


    }
}
function drawLegends() {
    var legend_g = this.legend_g;

    if (!legend_g.select('#nontreeLegendText')._groups[0][0]) {
        var svgHeight = parseFloat(d3.select('.graphDiv').select('svg').attr('height'));
        var initY = 0;
        var initX = 0;
        var legendData = [
            {
                class: 'legend',
                id: 0,
                type: 'image',
                x: initX + 10,
                y: initY,
                width: 20,
                height: 20,
                link: 'image/star.png',
                text: 'Influencer'
            },
            {
                class: 'legend',
                id: 1,
                type: 'circle',
                x: initX + 10,
                y: initY + 30,
                r: 10,
                fill: color.nodeColor,
                text: 'Cluster'
            },
            {
                class: 'legend',
                id: 2,
                type: 'path',
                d: 'M' + initX + ' ' + (initY + 60) + 'L' + (initX + 50) + ' ' + (initY + 60),
                dash: false,
                stroke: color.edgeColor,
                opacity: 1,
                strokeWidth: 3 + px,
                text: 'Tree Edges',
                textX: initX + 64,
                textY: initY + 65,
                textColor: color.nodeLabelColor
            },
            {
                class: 'legend',
                id: 3,
                type: 'path',
                d: 'M' + initX + ' ' + (initY + 85) + 'L' + (initX + 50) + ' ' + (initY + 85),
                dash: true,
                stroke: color.edgeColor,
                opacity: 1,
                disableOpacity: 0.2,
                strokeWidth: 3 + px,
                text: 'Nontree Edges',
                textX: initX + 64,
                textY: initY + 90,
                textColor: color.textDisableColor
            }
        ]
        legend_g.selectAll('whatever')
            .data(legendData)
            .enter()
            .append('g')
            .each(function (d) {
                var thisG = d3.select(this)
                thisG.attrs({
                    id: d.class + d.id,
                    class: d.class + 'G'
                });
                switch (d.type) {
                    case 'image':
                    {
                        thisG.append('image')
                            .attrs({
                                x: d.x - 10,
                                y: d.y - 10,
                                height: d.height,
                                width: d.width,
                                'xlink:href': d.link
                            });
                        thisG.append('text')
                            .attrs({
                                x: d.x + 20,
                                y: d.y + 5
                            })
                            .styles({
                                fill: color.nodeLabelColor,
                                'font-family': 'Arial'
                            })
                            .html(d.text)
                        return 1
                    }
                    case 'circle':
                    {
                        thisG.append('circle')
                            .attrs({
                                cx: d.x,
                                cy: d.y,
                                r: d.r
                            })
                            .styles({
                                fill: d.fill
                            });
                        thisG.append('text')
                            .attrs({
                                x: d.x + 20,
                                y: d.y + 5
                            })
                            .styles({
                                fill: color.nodeLabelColor,
                                'font-family': 'Arial'
                            })
                            .html(d.text)
                        return 1
                    }
                    case 'path':
                    {
                        thisG.append('path')
                            .attrs({
                                class: function (d) {
                                    return d.class;
                                },
                                id: function (d) {
                                    if (d.dash)return 'nontreeLegend'; else return 'treeLegend'
                                },
                                d: d.d
                            })
                            .styles({
                                stroke: d.stroke,
                                'stroke-width': d.strokeWidth,
//                                'stroke-dasharray':function(d){
//                                    if(d.dash){
//                                        return 5.5
//                                    }
//                                },
                                opacity: function (d) {
                                    if (d.dash) {
                                        return d.disableOpacity
                                    }
                                    else {
                                        return d.opacity
                                    }
                                },
                                cursor: function (d) {
                                    if (d.dash) {
                                        return 'hand'
                                    }
                                }
                            })
                            .each(function (d) {
                                var thisEdge = d3.select(this);
                                var marker = thisG.append("svg:defs")
                                    .append("svg:marker")
                                    .attr("id", 'legendMarker')
                                    .attr('class', 'legend')
                                    .attr("viewBox", "0 0 10 10")
                                    .attr("refX", 0)
                                    .attr("refY", 4)
                                    .attr("markerWidth", 4)
                                    .attr("markerHeight", 4)
                                    .attr("orient", 'auto')
                                    .append("svg:path")
                                    .attr('class', 'legend')
                                    .attr("d", "M0,0 L0,8 L8,4 L0,0")
                                    .style("fill", color.edgeColor);
                                thisEdge.attr('marker-end', 'url(#legendMarker)')
                            });
                        thisG.append('text')
                            .attrs({
                                id: function (d) {
                                    if (d.dash)return 'nontreeLegendText'; else return 'treeLegendText'
                                },
                                x: d.textX,
                                y: d.textY
                            })
                            .styles({
                                fill: function (d) {
                                    return d.textColor
                                },
                                'font-family': 'Arial',
                                cursor: function (d) {
                                    if (d.dash) {
                                        return 'hand'
                                    }
                                }
                            })
                            .on('click', function (d) {
                                if (d.dash) {

                                    changeNonTreeEdges();
                                    var thisLegend = d3.select('#nontreeLegendText');
                                    thisLegend.styles({
                                        fill: function (d) {
                                            if (d.textColor == color.textDisableColor) {
                                                d.textColor = color.nodeLabelColor;
                                                return d.textColor;
                                            }
                                            else {
                                                d.textColor = color.textDisableColor;
                                                return d.textColor;
                                            }
                                        }
                                    })
                                }
                            })
                            .html(d.text)
                        return 1
                    }
                }
            })
    }
    //currentLayer.svg.select('.legendDrawer').attr('transform', 'translate(' + legendTranWidth + ',' + legendTranHeight + ')');
}
function changeNonTreeEdges() {
    if (optionNumber.edgeFilter == 0) {
        optionNumber.edgeFilter = 1;
        d3.select('.edgeField').selectAll('path')
            .each(function (d) {
                if (d.isNontreeEdge) {
                    d3.select(this).styles({
                        visibility: 'visible'
                    })
                }
            })
    }
    else {
        optionNumber.edgeFilter = 0;
        d3.select('.edgeField').selectAll('path')
            .each(function (d) {
                if (d.isNontreeEdge) {
                    d3.select(this).styles({
                        visibility: 'hidden'
                    })
                }
            })
    }
}


function drawNodes(optionNumber, doTransition, transitionType, dd) {
    var sizeScale = this.sizeScale;
    var k = this.zoomK || 1;

    function dataBundling(d, i, thisNode) {
        if (d.focused == 'true') {
            d.imageShift = -10;
            d.imageSize = 20;
            thisNode.append('image')
                .attrs({
                    type: 'image',
                    class: 'node',
                    x: d.x + d.imageShift / k,
                    y: d.y + d.imageShift / k,
                    cluster: d.oldKey,
                    width: d.imageSize / k + px,
                    height: d.imageSize / k + px,
                    'xlink:href': function (d) {
                        if (pageStyle == 'dark')
                            return 'image/star.png';
                        else
                            return 'image/lightStar.png'
                    }
                })
        }
        else thisNode.append('circle')
            .attrs({
                type: 'circle',
                class: 'node',
                cluster: d.oldKey,
                cx: d.x,
                cy: d.y,
                r: function (d) {
                    var size = sizeScale.sizeScale(d.newSize);
                    d.nodeR = size;
                    return d.nodeR / k;
                }
            })
    }

    var focusedNodeData;
    var that = this;

    var nodes = dd.node;
    var edges = dd.edge;
    var focusedID = this.focusedID;
    var drag = this.drag;
//    var nodes= [];
//    var edges=[];
//    clone(dd.node,nodes);
//    clone(dd.edge,edges);
    dd.subNodeYearData = [];

    var nonRootNodes = [];
    nodes.forEach(function (node) {
        if(!node.focused) {
            nonRootNodes.push(node);
        }
    });

    var citationDomain = [d3.min(nonRootNodes, function (d) {
        return d.citation;
    }), d3.max(nonRootNodes, function (d) {
        return d.citation;
    })];
    var avgCitationDomain = [d3.min(nonRootNodes, function (d) {
        return d.citation / d.size;
    }), d3.max(nonRootNodes, function (d) {
        return d.citation / d.size;
    })];
    if(parseFloat(getUrlParam('nodeOpacityMin')) >= 0 && parseFloat(getUrlParam('nodeOpacityMin')) <= 1) {
        nodeOpacityMin = parseFloat(getUrlParam('nodeOpacityMin'));
    }
    if(parseFloat(getUrlParam('nodeOpacityMax')) >= 0 && parseFloat(getUrlParam('nodeOpacityMax')) <= 1) {
        nodeOpacityMax = parseFloat(getUrlParam('nodeOpacityMax'));
    }
    var nodeOpacity = {
        uniform: function (citation) {
            //do something with citation
            return 0.8;
        },
        citation: function (citation) {
            var scale = d3.scaleLinear()
                .domain(citationDomain)
                .range([nodeOpacityMin, nodeOpacityMax]);
            return scale(citation);
        },
        avgCitation: function (avgCitation) {
            var scale = d3.scaleLinear()
                .domain(avgCitationDomain)
                .range([nodeOpacityMin, nodeOpacityMax]);
            return scale(avgCitation);
        }

    };
    that.nodeOpacity = nodeOpacity;
    clone(dd.nodeYearData.data, dd.subNodeYearData);
    for (var i = 0; i < dd.subNodeYearData.length; i++) {
        dd.subNodeYearData[i][1] = 0;
    }
    var textElem = this.textElem;
    var relation = this.relation;
    var edgeLabelElem = this.edgeLabelElem;
    var pathElem = this.pathElem;
    var data = this.data;
    var drawnodes = this.drawnodes;
    var duration = this.duration;
    var preYearNode = this.preYearNode;
    var nodeClick = this.nodeClick;
    var mouseover = this.mouseover;
    var mouseout = this.mouseout;
    var screenPreNodes = data.screenPreviousData[focusedID].node;
    var g;
    var pre;
    var preNodes = {};
    if (this.preNodeLayer) {
        pre = this.preNodeLayer;
        pre.selectAll('.circle')
            .each(function (d) {
                preNodes[d.id] = {nodeR: d.nodeR};
            });
        //pre.remove();
    }
    g = drawnodes.append('g')
        .attr('class', 'circleLayer');
    this.preNodeLayer = g;
    var edgeSet = {};
    var nodesDic = {};
    nodes.forEach(function (node) {
        node.sourceNodes = [];
        node.targetNodes = [];
        nodesDic[node.id] = node;
    });
    edges.forEach(function (edge) {
        var source = edge.source;
        var target = edge.target;
        var key = source + '-' + target;
        if (!edgeSet[key] && !edge.isNontreeEdge) {
            edgeSet[key] = 1;
            var sn = nodesDic[source];
            var tn = nodesDic[target];

            if (source in nodesDic) {
                sn.targetNodes.push(tn);
            }
            if (target in nodesDic) {
                tn.sourceNodes.push(sn);
            }
        }
    });

//    svg.select('.linearGradientDefs').remove();
    if (doTransition) {
        g.selectAll('node').data(nodes)
            .enter()
            .append('g')
            .attr('id', function (d) {
                return 'g' + d.id;
            })
            .each(function (d, i) {
                var thisNode = d3.select(this);
                if (d.focused == 'true')thisNode.append('image')
                    .attrs({
                        type: 'image',
                        class: 'node',
                        x: d.x - 10,
                        y: d.y - 10,
                        width: 20 + px,
                        height: 20 + px,
                        'xlink:href': function (d) {
                            if (pageStyle == 'dark')
                                return 'image/star.png';
                            else
                                return 'image/lightStar.png'
                        }
                    });
                else thisNode.append('circle')
                    .attrs({
                        type: 'circle',
                        class: 'node',
                        cx: d.x,
                        cy: d.y,
                        r: sizeScale.sizeScale(d.size * d.ratio[0])
                    });
                d.index = 3;
                var backgroundData = [
                    {
                        class: 'backgroundNode',
                        delay: d.delay,
                        id: d.id,
                        isBackground: 1,
                        index: 2,
                        x: d.x,
                        y: d.y,
                        //opacity:0.7* d.sizeIncreaseRatio[0],
                        opacity: 0.7,
                        r: sizeScale.sizeScale(d.size * d.ratio[0]) * 0.133 + sizeScale.sizeScale(d.size * d.ratio[0]),
                        fill: color.nodeColor,
                        highlightFill: color.nodeHighlightColor,
                        highlightOpacity: 1 * d.sizeIncreaseRatio[0],
                        duration: d.duration
                    },
                    {
                        class: 'backgroundNode',
                        delay: d.delay,
                        id: d.id,
                        isBackground: 1,
                        index: 1,
                        x: d.x,
                        y: d.y,
                        //opacity:0.5*d.sizeIncreaseRatio[0],
                        opacity: 0.5,
                        r: sizeScale.sizeScale(d.size * d.ratio[0]) * 0.133 * 2 + sizeScale.sizeScale(d.size * d.ratio[0]),
                        fill: color.nodeColor,
                        highlightFill: color.nodeHighlightColor,
                        highlightOpacity: 1 * d.sizeIncreaseRatio[0],
                        duration: d.duration
                    }
                ];
                thisNode.selectAll('whatever')
                    .data(backgroundData)
                    .enter()
                    .append('circle')
                    .each(function (d) {
                        d3.select(this)
                            .attrs({
                                id: 'node' + d.id,
                                isBackground: d.isBackground,
                                class: d.class,
                                cx: d.x,
                                cy: d.y,
                                r: d.r,
                                index: d.index
                            })
                            .styles({
                                opacity: d.opacity,
                                fill: 'none'
                            })
                    });
            });

    }
    else {
        g.selectAll('node').data(nodes)
            .enter()
            .append('g')
            .attr('id', function (d) {
                return 'g' + d.id;
            })
            .attr('cluster', function (d) {
                return d.oldKey
            })
            .each(function (d, i) {
                var thisNode = d3.select(this);

                dataBundling(d, i, thisNode);
                thisNode.selectAll('*')
                    .attrs({
                        transitionStatus: 'end'
                    })
            });

    }

    preYearNode = false;
    var defs = g.append('defs').attr('class', 'linearGradientDefs');
    defs.selectAll('linearGradient').data(nodes).enter()
        .append('linearGradient')
        .attr('class', 'linearGradient')
        .attr('id', function (d) {
            return 'linearGradient' + d.id;
        })
        .attrs({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
        })
        .each(function (e) {
            var thisLG = d3.select(this);
            var data = [{offset: 0, color: color.nodeGreyColor, opacity: 1}, {
                offset: 0,
                color: color.nodeGreyColor,
                opacity: 1
            }, {offset: 0, color: color.nodeColor, opacity: 1}, {offset: 1, color: color.nodeColor, opacity: 1}];
            var citation = e.citation;
            var size = e.size;
            thisLG.selectAll('stop').data(data).enter()
                .append('stop')
                .attrs({
                    offset: function (d) {
                        return d.offset
                    },
                    'stop-color': function (d) {
                        return d.color
                    },
                    'stop-opacity': function () {
                        if (nodeOpacityOption == 'citation' || nodeOpacityOption == 'uniform') {
                            return nodeOpacity[nodeOpacityOption](citation);
                        }
                        else if (nodeOpacityOption == 'avgCitation') {
                            return nodeOpacity[nodeOpacityOption](citation/size);
                        }
                    }
                })
        });
    //from line 274 to line 412
    //is aim to resolve movie mode pause won't update node fill style
    //the method is not very well,should be fixed in the future
    //shit!!!
    if (transitionType == 'flowMap') {
        g.selectAll('.node')
            .data(nodes)
            .attr('year', function (d) {
                var dic = d.newNodeYearInfo;
                var yearString = ''
                for (var key in d.newNodeYearInfo) {

                    yearString += key + '-' + d.newNodeYearInfo[key] + '_';
                }
                return yearString;
            })
            .attr('id', function (d) {
                return 'node' + d.id;
            })
            .on('dblclick', doubleClick)
            .on('click', function (d) {
                return nodeClick(d, that);
            })
            .on('mouseover', function (d) {
                return mouseover(d, that);
            })
            .on('mouseout', function (d) {
                return mouseout(d, that);
            })
            .each(function (d) {
                d.that = that;
            })
            .call(drag)
            .styles({
                "fill": 'none'
            })
            .transition()
            .duration(function (d) {
                return d.duration;
            })
            .delay(function (d) {
                return d.delay[0];
            })
            .styles({
                "fill": function (d) {
                    return color.nodeColor;
                },
//            'fill':'rgb(0,220,225)',
                "opacity": 1,
                "cursor": "hand"
            })
            .each(function (d, i) {
                if (d.size == 0) {
                    d3.select(this).remove();
                }
                d.clicked = false;
                if (d.focused == 'true') {

//                d3.select(this).attr('stroke','red');
//                d3.select(this).attr('stroke-width','2px');
//                d3.select(this).attr('class','node clicked');
                    focusedNodeData = d;

                }

                d.edgeLabelElem = [];
                d.pathElem = [];
                d.backgroundPathElem = [];
                d.relatedEdges = [];
                d.textElem = {
                    textElem: [],
                    id: d.id
                };

                d.self = d3.select(this);
                if (textElem[d.id])d.textElem.textElem = textElem[d.id].textElem;
                for (var j = 0; j < relation[d.id].edges.length; j++) {
                    d.edgeLabelElem.push(edgeLabelElem[relation[d.id].edges[j]]);
                    //d.pathElem.push(pathElem[relation[d.id].edges[j]]);
                }
                pathElem.forEach(function (e) {
                    //if(!e.isNontreeEdge) {
                    if (e.fatherNode == d.id) {
                        d.pathElem.push(e.self);
                    }
                    if (e.isBackgroundEdge && (e.source == d.id || e.target == d.id)) {
                        d.backgroundPathElem.push(e.self);
                    }
                    if (e.routerClusters) {
                        if (e.routerClusters.indexOf(parseInt(d.id)) != -1) {
                            d.relatedEdges.push(e.self);
                        }
                    }
                    else {
                        if (e.source == d.id || e.target == d.id) {
                            d.relatedEdges.push(e.self);
                        }
                    }
                    //}

                })
            });
    }
    else {
        g.selectAll('.node')
            .data(nodes)
            .attr('year', function (d) {
                var dic = d.newNodeYearInfo;
                var yearString = '';
                for (var key in d.newNodeYearInfo) {

                    yearString += key + '-' + d.newNodeYearInfo[key] + '_';
                }
                return yearString;
            })
            .attr('id', function (d) {
                return 'node' + d.id;
            })
            .on('dblclick', doubleClick)
            .on('click', function (d) {
                return nodeClick(d, that);
            })
            .on('mouseover', function (d) {
                return mouseover(d, that);
            })
            .on('mouseout', function (d) {
                return mouseout(d, that);
            })
            .each(function (d) {
                d.that = that;
            })
            .call(drag)
            .styles({
                "fill": function (d) {
                    return "url(#linearGradient" + d.id + ")"
                },
//            'fill':'rgb(0,220,225)',
                "opacity": 1,
                "cursor": "hand"
            })
            .transition()
            .duration(function (d) {
                if (transitionType == 'flowMap') {
                    return d.duration;
                }
                else {
                    return 1;
                }
            })
            .delay(function (d) {
                if (transitionType == 'flowMap') {
                    return d.delay[0];
                }
                else {
                    return 1;
                }
            })
            .styles({
                "fill": function (d) {
                    return "url(#linearGradient" + d.id + ")"
                },
//            'fill':'rgb(0,220,225)',
                "opacity": 1,
                "cursor": "hand"
            })
            .each(function (d, i) {
                if (d.size == 0) {
                    d3.select(this).remove();
                }
                d.clicked = false;
                if (d.focused == 'true') {

//                d3.select(this).attr('stroke','red');
//                d3.select(this).attr('stroke-width','2px');
//                d3.select(this).attr('class','node clicked');
                    focusedNodeData = d;

                }

                d.edgeLabelElem = [];
                d.pathElem = [];
                d.backgroundPathElem = [];
                d.relatedEdges = [];
                d.textElem = {
                    textElem: [],
                    id: d.id
                };

                d.self = d3.select(this);
                if (textElem[d.id])d.textElem.textElem = textElem[d.id].textElem;
                for (var j = 0; j < relation[d.id].edges.length; j++) {
                    d.edgeLabelElem.push(edgeLabelElem[relation[d.id].edges[j]]);
                    //d.pathElem.push(pathElem[relation[d.id].edges[j]]);
                }
                pathElem.forEach(function (e) {
                    if (e.fatherNode == d.id) {
                        d.pathElem.push(e.self);
                    }
                    if (e.isBackgroundEdge && (e.source == d.id || e.target == d.id)) {
                        d.backgroundPathElem.push(e.self);
                    }
                    if (e.routerClusters) {
                        if (e.routerClusters.indexOf(parseInt(d.id)) != -1) {
                            d.relatedEdges.push(e.self);
                        }
                    }
                    else {
                        if (e.source == d.id || e.target == d.id) {
                            d.relatedEdges.push(e.self);
                        }
                    }
                })
            });
    }


    if (transitionType == 'flowMap') {
        var svgNodes = g.selectAll('.node');
        console.log(nodes.length);
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id == 18) {
                console.log(1);
            }
            var node = d3.select(svgNodes._groups[0][i]);
            var tmpDelay = [];
            var tmpRatio = [];
            var nodeData;
            node.attr('cx', function (d) {
                nodeData = d;
                return d.x;
            });
            clone(nodeData.delay, tmpDelay);
            clone(nodeData.ratio, tmpRatio);
            setTransition(node, tmpDelay, tmpRatio);
        }
    }
    else {
        g.selectAll('.node')
            .data(nodes)
            .transition()
            .duration(function (d) {
                if (transitionType == 'flowMap') {
                    return d.duration;
                }
                else {
                    return 0;
                }
            })
            .delay(function (d) {
                if (transitionType == 'flowMap') {
                    return d.delay[0];
                }
                else {
                    return 0;
                }
            })
            .styles({
                "fill": function (d) {
                    return "url(#linearGradient" + d.id + ")"
                },
                'cursor': 'hand'
            })
    }
    function setTransition(node, delay, ratio) {
        var nodeData = node.data()[0];
        var nodeID = node.attr('id');
        var r;
        if (ratio.length > 0) {
            node.transition()
                .duration(function (d) {
                    return d.duration * 4;
                })
                .delay(function (d) {
                    return delay[0];
                })
                .ease(d3.easeLinear)
                .attrs({
                    'r': function (d) {
                        if (preNodes[d.id]) {
                            return preNodes[d.id].nodeR / k;
                        }
                        r = sizeScale.sizeScale(d.size * ratio[0]);
                        d.nodeR = r;
                        return d.nodeR / k;
                    }
                })
                .styles({
//                    "fill":function(d){return 'white'},
                    "fill": function (d) {
                        return "url(#linearGradient" + d.id + ")"
                    },
                    'cursor': 'hand'
                })
                .on('start', function (d) {
                    pre.select('#g' + d.id).remove();
                    var thisNode = d3.select(this);
                    thisNode.attrs({
                        transitionStatus: function (d) {
                            d.transitionStatus = 'start';
                            return d.transitionStatus;
                        }
                    });
                    d.index = 3;

                    g.select('#g' + nodeID.split('e')[1])
                        .selectAll('.backgroundNode')
                        .each(function (e, i) {
                            if (e.isBackground) {
                                d3.select(this)


                                    .transition()
                                    .duration(e.duration * 4)
                                    .ease(d3.easeLinear)
                                    .attrs({
                                        r: function (e) {
                                            var bigR;
                                            if (e.index == 2) {
                                                bigR = r + 4;
                                            }
                                            else if (e.index == 1) {
                                                bigR = r + 8;
                                            }
                                            e.bigR = bigR;
                                            return e.bigR;
                                        }
                                    })
                                    .styles({
                                        fill: e.highlightFill,
                                        //fill:color.svgColor,
                                        'fill-opacity': function () {
                                            var tempOpacity = e.highlightOpacity;
                                            e.highlightOpacity /= d.sizeIncreaseRatio[0];
                                            d.sizeIncreaseRatio = d.sizeIncreaseRatio.splice(1, d.ratio.length - 1);
                                            e.highlightOpacity *= d.sizeIncreaseRatio[0];
                                            return tempOpacity;
                                        }
                                    })
                                    .on('start', function (d) {
                                        d3.select(this)
                                            .attrs({
                                                transitionStatus: 'start'
                                            })
                                    })
                                    .on('end', function (d) {
                                        d3.select(this)
                                            .attrs({
                                                transitionStatus: 'end'
                                            });
                                        d3.select(this)
                                            .transition()
                                            .duration(e.duration * 8)
                                            .ease(d3.easeLinear)
                                            .style('fill', color.svgColor)
                                            .on('end', function (d) {
                                                d3.select(this).style('fill', 'none')
                                            })
                                    })
                            }

                        });
                    g.selectAll('#' + nodeID).sort(function (a, b) {
                        return d3.ascending(a.index, b.index);
                    })
                })
                .on('end', function (d) {
                    delay = delay.splice(1, delay.length - 1);
                    delay[0] -= d.duration * 4;
                    ratio = ratio.splice(1, ratio.length - 1);

                    setTransition(node, delay, ratio);

                });
        }
        else {
            node.attr('transitionStatus', function (d) {
                d.transitionStatus = 'end';
                return d.transitionStatus;
            });
        }


    }

    this.focusedNodeData = focusedNodeData;
}

function drawSize(optionNumber, doTransition, transitionType, d) {
    var nodes = d.node;
    var edges = d.edge;
//    var nodes= [];
//    var edges=[];
//    clone(d.node,nodes);
//    clone(d.edge,edges);
    var data = this.data;
    var that = this;

    var nodeOpacity = that.nodeOpacity;

    var k=this.zoomK||1;
    var drawnodes = this.drawnodes;
    var nodeClick = this.nodeClick;
    var mouseover = this.mouseover;
    var mouseout = this.mouseout;
    var idElem = this.idElem;
    var focusedID = this.focusedID;
    var svg = this.svg;
    var screenPreNodes = data.screenPreviousData[focusedID].node;
    var fontSize = dMax/2;
    var fontFamily = 'Microsoft YaHei';
    var drag = this.drag;
    var pre;
    var preSizes = {};
    if (this.preSizeLayer) {
        pre = this.preSizeLayer;
        pre.selectAll('.circle')
            .each(function (d) {
                preSizes[d.id] = {size: d.newSize};
            });
        //pre.remove();
    }
    var g = drawnodes.append('g').attr('class', 'sizeLayer');
    this.preSizeLayer = g;
    nodes.forEach(function (node) {
        node.fontSize=fontSize;
    });
    if (doTransition) {
        g.selectAll('node_size')
            .data(nodes)
            .enter()
            .append('text')
            .attrs({
                "x": function (d) {
                    return d.x;
                },
                "y": function (d) {
                    d.nodeSizeTextShiftY=7.5;
                    return d.y + d.nodeSizeTextShiftY/k;
                },
                "id": function (d) {
                    return 'size'+d.id
                },
                "class": 'size'
            })
    }
    else {
        g.selectAll('node_size')
            .data(nodes)
            .enter()
            .append('text')

            .attrs({
                "x": function (d) {
                    return d.x;
                },
                "y": function (d) {
                    d.nodeSizeTextShiftY=7;
                    return d.y + d.nodeSizeTextShiftY/k;
                },
                "id": function (d) {
                    return 'size'+d.id
                },
                'transitionStatus': 'end',
                "class": function (d) {
                    d.class = 'size';
                    return d.class;
                }
            })
    }
    g.selectAll('.size')
        .data(nodes)
        .on('dblclick', doubleClick)
        .on('click', function (d) {
            return nodeClick(d, that);
        })
        .on('mouseover', function (d) {
            return mouseover(d, that);
        })
        .on('mouseout', function (d) {
            return mouseout(d, that);
        })
        .each(function (d) {
            d.that = that;
        })
        .call(drag)

        .each(function (d) {
            if (d.size == 0 || d.focused == 'true') {
                d3.select(this).remove();
            }
            idElem[d.id] = d3.select(this);
        })
        .style("opacity", function (d) {
            if (nodeOpacityOption == 'citation' || nodeOpacityOption == 'uniform') {
                return nodeOpacity[nodeOpacityOption](d.citation);
            }
            else if (nodeOpacityOption == 'avgCitation') {
                return nodeOpacity[nodeOpacityOption](d.citation/ d.size);
            }
        })
        .style("cursor", "hand")
        .styles({
            'font-size': function (d) {
                return d.fontSize/k;
            },
            'font-family': 'Microsoft YaHei',
            fill: color.sizeLabelColor,
            //'alignment-baseline': 'middle',
            'text-anchor': 'middle'
        });

    if (transitionType == 'flowMap') {
        var sizes = g.selectAll('.size');
        for (var i = 0; i < sizes._groups[0].length; i++) {

            var size = d3.select(sizes._groups[0][i]);
            var nodeData;
            var tmpSizeSeries = [];
            var tmpDelay = [];
            size.attr('id', function (d) {
                nodeData = d;
                return 'size' + d.id;
            });

            clone(nodeData.sizeSeries, tmpSizeSeries);
            clone(nodeData.sizeDelay, tmpDelay);
            setSizeTransition(size, 1 ,tmpDelay , tmpSizeSeries);
            //size.attr('id', function (d) {
            //    d.sizeDelay = tmpDelay;
            //    d.sizeSeries = tmpSizeSeries;
            //    return d.id;
            //});
        }
    }
    else {
        g.selectAll('.size')
            .html(function (d) {
                if(preSizes[d.id]) {
                    return preSizes[d.id].size;
                }
                //return d.id;
                return d.newSize;
                //add old key to help change label
                //return d.newSize+'-'+ d.oldKey;
            });
    }
    function setSizeTransition(size, preSize,sizeDelay, sizeSeries) {
        var nodeData = size.data()[0];
        if (sizeSeries.length > 0) {
            size.transition()
                .duration(function (d) {
                    return d.duration * 4;
                })
                .delay(function (d) {
                    return sizeDelay[0];
                })
                .tween("text", function (d) {
                    var that=d3.select(this);
                    var i = d3.interpolateRound(preSize, sizeSeries[0]);
                    preSize = sizeSeries[0];
                    return function (t) {
                        that.text(i(t));
                    };
                })
                .style("opacity", 1)
                .style("cursor", "hand")
                .styles({
                    'font-size': function (d) {
                        var size = dMax/2;
                        d.fontSize = size;
                        return d.fontSize/k;
                    },
                    'font-family': 'Microsoft YaHei',
                    fill: color.sizeLabelColor
                })
                .on('start', function (d) {
                    pre.select('#size'+ d.id).remove();
                    var thisNode = d3.select(this);
                    thisNode.attrs({
                        transitionStatus: function (d) {
                            d.transitionStatus = 'start';
                            return d.transitionStatus;
                        }
                    })
                })
                .on('end', function (d) {
                    sizeDelay = sizeDelay.splice(1, sizeDelay.length - 1);
                    sizeDelay[0] -= d.duration * 4;
                    sizeSeries = sizeSeries.splice(1, sizeSeries.length - 1);
                    setSizeTransition(size, preSize, sizeDelay, sizeSeries);
                })
        }
        else {
            size.attr('transitionStatus', function (d) {
                d.transitionStatus = 'end';
                return d.transitionStatus;
            })
        }
    }

    svg.selectAll('.node').each(function (d) {
        d.idElem = idElem[d.id];
    })


}
function drawYearAxis(d){
    var axisSVG=this.axisSVG;
    var that=this;
    var svg=this.svg;
    var width=parseFloat(axisSVG.style('width'));
    var height=parseFloat(axisSVG.style('height'));
    var nodeYearData=d;
    var padding=30;

    var dataSet=d.data;
    var maxYear=d.maxYear;
    var minYear=d.minYear;
    var maxCount=d.maxCount;
    var minCount=d.minCount;
    var animateMode=this.animateMode;
    this.xScale = d3.scaleLinear()
        .domain([minYear,maxYear])
        .range([padding,width-padding]);

    this.yScale = d3.scaleLinear()
        .domain([0,maxCount])
        .range([(height-padding),padding]);
    var xScale=this.xScale;
    var yScale=this.yScale;
    this.xAxis=d3.axisBottom(xScale);
    this.yAxis=d3.axisLeft(yScale).ticks(3);

    var xAxis=this.xAxis;
    var yAxis=this.yAxis;
    var axisG=axisSVG.append("g")
        .attr("class","axis")
        .call(xAxis)
        .attr("transform","translate(0,"+(height-padding)+")")
        .append("text")
        .attr("transform","translate("+(height-padding)+",0)");//指定坐标轴说明的坐标
    var yearSliderDuration=(maxYear-minYear)*2000;

    var timeCircleData=[
        {
            x:xScale(minYear),
            y:yScale(0),
            r:7,
            minYear:minYear,
            maxYear:maxYear,
            id:'leftAxisCircle',
            transitionX:xScale(minYear),
            duration:yearSliderDuration,
            rBig:12,
            filter:'url(#leftOrRight_filter)',
            index:0
        },
        {
            x:xScale(maxYear),
            y:yScale(0),
            r:7,
            minYear:minYear,
            maxYear:maxYear,
            id:'rightAxisCircle',
            transitionX:xScale(maxYear),
            duration:yearSliderDuration,
            rBig:12,
            filter:'url(#leftOrRight_filter)',
            index:0
        }];


    this.preYearPath=false;
    this.drawNodeYearDataSet(dataSet,'yearPath');
    axisSVG.selectAll('text')
        .styles({
            'fill':color.axisTickColor,
            'font-family':'Arial',
            'font-weight':'bold'
        })
    axisSVG.selectAll('line')
        .styles({
            stroke:color.axisColor
        });
    axisSVG.select('.axis').select('path')
        .styles({
            fill:'none',
            stroke:color.axisColor
        });

    this.yearSliderDrag = d3.drag()
        .subject(function(d) { return d; })
        .on('drag', yearSliderDragMove)
        .on('start', yearSliderDragStart)
        .on('end', yearSliderDragEnd);
    axisSVG.selectAll('axisCircle').data(timeCircleData).enter()
        .append('circle')
        .attrs({
            id:function(d){return d.id;},
            class:'axisCircle',
            cx:function(d){return d.x},
            cy:function(d){return d.y},
            r:function(d){return d.r}
        })
            .style('filter',function(d,i){

            return d.filter
        })
        .style('visibility',function(d,i){
            if(animateMode==flipBook){
                if(i == 0){
                    return 'hidden'
                }
                else{
                    return 'visible';
                }
            }
        })
        .style('cursor','hand')
        .each(function(d){
            d.that=that;
        })
        .call(this.yearSliderDrag)
        .on('click',function(){
            console.log('clicked')
//            var thisNode=d3.select(this)
//                .duration(100)
//                .ease('linear')
//                .attr('fill',)
        })
        .on('dblclick',function(d){
            var left=axisSVG.select('')
        })

        .on('mouseover',function(){
            var thisNode=d3.select(this);
            thisNode.transition()
                .duration(100)
                .ease(d3.easeLinear)
                .attr('r',function(d){return d.rBig})
//                .style('filter','url(#leftOrRight');
        })
        .on('mouseout',function(){
            var thisNode=d3.select(this);
            var t=d3.transition().duration(100).ease(d3.easeLinear);
            thisNode.transition(t)
                .attr('r',function(d){return d.r})
//                .style('filter','url(#pause');
        })



    this.yearPosition={};
    for(var year=minYear;year<=maxYear;year++){
        this.yearPosition[year]=[xScale(year-0.5),xScale(year+0.5)]
    }

}

function yearAxisTransition(start,end,that){

    var axisSVG=that.axisSVG;
    var animateMode=that.animateMode;
    var xScale=that.xScale;
    var yScale=that.yScale;
    var minYear=that.minYear;
    var maxYear=that.maxYear;
    var transitionFlag=that.transitionFlag;
    var yearFilter=that.yearFilter;
//  var len=arguments.length;
    axisSVG.select('#leftAxisCircle')
        .attrs({
            cx:function(d){
                if(animateMode==flipBook){
//                    if(len>0){
                    d.x=xScale(minYear)
                    return xScale(minYear);
//                    }
//                    else return d.x;
                }
                else{
                    d.x=xScale(start)
                    return xScale(start)
                }
            }
        })
        .transition()
        .ease(d3.easeLinear)
        .duration(function(d){
            if(animateMode==flipBook){
//                if(len>0){
                    return (end-start)*2000;
//                }
//                else return d.duration;
            }
            else{
                return (end-start)*2000;
            }

        })
        .attrs({
            cx:function(d){
                if(animateMode==flipBook){
                    d.x=xScale(minYear)
                    return xScale(minYear);
                }
                else{
                    d.x=xScale(start)
                    return xScale(start)
                }
            }
        });
    axisSVG.select('#rightAxisCircle')
        .attrs({
            cx:function(d){
                if(animateMode==flipBook){
                    d.x = xScale(start);
                    return xScale(start);
                }
                else{
                    d.x = xScale(end);
                    return xScale(end)
                }
            }
        })
        .transition()
        .ease(d3.easeLinear)
        .duration(function(d){
            return (end-start)*2000;
        })
        .attrs({
            cx:function(d){
                d.x = xScale(end);
                return xScale(end)
            }
        })
        .on('end',function(){
            console.log(1);
            transitionFlag=false;
            yearFilter=[minYear,maxYear];
            var button=axisSVG.select('.controlButton');
            if(button.attr('id')=='pause'){
                var name=button.attr('name');
                changeFilter(button,name);
            }
        });

}
function drawNodeYearDataSet(dataSet,pathClass){
    var axisSVG=this.axisSVG;
    var svg=this.svg;
    var xScale=this.xScale;
    var yScale=this.yScale;
    function yearPathClick(d){
        axisSVG.selectAll('.subYearPath').remove();
        var thisPath=d3.select(this);
        var thisClass=thisPath.attr('class');
        var year=thisPath.attr('year');
        var nodes=d3.selectAll('.node');

        if(thisClass=='yearPath clicked'){

            nodes.each(function(){
                var thisNode=d3.select(this);
                var years=thisNode.attr('year').split('_');
                var yearsDic={};
                var sum=0
                for(var i=0;i<years.length;i++){
                    var nodeYear = years[i].split('-')[0];
                    var num= parseInt(years[i].split('-')[1]);
                    yearsDic[nodeYear]=num;
                    if(num)sum+=num
                }
                if(year in yearsDic){
                    var ratio=yearsDic[year]/sum;
                    var id=thisNode.attr('id').split('e')[1];
                    thisNode.style('fill',function(d){return "url(#linearGradient"+ d.id+")"});
                    var linearGradient=svg.select('#linearGradient'+id)
                    linearGradient.selectAll('stop')
                        .each(function(d,i){
                            var thisStop=d3.select(this);
                            var curOffset=parseFloat(thisStop.attr('offset'));
                            curOffset-=ratio;
                            if(i==1){
                                thisStop.attr('offset',curOffset);
                            }
                            else if(i==2){
                                thisStop.attr('offset',curOffset);
                            }
                        })


                }


            });
            thisPath.attr('class','yearPath');
            thisPath.style('fill',color.yearPathColor);
//                    thisPath.style('stroke','none');


        }
        else if(thisClass=='yearPath'){
            nodes.each(function(){
                var thisNode=d3.select(this);
                var years=thisNode.attr('year').split('_');
                var yearsDic={};
                var sum=0
                for(var i=0;i<years.length;i++){
                    var nodeYear = years[i].split('-')[0];
                    var num= parseInt(years[i].split('-')[1]);
                    yearsDic[nodeYear]=num;
                    if(num)sum+=num
                }
                if(year in yearsDic){
                    var ratio=yearsDic[year]/sum;
                    var id=thisNode.attr('id').split('e')[1];
                    var linearGradient=svg.select('#linearGradient'+id)
                    linearGradient.selectAll('stop')
                        .each(function(d,i){
                            var thisStop=d3.select(this);
                            var curOffset=parseFloat(thisStop.attr('offset'));
                            curOffset+=ratio;
                            if(i==1){
                                thisStop.attr('offset',curOffset);
                            }
                            else if(i==2){
                                thisStop.attr('offset',curOffset);
                            }
                        })


                }


            });
            thisPath.attr('class','yearPath clicked');
            thisPath.style('fill',color.yearPathHighlightColor);
//                    thisPath.style('stroke',color.yearPathHighLightStroke);
        }
    }
    var subYearPathDataList=[[]];
    var yearPathDataList=[];
    var k=0;
    for(var i=0;i<dataSet.length-1;i++){
        var yearPathData={};
        var p1=[xScale(dataSet[i][0])-1,yScale(0)];
        var p2=[xScale(dataSet[i][0])-1,yScale(dataSet[i][1])];
        var p3=[xScale(dataSet[i+1][0]),yScale(dataSet[i][1])];
        var p4=[xScale(dataSet[i+1][0]),yScale(0)];

        if(pathClass=='subYearPath'){
            if(dataSet[i][1]!=0){
                subYearPathDataList[k].push({i:i, data:dataSet[i]});
            }
            else{
                k+=1;
                subYearPathDataList[k]=[];
            }
        }
        else{
            yearPathData.d='M'+p1[0]+','+p1[1]+' L'+p2[0]+','+p2[1] +' '+p3[0]+','+p3[1]+' '+p4[0]+','+p4[1];
            yearPathData.year = dataSet[i][0];
            yearPathData.class = pathClass;
            yearPathData.fill = color.yearPathColor;
            yearPathData.stroke = 'none';
            yearPathDataList.push(yearPathData);

        }
        var d;

    }
//    console.log(subYearPathDataList);
    var finalSubYearPathDataList=[];
    for(var i=0;i<subYearPathDataList.length;i++){
        var len=subYearPathDataList[i].length
        if(len>0) {
            var start = subYearPathDataList[i][0].i - 1;
            var end = subYearPathDataList[i][len - 1].i + 1;
            if (dataSet[start])subYearPathDataList[i] = [{data:dataSet[start],i:start}].concat(subYearPathDataList[i]);
            if (dataSet[end])subYearPathDataList[i] = subYearPathDataList[i].concat([{data:dataSet[end],i:end}]);
            finalSubYearPathDataList.push(subYearPathDataList[i]);
        }
    }
    for(var i=0;i<finalSubYearPathDataList.length;i++){
        if(finalSubYearPathDataList[i][0].i==0){
            finalSubYearPathDataList[i]=[{i:0,data:[finalSubYearPathDataList[i][0].data[0],0]}].concat(finalSubYearPathDataList[i])
        }
        if(finalSubYearPathDataList[i][finalSubYearPathDataList[i].length-1].i==dataSet.length-1){
            finalSubYearPathDataList[i]=finalSubYearPathDataList[i].concat([{i:dataSet.length-1,data:[finalSubYearPathDataList[i][finalSubYearPathDataList[i].length-1].data[0],0]}])
        }
    }
    for(var i=0;i<finalSubYearPathDataList.length;i++){
        for(var j=0;j<finalSubYearPathDataList[i].length;j++){
            var p=[xScale(finalSubYearPathDataList[i][j].data[0].toInt()),yScale(finalSubYearPathDataList[i][j].data[1])]
            finalSubYearPathDataList[i][j]=p;
        }
    }
    for(var i=0;i<finalSubYearPathDataList.length;i++){
        var subYear={};
        subYear.class = 'subYearPath';
        subYear.fill = color.yearPathHighlightColor;
        subYear.stroke = color.yearPathHighLightStroke;
        subYear.strokeWidth=2+px;
        subYear.d = '';
        if(finalSubYearPathDataList[i].length>=3){
            var tmp=finalSubYearPathDataList[i];
            subYear.d+='M'+tmp[0][0]+','+tmp[0][1]+'L'+tmp[1][0]+','+tmp[0][1]+','+tmp[1][0]+','+tmp[1][1];
            for(var j=1;j<tmp.length-1;j++){
                subYear.d+=','+tmp[j][0]+','+tmp[j][1]+','+tmp[j+1][0]+','+tmp[j][1]+','+tmp[j+1][0]+','+tmp[j+1][1];
            }
        }
        finalSubYearPathDataList[i]=subYear;
    }
//    console.log(finalSubYearPathDataList)

    if(pathClass == 'subYearPath'){
        axisSVG.selectAll('whatever')
            .data(finalSubYearPathDataList)
            .enter()
            .append('path')
            .each(function(d){
                d3.select(this)
                    .attrs({
                        d: d.d,
                        class: d.class
                    })
                    .styles({
                        fill:d.fill,
                        stroke:d.stroke,
                        'stroke-width': d.strokeWidth
                    })
            })
    }
    else{
        axisSVG.selectAll('whatever')
            .data(yearPathDataList)
            .enter()
            .append('path')
            .each(function(d){
                d3.select(this)
                    .attrs({
                        d:d.d,
                        year:d.year,
                        class:d.class
                    })
                    .styles({
                        fill: d.fill
                    })
                    .on('click',yearPathClick)
            })
    }
//    axisSVG.append('path')
//        .attr('d',d)
//        .attr('year',dataSet[i][0])
//        .attr('class',pathClass)
//        .style('fill',function(d){
//            if(pathClass=='yearPath'){
//                return color.yearPathColor;
//            }
//            else if(pathClass=='subYearPath'){
//                return color.yearPathHighlightColor;
//            }
//        })
//        .style('stroke',function(d){
//            if(pathClass=='yearPath'){
//                return 'none';
//            }
//            else if(pathClass=='subYearPath'){
//                return color.yearPathHighLightStroke;
//            }
//        })
//        .style('stroke-width','3px')
//        .on('click',yearPathClick)
    for(var i=0;i<dataSet.length;i++){
        if(pathClass!='subYearPath'){
            axisSVG.append('text')
                .attrs({
                    x:(xScale(dataSet[i][0])+xScale(dataSet[i][0]+1))/2-String(dataSet[i][1]).visualLength()/2+3,
                    y:yScale(dataSet[i][1])-2
                })
                .styles({
                    'font-size':9+px,
                    'font-family':'Arial',
                    'color':color.yearPathHighlightColor
                })
                .html(dataSet[i][1]);
        }


    }
}

function axisLayout(d) {
    this.drawAnimateControlPanel();

    this.drawYearAxis(d.nodeYearData);
}
function getMulEdgeSourceTargetDic(edges) {
    var dic = {};
    for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];
        var source = edge.source;
        var target = edge.target;
        var key = source + '_' + target;
        if (dic[key]) {
            dic[key].push(edge);
        }
        else {
            dic[key] = [edge];
        }
    }
    return dic;
}

function adjustLayer(k,t) {
    currentLayer.background.style('cursor', '-webkit-grabbing');
    var svg = currentLayer.svg;
    var layer = svg.select('.svgDrawer');
    t=t||'translate('+0+','+0+')scale('+width/svgWidth+')';
    layer.attr("transform", t);
    currentLayer.zoomK = k;

    //layer.select('.mask0').attr("transform","translate("+ t.x+","+ t.y+"),scale("+ parseFloat(1/t.k)+")");
    //layer.select('.mask1').attr("transform","translate("+ t.x+","+ t.y+"),scale("+ parseFloat(1/t.k)+")");
    layer.selectAll('.node')
        .attr('r', function (d) {
            return d.nodeR / k;
        })
        .style('stroke-width', function (d) {
            return d.strokeWidth / k;
        });
    layer.selectAll('.size')
        .styles({
            'font-size': function (d) {
                return d.fontSize / k;
            }
        })
        .attrs({
            y: function (d) {
                return d.y + d.nodeSizeTextShiftY / t.k;
            }
        });
    layer.selectAll('.label')
        .styles({
            'font-size': function (d) {
                return d.fontSize / k;
            }
        })
        .each(function (d) {
            var thisLabel = d3.select(this);
            var indexStr = thisLabel.attr('index');
            var prefix = indexStr.split('_')[0];
            var index = indexStr.split('_')[1];
            thisLabel.attrs({
                y: d.y + d[prefix + 'Y'][index] / initDMax * (dMax+dMin-8) / k
            });
        });
    layer.selectAll('image')
        .attrs({
            x: function (d) {
                return d.x + d.imageShift / k
            },
            y: function (d) {
                return d.y + d.imageShift / k
            },
            width: function (d) {
                return d.imageSize / k + px
            },
            height: function (d) {
                return d.imageSize / k + px
            }
        });
    layer.select('.edgeField').selectAll('path')
        .attr('d', function (d) {
            return pathData(d, d.that, k);
        })
        .styles({
            'stroke-width': function (d) {
                return d.strokeWidth / k + px
            }
        });
}

function graphZoom() {
    var t = d3.event.transform;
    adjustLayer(t.k,t);
}
function layout(optionNumber, doTransition, transitionType, d) {
    var that = this;
    var zoom = d3.zoom()
        .scaleExtent([-Infinity, +Infinity])
        .on("zoom", graphZoom)
        .on('end', function () {
            leftLayer.background.style('cursor', '-webkit-grab');
        });
    that.svgZoom = zoom;
    var svg = this.svg;
    svg.call(zoom);
    var containers = [svg.svg_g];

    var drawnodes = this.drawnodes;
    var drag = d3.drag()
        .subject(function (d) {
            return d;
        })
        .on('drag', dragmove);
    this.drag = drag;

    this.currentData = d;
    this.currentEdgeSourceTargetDic = getMulEdgeSourceTargetDic(d.edge);
    this.getRelation(d);
    if (!d.keepAll)this.removeSVGElements();
    this.drawBackgroundYear(doTransition);
    this.drawEdges(optionNumber, doTransition, transitionType, d);
    this.drawLabels(optionNumber, doTransition, transitionType, d);
    this.drawNodes(optionNumber, doTransition, transitionType, d);
//    drawSelfEdge(optionNumber,doTransition,doIncremental,d);
    this.drawSize(optionNumber, doTransition, transitionType, d);
//    removeDuplicationLabels(d.node);
    this.drawLegends();
}
function nodePositionToInt(d) {
    var nodes = d.node;
    var edges = d.edge;
    nodes.forEach(function (node) {
        node.x = parseInt(node.x);
        node.y = parseInt(node.y);
    });
    //edges.forEach(function (edge) {
    //    if(edge.pathNodeList){
    //        edge.pathNodeList.forEach(function(node){
    //            node.x = parseInt(node.x);
    //            node.y = parseInt(node.y);
    //        })
    //    }
    //})

}
function pathData(d, that, zoomK) {
    var zoom = zoomK || 1;
    var sizeScale = that.sizeScale;

    var svg = that.svg;
    var focusedID = that.focusedID;
    var p = d.points;
    var data = that.data;
    var nodes = data.postData[focusedID].node;
    var oriEdgeDic = nodes.edgeDic;


    var method = that.method;
    if (d.isNontreeEdge) {
        d.type = 'L';
    }
    else {
        d.type = 'curveMonotoneX';
    }
    var flow = d.flow;
    switch (d.type) {
        case 'L':
        {
            var x1, y1, x2, y2, r1, r2, dis;
            var len = p.length;
            len = len - 1;
            dis = distance(p[0].x, p[0].y, p[len].x, p[len].y);
            r1 = sizeScale.sizeScale(p[0].size);
            r2 = sizeScale.sizeScale(p[len].size);

            x1 = getstart(p[0].x, p[len].x, r1, dis);
            y1 = getstart(p[0].y, p[len].y, r1, dis);
            x2 = getend(p[len].x, p[0].x, r2, dis);
            y2 = getend(p[len].y, p[0].y, r2, dis);
            return [
                'M', p[0].x, ' ', p[0].y,
                //' ', (p[0].x+ p[len].x)/2, ' ', (p[0].y+ p[len].y)/2,
                'L', p[len].x, ' ', p[len].y
            ].join('');
            //return [
            //    'M', x1, ' ', y1,
            //    'L', x2, ' ', y2
            //].join('');
        }
        case 'curveMonotoneX':
        {
            var pathD = 'M';
            var target = nodes[d.target];
            var targetRadius = sizeScale.sizeScale(target.size);
            var newPathNodeList = [];
            var regStr;

            function drawTreeEdge() {
                var nodeSet = d3.set();
                var key = d.source + '_' + d.target + '_background';
                nodeSet.add(d.source);
                nodeSet.add(d.target);
                d.pathNodeList.forEach(function (nodeId) {
                    var node = nodes[nodeId]
                    if (node.id == d.source) {
                        //newPathNodeList.push(node.move(node,0, node.edgeShiftDic[key].shiftIn));
                        newPathNodeList.push(node.move(node, 0, node.edgeShiftDic[key].shift / zoom));
                        if (node.cp1) {
                            var cp = new Point(node.cp1.x, node.cp1.y);
                            newPathNodeList.push(cp.move(0, node.edgeShiftDic[key].shift / zoom));
                            newPathNodeList.push(cp.move(-1 / zoom, node.edgeShiftDic[key].shift / zoom));
                        }
                    }
                    else {
                        newPathNodeList.push(node);
                        if (node.cp1) {
                            var cp = new Point(node.cp1.x, node.cp1.y);
                            newPathNodeList.push(cp);
                            newPathNodeList.push(cp.move(-1 / zoom, 0));
                        }
                    }
                });
                var source = nodes[d.pathNodeDic[d.source]];
                var target = nodes[d.pathNodeDic[d.target]];
                if (nodeSet.has(d.source)) {
                    source = source.move(source, 0, source.edgeShiftDic[key].shift / zoom);
                }
                if (nodeSet.has(d.target)) {
                    target = target.move(target, 0, target.edgeShiftDic[key].shift / zoom);
                }
                return regStr = source.x + "," + source.y + "(.*)" + target.x + "," + target.y;

            }

            function drawRecoveredTreeEdge() {
                var nodeSet = d3.set();
                var key = d.source + '_' + d.target;
                d.pathNodeList.forEach(function (node) {
                    nodeSet.add(node.id);
                });
                d.longPathNodes.forEach(function (node) {
                    if (nodeSet.has(node.id)) {
                        newPathNodeList.push(node.move(node, 0, node.edgeShiftDic[key].shiftOut));
                        if (node.cp1) {
                            var cp = new Point(node.cp1.x, node.cp1.y);
                            newPathNodeList.push(cp.move(0, node.edgeShiftDic[key].shiftOut));
                            newPathNodeList.push(cp.move(-1, node.edgeShiftDic[key].shiftOut));
                        }
                    }
                    else {
                        newPathNodeList.push(node);
                        if (node.cp1) {
                            var cp = new Point(node.cp1.x, node.cp1.y);
                            newPathNodeList.push(cp);
                            newPathNodeList.push(cp.move(-1, 0));
                        }
                    }
                });
                var source = d.pathNodeDic[d.source];
                var target = d.pathNodeDic[d.target];
                if (nodeSet.has(d.source)) {
                    source = source.move(source, 0, source.edgeShiftDic[key].shiftOut);
                }
                if (nodeSet.has(d.target)) {
                    target = target.move(target, 0, target.edgeShiftDic[key].shiftOut);
                }
                return regStr = source.x + "," + source.y + "(.*)" + target.x + "," + target.y;

            }

            function drawForegroundEdges() {
                var shift;
                var sourceShift = 0;
                var targetShift = 0;
                for (var i = 0; i < d.longPathNodes.length; i++) {
                    var p = nodes[d.longPathNodes[i]];
                    if (p.id in d.nodeShiftDic) {
                        shift = d.nodeShiftDic[p.id];
                    }
                    else {
                        shift = 0;
                    }
                    newPathNodeList.push(p.move(p, 0, shift / zoom));
                    if (p.cp1) {
                        var cp = new Point(p.cp1.x, p.cp1.y);
                        newPathNodeList.push(cp.move(0, shift / zoom));
                        newPathNodeList.push(cp.move(-1, shift / zoom));
                    }
                }


                var len = d.pathNodeList.length;
                //var sourcePartKey = d.pathNodeList[0].id + '_' + d.pathNodeList[1].id;
                //var targetPartKey = d.pathNodeList[len - 2].id + '_' + d.pathNodeList[len - 1].id;
                var sourcePartKey = d.pathNodeList[0] + '_' + d.pathNodeList[1];
                var targetPartKey = d.pathNodeList[len - 2] + '_' + d.pathNodeList[len - 1];

                var source = nodes[d.pathNodeDic[d.source]];
                var target = nodes[d.pathNodeDic[d.target]];

                //if (sourcePartKey in d.shiftDic) {
                source = source.move(source, 0, d.nodeShiftDic[d.source] / zoom);
                //}
                //if (targetPartKey in d.shiftDic) {
                target = target.move(target, 0, d.nodeShiftDic[d.target] / zoom);
                //}
                return regStr = source.x + "," + source.y + "(.*)" + target.x + "," + target.y;

            }

            if (d.isBackgroundEdge) {
                regStr = drawTreeEdge();
            }
            else if (d.isForegroundTargetEdge) {
                regStr = drawForegroundEdges();
            }
            else if (d.isForegroundSourceEdge) {
                regStr = drawForegroundEdges();
            }
            //else if(d.isForegroundEdge){
            //    console.log(d);
            //    regStr=drawForegroundEdges();
            //}
            if (newPathNodeList.length > 0) {
                var reg = new RegExp(regStr);
                var res;

                svg.append('path')
                    .attr('class', 'monotoneX')
                    .datum(newPathNodeList)
                    .attr('d', d3.line()
                        .curve(d3.curveMonotoneX)
                        .x(function (d) {
                            return d.x;
                        })
                        .y(function (d) {
                            return d.y;
                        })
                    )
                    .styles({
                        'stroke': 'yellow',
                        'stroke-width': '2px',
                        'fill': 'none'
                    })
                    .each(function () {
                        res = reg.exec(d3.select(this).attr('d'))[0];
                    })
                    .remove();
                pathD += res;
                var tmpPath = svg.append('path')
                    .attr('d', pathD)
                    .style('stroke', 'none')
                    .style('fill', 'none')
                    .each(function () {
                        var thisEdge = d3.select(this);
                        var totalLength = thisEdge.node().getTotalLength();
                        var asspoint = thisEdge.node().getPointAtLength((totalLength * (1 - targetRadius / totalLength) - 11));
                        var point = thisEdge.node().getPointAtLength((totalLength * (1 - targetRadius / totalLength) - 10));
                        pathD += 'M' + asspoint.x + ' ' + asspoint.y + 'M' + point.x + ' ' + point.y
                    });
                tmpPath.remove();
            }
            return pathD;
        }
    }
}
function removeDuplicationLabels(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        var id = '#label' + nodes[i].id;
        svg.selectAll(id)
            .each(function (d, i) {
                var thisLabel = d3.select(this);
                if (thisLabel.attr('isBackground')) {
                    thisLabel.remove();
                }
            });
    }
}
function greyBackground() {
    var svg = this.svg;
    var svg_g = this.svg_g;
//    drawnodes.selectAll('.node')
//        .style('fill','lightgrey');
    svg.select('.rectBackground').remove();
    var width = svg.attr('width');
    var height = svg.attr('height');
    //mask设定这么大是因为设置小了在缩放时可能会把后面的漏出来
    var maskingOutData = [
        {
            class: 'outer mask0',
            index: 1,
            x: -5 * width,
            y: -5 * height,
            width: width * 11,
            height: height * 11,
            'fill': color.svgColor,
            'opacity': 0.6,
            rectClass: 'rect'
        },
        {
            class: 'outer mask1',
            index: 3,
            x: -5 * width,
            y: -5 * height,
            width: width * 11,
            height: height * 11,
            'fill': color.svgColor,
            'opacity': 0.75,
            rectClass: 'rect'
        }
    ];
    svg_g.selectAll('whatever')
        .data(maskingOutData)
        .enter()
        .append('g')
        .attrs({
            class: function (d) {
                return d.class
            },
            index: function (d) {
                return d.index
            }
        })
        .each(function (d) {
            d3.select(this)
                .append('rect')
                .attrs({
                    class: function (d) {
                        return d.rectClass
                    },
                    x: function (d) {
                        return d.x
                    },
                    y: function (d) {
                        return d.y
                    },
                    height: function (d) {
                        return d.height
                    },
                    width: function (d) {
                        return d.width
                    }
                })
                .styles({
                    fill: function (d) {
                        return d.fill
                    },
                    opacity: function (d) {
                        return d.opacity
                    }
                })
        });
//    svg_g.append('rect')
//        .attrs({
//            class:'rectBackground',
//            x:0,
//            y:0,
//            width:width,
//            height:height
//        })
//        .styles({
//            'fill':'rgb(15,40,60)',
//            'opacity':0.85
//        });
    svg.selectAll('path').attr('isBackground', 1);
    svg.selectAll('.node').attr('isBackground', 1);
    svg.selectAll('.size').remove();
    svg.selectAll('.label').attr('isBackground', 1);
    this.initFrameIndex(4)


}
function removeSVGElements() {
    var animateMode = this.animateMode;
    var svg_g = this.svg_g;
    if (animateMode == flipBook) {
        svg_g.selectAll('g')
            .each(function (d) {
                if (d.index > 0)d3.select(this).remove();
            });
        this.drawnodes = svg_g.select('#nodeG0');
        this.drawedges = svg_g.select('#edgeG0');
        this.drawnodes.selectAll('*').remove();
        this.drawedges.selectAll('*').remove();
    }
    else {
        svg_g.select('#nodeG2').remove();
        svg_g.select('#edgeG2').remove();
        this.drawnodes
            .attr('index', function (d) {
                d.index = 2;
                return d.index
            })
            .attr('id', function (d) {
                return 'nodeG' + d.index
            });
        this.drawedges
            .attr('index', function (d) {
                d.index = 2;
                return d.index
            })
            .attr('id', function (d) {
                return 'edgeG' + d.index
            });
        this.drawedges.select('.edgeField').selectAll('path')
            .each(function (d) {
                d3.select(this)
                    .attrs({
                        class: function (d) {
                            d.class = 'edgeG2' + d.class.split('G4')[1]
                            return d.class
                        }
                    })
            });
        this.drawedges.selectAll('.marker')
            .each(function (d) {
                d3.select(this)
                    .attrs({
                        id: function (d) {
                            d.id = 'edgeG2' + d.id.split('G4')[1]
                            return d.id
                        }
                    })
            });
        this.initFrameIndex(4);
        svg_g.selectAll('.outer')
            .sort(function (a, b) {
                return d3.ascending(a.index, b.index);
            });
    }
}


function drawAuthorInfo() {
    var authorDiv = d3.select('.authorDiv');
    authorDiv.selectAll('div').remove();
    if (focusedID.split('_').length == 2)var tmpID = focusedID.split('_')[0];
    if (authorData[tmpID]) {
        var authorInfo = authorData[tmpID];
    }
    else {
        var authorInfo = authorData['default'];
    }
    for (var i = 0; i < 2; i++) {
        var authorDivWidth = authorDiv.style('width').split('px')[0] - 2;
        var authorDivHeight = authorDiv.style('height').split('px')[0];
        var authorInfoDiv = authorDiv.append('div').attr('class', 'authorInfoDiv')
            .styles({
                float: 'left',
                height: authorDivHeight + px,
                width: authorDivWidth / 2 + px
            });
        var lineRatio = 0.75
        if (i == 0) {
            var lineDiv = authorDiv.append('div').styles({
                float: 'left',
                background: 'rgb(35,78,108)',
                width: '2px',
                height: authorDivHeight * lineRatio + px,
                'margin-top': authorDivHeight * (1 - lineRatio) / 2 + px
            });
        }

        var marginRatio = 0.2;
        var imageRatio = 0.6;
        authorInfoDiv.append('div').attr('class', 'imageDiv')
            .styles({
                float: 'left',
                width: authorDivHeight * imageRatio + px,
                height: authorDivHeight * imageRatio + px,
                'margin-left': authorDivHeight * marginRatio + px,
                'margin-top': authorDivHeight * marginRatio + px

            })
            .append('img').attr('class', 'img').attr('src', authorInfo[i].image)
            .styles({
                'border-radius': 5 + px,
                width: authorDivHeight * imageRatio + px,
                height: authorDivHeight * imageRatio + px
            });
        d3.select('.ruler').style('font-size', '14px');
        var authorTextDiv = authorInfoDiv.append('div').attr('class', 'authorTextDiv')
            .styles({
                float: 'left',
                width: authorDivWidth / 2 - authorDivHeight * (marginRatio + 0.05) - authorDivHeight * imageRatio + px,
                height: authorDivHeight * imageRatio + px,
                'margin-top': authorDivHeight * marginRatio + px,
                'margin-left': authorDivHeight * 0.05 + px
            })
        authorTextDiv.append('div').attr('class', 'authorNameDiv').append('text')
            .styles({
                'font-family': 'Microsoft YaHei',
                'font-size': 14 + px
            })
            .html(function (d) {
                return authorInfo[i]['author'] + ':';
            })
        for (var key in authorInfo[i]) {
            if (key != 'author' && key != 'title' && key != 'image')
                authorTextDiv.append('div').attr('class', 'authorNameDiv').append('text')
                    .styles({
                        'font-family': 'Microsoft YaHei',
                        'font-size': function (d) {
                            return 11 + px;
                        }
                    })
                    .html(function (d) {
                        return authorInfo[i][key];
                    })
        }

    }

}
function getstart(origin1, origin2, r, d) {
    if (d != 0) return origin1 + (r / d) * (origin2 - origin1);
    else return origin1;
}
function getend(origin1, origin2, r, d) {
    var ratio = r + 13 / d;
//    if(d!=0) return origin1*ratio+origin2*(1-ratio);
    if (d != 0) return origin1 + ((r + 13) / d) * (origin2 - origin1);
    else return origin1;
}


function findBoxOfPoints(points) {
    var maxX = d3.max(points, function (d) {
        return d.x
    })
    var maxY = d3.max(points, function (d) {
        return d.y
    })
    var minX = d3.min(points, function (d) {
        return d.x
    })
    var minY = d3.min(points, function (d) {
        return d.y
    })
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    }
}
function getStrokeWidth(d) {
    var stroke_width;
    var that = d.that;
    var flowScale = that.flowScale;
    var weightScale = that.weightScale;
    if (optionNumber.edgeThicknessOption == 1) {
        stroke_width = flowScale(d.flow);
    }
    else if (optionNumber.edgeThicknessOption == 0) {
        var weightSum = 0;
        for (var key in d.weight) {
            weightSum += d.weight[key];
        }
        stroke_width = weightScale(weightSum);
    }
    return stroke_width;
}
function drawTitle() {
    d3.selectAll('.title').remove();

    drawTitles.selectAll('text').data(['1']).enter()
        .append('text')
        .attrs({
            'x': '95px',
            'y': '50px'
        })
        .text(title);
}

function findFocusedNode() {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].nodes) {
            for (var j = 0; j < nodes[i].nodes.length; j++) {
                if (nodes[i].nodes[j].focus == 'focused') {
                    nodes[i].focused = true;
                }
            }
        }
    }
}


function SizeScale(maxSize) {
    this.k = 0;
    var max = d3.max([minMax, maxSize]);
    this.sizeScale = function (nodeSize) {
        var r = (dMax - dMin) * (Math.sqrt(nodeSize) / Math.sqrt(max)) + dMin;
        return r;
    };
}
function getSelfData(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].selfEdge) {
            var size = nodes[i].size;
            var r = sizeScale.sizeScale(size);
            var x = nodes[i].x;
            var y = nodes[i].y;
            var d = 2;
            var selfEdgeLabelX = x;
            var selfEdgeLabelY = y - (5 / 3 * r + d);
            nodes[i].selfPathStr = selfPathData(x, y, size);
            nodes[i].selfEdgeLabelX = selfEdgeLabelX;
            nodes[i].selfEdgeLabelY = selfEdgeLabelY;

        }
    }
}
function selfPathData(x, y, size) {
    var r = sizeScale.sizeScale(size);
    var d = 2;
    var pi = Math.PI;
    var degree = 25 / 360 * pi;
    var x1 = x - (r + d) * Math.sin(degree);
    var x2 = x + (r + d) * Math.sin(degree);
    var y1 = y - (r + d);
    var y2 = y - (r + d);
    var rx = r / 3;
    var ry = r / 3;
    return 'M' + x1 + ' ' + y1 + 'A' + rx + ' ' + ry + ' ' + 0 + ' ' + 1 + ' ' + 1 + ' ' + x2 + ' ' + y2;
}
function getSelfEdgeStrokeWidth(d) {
    var stroke_width;
    if (optionNumber.edgeThicknessOption == 1) {
        stroke_width = flowScale(d.selfEdge);
    }
    else if (optionNumber.edgeThicknessOption == 0) {
        var weight = parseInt(d.selfEdge * d.size);
        stroke_width = weightScale(weight);
    }
    return stroke_width;
}

function setTransition(div, location, marginLeft, marginTop, isVertical) {//location should be the final place after transition
    var duration = 500;
    if (isVertical) {
        div.transition()
            .duration(duration)
            .styles({
                height: location + px,
                'margin-left': marginLeft + px,
                'margin-top': marginTop + px
            })
    }
    else {
        div.transition()
            .duration(duration)
            .styles({
                width: location + px,
                'margin-left': marginLeft + px,
                'margin-top': marginTop + px
            })
    }

}
function recoverScreen() {
    var duration = 500;
    var bodyDiv = d3.select('.bodyDiv');
    var hiddenDivList = {
        top: ['titleDiv', 'middleTopBarDiv'],
        bottom: ['authorDiv'],
        left: ['leftAndTransitionDiv'],
        right: ['rightDiv']
    };
    var hiddenElementList = ['div', 'text'];
    for (var key in hiddenDivList) {
        for (var i = 0; i < hiddenDivList[key].length; i++) {
            var thisDiv = bodyDiv.select('.' + hiddenDivList[key][i]);
            var originWidth = thisDiv.attr('oldWidth').split('px')[0];
            var originHeight = thisDiv.attr('oldHeight').split('px')[0];
            if (key == 'top') {
                setTransition(thisDiv, originHeight, 0, 0, true);
            }
            else if (key == 'bottom') {
                setTransition(thisDiv, originHeight, 0, 0, true);
            }
            else if (key = 'left') {
                setTransition(thisDiv, originWidth, 0, 0, false);
            }
            else if (key == 'right') {
                setTransition(thisDiv, originWidth, 0, 0, false);
            }
            for (var j = 0, len1 = hiddenElementList.length; j < len1; j++) {
                thisDiv.selectAll(hiddenElementList[j])

                    .styles({
                        display: 'block'
                    });
            }
        }

    }
    var middleDiv = d3.select('.middleDiv');

    middleDiv.transition()
        .duration(duration)
        .styles({
            width: middleDiv.attr('oldWidth'),
            height: middleDiv.attr('oldWidth')
        });
    var top = middleDiv.select('.topControlDiv');
    top.transition()
        .duration(duration).styles({
        width: top.attr('oldWidth')
    });
//
    var bottom = middleDiv.select('.bottomControlDiv');
    bottom.transition()
        .duration(duration).styles({
        width: bottom.attr('oldWidth')
    });
    var svgHeight = usefulHeight - parseFloat(top.style('height').split('px')[0]) - parseFloat(bottom.style('height').split('px')[0]);
    var graphDiv = middleDiv.select('.graphDiv');
    graphDiv.transition()
        .duration(duration)
        .styles({
            width: graphDiv.attr('oldWidth'),
            height: graphDiv.attr('oldHeight')
        });
    var middleSVG = middleDiv.select('svg');
    middleSVG.transition()
        .duration(duration)
        .attrs({
            width: svg.attr('oldWidth'),
            height: svg.attr('oldHeight')
        })
        .each('end', function () {
            size = {
                width: svg.attr('oldWidth') * 0.85,
                height: svg.attr('oldHeight') * 0.7
            };
            coordinateOffset(data.postData[focusedID]);
            getCurves(data.postData[focusedID]);
//
            layout(optionNumber, true, 'flowMap', data.postData[focusedID]);
        });

}
function getLength(divClass, type) {
    return parseFloat(d3.select('.' + divClass).style(type).split('px')[0]);
}

function fullScreen() {
    var duration = 500
    changeDivList = ['titleDiv', 'middleTopBarDiv', 'authorDiv', 'leftAndTransitionDiv', 'rightDiv', 'middleDiv', 'topControlDiv', 'bottomControlDiv', 'graphDiv'];
    function storeOldDivData(div) {
        div.attr('oldWidth', div.style('width'));
        div.attr('oldHeight', div.style('height'));
    }

    for (var i = 0, len = changeDivList.length; i < len; i++) {
        storeOldDivData(d3.select('.' + changeDivList[i]));
    }
    svg.attr('oldWidth', svg.attr('width'));
    svg.attr('oldHeight', svg.attr('height'));

//    layout(optionNumber);
    var bodyDiv = d3.select('.bodyDiv');
    var hiddenDivList = {
        top: ['titleDiv', 'middleTopBarDiv'],
        bottom: ['authorDiv'],
        left: ['leftAndTransitionDiv'],
        right: ['rightDiv']
    };
    var hiddenElementList = ['div', 'text'];


    var topHeight = getLength('titleDiv', 'height') + getLength('middleTopBarDiv', 'height');
    var bottomHeight = getLength('authorDiv', 'height');
    var leftWidth = getLength('leftAndTransitionDiv', 'width');
    var rightWidth = getLength('rightDiv', 'width');

    for (var key in hiddenDivList) {
        for (var i = 0; i < hiddenDivList[key].length; i++) {
            var thisDiv = bodyDiv.select('.' + hiddenDivList[key][i]);
            if (key == 'top') {
                setTransition(thisDiv, 0, 0, 0, true);
            }
            else if (key == 'bottom') {
                setTransition(thisDiv, 0, leftWidth, topHeight + bottomHeight, true);
            }
            else if (key = 'left') {
                setTransition(thisDiv, 0, 0, 0, false);
            }
            else if (key == 'right') {
                setTransition(thisDiv, 0, leftWidth + rightWidth, 0, false);
            }
            for (var j = 0, len1 = hiddenElementList.length; j < len1; j++) {
                thisDiv.selectAll(hiddenElementList[j])

                    .styles({
                        display: 'none'
                    });
            }
        }


    }
    var middleDiv = d3.select('.middleDiv');

    middleDiv.transition()
        .duration(duration)
        .styles({
            width: usefulWidth + px,
            height: usefulHeight + px
        });
    var top = middleDiv.select('.topControlDiv');
    top.transition()
        .duration(duration).styles({
        width: usefulWidth + px
    });
//
    var bottom = middleDiv.select('.bottomControlDiv');
    bottom.transition()
        .duration(duration).styles({
        width: usefulWidth + px
    });
    var svgHeight = usefulHeight - parseFloat(top.style('height').split('px')[0]) - parseFloat(bottom.style('height').split('px')[0]);
    middleDiv.select('.graphDiv')
        .transition()
        .duration(duration)
        .styles({
            width: usefulWidth + px,
            height: svgHeight + px
        });
    var middleSVG = middleDiv.select('svg');
    middleSVG.transition()
        .duration(duration)
        .attrs({
            width: usefulWidth,
            height: svgHeight
        })
        .each('end', function () {
            size = {
                width: usefulWidth * 0.85,
                height: svgHeight * 0.7
            };
            coordinateOffset(data.postData[focusedID]);
            getCurves(data.postData[focusedID]);
//
            layout(optionNumber, true, 'flowMap', data.postData[focusedID]);
        });

}


function reLayoutFlowMap(){
    var focusedID=this.focusedID;
    var data=this.data;
    var newEdges=[];
    var edges=data.postData[focusedID].edge;
    var treeEdges= data.postData[focusedID].deletedTreeEdges;
    var nonTreeEdges=data.postData[focusedID].deletedNonTreeEdges;


    for(var i=0;i<edges.length;i++){
        if(edges[i].structureType=='originEdge'&&edges[i].ratio==1){
            newEdges.push(edges[i]);
        }
//        else if(edges[i].structureType=='treeEdge'){
//            nonTreeEdges.push(edges[i]);
//        }
//        else if(edges[i].structureType=='nontreeEdge'){
//            nonTreeEdges.push(edges[i]);
//        }
    }
    data.postData[focusedID].edge=newEdges;
    this.calculateFlowMap(data.postData[focusedID],true);
    this.setInitNodeTransition(data.postData[focusedID]);
    this.setInitEdgeTransition(data.postData[focusedID]);
    this.getRelation(data.postData[focusedID]);
    getCurves(data.postData[focusedID]);
    if(data.postData[focusedID].subNodeYearData){
        var subNodeYearData=data.postData[focusedID].subNodeYearData;
        for (var i=0;i<subNodeYearData.length;i++){
            subNodeYearData[i][1]=0;
        }
    }
    this.preLayout(data.postData[focusedID]);
    d3.select('.edgeField').selectAll('path')
        .each(function(){
            var thisEdge=d3.select(this);
            var edgeClass=thisEdge.attr('class');
            if(parseInt(edgeClass.split('path')[1])>151){
                thisEdge.remove()
            }
        });
}
function clusterSlider(){
    var minID=parseInt(focusedID.split('_')[1]);
    var min=minID/5-1;
    var max=7;
    var k=5;
    $(function(){
        $(".clusterSlider").slider({
            range:'min',
            max:max,
            value:min,
            slide:function(event,ui){
//                console.log(ui.value);
                reLayoutByCluster(event, ui);
            }
        });
        $( ".clusterText" ).html( 5*(parseInt($( ".clusterSlider" ).slider("value"))+1));

    })
}
function reLayoutByCluster(event,ui){
    var cluster=5*(ui.value+1);
    selectedCluster=cluster;
    var urlID=getUrlParam('id');
    var paperID=parseInt(urlID.split('_')[0]);
    $( ".clusterText" ).html(cluster);
    var searchID=String(paperID)+'_'+String(cluster);

    search(searchID);

}
function yearSlider(){
    yearEdgeDic=getYearEdgeRelation();
    var min=10000;
    var max=0;
    for(var key in yearEdgeDic){
        var year=parseInt(key);
        if(year>max)max = year;
        if(year<min)min = year;
    }
    yearDataHistory={};
    var key=String(min)+'-'+String(max);
    yearDataHistory[key]={
        nodes:copy(nodes),
        edges:copy(edges)
    };
    $(function() {
        $( "#yearSlider" ).slider({
            range: true,
            min: min,
            max: max,
            values: [ min, max ],
            slide: function( event, ui ) {
                reLayoutByYear(event,ui);

            }
        });

        $( ".yearText" ).html( $( "#yearSlider" ).slider( "values", 0 ) +
            " - " + $( "#yearSlider" ).slider( "values", 1 ) );
    });
}
function reLayoutByYear(event, ui){
    $( ".yearText" ).html(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    var yearRange={
        min:ui.values[0],
        max:ui.values[1]
    };
    dataFilter(yearRange);
}
function copy(data){
    var result=[];
    for(var i= 0,len=data.length;i<len;i++){
        var ob={};
        for(var key in data[i]){
            ob[key]=data[i][key];
        }
        result.push(ob);
    }
    return result;
}
function dataFilter(yearRange){
    var yearEdgeDic=getYearEdgeRelation();



    var currentData=data.postData[focusedID];
    var nodes=currentData.node;
    var edges=currentData.edge;


//    oldEdges_yearFilter=[];
//    var newEdges_yearFilter=[];
//    oldNodes_yearFilter=[];
//    var newNodes_yearFilter=[];
//    var nodesArray=[];
    var min=yearRange.min;
    var max=yearRange.max;
    var newEdges=[];
    var newNodeList=[];
    var newNodes=[];
    var nodesKey=[];
    var nodesKeyDic={};
    var num=0;
    for(var i=0;i<edges.length;i++){
        var edgeYear=edges[i].weight;
        for(var key in edgeYear){
            var year=parseInt(key);
            if(year>=min&&year<=max){
                //edge and its source and target should be stored

                var newEdge={};
                var source=edges[i].source;
                var target=edges[i].target;
                if(!in_array(source,nodesKey)){
                    nodesKey.push(source);
                    nodesKeyDic[source]=num;

                    nodes[source].id=nodesKeyDic[source]
                    newNodes.push(nodes[source]);
                    num+=1;
                }
                if(!in_array(target,nodesKey)){
                    nodesKey.push(target);
                    nodesKeyDic[target]=num;

                    nodes[target].id=nodesKeyDic[target]
                    newNodes.push(nodes[target]);
                    num+=1;
                }

                clone(edges[i],newEdge);
                newEdge.source = nodesKeyDic[newEdge.source];
                newEdge.target = nodesKeyDic[newEdge.target];
                newEdge.nodes[0]=newEdge.source;
                newEdge.nodes[1]=newEdge.target;
                newEdges.push(newEdge);
                break;


            }
        }
    }


    data.timeData[focusedID]={};
    data.timeData[focusedID].node = newNodes;
    data.timeData[focusedID].edge = newEdges;
    data.timeData[focusedID].nodeYearData = data.postData[focusedID].nodeYearData;
    data.timeData[focusedID].subNodeYearData = data.postData[focusedID].subNodeYearData;

    getRelation(data.timeData[focusedID]);
    var assistEdge=generateAssistEdge(data.timeData[focusedID]);
    var newGraph=new Graph(data.timeData[focusedID].edge,assistEdge);
    reCalculateLayout(newGraph,data.timeData[focusedID]);
    reverseXY(data.timeData[focusedID]);
    coordinateOffset(data.timeData[focusedID]);
    getYearData(data.timeData[focusedID]);
    if(preFocusedID)
    {
        procrustes(data.timeData[preFocusedID],data.timeData[focusedID]);
        coordinateOffset(data.timeData[focusedID]);
        coordinateOffset(data.timeData[preFocusedID]);
    }

    findCircleEdges(data.postData[focusedID]);

    getCurves(data.timeData[focusedID]);
//    drawAuthorInfo();
    if(focusedID&&preFocusedID){
        var fID=parseInt(focusedID.split('_')[1]);
        var pID=parseInt(preFocusedID.split('_')[1]);
        if(fID>pID){
            //incremental
//            var chlData=data.postData[preFocusedID];
//            var parData=data.postData[focusedID];
            generateTransitionData(data.timeData[focusedID],data.timeData[preFocusedID]);

        }
        else if(fID<pID){
            //decremental
            generateTransitionData(data.timeData[preFocusedID],data.timeData[focusedID]);

        }
    }

    if(focusedID&&preFocusedID){
        layout(optionNumber,false,false,data.timeData[focusedID]);

    }
    else{
        layout(optionNumber,false,false,data.timeData[focusedID]);

    }

//    yearSlider();
//    clusterSlider();
}
function compareVersions (v1, v2) {
    if (v1 === v2) {
        return 0;
    }

    var v1parts = v1.split('_').map(parseFloat);
    var v2parts = v2.split('_').map(parseFloat);
    var len = Math.min(v1parts.length, v2parts.length);

    for (var i = 0; i < len; i++) {
        if (parseInt(v1parts[i]) > parseInt(v2parts[i])) {
            return 1;
        }

        if (parseInt(v1parts[i]) < parseInt(v2parts[i])) {
            return -1;
        }
    }

    if (v1parts.length > v2parts.length) {
        return 1;
    }
    if (v1parts.length < v2parts.length) {
        return -1;
    }

    return 0;
}
var v1='1_0.8690847534228847';
var v2='0_0.11302401181690515_0.11302401181690623_0.11302401181690616';
var v3='0_0.11302401181690515_0.11302401181690623';
var r1=compareVersions(v1,v2);
var r2=compareVersions(v2,v3);
var r3=compareVersions(v2,v2);
console.log(r1)
console.log(r2)
console.log(r3)
function ifPointInCircle(point,circle){
    var x=point.x;
    var y=point.y;
    var cx=circle.x;
    var cy=circle.y;
    var r=circle.r;
    var dis=getDistance({x:x, y:y},{x:cx, y:cy});
    if(dis<=r)return true;
    else return false;
}
function ifPointInRect(point,rect){

}
function lawOfCosine(p1,p2,p3){
    //get angel at p2
    var a=getDistance(p1,p2);
    var b=getDistance(p2,p3);
    var c=getDistance(p1,p3);
    return (a*a+b*b-c*c)/(2*a*b);
}
function getDistance(p1,p2){
    var dx=p1.x-p2.x;
    var dy=p1.y-p2.y;
    return Math.sqrt(dx*dx+dy*dy);
}
function ratioPoint(p1,p2,ratio){
    var p3={};
    p3.x = p1.x*ratio+p2.x*(1-ratio);
    p3.y = p1.y*ratio+p2.y*(1-ratio);
    return p3;
}
function mergeRect(bounds1,bounds2){
    var minX1=bounds1.x;
    var minY1=bounds1.y;
    var maxX1=bounds1.x+bounds1.width;
    var maxY1=bounds1.y+bounds1.height;
    var minX2=bounds2.x;
    var minY2=bounds2.y;
    var maxX2=bounds2.x+bounds1.width;
    var maxY2=bounds2.y+bounds1.height;
    var minX=d3.min([minX1,minX2]);
    var minY=d3.min([minY1,minY2]);
    var maxX=d3.max([maxX1,maxX2]);
    var maxY=d3.min([maxY1,maxY2]);
    return {
        x:minX,
        y:minY,
        width:maxX-minX,
        height:maxY-minY
    }
}
function vector3d(x,y,z){
    return {x:x, y:y, z:z};
}
function vector3dCross(vec1,vec2){
    var x=vec1.y*vec2.z-vec1.z*vec2.y;
    var y=vec2.x*vec1.z-vec2.z*vec1.x;
    var z=vec1.x*vec2.y-vec1.y*vec2.x;
    return {x:x, y:y, z:z};
}

function vector(p1,p2){
    return [p1, p2];
}
function getNormalized(vec){
    var disX=vec[1].x-vec[0].x;
    var disY=vec[1].y-vec[0].y;
    var dist=Math.sqrt(disX*disX+disY*disY);
    disX/=dist;
    disY/=dist;
    return {x:disX,y:disY};
}
function absAngleBetween(vector1,vector2){
    var angleBetw=angleBetween(vector1,vector2);
    var vector1Norm=getNormalized(vector1);
    var vector2Norm=getNormalized(vector2);
    var dot=-vector1Norm.y*vector2Norm.x+vector1Norm.x*vector2Norm.y;
    if(dot>=0){
        return angleBetw
    }
    else{
        return 2*Math.PI-angleBetw;
    }
}
function angleBetween(vector1,vector2){
    var dotValue=dotProduct(vector1,vector2);
    if(dotValue>=1){
        dotValue=1;
    }
    else if(dotValue<=-1){
        dotValue=-1;
    }
    return Math.acos(dotValue);
}
function dotProduct(vector1,vector2){
    var vector1Norm=getNormalized(vector1);
    var vector2Norm=getNormalized(vector2);
    return vector1Norm.x*vector2Norm.x+vector1Norm.y*vector2Norm.y;
}
function get2PointFun(p1,p2){
    var x1=p1.x;
    var y1=p1.y;
    var x2=p2.x;
    var y2=p2.y;
    if(x1!=x2){
        var k=(y2-y1)/(x2-x1);
        var b=y1-k*x1;
//    return function(x){return k*x+b;}
        return {k:k, b:b,vertical:false}
    }
    else{
        return {x:x1, vertical:true}
    }

}
function getPointSlopeFun(p,k){
    var x0=p.x;
    var y0=p.y;
    var b=y0-k*x0;
    return {k:k, b:b, vertical:false}
}
function getPointToLineCrossPoint(p1,p2,p3){
    //球一点到两点线段垂点的坐标
    var x1=p1.x;
    var x2=p2.x;
    var x3=p3.x;
    var y1=p1.y;
    var y2=p2.y;
    var y3=p3.y;
    var line1=get2PointFun(p1, p2);
    if(line1.vertical){
        return {x:x1,y:y3};
    }
    else{
        var k1=line1.k;
        var b1=line1.b;
        if(k1!=0){
            var k2=-1/k1;
            var line2=getPointSlopeFun(p3, k2);
            var b2=line2.b;
            var x=(b2-b1)/(k1-k2);
            var y=k1*x+b1;
            return {x:x, y:y};
        }
        else{
            return {x:x3, y:y1};
        }
    }
}
function twoPointIntSquareDistance(p1,p2){
    var x1=parseInt(p1.x);
    var y1=parseInt(p1.y);
    var x2=parseInt(p2.x);
    var y2=parseInt(p2.y);
    return Math.sqrt(x1-x2)*(x1-x2)+(y1-y2)*(y1-y2);
}
function isPointInLine(point,line){
    var p1=line.p1;
    var p2=line.p2;
    var maxX=parseInt(d3.max([p1.x, p2.x]));
    var maxY=parseInt(d3.max([p1.y, p2.y]));
    var minX=parseInt(d3.min([p1.x, p2.x]));
    var minY=parseInt(d3.min([p1.y, p2.y]));
    var x=parseInt(point.x);
    var y=parseInt(point.y);
//    var ptop1=twoPointIntSquareDistance(point, p1);
//    var ptop2=twoPointIntSquareDistance(point, p2);
//    var p1top2=twoPointIntSquareDistance(p1, p2);
//    if((ptop1+ptop2)==p1top2){
    if((x>=minX&&x<=maxX)&&(y>=minY&&y<=maxY)){
        return true;
    }
    else return false;

}
function get2LineCrossPoint(l1,l2){
    var p1=l1.p1;
    var p2=l1.p2;
    var p3=l2.p1;
    var p4=l2.p2;

    var y1=get2PointFun(p1, p2);
    var y2=get2PointFun(p3, p4);
    if(!y1.vertical&&!y2.vertical){
        var k1=y1.k;
        var b1=y1.b;
        var k2=y2.k;
        var b2=y2.b;
        var x=(b2-b1)/(k1-k2);
        var y=k1*x+b1;
        var point={x:x, y:y};
        var isPointInLine1=isPointInLine(point, l1);
        var isPointInLine2=isPointInLine(point, l2);
        return {point:point, isPointInLine1:isPointInLine1,isPointInLine2:isPointInLine2};
    }

    else if(y1.vertical&&!y2.vertical){
        var x=y1.x;
        var k=y2.k;
        var b=y2.b;
        var y=k*x+b;
        var point={x:x, y:y};
        var isPointInLine1=isPointInLine(point, l1);
        var isPointInLine2=isPointInLine(point, l2);
        return {point:point, isPointInLine1:isPointInLine1,isPointInLine2:isPointInLine2};
    }
    else if(!y1.vertical&&y2.vertical){
        var x=y2.x;
        var k=y1.k;
        var b=y1.b;
        var y=k*x+b;
        var point={x:x, y:y};
        var isPointInLine1=isPointInLine(point, l1);
        var isPointInLine2=isPointInLine(point, l2);
        return {point:point, isPointInLine1:isPointInLine1,isPointInLine2:isPointInLine2};
    }
    else {
        return false;
    }



}
function getRectangleLineCrossPoint(bounds,line){
    var x=bounds.x;
    var y=bounds.y;
    var width=bounds.width;
    var height=bounds.height;
    var p1={x:x, y:y};
    var p2={x:x+width, y:y};
    var p3={x:x+width, y:y+height};
    var p4={x:x, y:y+height};
    var line1={p1:p1, p2:p4};
    var line2={p1:p3, p2:p4};
    var line3={p1:p1, p2:p2};
    var line4={p1:p2, p2:p3};
    var lines=[line1, line2, line3, line4];
    for(var i=0;i<lines.length;i++){
        var crossPoint=get2LineCrossPoint(line,lines[i]);
        if(crossPoint.isPointInLine1&&crossPoint.isPointInLine2){
            return crossPoint.point;
        }
    }
}

function moveCircleEdge(e1,e2){
    var p1=e1.p1;
    var p2=e1.p2;
    var p3=e2.p1;
    var p4=e2.p2;
    var pi=Math.PI;
    var degree;
    var d=5;
    if(p1.x==p2.x)degree=pi/2;
    else {
        var k=(p1.y-p2.y)/(p1.x-p2.x);
        degree=Math.atan(k);
    }
    var dx=d*Math.sin(degree);
    var dy=d*Math.cos(degree);
    moveToLeft(p1, p2, dx, dy);
    moveToRight(p3, p4, dx, dy);
    function moveToLeft(p1,p2,dx,dy){
        p1.x-=dx;
        p1.y+=dy;
        p2.x-=dx;
        p2.y+=dy;
    }
    function moveToRight(p3,p4,dx,dy){
        p3.x+=dx;
        p3.y-=dy;
        p4.x+=dx;
        p4.y-=dy;

    }
    e1.dx=dx;
    e1.dy=-dy;
    e2.dx=-dx;
    e2.dy=dy;
    return {e1:e1,e2:e2};
}
//import {server,port,errorPort} from '../setting/server';
//import {layoutPapers} from '../searchInteraction/layout';
//import {ajax} from '../processData/request';
function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
var px='px';
var usefulWidth= window.innerWidth
    ||document.body.clientWidth
    || document.documentElement.clientWidth;
var usefulHeight = document.body.clientHeight
    || document.documentElement.clientHeight
    || window.innerHeight;
initServer();
var body=d3.select('body');
var bodyDiv=body.append('div').attr('class','bodyDiv')
    //            .attrs({
    //                onkeydown:'keyboardEvent(event.keyCode||event.which);'
    //            })
    .styles({
//                'border':'1px solid rgb(50,70,90)',
        width:usefulWidth+px,
        height:usefulHeight+px
    });
body.append('span').attr('id','ruler').attr('class','ruler');

var paperTitle=getUrlParam('title');
var paperID=getUrlParam('id');
var source=getUrlParam('source');
var action=getUrlParam('action');
//    var text='Paper List of '+venue;
var texts;
if(action=='s')texts=['Papers Directly Influenced by: ',paperTitle];
else if(action=='all')texts=['Papers Directly and Indirectly Influenced by: ',paperTitle];
else texts=['Citing List of: ',paperTitle];
var titleData={
    class:'title',
    texts:texts,
    size:'30',
    family:'Arial',
    top:'100',
    color:'white'
};

//    titleData['left']=(usefulWidth-titleData.text.visualLength(titleData.family,titleData.size))/2
titleData['left']=200;
console.log(titleData);
bodyDiv.append('div')
    .datum(titleData)
    .each(function(d){
        d3.select(this)
            .attrs({
                class: d.class+'Div'
            })
            .styles({
                'margin-left': d.left+px,
                'margin-top': d.top+px
            });
        d3.select(this)
            .append('text')
            .attrs({
                class: d.class+'Text'
            })
            .styles({
                'font-size': d.size+px,
                'font-family': d.family,
                'color': d.color
            })
            .html(d.texts[0]);
        d3.select(this)
            .append('text')
            .attrs({
                class: d.class+'Text'
            })
            .styles({
                'font-size': d.size+px,
                'font-family': d.family,
                'color': d.color
            })
            .html(d.texts[1])
            .on('click',function(d){
                var url='graph.html?';
                var source='aminerV8';
                url+=source+'_id='+ d.id+'&';
                url+='selected='+source;
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            })
    });
var url='http://'+server+':'+port+'/influencedPapers';
//    var url='http://'+'127.0.0.1'+':'+3000+'/searchPapers';
var paperListDiv=bodyDiv.append('div')
    .attrs({
        'class':'paperListDiv'
    })
    .styles({
        'margin-left':titleData.left+px,

        'width':'70%',
        'height':'auto'
    });
var success=function(data){
    var list=data;
    list=list.sort(function(a,b){return b.citation- a.citation});
    console.log(list);
    paperListDiv.selectAll('whatever')
        .data(list)
        .enter()
        .append('div')
        .styles({
            'margin-top':'15px'
        })
        .each(layoutPapers);

};
var data={id:paperID,source:source,action:action};
ajax(url,success,data);
initLayout();


function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
//    var r=getUrlParam('r');
//    if(!r)window.location='index.html?r='+Math.floor(Math.random()*1000000000+1);
function Submit(e)
{
    if(e ==13)
    {
        jump();
    }
}
function jump(){
    window.location='result.html?searchname='+$('input[name="Text"]').val()+'&r='+Math.floor(Math.random()*1000000000+1);
}
var px='px';
var usefulWidth= window.innerWidth
    ||document.body.clientWidth
    || document.documentElement.clientWidth;
var usefulHeight = document.body.clientHeight
    || document.documentElement.clientHeight
    || window.innerHeight;
initServer();
//var scrollLength=18;
//usefulWidth-=scrollLength;
//console.log(usefulHeight);
var body=d3.select('body');
var bodyDiv=body.append('div').attr('class','bodyDiv')
    //        .attrs({
    //            onkeydown:'keyboardEvent(event.keyCode||event.which);'
    //        })
    .styles({
        'border':'1px solid rgb(50,70,90)',
        width:usefulWidth+px,
        height:usefulHeight+px
    });
body.append('span').attr('id','ruler').attr('class','ruler');

var fontSize=50;
var fontFamily='Arial';
var fontWeight='bold';
var text='E I F F E L';
d3.select('.ruler').styles({
    'font-weight':fontWeight
});
var textWidth=text.visualLength(fontFamily,fontSize);
var textHeight=text.visualHeight(fontFamily,fontSize);
var textMarginInput=usefulHeight*0.03;
var inputWidth=570;
var inputHeight=40;
var buttonWidth=60;
var buttonHeight=40;
var formWidth=634;
var formHeight=inputHeight;

var indexNameDiv=bodyDiv.append('div').attr('class','indexNameDiv')
    .styles({
        'width':textWidth+px,
        'height':textHeight+px,
        'border':'0px solid #000000',
        'margin-left':(usefulWidth-textWidth)/2+px,
        'margin-top':(usefulHeight-40)/2-textMarginInput-textHeight-18+px
//            'margin-top':'100px'
    })
    .append('text').attr('class','indexName')
    .html(text)
    .styles({
        'font-size':fontSize+px,
        'font-family':fontFamily,
        'font-weight':fontWeight,
        'color':'white'
    });
//var indexMainDiv=bodyDiv.append('div').attr('class','indexMain');
//console.log((usefulHeight-inputHeight)/2-textHeight-textMarginInput);
var form=bodyDiv.append('div').attr('class','inputForm').attr('autocomplete','on')
    .styles({
        'width':formWidth+px,
        'height':formHeight+px,
        'margin-left':(usefulWidth-formWidth)/2+px,
        'margin-top':textMarginInput+px
    });

var input=form.append('div').attr('class','inputDiv')
    .styles({
        width:inputWidth+px,
        height:inputHeight+px,
        background:'white'
    })
    .append('input')
    .attrs({
        class:'indexInputBox',
        type:'text',
//            onkeydown:'keyboardEvent(event.keyCode||event.which);',
        id:'echoText',
        name:'Text',
        autocomplete:'on'
    })
    .on('keydown',function(d){
        if(event.keyCode==13)jump();
//            console.log(event)
    })
    .styles({
        border:0+px,
        padding:10+px,
        width:(inputWidth-20)+px,
        height:(inputHeight-20)+px
    });
var button=form.append('div').attr('class','inputButton').append('input')
    .attrs({
//            src:'image/search.png',
        type:'submit',
        class:'indexSubmitButton',
        id:'indexSubmitBtn',
        name:'submitBtn',
        onclick:"jump()",
        target:"view_window",
        value:''
    })
    .styles({
        border:0+px,
        padding:0+px,
        'background':'url(image/search.png)',
        'width':buttonWidth+px,
        'height':buttonHeight+px
//            'margin-top':'100px'
    });
//    var paperTypeHeight=
var paperTypeDiv=bodyDiv.append('div')
    .attrs({
        class:'paperTypeDiv'
    })
    .styles({
        'width':formWidth*2+px,
        'height':formHeight+px,
        'margin-left':(usefulWidth-formWidth*2)/2+px,
        'margin-top':textMarginInput+px
    });
var paperField=[{text:'Visualization',field:'vis'}];
var textFont=18;
var textFontFamily='Arial';
paperTypeDiv.selectAll('whatever')
    .data(paperField)
    .enter()
    .append('div')
    .attr('class','visualization')
    .styles({
        cursor:'pointer',
        'margin-left':function(d){return (formWidth*2- 'Visualization Venues: TVCG, CGF, IEEE VIS, CG&A, InfoVis, ...'.visualLength(textFontFamily,textFont))/2+px;}
    })
    .append('text')
    .styles({
        float:'left',
        color:'white',
        'font-size':textFont+px,
        'font-family':textFontFamily
    })
    .on('click',function(d){
        window.open('venuelist.html?field='+d.field)
    })
    .html(function(d){return d.text+' Venues:&nbsp;'});
var venueList=[
    {text:'TVCG',venue:'IEEE Transactions on Visualization and Computer Graphics',id:1},
    {text:'CG&A',venue:'Computer Graphics and Applications',id:17},
    {text:'IEEE VIS',venue:'IEEE VIS',id:9},
    {text:'VAST',venue:'Visual Analytics Science and Technology',id:0},
    {text:'InfoVis',venue:'InfoVis',id:11}
];
var moreVenueList=[
    {text:'CG&A',venue:'CG&A'},
    {text:'InfoVis',venue:'InfoVis'},
    {text:'IEEE Visualization',venue:'IEEE Visualization'},
    {text:'VAST',venue:'Visual Analytics Science and Technology'},
];
paperTypeDiv.selectAll('whatever')
    .data(venueList)
    .enter()
    .append('div')
    .styles({
        cursor:'pointer',
//                'margin-left':function(d){return (formWidth- d.text.visualLength(textFontFamily,10))/2+px;}

    })
    .each(function(d,i){
        d3.select(this).append('text')
            .styles({
                float:'left',
                color:'white',
                'font-size':18+px,
                'font-family':textFontFamily
            })
            .on('click',function(d){
                window.open('venuepapers.html?venue='+d.venue+'&id='+d.id)
            })
            .html(function(d){return d.text});
        if(i!=4){
            d3.select(this).append('text')
                .styles({
                    float:'left',
                    color:'white',
                    'font-size':18+px,
                    'font-family':textFontFamily
                })
                .html(',&nbsp;')
        }
        else{
            d3.select(this).append('text')
                .attrs({
                    class:'more'
                })
                .styles({
                    cursor:'pointer',
                    float:'left',
                    color:'white',
                    'font-size':18+px,
                    'font-family':textFontFamily
                })
                .html(', ...')
                .on('click',function(){
                    window.open('venuelist.html?field=vis');
                })
        }

    });


function jump(){
    var inputText=$('input[name="Text"]').val();
    inputText = inputText.replace(/[\-|\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
    inputText=inputText.toLowerCase();
    window.location="result.html?searchname="+inputText;
}
function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
function init(){
    px='px';
    var usefulWidth= window.innerWidth
        ||document.body.clientWidth
        || document.documentElement.clientWidth;
    var usefulHeight = document.body.clientHeight
        || document.documentElement.clientHeight
        || window.innerHeight;
    var body=d3.select('body');
    var bodyDiv=body.append('div').attr('class','bodyDiv')
        .styles({
            'border':'1px solid rgb(50,70,90)',
            width:usefulWidth+px,
            height:usefulHeight+px
        });
    body.append('span').attr('id','ruler').attr('class','ruler');
    initServer();
    var fontSize=50;
    var fontFamily='Arial';
    var fontWeight='bold';
    var text='E I F F E L';
    d3.select('.ruler').styles({
        'font-weight':fontWeight
    });
    var textWidth=text.visualLength(fontFamily,fontSize);
    var textHeight=text.visualHeight(fontFamily,fontSize);
    var textMarginInput=usefulHeight*0.03;
    var inputWidth=570;
    var inputHeight=40;
    var buttonWidth=60;
    var buttonHeight=40;
    var formWidth=634;
    var formHeight=inputHeight;
    var indexNameDiv=bodyDiv.append('div').attr('class','indexNameDiv')
        .styles({
            'width':textWidth+px,
            'height':textHeight+px,
            'border':'0px solid #000000',
            'margin-left':(usefulWidth-textWidth)/2+px,
            'margin-top':50+px
//            'margin-top':'100px'
        })
        .append('text').attr('class','indexName')
        .html(text)
        .styles({
            'font-size':fontSize+px,
            'font-family':fontFamily,
            'font-weight':fontWeight,
            'color':'white'
        });
    var form=bodyDiv.append('div').attr('class','inputForm').attr('autocomplete','on')
        .styles({
            'width':formWidth+px,
            'height':formHeight+px,
            'margin-left':(usefulWidth-formWidth)/2+px,
            'margin-top':textMarginInput+px
        });

    var input=form.append('div').attr('class','inputDiv')
        .styles({
            width:inputWidth+px,
            height:inputHeight+px,
            background:'white'
        })
        .append('input')
        .attrs({
            class:'indexInputBox',
            type:'text',
//                    onkeydown:'keyboardEvent(event.keyCode||event.which);',
            id:'echoText',
            name:'Text'
//                    AUTOCOMPLETE:'on'
        })
        .styles({
            border:0+px,
            padding:10+px,
            width:(inputWidth-20)+px,
            height:(inputHeight-20)+px
        })
        .on('keydown',function(d){
            if(event.keyCode==13)jump();
//            console.log(event)
        });
    var button=form.append('div').attr('class','inputButton').append('input')
        .attrs({
//            src:'image/search.png',
            type:'submit',
            class:'indexSubmitButton',
            id:'indexSubmitBtn',
            name:'submitBtn',
            onclick:"jump()",
            target:"view_window",
            value:''
        })
        .styles({
            border:0+px,
            padding:0+px,
            'background':'url(image/search.png)',
            'width':buttonWidth+px,
            'height':buttonHeight+px
//            'margin-top':'100px'
        });
    var searchName=getUrlParam('searchname');
    var input=$('input[name="Text"]');
    input.val(searchName);
    if(searchName!=''){
        var url='http://'+server+':'+port+'/searchWords/';
//            var url='http://'+'127.0.0.1'+':'+3000+'/searchWords';
        var success=function(d){
            console.log(d);
//
            pageLayout(d.list);
        };
        var searchData={searchStr:searchName,source:'aminerV8'};
        console.log(searchName);
        console.log(searchData);
        ajax(url,success,searchData);
    }
    function pageLayout(list){
        var paperList=list;
        list.forEach(function(paper,i){
            if(paper.id==1182989){
                var t=list[0];
                list[0]=list[i];
                list[i]=list[0];
            }
        });
        var paperListDiv=bodyDiv.append('div')
            .attrs({
                class:'paperListDiv'
            })
            .styles({
                height:'auto',
                width:'50%',
                'margin-top':20+px,
                'margin-left':(usefulWidth-formWidth)/2+px
            });
        paperListDiv.selectAll('whatever')
            .data(paperList)
            .enter()
            .append('div')
            .styles({
                'margin-top':'15px'
            })
            .each(layoutPapers);
    }

}
function paperClick(d){
    d3.select(this)
        .style('color','red')
    var id= d.id;
    var link='graph.html?aminerV8_id='+ id+'&selected=aminerV8'+'&r='+Math.floor(Math.random()*1000000000+1);
    window.open(link);
}
init();
//import {server,port,errorPort} from '../setting/server';
//import {layoutPapers} from '../searchInteraction/layout';
//import {ajax} from '../processData/request';
function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
var px='px';
var usefulWidth= window.innerWidth
    ||document.body.clientWidth
    || document.documentElement.clientWidth;
var usefulHeight = document.body.clientHeight
    || document.documentElement.clientHeight
    || window.innerHeight;

var body=d3.select('body');
var bodyDiv=body.append('div').attr('class','bodyDiv')
    //            .attrs({
    //                onkeydown:'keyboardEvent(event.keyCode||event.which);'
    //            })
    .styles({
//                'border':'1px solid rgb(50,70,90)',
        width:usefulWidth+px,
        height:usefulHeight+px
    });
body.append('span').attr('id','ruler').attr('class','ruler');

var field=getUrlParam('field');
var text='the Venue List of '+field;
var titleData={
    class:'title',
    text:text,
    size:'30',
    family:'Arial',
    top:'100',
    color:'white'
};
initServer();
titleData['left']=(usefulWidth-titleData.text.visualLength(titleData.family,titleData.size))/2
console.log(titleData)
bodyDiv.append('div')
    .datum(titleData)
    .each(function(d){
        d3.select(this)
            .attrs({
                class: d.class+'Div'
            })
            .styles({
                'margin-left': d.left+px,
                'margin-top': d.top+px
            })
            .append('text')
            .attrs({
                class: d.class+'Text'
            })
            .styles({
                'font-size': d.size+px,
                'font-family': d.family,
                'color': d.color
            })
            .html(d.text)
    });

var url='http://'+server+':'+port+'/venueList/';
var venueListDiv=bodyDiv.append('div')
    .attrs({
        'class':'venueListDiv'
    })
    .styles({
        'width':usefulWidth+px,
        'height':'auto'
    });
var success=function(data){
    var list=data;
    list=list.sort(function(a,b){return b.count- a.count});
    console.log(list);
    var size='16';
    var family='Arial';
    var color='white';
    venueListDiv.selectAll('whatever')
        .data(list)
        .enter()
        .append('div')
        .style('cursor','pointer')
        .each(function(d){
            var totalText= d.venue;
//                var totalText= d.venue+'( ';
//                for(var i=0;i< 2;i++){
//                    totalText+= d.source[i].source+':'+ d.source[i].count+' ';
//                }
//                totalText+=')';
            console.log(totalText)
            d3.select(this)
                .styles({
                    'margin-left': (usefulWidth- totalText.visualLength(family,size))/2+px,
                    'margin-top': 20+px
                })
                .append('text')
                .styles({
                    'font-size':size+px,
                    'font-family':family,
                    'color':color
                })
                .on('click',function(d){
                    window.open('venuepapers.html?venue='+ d.venue+'&id='+ d.id+'&r='+Math.floor(Math.random()*1000000000+1))
                })
                //                    .html(d.venue+'(#'+ d.count+')')
                .html(totalText);
//                for (var source in d.source){
//                    console.log(source);
//                    d3.select(this)
//                            .selectAll('whatever')
//                            .data(d.source)
//                            .enter()
//                        .append('text')
//                        .styles({
//                            'font-size':size+px,
//                            'font-family':family,
//                            'color':color
//                        })
//                        .on('click',function(e){
//                            window.open('venuepapers.html?venue='+ d.venue+'&source='+ e.source)
//                        })
//                        .html(function(e){
//                            return e.source+':'+ e.count+' ';
//                        });
////                }
//                d3.select(this)
//                    .append('text')
//                    .styles({
//                        'font-size':size+px,
//                        'font-family':family,
//                        'color':color
//                    })
//                    .html(')')

        })

};
var data={field:field,source:'aminerV8'};
ajax(url,success,data);

//import {server,port,errorPort} from '../setting/server';
//import {layoutPapers} from '../searchInteraction/layout';
//import {ajax} from '../processData/request';
function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}
var px='px';
var usefulWidth= window.innerWidth
    ||document.body.clientWidth
    || document.documentElement.clientWidth;
var usefulHeight = document.body.clientHeight
    || document.documentElement.clientHeight
    || window.innerHeight;
var body=d3.select('body');
var bodyDiv=body.append('div').attr('class','bodyDiv')
    .styles({
        width:usefulWidth+px,
        height:usefulHeight+px
    });
body.append('span').attr('id','ruler').attr('class','ruler');
var venue=getUrlParam('venue');
var venueID=getUrlParam('id');
var text='Paper List of '+venue;
initServer();
var titleData={
    class:'title',
    text:text,
    size:'30',
    family:'Arial',
    top:'100',
    color:'white'
};
titleData['left']=200
console.log(titleData)
bodyDiv.append('div')
    .datum(titleData)
    .each(function(d){
        d3.select(this)
            .attrs({
                class: d.class+'Div'
            })
            .styles({
                'margin-left': d.left+px,
                'margin-top': d.top+px
            })
            .append('text')
            .attrs({
                class: d.class+'Text'
            })
            .styles({
                'font-size': d.size+px,
                'font-family': d.family,
                'color': d.color
            })
            .html(d.text)
    });
var url='http://'+server+':'+port+'/searchPapers/';
var paperListDiv=bodyDiv.append('div')
    .attrs({
        'class':'paperListDiv'
    })
    .styles({
        'margin-left':titleData.left+px,

        'width':'70%',
        'height':'auto'
    });
var success=function(data){
    var list=data;
    list=list.sort(function(a,b){return b.citation- a.citation});
    console.log(list);
    paperListDiv.selectAll('whatever')
        .data(list)
        .enter()
        .append('div')
        .styles({
            'margin-top':'15px'
        })
        .each(layoutPapers);
};
var data={venueID:venueID,source:'aminerV8'};
ajax(url,success,data);

//DirectedGraph.prototype.calculateFlowMap=calculateFlowMap;
function calculateFlowMap(d, relayout) {
    var sizeScale = this.sizeScale;
    var directedGraph = this.directedGraph;
    var method = this.method;
    var edgeDuration = this.edgeDuration;
    var nodes = d.node;
    var edges = d.edge;
    var otherEdges = d.otherEdge;
    var treeEdges = d.deletedTreeEdges;
    var nonTreeEdges = d.deletedNonTreeEdges;
    var that = this;
    getNodeRelation(nodes, edges);
    var edgeDic = getEdgeSourceTargetDic(edges);
    //find root
    var root;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].focused == 'true')root = nodes[i];
    }
    //change jigsaw 210 cluster 106 cluster position
    root.y = this.svg.attr('height').toFloat() / 2;

    if(getUrlParam('aminerV8_id') == 1182989 && leftLayer.clusterCount == '20') {
        var tmp = {x: nodes[13].x, y: nodes[13].y};
        nodes[13].x = nodes[19].x;
        nodes[13].y = nodes[19].y;
        nodes[19].x = tmp.x;
        nodes[19].y = tmp.y;
    }
    //change twitter
    function changePosition(n1, n2) {
        var tmp = {x: n1.x, y: n1.y};
        n1.x = n2.x;
        n1.y = n2.y;
        n2.x = tmp.x;
        n2.y = tmp.y;
    }
    if(getUrlParam('twitter') == 20 && leftLayer.clusterCount == '20') {
        changePosition(nodes[11], nodes[16]);
        changePosition(nodes[4], nodes[15]);
        changePosition(nodes[1], nodes[17]);
        changePosition(nodes[11], nodes[1]);
        nodes[13].y = this.svg.attr('height').toFloat() / 2-20;
        nodes[4].y += 20;
        root.y = nodes[11].y;
    }

    var cluster = {};
    generateCluster(root, cluster);
    generateNodes(cluster);
    getClusterBoundAndCenter(cluster);
    var subClusters = cluster.subClusters;
    for (var i = 0; i < subClusters.length; i++) {
        generateAssistNode(root, subClusters[i]);
    }
    cluster.isRoot = true;
    cluster.x = cluster.oriX;
    cluster.y = cluster.oriY;
    if (relayout) {
        useCurrentNodePosition(cluster)
    }
    generateBezierNode(cluster);
    updateNodes(cluster);
    recoverTreeEdges(d);

    var flowScale = getEdgeScale(edges, 'flow');
    var citationScale = getEdgeScale(edges, 'citation');
    var uniformScale = getEdgeScale(edges, 'uniform');
    edges.forEach(function (edge) {
        edge.flowStrokeWidth = flowScale(edge.flow);
        edge.citationStrokeWidth = citationScale(edge.citation);
        edge.uniformStrokeWidth = uniformScale();
    });
    var originEdges = [];
    var recoveredEdges = [];
    edges.forEach(function (edge) {
        if (!edge.recovered) {
            originEdges.push(edge);
        }
        else {
            recoveredEdges.push(edge);
        }
        edge.isForegroundEdge=true;
    });
    var foregroundSourceEdges=[];
    clone(edges,foregroundSourceEdges);

    var allEdgesSourceDic = getEdgeSourceDic(edges);

    var foregroundEdgesDic = getEdgeSourceTargetDic(edges);
    var backgroundEdges = [];
    clone(originEdges, backgroundEdges);
    backgroundEdges.forEach(function (edge) {
        var source=edge.source;
        var target=edge.target;
        edge.sourceFatherNode=source;
        edge.targetFatherNode=target;
        edge.isBackgroundEdge = true;
        edge.isForegroundEdge=false;
    });

    var originEdgeDic = getEdgeSourceTargetDic(originEdges);
    var backgroundEdgesDic = getEdgeSourceTargetDic(backgroundEdges);
    recoveredEdges.forEach(function (edge) {
        for (var i = 0; i < edge.routerClusters.length - 1; i++) {
            var source = edge.routerClusters[i];
            var target = edge.routerClusters[i + 1];
            var key = source + '_' + target;

            for(var year in edge.weight){
                if(!(year in backgroundEdgesDic[key + '_background'].weight)){
                    backgroundEdgesDic[key + '_background'].weight[year]=0;
                }
                backgroundEdgesDic[key + '_background'].weight[year]+=edge.weight[year];
            }

            backgroundEdgesDic[key + '_background'][edgeThickNessOption] += edge[edgeThickNessOption];
            //originEdgeDic[key + '_background'].flowStrokeWidth += edge.flowStrokeWidth;

        }
    });

    var k = 1;
    var originEdgeSourceTargetDic = getEdgeSourceTargetDic(originEdges);

    //generateNodeLevelWeight(cluster);

    generateMaxWeightEdge(cluster);
    computeNodeMidTarget(nodes);
    var pathSet = d3.set();
    //sortRecoveredEdges(recoveredEdges);

    generateFlowMapEdges(backgroundEdges);
    generateForegroundTargetEdges(edges, originEdges);
    generateForegroundSourceEdges(foregroundSourceEdges);

    findForegroundEdgesPath(edges);
    findForegroundEdgesPath(foregroundSourceEdges);

    //if (method != 'mst') {
    recoverNonTreeEdges(d);
    //}
    d.edge = backgroundEdges.concat(edges).concat(foregroundSourceEdges);

    setDelay(cluster);
    setEdgeDuration(edges);
    function sortRecoveredEdges(edges) {
        var treeLevelDic = {};
        nodes.forEach(function (node) {
            treeLevelDic[node.id] = node.treeLevel;
        });
        edges.forEach(function (edge) {
            edge.treeLevelList = [];
            edge.routerClusters.forEach(function (nodeId) {
                edge.treeLevelList.push(treeLevelDic[nodeId]);
            });
        });
        //edges.sort(function (a, b) {
        //    return d3.ascending(a.treeLevelList[2], b.treeLevelList[2]);
        //})
        //edges.sort(function (a, b) {
        //    return d3.ascending(a.treeLevelList[1], b.treeLevelList[1]);
        //})
        edges.sort(function (a, b) {
            return d3.ascending(a.treeLevelList[0], b.treeLevelList[0]);
        });
        edges.sort(function (a, b) {
            return d3.descending(a.treeLevelList.length, b.treeLevelList.length);
        });
    }

    function generateNodeLevelWeight(cluster) {
        var level = 0;
        var currentClusters = [cluster];
        while (currentClusters.length > 0) {
            var newClusters = [];
            currentClusters.forEach(function (clus) {
                if (clus.subClusters) {
                    newClusters = newClusters.concat(clus.subClusters);
                }
                nodes[clus.originNodeID].treeLevel = level;
            });
            level += 1;
            currentClusters = newClusters;
        }

    }

    function generateMaxWeightEdge(cluster) {
        if (cluster.subClusters) {
            var maxWeight = 0;
            var maxIndex = 0;
            for (var i = 0; i < cluster.subClusters.length; i++) {
                if (cluster.subClusters[i].weight > maxWeight) {
                    maxWeight = cluster.subClusters[i].weight;
                    maxIndex = i;
                }
            }
            var maxCluster = cluster.subClusters[maxIndex];
            var source = cluster.originNodeID;
            var target = maxCluster.originNodeID;
            var key = source + '_' + target;
            if (!(key in originEdgeSourceTargetDic))key += '_background';
            var midTargetEdge = originEdgeSourceTargetDic[key];
            nodes[source].midTargetEdgeIndex = maxIndex;
            nodes[source].midTargetEdge = midTargetEdge;
            midTargetEdge.isMidEdge = true;
            cluster.subClusters.forEach(function (subCluster) {
                generateMaxWeightEdge(subCluster);
            })
        }
    }

    function findForegroundEdgesPath(edges) {
        edges.forEach(function (edge) {
            var pathNodeIds = [];
            edge.pathNodeList.forEach(function (node) {
                pathNodeIds.push('_'+node+'_');
            });
            var regExp = new RegExp(pathNodeIds.join('-'));
            var pathStrings = pathSet.values();
            for (var i = 0; i < pathStrings.length; i++) {
                var res = regExp.exec(pathStrings[i]);
                if (res) {
                    var longNodes = [];
                    var uniquePath=pathStrings[i].split('-');
                    var path=[];
                    uniquePath.forEach(function (p) {
                        path.push(p.split('_')[1]);
                    });
                    path.forEach(function (nodeId) {
                        //longNodes.push(nodes[nodeId]);
                        longNodes.push(nodeId);
                    });
                    edge.longPathNodes = longNodes;
                    break;
                }
            }
        })
    }

    function computeNodeMidTarget(nodes) {
        nodes.forEach(function (node) {
            //node.midTargetEdge = null;
            if (node.midTargetEdge) {
                var edgeKey = node.midTargetEdge.source + '_' + node.midTargetEdge.target + '_background';
                node.topShift += backgroundEdgesDic[edgeKey][edgeThickNessOption] / 2 * k;
                node.bottomShift += backgroundEdgesDic[edgeKey][edgeThickNessOption] / 2 * k;
                var targetNode = nodes[node.midTargetEdge.target];
                if (!(edgeKey in node.edgeShiftDic))node.edgeShiftDic[edgeKey] = {shiftIn: 0, shiftOut: 0, shift: 0};
                if (!(edgeKey in targetNode.edgeShiftDic))targetNode.edgeShiftDic[edgeKey] = {shiftIn: 0, shiftOut: 0};
            }
        })
    }

    function computeShift(source, target, shiftDirection, width, k, f, key) {
        var edgeKey = key;

        var shiftDirectionOut = shiftDirection + 'Out';
        var shiftDirectionIn = shiftDirection + 'In';

        source[shiftDirectionOut] += width * k;
        target[shiftDirectionIn] += width * k;

        //source[shiftDirection] += width * k;
        //target[shiftDirection] += width * k;

        if (!(edgeKey in source.edgeShiftDic))source.edgeShiftDic[edgeKey] = {shiftIn: 0, shiftOut: 0, shift: 0};
        if (!(edgeKey in target.edgeShiftDic))target.edgeShiftDic[edgeKey] = {shiftIn: 0, shiftOut: 0, shift: 0};

        source.edgeShiftDic[edgeKey].shiftOut = f * (source[shiftDirectionOut] + width / 2) * k;
        target.edgeShiftDic[edgeKey].shiftIn = f * (target[shiftDirectionIn] + width / 2) * k;

        //recovery to origin
        source.edgeShiftDic[edgeKey].shiftIn = f * (source[shiftDirectionOut] + width / 2) * k;
        target.edgeShiftDic[edgeKey].shiftOut = f * (target[shiftDirectionIn] + width / 2) * k;

        source.edgeShiftDic[edgeKey].shift = f * (source[shiftDirection] + width / 2) * k;

        source[shiftDirection] = (source[shiftDirection] + width) * k;
        //target.edgeShiftDic[edgeKey].shift = f * (target[shiftDirection] + width / 2) * k;


    }

    function generateForegroundSourceEdges(edges){
        var edgeTargetDic=getEdgeTargetDic(edges);
        edges.forEach(function (edge) {
            edge.isForegroundSourceEdge=true;
        });
        for(var target in edgeTargetDic){
            var sourceEdgesDic=edgeTargetDic[target];
            var sourceEdges=[];
            for(var id in sourceEdgesDic){
                var sourceEdge=sourceEdgesDic[id];
                if(!sourceEdge.recovered){
                    sourceEdge.routerLength=2;
                }
                else{
                    sourceEdge.routerLength=sourceEdge.routerClusters.length;
                }
                sourceEdges.push(sourceEdge);
            }
            sourceEdges.sort(function (a,b) {
                return d3.descending(a.routerLength, b.routerLength);
            });
            var sumStrokeWidth=d3.sum(sourceEdges, function (d) {
                return d[edgeThickNessOption];
            });
            var edgeStrokeWidthDic={};
            sourceEdges.forEach(function (edge) {
                var key;
                if(!edge.recovered){
                    key=edge.source+'_'+edge.target;
                    if(!(key in edgeStrokeWidthDic)){
                        edgeStrokeWidthDic[key]=0;
                    }
                    edgeStrokeWidthDic[key]+=edge[edgeThickNessOption];
                }
                else{
                    for(var i=0;i<edge.routerClusters.length-1;i++){
                        key=edge.routerClusters[i]+'_'+edge.routerClusters[i+1];
                        if(!(key in edgeStrokeWidthDic)){
                            edgeStrokeWidthDic[key]=0;
                        }
                        edgeStrokeWidthDic[key]+=edge[edgeThickNessOption];
                    }
                }
            });
            var edgeStrokeWidthShiftDic={};
            for(var key in edgeStrokeWidthDic){
                var backgroundEdgeShift=nodes[key.split('_')[0]].edgeShiftDic[key+'_background'].shift;
                edgeStrokeWidthShiftDic[key]={source:edgeStrokeWidthDic[key]/2+backgroundEdgeShift,target:edgeStrokeWidthDic[key]/2};
            }
            sourceEdges.forEach(function (edge) {
                edge.nodeShiftDic={};
                edge.fatherNode=target;
                var key;
                if(!edge.recovered){
                    key=edge.source+'_'+edge.target;
                    //edge.pathNodeList=[nodes[edge.source],nodes[edge.target]];
                    edge.pathNodeList=[edge.source,edge.target];
                    edge.pathNodeDic={};
                    //edge.pathNodeDic[edge.source]=nodes[edge.source];
                    //edge.pathNodeDic[edge.target]=nodes[edge.target];
                    edge.pathNodeDic[edge.source]=edge.source;
                    edge.pathNodeDic[edge.target]=edge.target;

                    edge.nodeShiftDic[edge.source]=edgeStrokeWidthShiftDic[key].source-edge[edgeThickNessOption]/2;
                    edge.nodeShiftDic[edge.target]=edgeStrokeWidthShiftDic[key].target-edge[edgeThickNessOption]/2;
                    edgeStrokeWidthShiftDic[key].source-=edge[edgeThickNessOption];
                    edgeStrokeWidthShiftDic[key].target-=edge[edgeThickNessOption];
                }
                else{
                    edge.pathNodeList=[];
                    edge.pathNodeDic={};
                    var len=edge.routerClusters.length;
                    for(var i=0;i<len-1;i++){
                        //edge.pathNodeList.push(nodes[edge.routerClusters[i]]);
                        edge.pathNodeList.push(edge.routerClusters[i]);
                        //edge.pathNodeDic[edge.routerClusters[i]]=nodes[edge.routerClusters[i]];
                        edge.pathNodeDic[edge.routerClusters[i]]=edge.routerClusters[i];
                        key=edge.routerClusters[i]+'_'+edge.routerClusters[i+1];

                        edge.nodeShiftDic[edge.routerClusters[i]]=edgeStrokeWidthShiftDic[key].source-edge[edgeThickNessOption]/2;
                        edge.nodeShiftDic[edge.routerClusters[i+1]]=edgeStrokeWidthShiftDic[key].target-edge[edgeThickNessOption]/2;
                        edgeStrokeWidthShiftDic[key].source-=edge[edgeThickNessOption];
                        edgeStrokeWidthShiftDic[key].target-=edge[edgeThickNessOption];

                    }
                    //edge.pathNodeList.push(nodes[edge.routerClusters[len-1]]);
                    //edge.pathNodeDic[edge.routerClusters[len-1]]=nodes[edge.routerClusters[len-1]];
                    edge.pathNodeList.push(edge.routerClusters[len-1]);
                    edge.pathNodeDic[edge.routerClusters[len-1]]=edge.routerClusters[len-1];
                }
            });
        }
    }

    function generateForegroundTargetEdges(edges, originEdges) {
        var edgeSourceDic = getEdgeSourceDic(edges);
        edges.forEach(function (edge) {
            edge.isForegroundTargetEdge=true;
        })
        var originEdgeSourceDic = getEdgeSourceDic(originEdges);
        var originEdgeTargetDic = getEdgeTargetDic(originEdges);
        //console.log(edgeSourceDic);

        for (var source in edgeSourceDic) {
            var targetEdgesDic = edgeSourceDic[source];
            var shortEdges = [];
            var longEdges = [];
            var subTreeNodeSet = d3.set();
            var midNodesSet = d3.set();
            for (var id in targetEdgesDic) {
                if (!targetEdgesDic[id].recovered) {
                    shortEdges.push(targetEdgesDic[id]);
                    subTreeNodeSet.add(targetEdgesDic[id].source);
                    subTreeNodeSet.add(targetEdgesDic[id].target);
                }
                else {
                    longEdges.push(targetEdgesDic[id]);
                    targetEdgesDic[id].routerClusters.forEach(function (clusterID) {
                        subTreeNodeSet.add(clusterID);
                    })
                }
            }
            var currentNode = nodes[source];
            var i = 0;
            while (currentNode.midTargetEdge && subTreeNodeSet.has(currentNode.id)) {
                midNodesSet.add(currentNode.id);
                currentNode.sortIndex = i;
                i += 1;
                currentNode = nodes[currentNode.midTargetEdge.target];
            }
            if (subTreeNodeSet.has(currentNode.id)) {
                midNodesSet.add(currentNode.id);
                currentNode.sortIndex = i;
            }
            //已经获取到关键路径的排序，下一步是区分topedge bottomedge，并排序

            var topNodesSet = d3.set();
            var bottomNodesSet = d3.set();

            subTreeNodeSet.values().forEach(function (nodeId) {
                if (!midNodesSet.has(nodeId)) {
                    var sourceEdgeDic = originEdgeTargetDic[nodeId];
                    var sourceKey;
                    for (var key in sourceEdgeDic) {
                        sourceKey = key;
                        break;
                    }
                    var sourceNode = nodes[sourceKey];
                    var thisNode = nodes[nodeId];
                    var shiftNode = sourceNode.move(sourceNode, 0, 100);
                    //这个角度可以拿出来在一开始全算一遍。。。懒得改了。。。
                    thisNode.angelToYAxis = lawOfCosine(thisNode, sourceNode, shiftNode);
                    if (thisNode.y <= nodes[sourceNode.midTargetEdge.target].y) {
                        topNodesSet.add(nodeId);
                    }
                    else {
                        bottomNodesSet.add(nodeId);
                    }
                }
            });

            var topEdges = [];
            var midEdges = [];
            var bottomEdges = [];

            shortEdges.forEach(function (edge) {
                if (midNodesSet.has(edge.target)) {
                    edge.routerLength = 2;
                    midEdges.push(edge);
                }
                else if (topNodesSet.has(edge.target)) {
                    edge.sortCodeList = [nodes[edge.source].sortIndex, nodes[edge.target].angelToYAxis];
                    topEdges.push(edge);
                }
                else {
                    edge.sortCodeList = [nodes[edge.source].sortIndex, nodes[edge.target].angelToYAxis];
                    bottomEdges.push(edge);
                }
            });
            longEdges.forEach(function (edge) {
                if (midNodesSet.has(edge.target)) {
                    edge.routerLength = edge.routerClusters.length;
                    midEdges.push(edge);
                }
                else if (topNodesSet.has(edge.target)) {
                    var flag = false;
                    edge.sortCodeList = [];
                    for (var i = 0; i < edge.routerClusters.length - 1; i++) {
                        if (flag) {
                            edge.sortCodeList.push(nodes[edge.routerClusters[i + 1]].angelToYAxis);
                        }
                        if (!flag && midNodesSet.has(edge.routerClusters[i]) && topNodesSet.has(edge.routerClusters[i + 1])) {
                            flag = true;
                            edge.sortCodeList.push(nodes[edge.routerClusters[i]].sortIndex);
                            edge.sortCodeList.push(nodes[edge.routerClusters[i + 1]].angelToYAxis);
                        }

                    }
                    topEdges.push(edge);

                }
                else {
                    var flag = false;
                    edge.sortCodeList = [];
                    for (var i = 0; i < edge.routerClusters.length - 1; i++) {
                        if (flag) {
                            edge.sortCodeList.push(nodes[edge.routerClusters[i + 1]].angelToYAxis);
                        }
                        if (!flag && midNodesSet.has(edge.routerClusters[i]) && bottomNodesSet.has(edge.routerClusters[i + 1])) {
                            flag = true;
                            edge.sortCodeList.push(nodes[edge.routerClusters[i]].sortIndex);
                            edge.sortCodeList.push(nodes[edge.routerClusters[i + 1]].angelToYAxis);
                        }

                    }
                    bottomEdges.push(edge);
                }
            });
            topEdges.sort(function (a, b) {
                return compareVersions(a.sortCodeList.join('_'), b.sortCodeList.join('_'));
            });
            bottomEdges.sort(function (a, b) {
                return compareVersions(a.sortCodeList.join('_'), b.sortCodeList.join('_'));
            });

            midEdges.sort(function (a, b) {
                return d3.descending(a.routerLength, b.routerLength);
            });
            var sortedEdges = [];
            sortedEdges = sortedEdges.concat(topEdges).concat(midEdges).concat(bottomEdges);

            var topTotalStrokeWidth = 0;
            var midTotalStrokeWidth = 0;
            var bottomTotalStrokeWidth = 0;
            var edgeStrokeWidthDic={};
            sortedEdges.forEach(function (edge) {
                var key;
                if(!edge.recovered){
                    key=edge.source+'_'+edge.target;
                    if(!(key in edgeStrokeWidthDic)){
                        edgeStrokeWidthDic[key]=0;
                    }
                    edgeStrokeWidthDic[key]+=edge[edgeThickNessOption];
                }
                else{
                    for(var i=0;i<edge.routerClusters.length-1;i++){
                        key=edge.routerClusters[i]+'_'+edge.routerClusters[i+1];
                        if(!(key in edgeStrokeWidthDic)){
                            edgeStrokeWidthDic[key]=0;
                        }
                        edgeStrokeWidthDic[key]+=edge[edgeThickNessOption];
                    }
                }
            });
            //compute shift
            var edgeStrokeWidthShiftDic={};
            for(var key in edgeStrokeWidthDic){

                var backgroundEdgeShift=nodes[key.split('_')[0]].edgeShiftDic[key+'_background'].shift;
                edgeStrokeWidthShiftDic[key]={source:edgeStrokeWidthDic[key]/2+backgroundEdgeShift,target:edgeStrokeWidthDic[key]/2};
            }
            sortedEdges.forEach(function (edge) {
                edge.fatherNode=source;
                edge.shiftDic={};
                edge.nodeShiftDic={};
                var key;
                if(!edge.recovered){
                    key=edge.source+'_'+edge.target;
                    edge.shiftDic[key]=edgeStrokeWidthShiftDic[key]-edge[edgeThickNessOption]/2;
                    edge.nodeShiftDic[edge.source]=edgeStrokeWidthShiftDic[key].source-edge[edgeThickNessOption]/2;
                    edge.nodeShiftDic[edge.target]=edgeStrokeWidthShiftDic[key].target-edge[edgeThickNessOption]/2;
                    edgeStrokeWidthShiftDic[key].source-=edge[edgeThickNessOption];
                    edgeStrokeWidthShiftDic[key].target-=edge[edgeThickNessOption];
                    //edge.pathNodeList=[nodes[edge.source],nodes[edge.target]];
                    edge.pathNodeList=[edge.source,edge.target];
                    edge.pathNodeDic={};
                    //edge.pathNodeDic[edge.source]=nodes[edge.source];
                    //edge.pathNodeDic[edge.target]=nodes[edge.target];
                    edge.pathNodeDic[edge.source]=edge.source;
                    edge.pathNodeDic[edge.target]=edge.target;
                }
                else{
                    edge.pathNodeList=[];
                    edge.pathNodeDic={};
                    var len=edge.routerClusters.length;
                    for(var i=0;i<len-1;i++){
                        //edge.pathNodeList.push(nodes[edge.routerClusters[i]]);
                        edge.pathNodeList.push(edge.routerClusters[i]);
                        //edge.pathNodeDic[edge.routerClusters[i]]=nodes[edge.routerClusters[i]];
                        edge.pathNodeDic[edge.routerClusters[i]]=edge.routerClusters[i];
                        key=edge.routerClusters[i]+'_'+edge.routerClusters[i+1];
                        edge.shiftDic[key]={source:edgeStrokeWidthShiftDic[key].source-edge[edgeThickNessOption]/2,target:edgeStrokeWidthShiftDic[key].target-edge[edgeThickNessOption]/2};
                        edge.nodeShiftDic[edge.routerClusters[i]]=edgeStrokeWidthShiftDic[key].source-edge[edgeThickNessOption]/2;
                        edge.nodeShiftDic[edge.routerClusters[i+1]]=edgeStrokeWidthShiftDic[key].target-edge[edgeThickNessOption]/2;

                        edgeStrokeWidthShiftDic[key].source-=edge[edgeThickNessOption];
                        edgeStrokeWidthShiftDic[key].target-=edge[edgeThickNessOption];
                    }
                    //edge.pathNodeList.push(nodes[edge.routerClusters[len-1]]);
                    //edge.pathNodeDic[edge.routerClusters[len-1]]=nodes[edge.routerClusters[len-1]];
                    edge.pathNodeList.push(edge.routerClusters[len-1]);
                    edge.pathNodeDic[edge.routerClusters[len-1]]=edge.routerClusters[len-1];
                }
            });


            //shortEdges.sort(function (a,b) {
            //    return d3.ascending(nodes[a.target].y,nodes[b.target].y);
            //})
            //shortEdges.forEach(function (edge) {
            //    console.log(edge.source+'_'+edge.target);
            //})
        }


    }

    function compareVersions(v1, v2) {
        if (v1 === v2) {
            return 0;
        }

        var v1parts = v1.split('_').map(parseFloat);
        var v2parts = v2.split('_').map(parseFloat);
        var len = Math.min(v1parts.length, v2parts.length);

        for (var i = 0; i < len; i++) {
            if (parseInt(v1parts[i]) > parseInt(v2parts[i])) {
                return 1;
            }

            if (parseInt(v1parts[i]) < parseInt(v2parts[i])) {
                return -1;
            }
        }

        if (v1parts.length > v2parts.length) {
            return -1;
        }
        if (v1parts.length < v2parts.length) {
            return 1;
        }

        return 0;
    }

    function generateFlowMapRecoveredEdges(edges) {
        edges.forEach(function (edge) {
            var pathNodeDic = {};
            var pathNodeList = [];
            var lastNode = edge.routerClusters[edge.routerClusters.length - 1];
            var topShiftSum = 0;
            var bottomShiftSum = 0;
            edge.routerClusters.forEach(function (nodeId) {
                topShiftSum += nodes[nodeId].topShiftIn + nodes[nodeId].topShiftOut;
                bottomShiftSum += nodes[nodeId].bottomShiftIn + nodes[nodeId].bottomShiftOut;
            });
            var shiftDirection, f;
            (topShiftSum <= bottomShiftSum) ? shiftDirection = 'topShift' : shiftDirection = 'bottomShift';
            (topShiftSum <= bottomShiftSum) ? f = 1 : f = -1;
            for (var i = 0; i < edge.routerClusters.length - 1; i++) {
                var nodeId = edge.routerClusters[i];
                var nextNodeId = edge.routerClusters[i + 1];
                var node = nodes[nodeId];
                var nextNode = nodes[nextNodeId];
                pathNodeDic[nodeId] = node;
                pathNodeList.push(node);
                var key = edge.routerClusters[0] + '_' + edge.routerClusters[edge.routerClusters.length - 1];
                computeShift(node, nextNode, shiftDirection, edge[edgeThickNessOption], k, f, key);
            }

            pathNodeList.push(nodes[lastNode]);
            pathNodeDic[lastNode] = nodes[lastNode];
            edge.pathNodeDic = pathNodeDic;
            edge.pathNodeList = pathNodeList;
        })
    }

    function generateFlowMapEdges(edges) {
        var keySuffix = '';
        if (edges[0].isBackgroundEdge)keySuffix += '_background';
        var leafNodeSet = getLeafNodes(edges);
        var rootNodeSet = getRootNode(edges);
        var edgeDic = getEdgeSourceTargetDic(edges);
        var paths = findPathsBetween(rootNodeSet.values()[0], leafNodeSet.values(), edges);
        var newEdges = [];
        var newEdgesDic = {};
        var keySet = d3.set();
        paths.forEach(function (path) {
            var newEdge = [];
            for (var i = 0; i < path.length - 1; i++) {
                var n1 = path[i];
                var n2 = path[i + 1];
                var originKey = n1 + '_' + n2;
                var key = originKey + keySuffix;

                keySet.add(key);
                var pathNodeDic = {};
                var pathNodeList = [];
                var uniquePath=[];
                path.forEach(function (p) {
                    uniquePath.push('_'+p+'_');
                })
                pathSet.add(uniquePath.join('-'));
                path.forEach(function (nodeId) {
                    var node = nodes[nodeId];
                    //pathNodeDic[nodeId] = node;
                    pathNodeDic[nodeId] = nodeId;
                    //pathNodeList.push(node);
                    pathNodeList.push(nodeId);
                });
                edgeDic[key].pathNodeDic = pathNodeDic;
                edgeDic[key].pathNodeList = pathNodeList;

                foregroundEdgesDic[originKey].pathNodeDic = pathNodeDic;
                foregroundEdgesDic[originKey].pathNodeList = pathNodeList;

            }
            path.forEach(function (node) {
                var p = nodes[node];
                var p1 = new Point(p.x, p.y);
                newEdge.push(p1);
                if (p.cp1) {
                    var cp = new Point(p.cp1.x, p.cp1.y);
                    newEdge.push(cp);
                    newEdge.push(cp.move(-1, 0));
                }

            });
            newEdges.push(newEdge);
        });
    }

    function TreeNode(id) {
        //this.children=[];
        this.father = null;
        this.id = id;
    }

    function findPathsBetween(source, targets, edges) {
        var edgeSourceDic = getEdgeSourceDic(edges);
        var edgeDic = getEdgeSourceTargetDic(edges);
        var keySuffix = '';
        if (edges[0].isBackgroundEdge)keySuffix += '_background';
        var paths = [];
        var rootNode = new TreeNode(source);
        var currentNodes = [rootNode];
        var treeNodeDic = {};
        treeNodeDic[source] = rootNode;
        while (currentNodes.length > 0) {
            var newCurrentNodes = [];
            currentNodes.forEach(function (node) {
                if (node.id in edgeSourceDic) {
                    var newTargets = edgeSourceDic[node.id];
                    var targetNodes = [];
                    for (var target in newTargets) {
                        var newNode = new TreeNode(target);
                        newNode.father = node;
                        newCurrentNodes.push(newNode);
                        treeNodeDic[target] = newNode;
                        targetNodes.push(nodes[target]);
                    }
                    targetNodes
                        .sort(function (a, b) {
                            return d3.ascending(a.y, b.y);
                        });
                    var l = targetNodes.length;
                    var midEdge = nodes[node.id].midTargetEdge;
                    var mid;
                    for (var i = 0; i < targetNodes.length; i++) {
                        if (targetNodes[i].id == midEdge.target) {
                            mid = i;
                            break
                        }
                    }
                    //var mid = nodes[node.id].midTargetEdgeIndex;
                    //var midKey = node.id + '_' + targetNodes[mid].id;
                    var midFlow = midEdge.flow;
                    //在这里计算可还原边的偏移量，给每个节点两个数组用来标示上半区和下半区共插入了多少边
                    var thisNode = nodes[node.id];
                    var targetNode;
                    var edgeKey;
                    var shiftDirection, f, shiftDirectionIn, shiftDirectionOut, edge;
                    var suffixIn = 'In';
                    var suffixOut = 'Out';

                    if (mid > 0) {

                        shiftDirection = 'topShift';
                        f = 1;
                        shiftDirectionIn = shiftDirection + suffixIn;
                        shiftDirectionOut = shiftDirection + suffixOut;
                        var topShift = nodes[node.id].topShift;
                        for (var i = mid - 1; i >= 0; i--) {
                            targetNode = targetNodes[i];
                            edgeKey = node.id + '_' + targetNode.id + keySuffix;
                            edge = edgeDic[edgeKey];
                            computeShift(thisNode, targetNode, shiftDirection, edge[edgeThickNessOption], k, f, edgeKey)
                            //edge.shift = (topShift + flowScale(edge.flow) / 2) * k;
                            //topShift += flowScale(edge.flow) * k;
                        }
                    }
                    if (mid < l) {

                        shiftDirection = 'bottomShift';
                        f = -1;
                        shiftDirectionIn = shiftDirection + suffixIn;
                        shiftDirectionOut = shiftDirection + suffixOut;

                        var bottomShift = nodes[node.id].bottomShift;
                        for (var i = mid + 1; i < l; i++) {
                            targetNode = targetNodes[i];
                            edgeKey = node.id + '_' + targetNode.id + keySuffix;
                            edge = edgeDic[edgeKey];
                            computeShift(thisNode, targetNode, shiftDirection, edge[edgeThickNessOption], k, f, edgeKey)

                            //edge.shift = -(bottomShift + flowScale(edge.flow) / 2) * k;
                            //bottomShift += flowScale(edge.flow) * k;
                        }
                    }
                    //.forEach(function(targetNode){
                    //    var edgeKey=node.id+'_'+targetNode.id;
                    //})
                }

            });
            currentNodes = newCurrentNodes;
        }
        nodes.edgeDic = getEdgeSourceTargetDic(edges);

        targets.forEach(function (target) {
            var node = treeNodeDic[target];
            var path = [];
            while (node.father) {
                path.push(node.id);
                node = node.father;
            }
            path.push(node.id);
            paths.push(path.reverse());

        });
        return paths;


    }

    function getRootNode(edges) {
        var allNodeSet = d3.set();
        var edgeTargetDic = getEdgeTargetDic(edges);
        edges.forEach(function (e) {
            allNodeSet.add(e.source);
            allNodeSet.add(e.target);
        });
        for (var key in edgeTargetDic) {
            if (allNodeSet.has(key)) {
                allNodeSet.remove(key);
            }
        }
        return allNodeSet;
    }

    function getLeafNodes(edges) {
        var allNodeSet = d3.set();
        var edgeSourceDic = getEdgeSourceDic(edges);
        edges.forEach(function (e) {
            allNodeSet.add(e.source);
            allNodeSet.add(e.target);
        });
        for (var key in edgeSourceDic) {
            if (allNodeSet.has(key)) {
                allNodeSet.remove(key);
            }
        }
        return allNodeSet;
    }

    function useCurrentNodePosition(cluster) {
        if (cluster.subClusters) {
            cluster.x = cluster.oriX;
            cluster.y = cluster.oriY;
            for (var i = 0; i < cluster.subClusters.length; i++) {
                useCurrentNodePosition(cluster.subClusters[i])
            }
        }
    }

    function setEdgeDuration(edges) {
        for (var i = 0; i < edges.length; i++) {
            edges[i].duration = edgeDuration;
        }
    }

    function setDelay(cluster) {
        function setEdgeDelay(cluster) {
            if (cluster.subClusters) {
                for (var i = 0; i < cluster.subClusters.length; i++) {
                    var key = cluster.originNodeID + '_' + cluster.subClusters[i].originNodeID;
                    var edge = edgeDic[key];
                    edge.delay = cluster.delay;
                    setDelay(cluster.subClusters[i]);
                }
            }
        }

//        console.log(cluster);
        if (cluster.isRoot) {
            cluster.delay = 0;
            var nodeID = parseInt(cluster.originNodeID);
            nodes[nodeID].delay = cluster.delay;
            nodes[nodeID].duration = 100;
            setEdgeDelay(cluster);
        }
        else {
            if (cluster.parentCluster) {

                cluster.delay = 200 + cluster.parentCluster.delay;
                var nodeID = parseInt(cluster.originNodeID);
                nodes[nodeID].delay = cluster.delay;
                nodes[nodeID].duration = 100;
                setEdgeDelay(cluster);
            }
        }
//        if(cluster.subClusters){
//            for(var i=0;i<cluster.subClusters.le)
//        }

    }

    function updateNodes(cluster) {

        if (cluster.subClusters) {
            var nodeID = parseInt(cluster.originNodeID);
            if (cluster.x && cluster.y) {
                nodes[nodeID].x = cluster.x;
                nodes[nodeID].y = cluster.y;
                nodes[nodeID].cp1 = cluster.cp1;
                nodes[nodeID].cp2 = cluster.cp2;
            }
            for (var i = 0; i < cluster.subClusters.length; i++) {
                updateNodes(cluster.subClusters[i]);
            }
        }


    }

    function generateBezierNode(cluster) {

        var pi = Math.PI;

        function setAssistNode(edge, p1, p2) {
            var x1 = p1.x;
            var x2 = p2.x;
            var y1 = p1.y;
            var y2 = p2.y;
            edge.assists = [[x1, y1], [x2, y2]];
        }

        if (cluster.subClusters) {
            var sourceID = cluster.originNodeID;
            var p0 = {x: cluster.x, y: cluster.y};
            var maxWeight = 0;
            var maxCluster;
            var kNum = 0;
            for (var i = 0; i < cluster.subClusters.length; i++) {
                if (cluster.subClusters[i].weight > maxWeight) {
                    maxWeight = cluster.subClusters[i].weight;
                    maxCluster = cluster.subClusters[i];
                    kNum = i;
                }
            }
            var maxID = maxCluster.originNodeID;
            var p1 = {}
            if (maxCluster.nodes) {
                p1 = {x: maxCluster.x, y: maxCluster.y};
            }
            else if (maxCluster.node) {
                p1 = {x: maxCluster.oriX, y: maxCluster.oriY};
            }
            var maxCtrlPoint1 = {};
            var maxCtrlPoint2 = {};
            //if(cluster.parentCluster){
            //    var preCtrlPoint=cluster.preControlPoint;
            //    var line1=get2PointFun(preCtrlPoint,p0);
            //
            //
            //    if(!line1.vertical){
            //        var k=line1.k;
            //        var angel=Math.atan(k);
            //        var maxControlPoint1Length=getDistance(p0, p1)*cluster.preCtrlPointRatio;
            //        maxCtrlPoint1.x = p0.x+maxControlPoint1Length*Math.cos(angel);
            //        maxCtrlPoint1.y = p0.y+maxControlPoint1Length*Math.sin(angel);
            //
            //    }
            //    else{
            //        var maxControlPoint1Length=getDistance(p0, p1)*cluster.preCtrlPointRatio;
            //        maxCtrlPoint1.x = p0.x;
            //        maxCtrlPoint1.y = p0.y+maxControlPoint1Length;
            //    }
            //    maxCtrlPoint2=ratioPoint(p0, p1, 1/3);
            //}
            //else{
            //rootCluster
            var cp1;
            var cp2;

            if (cluster.subClusters) {
                cp1 = ratioPoint(p0, p1, 0.77);
                cp2 = ratioPoint(p0, p1, 0.78);
                maxCtrlPoint1 = ratioPoint(p0, p1, 2 / 3);
                maxCtrlPoint2 = ratioPoint(p0, p1, 1 / 3);

            }
            //}
            maxCluster.preControlPoint = maxCtrlPoint2;
            maxCluster.preCtrlPointRatio = getDistance(maxCtrlPoint2, p1) / getDistance(p0, p1);
            var vec1 = new vector(p0, p1);
            var lineVec1 = get2PointFun(p0, p1);
            var k1 = lineVec1.k;
            var key = sourceID + '_' + maxID;
            setAssistNode(edgeDic[key], maxCtrlPoint1, maxCtrlPoint2);
            var p3 = maxCtrlPoint1;
            var p4 = {};
            for (var i = 0; i < cluster.subClusters.length; i++) {
                if (i != kNum) {
                    var p2;
                    if (cluster.subClusters[i].nodes) {
                        p2 = {x: cluster.subClusters[i].x, y: cluster.subClusters[i].y};
                    }
                    else if (cluster.subClusters[i].node) {
                        p2 = {x: cluster.subClusters[i].oriX, y: cluster.subClusters[i].oriY};
                    }
                    var pt = ratioPoint(p0, p2, 1 / 3);
                    var dist = getDistance(p0, pt);

                    var vec2 = new vector(p0, p2);
                    var lineVec2 = get2PointFun(p0, p2);
                    var k2 = lineVec2.k;

                    var angle = angleBetween(vec1, vec2);
                    var vecToX = new vector({x: 0, y: 0}, {x: 1, y: 0});
                    var angleToX = angleBetween(vec2, vecToX);
                    var halfAngle = angle / 2;

                    if (k1 == 0) {
                        if (k2 > 0) {
                            p4.x = p0.x + dist * Math.cos(halfAngle);
                            p4.y = p0.y + dist * Math.sin(halfAngle);
                        }
                        else if (k2 < 0) {
                            p4.x = p0.x + dist * Math.cos(halfAngle);
                            p4.y = p0.y - dist * Math.sin(halfAngle);
                        }
                        else {
                            console.log('k1==k2 should not happen')
                        }
                    }
                    else if (k1 > 0) {
                        if (k2 > 0) {
                            if (k2 > k1) {
                                p4.x = p0.x + dist * Math.cos(angleToX - halfAngle);
                                p4.y = p0.y + dist * Math.sin(angleToX - halfAngle);
                            }
                            else if (k2 < k1) {
                                p4.x = p0.x + dist * Math.cos(angleToX + halfAngle);
                                p4.y = p0.y + dist * Math.sin(angleToX + halfAngle);
                            }

                        }
                        else if (k2 <= 0) {
                            p4.x = p0.x + dist * Math.cos(halfAngle - angleToX);
                            p4.y = p0.y + dist * Math.sin(halfAngle - angleToX);
                        }

                    }
                    else if (k1 < 0) {
                        if (k2 >= 0) {
                            p4.x = p0.x + dist * Math.cos(halfAngle - angleToX);
                            p4.y = p0.y + dist * Math.sin(halfAngle - angleToX);
                        }
                        else if (k2 < 0) {
                            if (k2 < k1) {
                                p4.x = p0.x + dist * Math.cos(angleToX - halfAngle);
                                p4.y = p0.y - dist * Math.sin(angleToX - halfAngle);
                            }
                            else if (k2 > k1) {
                                p4.x = p0.x + dist * Math.cos(angleToX - halfAngle);
                                p4.y = p0.y - dist * Math.sin(angleToX + halfAngle);
                            }

                        }
                    }

                    var newKey = sourceID + '_' + cluster.subClusters[i].originNodeID;
                    cluster.cp1 = cp1;
                    cluster.cp2 = cp2;
                    cluster.subClusters[i].preControlPoint = {};
                    clone(p4, cluster.subClusters[i].preControlPoint);
                    cluster.subClusters[i].preCtrlPointRatio = getDistance(p4, p2) / getDistance(p0, p2);
                    setAssistNode(edgeDic[newKey], p3, p4);

                }
            }
            for (var i = 0; i < cluster.subClusters.length; i++) {
                generateBezierNode(cluster.subClusters[i]);
            }
        }


    }

    function generateAssistNode(node, cluster) {
        if (cluster.subClusters) {
            //get p0
            var p0 = node;
            //get p1
            var maxWeight = 0;
            var maxCluster;
            var k = 0;
            for (var i = 0; i < cluster.subClusters.length; i++) {
                if (cluster.subClusters[i].weight > maxWeight) {
                    maxWeight = cluster.subClusters[i].weight;
                    maxCluster = cluster.subClusters[i];
                    k = i;
                }
            }
            var bounds1 = maxCluster.bounds;
            var line1 = {p1: p0, p2: maxCluster.center};
            var p1 = getRectangleLineCrossPoint(bounds1, line1);

            //get p2

            var otherNodesBound = cluster.subClusters[0].bounds;
            for (var i = 1; i < cluster.subClusters.length; i++) {
                if (i != k) {
                    otherNodesBound = mergeRect(otherNodesBound, cluster.subClusters[i].bounds);
                }
            }
            var otherNodesCenter = {
                x: otherNodesBound.x + otherNodesBound.width / 2,
                y: otherNodesBound.y + otherNodesBound.height / 2
            };
            var bounds2 = otherNodesBound;
            var line2 = {p1: p0, p2: otherNodesCenter};
            var p2 = getRectangleLineCrossPoint(bounds2, line2);

            var dist1 = getDistance(p0, p1);
            var dist2 = getDistance(p0, p2);
            var JumpCount = {count: 2};

            function recurJumpCluster(cluster, count) {
                var newCount = count;
                if (cluster.subClusters) {
                    var maxWeight = 0;
                    var maxCluster;
                    for (var i = 0; i < cluster.subClusters.length; i++) {
                        if (cluster.subClusters[i].weight > maxWeight) {
                            maxWeight = cluster.subClusters[i].weight;
                            maxCluster = cluster.subClusters[i];
                        }
                    }
                    count.count += 1;
                    recurJumpCluster(maxCluster, count)
                }


            }

            recurJumpCluster(cluster, JumpCount);

            if (JumpCount.count > 2)JumpCount.count -= 1;
            var shortestDist = d3.min([dist1, dist2]) / JumpCount.count;
//        var biggerCluster=d3.max([cluster.subCluster1,cluster.subCluster2],function(d){return d.size});

            var p3 = maxCluster.center;
            var biggerDist = getDistance(p0, p3);
            var bigFraction = parseFloat(shortestDist / biggerDist);
            var parentFraction = 1 - bigFraction;
            var x = p0.x * parentFraction + p3.x * bigFraction;
            var y = p0.y * parentFraction + p3.y * bigFraction;
            cluster.x = x;
            cluster.y = y;
            var newNode = new Node(new Point(x, y));
            for (var i = 0; i < cluster.subClusters.length; i++) {
                generateAssistNode(newNode, cluster.subClusters[i]);
            }
        }
    }

    function recoverEdges(otherEdge, edges) {
        function recurSourceNode(sourceNode, targetID) {
            if (sourceNode.children) {
                for (var i = 0; i < sourceNode.children.length; i++) {

                }
            }
        }

        for (var i = 0; i < otherEdge.length; i++) {
            var sourceID = otherEdge[i].source;
            var sourceNode = nodes[sourceID];
            var targetID = otherEdge[i].target;
            recurSourceNode(sourceNode, targetID);
        }

//        return edges;


    }

    function recoverNonTreeEdges(d) {
        function getLine(sourceID, targetID) {
            return {p1: nodes[sourceID], p2: nodes[targetID]};
        }

        var edgeSourceTargetDic = directedGraph.edgeSourceTargetDic;
        var edges = d.edge;
        var nodes = d.node;
        var nonTreeEdges = d.deletedNonTreeEdges;
        var nonCrossEdges = [];

        for (var i = 0; i < nonTreeEdges.length; i++) {
            var sourceID = nonTreeEdges[i].source;
            var targetID = nonTreeEdges[i].target;
            var line1 = getLine(sourceID, targetID);
            var crossCount = 0;
            for (var j = 0; j < edges.length; j++) {
                var originSourceID = edges[j].source;
                var originTargetID = edges[j].target;
                var line2 = getLine(originSourceID, originTargetID);
                var checkCross = get2LineCrossPoint(line1, line2);
                if (checkCross.isPointInLine1 && checkCross.isPointInLine2) {
                    crossCount += 1;
                }
            }
//            if(crossCount <=3 ){
            nonCrossEdges.push(nonTreeEdges[i]);
//            }
        }
        //console.log(nonCrossEdges);
        for (var i = 0; i < nonCrossEdges.length; i++) {
            var source = nonCrossEdges[i].source;
            var target = nonCrossEdges[i].target;
            var sourceEdge, targetEdge;
            if (nodes[source] && nodes[target]) {
                for (var j = 0; j < edges.length; j++) {
                    if (edges[j].source == source) {
                        sourceEdge = edges[j];
                    }
                    if (edges[j].target == target) {
                        targetEdge = edges[j];
                    }
                }
                if (sourceEdge && targetEdge) {
//                    if(nodes[source].x<nodes[target].x){
//                        var newAssistNode=[sourceEdge.assists[0],targetEdge.assists[1]];
//                        nonCrossEdges[i].assists=newAssistNode;
//                        nonCrossEdges[i].edgeType='dash';
//                    }
//                    else{
                    var p1 = ratioPoint(nodes[source], nodes[target], 2 / 3);
                    var p2 = ratioPoint(nodes[source], nodes[target], 1 / 3);
                    nonCrossEdges[i].assists = [[p1.x, p1.y], [p2.x, p2.y]];
                    nonCrossEdges[i].edgeType = 'dash';
                    nonCrossEdges[i].isNontreeEdge = true;
//                    }
                    edges.push(nonCrossEdges[i]);
                }
            }

        }

    }

    function recoverTreeEdges(d) {
        var edges = d.edge;
        var edgeSourceTargetDic = getEdgeSourceTargetDic(edges);

        var treeEdges = d.deletedTreeEdges;
        var nontreeEdges = d.deletedNonTreeEdges;
        var len1, len2;
        var newDeletedEdges = [];
        var tmpEdges = [];
        clone(treeEdges, newDeletedEdges);
        len1 = newDeletedEdges.length;
        len2 = tmpEdges.length;
        while (len1 != len2) {
            len1 = newDeletedEdges.length;
            tmpEdges = [];
            for (var i = 0; i < newDeletedEdges.length; i++) {
                var flag;
                var originEdge;
                var newPath;
                var originSource;
                var originTarget;
                var originKey;
                if (method == 'recoveryWeight') {
                    originEdge = newDeletedEdges[i].originEdge;
                    newPath = newDeletedEdges[i].newPath;
                    flag = true;
                    originSource = originEdge.source;
                    originTarget = originEdge.target;


                    originKey = originSource + '_' + originTarget;

//                    flag = false;
                    for (var j = 0; j < newPath.edges.length; j++) {
                        var newEdge = newPath.edges[j];
                        var newSource = newEdge.source;
                        var newTarget = newEdge.target;
                        var newKey = newSource + '_' + newTarget;
                        if (!edgeSourceTargetDic[newKey]) {
                            flag = false;
                            break;
                        }
                    }
                }
                else {
                    originEdge = newDeletedEdges[i];
                    originSource = originEdge.source;
                    originTarget = originEdge.target;
                    originKey = originSource + '_' + originTarget;
                    flag = false;
                }

                if (flag == false) {
                    var dijPath;
                    if (method == 'mst')dijPath = directedGraph.maximalSpanningTree.findMaxPathBetween(originSource, originTarget);
                    else dijPath = directedGraph.findMaxPathBetween(originSource, originTarget);
                    if (dijPath[0]) {
                        newPath = dijPath[0];
                        flag = true;
                    }
                }
                if (flag == true) {
                    var assists = [];
                    var routerClusters = []
                    for (var j = 0; j < newPath.length; j++) {
                        routerClusters.push(newPath.edges[j].source);
                        var source = newPath.edges[j].source;
                        var sourceNode = [nodes[source].x, nodes[source].y];
                        var target = newPath.edges[j].target;
                        var targetNode = [nodes[target].x, nodes[target].y];
                        var tmpKey = source + '_' + target;
                        assists.push(sourceNode);
                        for (var k = 0; k < edgeSourceTargetDic[tmpKey].assists.length; k++) {
                            assists.push(edgeSourceTargetDic[tmpKey].assists[k]);
                        }
                        assists.push(targetNode);

                    }
                    routerClusters.push(originEdge.target);

                    assists = assists.slice(1, assists.length);
                    assists = assists.slice(0, assists.length - 1);

                    originEdge.assists = assists;
                    originEdge.TreeEdge = true;
                    originEdge.routerClusters = routerClusters;
                    originEdge.recovered = true;
//                    edgeSourceTargetDic[originKey]=originEdge;
                    edges.push(originEdge);

                }
                else {
                    tmpEdges.push(newDeletedEdges[i]);
                }

            }
            newDeletedEdges = [];
            clone(tmpEdges, newDeletedEdges);
            len2 = newDeletedEdges.length;
        }
        for (var i = 0; i < tmpEdges.length; i++) {
            nontreeEdges.push(tmpEdges[i].originEdge);
        }

    }

    function generateNodes(cluster) {
        if (cluster.subClusters) {
            cluster.nodes = [];
            for (var i = 0; i < cluster.subClusters.length; i++) {
                cluster.nodes = cluster.nodes.concat(generateNodes(cluster.subClusters[i]));
            }
            //use cluster leaf nodes as weight

            var weight = 0;
            for (var j = 0; j < cluster.nodes.length; j++) {
                weight += cluster.nodes[j].size;
            }
            cluster.weight = weight;

            //use cluster all nodes as weight

            //var fullWeight = 0;
            //for (var i = 0; i < cluster.subClusters.length; i++) {
            //    fullWeight+=cluster.subClusters[i].weight;
            //}
            //if(cluster.nodes){
            //    fullWeight+=nodes[cluster.originNodeID].size;
            //}
            //cluster.weight=fullWeight;

            return cluster.nodes;
        }
        else {
            cluster.weight = cluster.node.size;
            cluster.fullWeight = cluster.node.size;
            return [cluster.node];
        }
    }

    function getClusterBoundAndCenter(cluster) {
        if (cluster.nodes) {
            var minX = d3.min(cluster.nodes, function (d) {
                return d.x - sizeScale.sizeScale(d.size)
            });
            var minY = d3.min(cluster.nodes, function (d) {
                return d.y - sizeScale.sizeScale(d.size)
            });
            var maxX = d3.max(cluster.nodes, function (d) {
                return d.x + sizeScale.sizeScale(d.size)
            });
            var maxY = d3.max(cluster.nodes, function (d) {
                return d.y + sizeScale.sizeScale(d.size)
            });
            cluster.bounds = {
                x: minX,
                y: minY,
                width: maxX - minX,
                height: maxY - minY
            }
            cluster.center = {
                x: minX + (maxX - minX) / 2,
                y: minY + (maxY - minY) / 2
            }
            for (var i = 0; i < cluster.subClusters.length; i++) {
                getClusterBoundAndCenter(cluster.subClusters[i]);
            }
        }
        else if (cluster.node) {
            cluster.bounds = {
                x: cluster.node.x - sizeScale.sizeScale(cluster.node.size),
                y: cluster.node.y - sizeScale.sizeScale(cluster.node.size),
                width: sizeScale.sizeScale(cluster.node.size) * 2,
                height: sizeScale.sizeScale(cluster.node.size) * 2
            }
            cluster.center = {
                x: cluster.node.x,
                y: cluster.node.y
            }
        }
    }

    function generateCluster(node, cluster) {
        if (node.children) {
            cluster.subClusters = [];
            cluster.originNodeID = node.id;
            cluster.oriX = node.x;
            cluster.oriY = node.y;
            for (var i = 0; i < node.children.length; i++) {
                var newCluster = {};
                newCluster.parentCluster = cluster;
                cluster.subClusters.push(newCluster);
                generateCluster(node.children[i], newCluster);
            }
        }
        else {
            cluster.node = node;
            cluster.originNodeID = node.id;
            cluster.oriX = node.x;
            cluster.oriY = node.y;
        }

    }

    function recurTree(node) {

        if (node.children) {
            for (var i = 0; i < node.children.length; i++) {
                var child = node.children[i];
                if (child.children) {
                    var grandChildren = child.children;
                    var maxGrandChild;
                    var maxFlow = 0;
                    for (var j = 0; j < grandChildren.length; j++) {
                        var source = child.id;
                        var target = grandChildren[j].id;
                        var key = String(source) + '_' + String(target);
                        var edge = edgeDic[key];
                        var flow = edge.flow;
                        if (flow > maxFlow) {
                            maxFlow = flow;
                            maxGrandChild = grandChildren[j];
                        }
                    }
                    var p1 = {x: node.x, y: node.y};
                    var p2 = {x: maxGrandChild.x, y: maxGrandChild.y};
                    var p3 = {x: child.x, y: child.y};
                    var p4 = getPointToLineCrossPoint(p1, p2, p3);
                    child.x = p4.x;
                    child.y = p4.y;
                }
                recurTree(node.children[i]);

            }
        }
        else {
            return;
        }
    }

    function processEdge(source, target) {

        if (!source.parentNode) {
            //this is root need to generate a grandparent
            var children = source.children;
            var avgX = 0, avgY = 0;
            for (var i = 0; i < children.length; i++) {
                avgX += children[i].x;
                avgY += children[i].y;
            }
            avgX /= children.length;
            avgY /= children.length;
            var thisVector = vector({x: source.x, y: source.y}, {x: avgX, y: avgY});
            var normalized = getNormalized(thisVector);
            var reverseNormalized = {x: normalized.x * -1, y: normalized.y * -1};
            var x = source.x + 10 * reverseNormalized.x;
            var y = source.y + 10 * reverseNormalized.y;
            var grandParent = {x: x, y: y};
        }
        else {
            grandParent = source.parentNode;
        }
        var parent = {x: source.x, y: source.y};
        var shiftPoint = false;

        if (source.parentNode) {
            var n2 = source.parentNode;
            var otherEdgeItems;
            if (source.children) {
                var sourceID = source.id;
                var targetID = target.id;
                if (source.children.length > 1) {
                    var countX = 0, countY = 0;
                    for (var i = 0; i < source.children.length; i++) {
                        if (source.children[i].id != targetID) {
                            countX += source.children[i].x;
                            countY += source.children[i].y;
                        }

                    }
                    countX /= source.children.length - 1;
                    countY /= source.children.length - 1;
                    var thisEdgeVec = vector(source, target);
                    var otherEdgeVec = vector(source, {x: countX, y: countY});
                    var thisEdgeVec3d = vector3d(getNormalized(thisEdgeVec).x, -1 * getNormalized(thisEdgeVec).y, 0);
                    var otherEdgeVec3d = vector3d(getNormalized(otherEdgeVec).x, -1 * getNormalized(otherEdgeVec).y, 0);
                    var crossResult = vector3dCross(thisEdgeVec3d, otherEdgeVec3d);
                    var grandToParent = vector(grandParent, parent);
                    var shiftX = -1 * getNormalized(grandToParent).y;
                    var shiftY = -1 * getNormalized(grandToParent).x;
                    var shiftDir = {x: shiftX, y: shiftY};
                    if (crossResult.z < 0) {
                        shiftDir.x *= -1;
                        shiftDir.y *= -1;
                    }


                }

            }

        }

        var child = {x: target.x, y: target.y};
        var grandChild;
        if (target.children) {
            var grandChildEdges = target.children;
            var maxFlow = 0;
            var maxEdge;
            for (var i = 0; i < target.children.length; i++) {
                var key = String(target.id) + '_' + String(target.children[i].id);
                var tmpEdge = edgeDic[key];
                var edgeFLow = tmpEdge.flow;
                if (edgeFLow > maxFlow) {
                    maxFlow = edgeFLow;
                    maxEdge = tmpEdge;
                }
            }
            grandChild = {x: nodes[maxEdge.target].x, y: nodes[maxEdge.target].y};

        }
        else {
            var parentToChild = vector(parent, child);
            var pToCDir = getNormalized(parentToChild);
            var grandParentToParent = vector(grandParent, parent);
            var gpToPDir = getNormalized(grandParentToParent);
            var angleBetween = absAngleBetween(parentToChild, grandParentToParent);
            var x = pToCDir.x * Math.cos(-angleBetween) - pToCDir.y * Math.sin(-angleBetween);
            var y = pToCDir.x * Math.sin(-angleBetween) - pToCDir.y * Math.cos(-angleBetween);
            grandChild = {x: child.x + 10 * x, y: child.y + 10 * y};
        }
        var sourceID = source.id;
        var targetID = target.id;
        var key = String(sourceID) + '_' + String(targetID);
        var edge = edgeDic[key];
        var fourPoints = [];
        fourPoints.push(grandParent);
        fourPoints.push(parent);
        fourPoints.push(child);
        fourPoints.push(grandChild);

        computeOneSpline(grandParent, parent, child, grandChild, edge, target);
        var parentGrandDist = getDistance(grandParent, parent);
        var grandToParent = vector(grandParent, parent);
        var collX = parentGrandDist * getNormalized(grandToParent).x + parent.x;
        var collY = parentGrandDist * getNormalized(grandToParent).y + parent.y;

        var collinShift = {x: collX, y: collY};
//        edge.assists[1][0]=collX;
//        edge.assists[1][1]=collY;
//        source.x=collX;
//        source.y=collY;
//        target.x = edge.assists[2][0];
//        target.y = edge.assists[2][1];

    }


}
function computeOneSpline(p0, p1, p2, p3, edge, target) {
    var ctrlX1 = -p0.x / 6 + p1.x + p2.x / 6;
    var ctrlX2 = -p1.x / 6 + p2.x + p3.x / 6;
    var ctrlY1 = -p0.y / 6 + p1.y + p2.y / 6;
    var ctrlY2 = -p1.y / 6 + p2.y + p3.y / 6;
    edge.assists = [[p0.x, p0.y], [ctrlX1, ctrlY1], [ctrlX2, ctrlY2], [p3.x, p3.y]];
//    edge.assists=[[p0.x,p0.y],[p1.x,p1.y],[p2.x,p2.y],[p3.x,p3.y]];


}
function getEdgeSourceTargetDic(edges) {
    var dic = {};
    for (var i = 0; i < edges.length; i++) {
        var source = edges[i].source;
        var target = edges[i].target;
        var key = String(source) + '_' + String(target);
        if (edges[i].isBackgroundEdge)key += '_background';
        dic[key] = edges[i];
    }
    return dic;
}
function getEdgeSourceDic(edges) {
    var dic = {};
    for (var i = 0; i < edges.length; i++) {
        var source = edges[i].source;
        var target = edges[i].target;
        if (dic[source])dic[source][target] = edges[i];
        else {
            dic[source] = {};
            dic[source][target] = edges[i];
        }
    }
    return dic;
}
function getEdgeTargetDic(edges) {
    var dic = {};
    for (var i = 0; i < edges.length; i++) {
        var source = edges[i].source;
        var target = edges[i].target;
        if (dic[target])dic[target][source] = edges[i];
        else {
            dic[target] = {};
            dic[target][source] = edges[i];
        }
    }
    return dic;
}
function getNodeRelation(nodes, edges) {
    for (var i = 0; i < edges.length; i++) {
        var source = edges[i].source;
        var target = edges[i].target;
        //console.log(source+'->'+target);
        nodes[target].parentNode = nodes[source];
        if (nodes[source].children)nodes[source].children.push(nodes[target]);
        else nodes[source].children = [nodes[target]];
    }
}
//function method1(d){
//    var nodes= d.node;
//    var edges= d.edge;
//    //method1
//    var newEdgeCount=0;
//    //find the targets of every node
//    for(var i=0;i<nodes.length;i++){
//        //root find
//        var tmpTargets=[];
//        var nodeID=parseInt(nodes[i].id);
//        //find all edges that source==nodeID
//        for(var j=0;j<edges.length;j++){
//            if(edges[j].source==nodeID){
//                tmpTargets.push(nodes[edges[j].target])
//            }
//        }
//        nodes[i].targets=tmpTargets;
//        var clusterResult=hierarchicalClustering(nodes[i]);
//        nodes[i].clusterResult=clusterResult;
//        calculateFlowPoint(nodes[i]);
//        newEdgeCount+=nodes[i].edges.length;
//    }
//    console.log(newEdgeCount,edges.length);
//    updateEdges(d);
//}
function updateEdges(d) {
    var nodes = d.node;
    var edges = d.edge;
    var newEdges = [];
    for (var i = 0; i < nodes.length; i++) {
        newEdges = newEdges.concat(nodes[i].edges);
    }
    for (var i = 0; i < newEdges.length; i++) {
        var points = newEdges[i];
        var assists = [];
        for (var j = 1; j < points.length - 1; j++) {
            assists.push([points[j].x, points[j].y]);
        }
        newEdges.assists = assists;
        var source = parseInt(newEdges[i][0].id);
        var target = parseInt(newEdges[i][newEdges[i].length - 1].id);
        var newEdge = {points: points, assists: assists, source: source, target: target};
        newEdges[i] = newEdge;
    }
    var edgesDic = {};
    for (var i = 0; i < edges.length; i++) {
        var source = edges[i].source;
        var target = edges[i].target;
        var key = String(source) + '_' + String(target);
        edgesDic[key] = i;
    }

    edges.sort(function (a, b) {
        return a.source - b.source
    });
    edges.sort(function (a, b) {
        return a.target - b.target
    });
    newEdges.sort(function (a, b) {
        return a.source - b.source
    });
    newEdges.sort(function (a, b) {
        return a.target - b.target
    });
    for (var i = 0; i < edges.length; i++) {
        edges[i].assists = newEdges[i].assists;
        edges[i].points = newEdges[i].points;
    }
    var tmpEdges = [];
    for (var i = 0; i < edges.length; i++) {
        var source = edges[i].source;
        var target = edges[i].target;
        var key = String(source) + '_' + String(target);
        var j = edgesDic[key];
        tmpEdges[j] = edges[i];
    }
    d.edge = tmpEdges
}
//function Cluster(thisCLuster,subCluster1,subCluster2){
//    this.cluster=thisCLuster;
//    this.subCluster1=subCluster1;
//    this.subCluster2=subCluster2;
//    if(subCluster1&&subCluster2) {
//        this.type = 'cluster';
//        var minX=d3.min([subCluster1.bounds.x, subCluster2.bounds.x]);
//        var minY=d3.min([subCluster1.bounds.y, subCluster2.bounds.y]);
//        var maxX=d3.min([subCluster1.bounds.x+subCluster1.bounds.width, subCluster2.bounds.x+subCluster2.bounds.width]);
//        var maxY=d3.min([subCluster1.bounds.y+subCluster1.bounds.height, subCluster2.bounds.y+subCluster2.bounds.height]);
//        this.bounds = {
//            x:minX,
//            y:minY,
//            width:maxX-minX,
//            height:maxY-minY
//        }
//        this.center={
//            x:minX+(maxX-minX)/2,
//            y:minY+(maxY-minY)/2
//        }
//    }
//    else if(!(subCluster1&&subCluster2)){
//        if(thisCLuster.isRoot)this.isRoot = true;
//        else this.isRoot=false;
//        this.type = 'node';
//        this.size= thisCLuster.size;
//        this.bounds={
//            x:thisCLuster.x-sizeScale.sizeScale(thisCLuster.size),
//            y:thisCLuster.y-sizeScale.sizeScale(thisCLuster.size),
//            width:sizeScale.sizeScale(thisCLuster.size)*2,
//            height:sizeScale.sizeScale(thisCLuster.size)*2
//        }
//        this.center={
//            x:thisCLuster.x,
//            y:thisCLuster.y
//        }
//
//    }
//
//}
function hierarchicalClustering(node) {
    var root = node;
    root.isRoot = true;
    root.equalThis = function (cluster) {
        if (cluster.type == 'node') {
            if (cluster.isRoot == true)return true;
            else return false;
        }
        else return false;
    };

    var leafNodes = root.targets;
    var clusterList = [];
    var clusterCollection = [];

    //create init cluster for every node.
    var rootCluster = new Cluster(root, false, false);
    var id = 0;
    rootCluster.id = id;
    id += 1;
    clusterList.push(rootCluster);
    for (var i = 0; i < leafNodes.length; i++) {
        var targetCluster = new Cluster(leafNodes[i], false, false);
        targetCluster.id = id;
        clusterList.push(targetCluster);
        id += 1;
    }

    //do hierarchicalClustering

    //calculate distance between every two nodes.
    //O(n)=n*n*n
    while (clusterList.length > 1) {
        var distanceList = [];
        //find closest pair of clusters

        for (var i = 0; i < clusterList.length; i++) {
            for (var j = i + 1; j < clusterList.length; j++) {
                var p1 = clusterList[i].center;
                var p2 = clusterList[j].center;
                var distance = getDistance(p1, p2);
                var distancePair = {distance: distance, cluster1: clusterList[i], cluster2: clusterList[j]};
                distanceList.push(distancePair);
            }
        }
        distanceList.sort(function (a, b) {
            return a.distance - b.distance;
        });
        var closestPair = distanceList[0];
        var c1 = closestPair.cluster1;
        var c2 = closestPair.cluster2;
        //remove this two clusters
        var newClusterList = [];
        for (var i = 0; i < clusterList.length; i++) {
            if (clusterList[i].id != c1.id && clusterList[i].id != c2.id) {
                newClusterList.push(clusterList[i]);
            }
        }
        clusterList = newClusterList;

        //if either of two clusters include root node add another cluster into collection and root as new cluster

        if (root.equalThis(c1) || root.equalThis(c2)) {
            var newCluster;
            if (root.equalThis(c1)) {
                clusterCollection.push(c2)
            }
            else if (root.equalThis(c2)) {
                clusterCollection.push(c1)
            }
            newCluster = rootCluster;
        }
        else {
            newCluster = new Cluster(false, c1, c2);
            newCluster.id = id;
            id += 1;
        }
        clusterList.push(newCluster);

    }
    return clusterCollection;


}

function calculateFlowPoint(clusterTree) {
    var rootNode = clusterTree;
//    console.log(clusterTree);
    var clusters = clusterTree.clusterResult;
    clusterTree.edges = [];
    for (var i = 0; i < clusters.length; i++) {
        var cluster = clusters[i];
        //a cluster only contain one node
//        if(!(cluster.cluster1||cluster.cluster2)){
        //do nothing
//        }
        countClusterSize(cluster);

        processCluster(rootNode, cluster);
        var edges = clusterTree.edges;
        var flowEdge = collectFlowPoint(rootNode, cluster);
        clusterTree.edges = edges.concat(flowEdge);

    }

}
function countClusterSize(cluster) {
    if (cluster.subCluster1 && cluster.subCluster2) {
        cluster.size = countClusterSize(cluster.subCluster1) + countClusterSize(cluster.subCluster2);
        return cluster.size;
    }
    else {
        return cluster.size;
    }
}
function processCluster(parNode, cluster) {
    function getNewNode(p0, p1, p2) {
        var dist1 = getDistance(p0, p1);
        var dist2 = getDistance(p0, p2);
        var shortestDist = d3.min([dist1, dist2]) / 2;
//        var biggerCluster=d3.max([cluster.subCluster1,cluster.subCluster2],function(d){return d.size});
        var biggerCluster;
        if (cluster.subCluster1.size >= cluster.subCluster2.size) {
            biggerCluster = cluster.subCluster1;
        }
        else biggerCluster = cluster.subCluster2;

        var p3 = biggerCluster.center;
        var biggerDist = getDistance(p0, p3);
        var bigFraction = parseFloat(shortestDist / biggerDist);
        var parentFraction = 1 - bigFraction;
        var x = p0.x * parentFraction + p3.x * bigFraction;
        var y = p0.y * parentFraction + p3.y * bigFraction;
        var newNode = {x: x, y: y, subCluster1: cluster.subCluster1, subCluster2: cluster.subCluster2};
        return newNode;
    }

    if (cluster.subCluster1 || cluster.subCluster2) {
        var type1 = cluster.subCluster1.type;
        var type2 = cluster.subCluster2.type;
        var typeArray = [type1, type2];
        if (in_array('node', typeArray) && !in_array('cluster', typeArray)) {
            //a cluster only contains nodes
            var p0 = {x: parNode.x, y: parNode.y};
            var p1 = cluster.subCluster1.center;
            var p2 = cluster.subCluster2.center;

            var newNode = getNewNode(p0, p1, p2);
            cluster.nextNode = newNode;
            cluster.subCluster1 = '';
            cluster.subCluster2 = '';


        }
        else if (in_array('cluster', typeArray) && !in_array('node', typeArray)) {
            //a cluster only contains clusters
            var p0 = {x: parNode.x, y: parNode.y};
            var bounds1 = cluster.subCluster1.bounds;
            var bounds2 = cluster.subCluster2.bounds;
            var line1 = {p1: p0, p2: cluster.subCluster1.center};
            var line2 = {p1: p0, p2: cluster.subCluster2.center};
            var p1 = getRectangleLineCrossPoint(bounds1, line1);
            var p2 = getRectangleLineCrossPoint(bounds2, line2);
            var newNode = getNewNode(p0, p1, p2);
            cluster.nextNode = newNode;
            processCluster(newNode, cluster.subCluster1);
            processCluster(newNode, cluster.subCluster2);
            cluster.subCluster1 = '';
            cluster.subCluster2 = '';

        }
        else if (in_array('cluster', typeArray) && in_array('node', typeArray)) {
            //a cluster contains a node and a cluster
            if (cluster.subCluster1.type == 'cluster') {
                var clus = cluster.subCluster1;
                var node = cluster.subCluster2;
            }
            else if (cluster.subCluster1.type == 'node') {
                var clus = cluster.subCluster2;
                var node = cluster.subCluster1;
            }
            var p0 = {x: parNode.x, y: parNode.y};
            var p1 = node.center;
            var bounds = clus.bounds;
            var line = {p1: p0, p2: clus.center};
            var p2 = getRectangleLineCrossPoint(bounds, line);
            var newNode = getNewNode(p0, p1, p2);
            cluster.nextNode = newNode;
            processCluster(newNode, clus);
            cluster.subCluster1 = '';
            cluster.subCluster2 = '';
        }
    }
}
function collectFlowPoint(root, cluster) {
    function recurCluster(cluster) {
        if (cluster.nextNode) {
            tmpEdge.push({x: cluster.nextNode.x, y: cluster.nextNode.y});
            function judgeCluster(cluster) {
                if (cluster.type == 'node') {
                    var tmpPoint = {x: cluster.cluster.x, y: cluster.cluster.y, id: cluster.cluster.id};
                    var edge = [];
                    clone(tmpEdge, edge);
                    edge.push(tmpPoint);
                    flowEdge.push(edge);
                }
                else {
                    recurCluster(cluster);
                }
            }

            judgeCluster(cluster.nextNode.subCluster1);
            judgeCluster(cluster.nextNode.subCluster2);

        }
        else {
            var tmpPoint = {x: cluster.cluster.x, y: cluster.cluster.y, id: cluster.cluster.id};
            var edge = [];
            clone(tmpEdge, edge);
            edge.push(tmpPoint);
            flowEdge.push(edge);
        }
    }

    var flowEdge = [];
    var rootPoint = {x: root.x, y: root.y, id: root.id};
    var tmpEdge = [];
    tmpEdge.push(rootPoint);
    recurCluster(cluster);
    return flowEdge;

}

function Graph(edges,assistEdges){

            this.edges=edges;
            var dotBeginning='digraph{';
            var dotEnding='}';
            var arrow='->';
            var edgeEnding=';';
            var dot='';
            var invis='[style=invis]';
            dot+=dotBeginning;
            for(var i= 0,len=edges.length;i<len;i++){
                var edge=edges[i];
                var source=String(edge.source);
                var target=String(edge.target);
                var edgeString=source+arrow+target+edgeEnding;
                dot+=edgeString;
            }
            if(assistEdges) {
                for (var i = 0, len = assistEdges.length; i < len; i++) {
                    var edge = assistEdges[i];
                    var source = String(edge.source);
                    var target = String(edge.target);
                    var edgeString = source + arrow + target + invis + edgeEnding;
                    dot += edgeString;
                }
            }
            dot+=dotEnding;
            this.dotString=dot;
            this.svgGraph=function(){
//        console.log(Viz(this.dotString));
                var div=d3.select('body').append('tmpDiv').attr('class','tmpDiv');
                div.html(Viz(this.dotString));

//            .html(Viz(this.dotString));
//        document.body.innerHTML +=Viz(this.dotString);
    }
}
function reCalculateLayout(graph,graphData){
    var nodes=graphData.node;
    var edges=graphData.edge;
    if(this.method=='mst'||this.method=='filterFlow'){
        maximalSpanningTree(graphData);
    }
//    var newGraph=new Graph(graphData.edge, []);
    graph.svgGraph();
    var newSVG=d3.select('.tmpDiv').select('svg');
    var svgData=getSVGData(newSVG);
    newSVG.remove();
    d3.select('.tmpDiv').remove();
    mergeData(svgData,nodes, edges);
//    reverseXY(nodes,edges);

}

function maximalSpanningTree(d){
    //find root;
    var nodes=d.node;
    var edges= d.edge;
    d.originEdge=[];
    clone(edges,d.originEdge);
    var root;
    var newNodes=[];
    var newEdges=[];
    clone(nodes, newNodes);
    for(var i=0;i<nodes.length;i++){
        if(nodes[i].focused=='true'){
            root = nodes[i];
            break;
        }
    }

    //remove all the edges to the root node
    for(var i=0;i<edges.length;i++){
        if(edges[i].target!=parseInt(root.id))newEdges.push(edges[i]);
    }


    //select top flow of every node
    var tmpEdge=[];
    for(var i=0;i<nodes.length;i++){
        if(!(nodes[i].focused=='true')){
            var id=parseInt(nodes[i].id);
            var nodeEdge=[];
            var maxEdge={flow:0};
            for(var j=0;j<newEdges.length;j++){
                if(newEdges[j].target==id){
                    if(newEdges[j].flow>maxEdge.flow)maxEdge=newEdges[j];
                }
            }
            tmpEdge.push(maxEdge);
        }
    }
    d.edge = tmpEdge;
    var edgeDic=getEdgeSourceTargetDic(d.edge);
    var originEdgeDic=getEdgeSourceTargetDic(d.originEdge);
    var otherEdge=[];
    for(var key in originEdgeDic){
        if(!(key in edgeDic)){
            otherEdge.push(originEdgeDic[key])
        }
    }
    d.otherEdge=otherEdge;

}

function mergeData(data,nodes,edges){
    var svgNodes=data.svgNodes;
    var svgEdges=data.svgEdges;
    for(var i= 0,len=svgEdges.length;i<len;i++){
        var source=svgEdges[i].source;
        var target=svgEdges[i].target;
        for(var j= 0,len1=edges.length;j<len;j++){
            if(source ==edges[j].source&&target==edges[j].target){
                edges[j].assists=svgEdges[i].assists;
                break;
            }
        }
    }
    for(var key in svgNodes){
        if(nodes[key]){
            nodes[key].x = svgNodes[key].x;
            nodes[key].y = svgNodes[key].y;
        }

    }
}
function getSVGData(svg){
    var svgNodes={};
    var svgEdges=[];
    svg.selectAll('g')
        .each(function(){
            var thisElem=d3.select(this);
            var thisClass=thisElem.attr('class');
            if(thisClass=='edge'){
                var edge={};
                var edgeValue=thisElem.select('title').text();
                edge.source=parseInt(edgeValue.split('->')[0]);
                edge.target=parseInt(edgeValue.split('->')[1]);
                edge.assists=[];
                var d=thisElem.select('path').attr('d').split('M')[1];
                var firstPoint=d.split('C')[0];
                var point=[];
                point[0]=parseFloat(firstPoint.split(',')[0]);
                point[1]=parseFloat(firstPoint.split(',')[1]);
                edge.assists.push(point);
                var otherPoints=d.split('C')[1].split(' ');
                for(var i= 0,len=otherPoints.length;i<len;i++){
                    var tmpPoint=[];
                    tmpPoint[0]=parseFloat(otherPoints[i].split(',')[0]);
                    tmpPoint[1]=parseFloat(otherPoints[i].split(',')[1]);
                    edge.assists.push(tmpPoint);
                }
                svgEdges.push(edge);

            }
            else if(thisClass=='node'){
                var node={};
                var nodeValue=thisElem.select('title').text();
                node.id=nodeValue;
                node.x=parseFloat(thisElem.select('ellipse').attr('cx'));
                node.y=parseFloat(thisElem.select('ellipse').attr('cy'));
                svgNodes[nodeValue]=node;
            }
        })
    return {svgNodes:svgNodes,svgEdges:svgEdges};
}
//function getEdgeSourceTargetDic(edges){
//    var dic={};
//    for (var i= 0,len=edges.length;i<len;i++){
//        var source=edges[i].source;
//        var target=edges[i].target;
//        if(dic[source]){
//            dic[source][target]=edges[i];
//        }
//        else{
//            dic[source]={}
//            dic[source][target]=edges[i];
//        }
//    }
//    return dic;
//}
function getNodeDic(nodes){
    var dic={};
    for(var i= 0,len=nodes.length;i<len;i++){
        var key=nodes[i].oldKey
        dic[key]=nodes[i];
    }
    return dic;
}
function processIncrementalTree(tree){
    var newTree={};
    for(var i=0;i<tree.length;i++){
        var newGroup={}
        for(var j=0;j<tree[i].length;j++){
            var id=tree[i][j].id;
            var child=tree[i][j].chd;
            var parent=tree[i][j].prt;
            newGroup[id]={child:child, parent:parent};
        }
        var groupID=(i+1)*5;
        newTree[groupID]=newGroup;
    }
//    console.log(newTree);
    data.incrementalTree=newTree;
}
function getGraphInfo(nodes,edges){
    var result={nodes:0,edges:0,citation:0,flow:0,yearFlow:0};
    result.nodes = nodes.length;
    result.edges = edges.length;
    result.citation = countCitation(edges);
    result.flow = countFlow(edges);
    result.yearFlow = countYearFlow(edges);
    return result;
}
function printGraphInfo(info){
    console.log('-----------------------------');
    for(var key in info){
        console.log(key+info[key]);
    }
    console.log('-----------------------------');
}
function linkPruning(){
    /*
     let the edge with the smallest weight be (i,j).
     If remove (i,j) does not make the current graph disconnected
     (here connected means that there is a path from the source to every node),
     we remove it. If there is a path in the current graph  from  i  to  j,
     we  add  the  weight  of  the  edge  to  each edge along the path.
     We update the edge weights and repeat this process. At the end of this process we have a spanning tree
    */

//        1. build graph structure and functions，node,edge, node parents,node children,add edge,delete edge,graph connection
    var data=this.data.postData[this.focusedID]
    var removeSelfEdgeResult=removeSelfEdge(data.edge);
    data.edge = removeSelfEdgeResult.edge;
    data.selfEdge = removeSelfEdgeResult.selfEdge;
    this.directedGraph=new DirectedGraph(data);
    this.directedGraph.init();
    data.originGraphInfo=getGraphInfo(this.directedGraph.nodes,this.directedGraph.edges);
    var paperCount=0;
    for(var i=0;i<this.directedGraph.nodes.length;i++){
        paperCount+=this.directedGraph.nodes[i].size;
    }
    data.originGraphInfo.paperCount=paperCount;
    if(!this.directedGraph.checkConnection())alert('original graph does not connected');    else{
        if(this.method=='filterFlow'){
            this.directedGraph.filterTopFlow(1);
            this.updateData(data,this.directedGraph);
        }
        else if(this.method=='recoveryWeight'){
            this.directedGraph.generateSpanningTree();
            this.updateData(data,this.directedGraph);

        }
        else if(this.method=='mst'){
            this.directedGraph.generateMaximalSpanningTree();
            this.updateData(data,this.directedGraph.maximalSpanningTree);
        }
    }
}
function updateData(data,graph){
    data.node=[];
    data.edge=[];
    clone(graph.nodes,data.node);
    clone(graph.edges,data.edge);
//        data.node = graph.nodes;
//        data.edge = graph.edges;
    if(this.method=='mst'){
        data.deletedTreeEdges=graph.deletedTreeEdges;
        data.deletedNonTreeEdges=graph.deletedNonTreeEdges;
    }
    else{
        data.deletedTreeEdges = graph.spanningTree.deletedTreeEdges;
        data.deletedNonTreeEdges=graph.spanningTree.deletedNonTreeEdges;
    }

    this.maxYear=graph.maxYear;
    this.minYear=graph.minYear;
    for(var i=0;i<data.node.length;i++){
        if(data.node[i].parents){
            data.node[i].parents[0]=null;
//                delete(data.node[i].parents[0]);
        }
        if(data.node[i].children){
            data.node[i].children=null;
//                delete(data.node[i].children);
        }
    }
}
function removeSelfEdge(edges){
    var newEdges=[];
    var selfEdges=[];
    for(var i=0;i<edges.length;i++){
        if(edges[i].source==edges[i].target){
            selfEdges.push(edges[i]);
        }
        else{
            newEdges.push(edges[i]);
        }
    }
    return {edge:newEdges,selfEdge:selfEdges};
}
function linkPruningOld(data){
    var removeSelfEdgeResult=removeSelfEdge(data.edge);
    data.edge = removeSelfEdgeResult.edge;
    data.selfEdge = removeSelfEdgeResult.selfEdge;
    directedGraph=new DirectedGraph(data);
    directedGraph.init();
    if(!directedGraph.checkConnection())alert('original graph does not connected');
    directedGraph.filterTopFlow(1.5);
    data.node = directedGraph.nodes;
    data.edge = directedGraph.edges;
    data.deletedTreeEdges = directedGraph.spanningTree.deletedTreeEdges;
    data.deletedNonTreeEdges=directedGraph.spanningTree.deletedNonTreeEdges;
    maxYear=directedGraph.maxYear;
    minYear=directedGraph.minYear;
    for(var i=0;i<data.node.length;i++){
        if(data.node[i].parents){
            data.node[i].parents[0]=null;
//            delete(data.node[i].parents[0]);
        }
        if(data.node[i].children){
            data.node[i].children=null;
//            delete(data.node[i].children);
        }
    }
//    setNodeWeight(data);
//    data['edge'].sort(function(a,b){
//        return b.flow*b.BFSWeight-a.flow*a.BFSWeight;
//    });
////    console.log(data);
//    var k;
//    for(var key in data['cluster']){
////        console.log('cluster key:'+key);
//        if(key!='300'){
//            k = parseInt(key.split('-')[0])+1;
////            console.log('cluster length:'+k);
//            break;
//        }
//    }
//    var deleted=[];
//    while(data['edge'].length>1.5*k){
//        deleted.push(data['edge'][data['edge'].length-1]);
//        data['edge'].pop();
//    }
////    console.log('prune over');
//
//    var visitedTree={};
//    var treeNum=0;
//    for(var key in data['cluster']){
//        if(!visitedTree[key]){
//            var visitedNode=getNodesByAssignRoot(data,key);
//            for(var i=0;i<visitedNode.length;i++){
//                if(!visitedTree[visitedNode[i]]){
//                    visitedTree[visitedNode[i]] = {nodes:visitedNode,num:treeNum};
//                }
//            }
//            treeNum+=1;
//        }
//    }
//    var newTree={};
//    for (var key in visitedTree){
//        newTree[visitedTree[key].num]=visitedTree[key].nodes;
//    }
//    visitedTree=newTree;
//    var rootTree=[];
//    var otherTrees=[];
//    for(var key in visitedTree){
//        for (var i=0;i<visitedTree[key].length;i++){
//            if(visitedTree[key][i]=='300')
//            {
//                rootTree=visitedTree[key];
//                delete visitedTree[key];
//                break;
//            }
//
//        }
//    }
//    for (var key in visitedTree){
//        otherTrees.push(visitedTree[key]);
//    }
//
//
//
//    var visitedNode=getNodes(data);
//    var reachableEdge=[];
//    for(var i= 0,len=data['edge'].length;i<len;i++){
//        if(!in_array(data['edge'][i].source,visitedNode)||!in_array(data['edge'][i].target,visitedNode)){
//            deleted.push(data['edge'][i]);
//        }
//        else{
//            reachableEdge.push(data['edge'][i]);
//        }
//    }
////    data['edge']=reachableEdge;
//    var nodeStep=[];
//    visitedNode=[];
//    for(var key in data['cluster']){
//        var E=[];
//        var S=[];
//        var target=key;
//        for(var i= 0,len=reachableEdge.length;i<len;i++){
//            if(reachableEdge[i].target==target&&reachableEdge[i].source!=reachableEdge[i].target){
//                S.push(reachableEdge[i]);
//            }
//        }
//        for(var i= 0,len=deleted.length;i<len;i++){
//            if(deleted[i].target==target&&deleted[i].source!=deleted[i].target){
//                E.push(deleted[i]);
//            }
//        }
//        E.sort(function(a,b){
//            return b.flow*b.BFSWeight-a.flow*a.BFSWeight;
//        });
//        if(S.length==0&&E.length>=1){
//            for(var i= 0,len=E.length;i<len;i++){
//                if(E[i].source!=E[i].target){
//                    visitedNode=getNodes(data);
//                    if(in_array(E[i].source,visitedNode)){
//                        data['edge'].push(E[i]);
//                        visitedNode=getNodes(data);
//                        var recovery=String(E[i].source)+'->'+String(E[i].target);
////                        console.log('recover edge:'+recovery);
//                        break;
//                    }
//                }
//            }
//        }
//    }
//
//    var newEdge=[];
//    for(var i= 0,len=data['edge'].length;i<len;i++){
//        if(data['edge'][i].source!=data['edge'][i].target){
//            var edge=Edge.newedge();
//            for(var key in data['edge'][i]){
//                edge[key]=data['edge'][i][key];
//            }
//            newEdge.push(edge);
//        }
//        else deleted.push(data['edge'][i]);
//    }
//    data['edge']=newEdge;
//
//    //test the top k flow in deleted
//    deleted.sort(function(a,b){return b.flow*b.BFSWeight-a.flow*a.BFSWeight;});
////    for(var i= 0,count=0;i<deleted.length;i++){
////        if(count==10)break;
////        var edge=deleted[i];
////        var source=edge.source;
////        var target=edge.target;
////        if(in_array(source,visitedNode)&&target!=source){
////            data['edge'].push(edge);
////            count+=1;
////        }
////
////    }
//
//    var tmpEdgeString=[];
//    var tmpEdge=[];
//    var tmpNode={};
//    for(var i=0;i<data['edge'].length;i++){
//        var edgeString=data['edge'][i].source+'->'+data['edge'][i].target;
//        if(!in_array(edgeString,tmpEdgeString)){
//            tmpEdge.push(data['edge'][i]);
//            tmpEdgeString.push(edgeString);
//            if(!tmpNode[data['edge'][i].source])tmpNode[data['edge'][i].source]=data['cluster'][data['edge'][i].source];
//            if(!tmpNode[data['edge'][i].target])tmpNode[data['edge'][i].target]=data['cluster'][data['edge'][i].target];
//        }
//    }
//    data['edge']=tmpEdge;
//    data['cluster']=tmpNode;
//    //    console.log('visitedNode:\n'+visitedNode);
//    visitedNode=getNodes(data);
//    reachableEdge=[];
//    for(var i= 0,len=data['edge'].length;i<len;i++){
//        if(!in_array(data['edge'][i].source,visitedNode)||!in_array(data['edge'][i].target,visitedNode)){
//            deleted.push(data['edge'][i]);
//        }
//        else{
//            reachableEdge.push(data['edge'][i]);
//        }
//    }
//    data['edge']=reachableEdge
//
//    deleted.sort(function(a,b){return b.flow-a.flow;});
//    for (var key in data['cluster']){
//        for (var i=0;i<deleted.length;i++){
//            if(deleted[i].source==key&&deleted[i].target==key){
//                data['cluster'][key].selfEdge=deleted[i].flow;
//            }
//        }
//    }

}
function getNodesByAssignRoot(data,root){
    data['edge'].sort(function(a,b){
        return b.flow- a.flow;
    });
    var nodeStep=[];
    var visitedNode=[];
    nodeStep.push(root);
    while(nodeStep[0]){
        var newStep=[];
        for(var i=0;i<nodeStep.length;i++){
            var step=nodeStep[i];
            if(!in_array(step,visitedNode)){
                visitedNode.push(step);
                for(var j=0;j<data['edge'].length;j++){
                    var edge=data['edge'][j];
                    var source=edge.source;
                    var target=edge.target;
                    if(source==step&&!in_array(target,visitedNode)){
                        newStep.push(edge.target);
                    }
                }
            }
        }
        nodeStep=newStep;
    }
    return visitedNode;
}
function getNodes(data){
    data['edge'].sort(function(a,b){
        return b.flow- a.flow;
    });
    var nodeStep=[];
    var visitedNode=[];
    var root=300;
    nodeStep.push(root);
    while(nodeStep[0]){
        var newStep=[];
        for(var i=0;i<nodeStep.length;i++){
            var step=nodeStep[i];
            if(!in_array(step,visitedNode)){
                visitedNode.push(step);
                for(var j=0;j<data['edge'].length;j++){
                    var edge=data['edge'][j];
                    var source=edge.source;
                    var target=edge.target;
                    if(source==step&&!in_array(target,visitedNode)){
                        newStep.push(edge.target);
                    }
                }
            }
        }
        nodeStep=newStep;
    }
    return visitedNode;
}
function setNodeWeight(data){
    data['edge'].sort(function(a,b){
        return b.flow- a.flow;
    });
    var nodeStep=[];
    var visitedNode=[];

    var rootWeight=1;
    var k=0.1;
    var level=0;
    var root=300;
    nodeStep.push(root);
    while(nodeStep[0]){
        var newStep=[];
        for(var i=0;i<nodeStep.length;i++){
            var step=nodeStep[i];
            if(!in_array(step,visitedNode)){
                visitedNode.push(step);
                if(!data['cluster'][step].BFSWeight)data['cluster'][step].BFSWeight=rootWeight*Math.pow(k, level);

                for(var j=0;j<data['edge'].length;j++){
                    if(data['edge'][j].source==step&&!data['edge'][j].BFSWeight)data['edge'][j].BFSWeight=rootWeight*Math.pow(k, level);
                    var edge=data['edge'][j];
                    var source=edge.source;
                    var target=edge.target;
                    if(source==step&&!in_array(target,visitedNode)){
                        newStep.push(edge.target);
                    }
                }
            }
        }
        level+=1
        nodeStep=newStep;
    }
    return visitedNode;
}
function linkPruning_su(data){


//    console.log(data);
    data['edge'].sort(function(a,b){
        return b.flow-a.flow;
    });
//    console.log(data);
    var k;
    for(var key in data['cluster']){
//        console.log('cluster key:'+key);
        if(key!='300'){
            k = parseInt(key.split('-')[0])+1;
//            console.log('cluster length:'+k);
            break;
        }
    }
    var deleted=[];
    while(data['edge'].length>2*k){
        deleted.push(data['edge'][data['edge'].length-1]);
        data['edge'].pop();
    }
//    console.log('prune over');
    var visitedNode=getNodes(data);
    var reachableEdge=[];
    for(var i= 0,len=data['edge'].length;i<len;i++){
        if(!in_array(data['edge'][i].source,visitedNode)||!in_array(data['edge'][i].target,visitedNode)){
            deleted.push(data['edge'][i]);
        }
        else{
            reachableEdge.push(data['edge'][i]);
        }
    }
    data['edge']=reachableEdge;
    var nodeStep=[];
    visitedNode=[];
    for(var key in data['cluster']){
        var E=[];
        var S=[];
        var target=key;
        for(var i= 0,len=data['edge'].length;i<len;i++){
            if(data['edge'][i].target==target&&data['edge'][i].source!=data['edge'][i].target){
                S.push(data['edge'][i]);
            }
        }
        for(var i= 0,len=deleted.length;i<len;i++){
            if(deleted[i].target==target&&deleted[i].source!=deleted[i].target){
                E.push(deleted[i]);
            }
        }
        E.sort(function(a,b){
            return b.flow-a.flow;
        });
        if(S.length==0&&E.length>=1){
            for(var i= 0,len=E.length;i<len;i++){
                if(E[i].source!=E[i].target){
                    visitedNode=getNodes(data);
                    if(in_array(E[i].source,visitedNode)){
                        data['edge'].push(E[i]);
                        visitedNode=getNodes(data);
                        var recovery=String(E[i].source)+'->'+String(E[i].target);
//                        console.log('recover edge:'+recovery);
                        break;
                    }
                }
            }
        }
    }

    var newEdge=[];
    for(var i= 0,len=data['edge'].length;i<len;i++){
        if(data['edge'][i].source!=data['edge'][i].target){
            var edge=Edge.newedge();
            for(var key in data['edge'][i]){
                edge[key]=data['edge'][i][key];
            }
            newEdge.push(edge);
        }
    }
    data['edge']=newEdge;

    //test the top k flow in deleted
    deleted.sort(function(a,b){return b.flow-a.flow});
    for(var i= 0,count=0;i<deleted.length;i++){
        if(count==10)break;
        var edge=deleted[i];
        var source=edge.source;
        var target=edge.target;
        if(in_array(source,visitedNode)&&target!=source){
            data['edge'].push(edge);
            count+=1;
        }

    }

    var tmpEdgeString=[];
    var tmpEdge=[];
    var tmpNode={};
    for(var i=0;i<data['edge'].length;i++){
        var edgeString=data['edge'][i].source+'->'+data['edge'][i].target;
        if(!in_array(edgeString,tmpEdgeString)){
            tmpEdge.push(data['edge'][i]);
            tmpEdgeString.push(edgeString);
            if(!tmpNode[data['edge'][i].source])tmpNode[data['edge'][i].source]=data['cluster'][data['edge'][i].source];
            if(!tmpNode[data['edge'][i].target])tmpNode[data['edge'][i].target]=data['cluster'][data['edge'][i].target];
        }
    }
    data['edge']=tmpEdge;
    data['cluster']=tmpNode;
    //    console.log('visitedNode:\n'+visitedNode);
    visitedNode=getNodes(data);
    reachableEdge=[];
    for(var i= 0,len=data['edge'].length;i<len;i++){
        if(!in_array(data['edge'][i].source,visitedNode)||!in_array(data['edge'][i].target,visitedNode)){
            deleted.push(data['edge'][i]);
        }
        else{
            reachableEdge.push(data['edge'][i]);
        }
    }
    data['edge']=reachableEdge



}

function updateClusterOption(clusterList) {
    var clusterOptionID = 1;
    var optionDiv = d3.select('.optionDiv');
    var selectDiv = optionDiv.select('#selectDiv' + clusterOptionID)
    selectDiv.selectAll('*').remove();
    var fontFamily = 'Microsoft YaHei';
    var fontSize = 12;
    var maxLabel = d3.max(clusterList, function (d) {
        return d.toString().visualLength(fontFamily, fontSize);
    });
    selectDiv.append('cite')
        .attrs({
            class: 'cite',
            id: 'cite' + clusterOptionID
        })
        .on('click', function () {
            var thisCite = d3.select(this);
            var id = thisCite.attr('id').split('cite')[1];
            var ul = old$("#ul" + id);
            var ul_display = d3.select('#ul' + id).style('display');
            if (ul.css("display") == "none") {
                ul.slideDown("fast");
            } else {
                ul.slideUp("fast");
            }
        })
        .styles({
            width: maxLabel + 30 + px,
            height: '24px',
            'line-height': '24px',
            'font-family': 'Microsoft YaHei',
            'font-size': 12 + px,
            color: color.optionTextColor
        })
        .append('a')
        .styles({
            'margin-left': 10 + px
        })
        .html(function () {
            return clusterCount || '20';
        });
    var newUL = selectDiv.append('ul')
        .attrs({
            class: 'ul',
            id: 'ul' + clusterOptionID
        })
        .styles({
            width: maxLabel + 20 + px
        });
    for (var j = 0; j < clusterList.length; j++) {
        newUL.append('li')
            .styles({})
            .append('a')
            .styles({
                width: maxLabel + px,
                height: '24px',
                'line-height': '24px',
                'font-family': 'Microsoft YaHei',
                'font-size': 12 + px
            })
            .attrs({
                selectId: j,
                father: clusterOptionID,
                cluster: clusterList[j]
            })
            .on('click', function () {
                var id = d3.select(this).attr('father');
                var txt = old$(this).text();
                var cluster = d3.select(this).attr('cluster');
                old$("#cite" + id + ' a').html(txt);
                var value = old$(this).attr("selectId");
//                    inputselect.val(value);
                old$("#ul" + id).hide();
                var d = {fatherID: id, selectID: value, cluster: cluster};
                changeOption(d);
            })

            .html(clusterList[j]);
    }
}
function updateTitle(title) {
    var titleDiv = d3.select('.titleDiv');
    titleDiv.select('text').html(title);
}
function processData(d) {
    var clusterList = d.clusterIDList;
    var title = d.cluster['300'].title;
    updateTitle(title);
    updateClusterOption(clusterList);
    if (this.requestMethod == 'ajax' || this.requestMethod == 'local') {
        for (var key in d.cluster) {
            var cluster = d.cluster[key];
            var nodeYearInfo = {};
            var list = [];
            if (cluster.nodeidlist) {
                for (var year in cluster.nodeidlist) {
                    nodeYearInfo[year] = cluster.nodeidlist[year].length;
                    for (var i = 0; i < cluster.nodeidlist[year].length; i++) {
                        list.push(cluster.nodeidlist[year][i]);
                    }

                }
                cluster.nodeYearInfo = nodeYearInfo;
            }
            else {
                var sum = 0
                for (var day in cluster.nodeYearInfo) {
                    sum += parseInt(cluster.nodeYearInfo[day]);
                }
                cluster.size = sum;
            }
            cluster.nodeidlist = list;
            cluster.author = '';
            cluster.venue = '';
            cluster.author_venue = {
                author: '',
                venue: ''
            }
        }
        for (var i = 0; i < d.edge.length; i++) {
            var edge = d.edge[i];
            edge.oldWeight = {};
            clone(edge.weight, edge.oldWeight);
            edge.weight = {};
            for (var key in edge.oldWeight) {
                var years;
                (key.split('-').length == 2) ? years = key.split('-') : years = key.split('_');
                var targetYear = years[1].toInt();
                edge.weight[targetYear] = edge.oldWeight[key];
            }
        }
    }
    this.fontScale = d3.scaleLinear()
        .domain([40, 5])
        .range([20, 5]);
    var json_nodes = this.dataPreProcess(d);
    var json_edges = d.edge;
    this.data.postData[this.focusedID] = {edge: json_edges, node: json_nodes};
    if (this.method != 'origin') {
        this.linkPruning();
    }
    var assistEdge = [];
    var newGraph = new Graph(this.data.postData[this.focusedID].edge, assistEdge);
    this.reCalculateLayout(newGraph, this.data.postData[this.focusedID]);
    reverseXY(this.data.postData[this.focusedID]);
    this.getYearData(this.data.postData[this.focusedID]);
    this.coordinateOffset(this.data.postData[this.focusedID]);
    if (this.method != 'filterFlow' && this.method != 'origin') {
        this.calculateFlowMap(this.data.postData[this.focusedID]);
    }
    this.temporalSummarization(this.data.postData[this.focusedID]);
    filterSelfEdge(this.data.postData[this.focusedID]);
    this.setInitNodeTransition(this.data.postData[this.focusedID]);
    this.setInitEdgeTransition(this.data.postData[this.focusedID]);
    this.getRelation(this.data.postData[this.focusedID]);
    getCurves(this.data.postData[this.focusedID]);
    if (this.focusedID && this.preFocusedID) {
        var fID = parseInt(this.focusedID.split('_')[1]);
        var pID = parseInt(this.preFocusedID.split('_')[1]);
        if (fID > pID) {
            generateTransitionData(this.data.postData[this.focusedID], this.data.postData[this.preFocusedID]);
        }
        else if (fID < pID) {
            generateTransitionData(this.data.postData[this.preFocusedID], this.data.postData[this.focusedID]);
        }
    }
}
function edgeAdjustment(d) {
    var edges = d.edge;
    for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];
        var p = edge.points;
        var x1, y1, x2, y2, r1, r2, dis;
        var last = p.length - 1;
        dis = distance(p[0].x, p[0].y, p[last].x, p[last].y);
        r1 = sizeScale.sizeScale(p[0].size);
        r2 = sizeScale.sizeScale(p[last].size);
//        x1=getstart(p[0].x,p[last].x,r1,dis);
//        y1=getstart(p[0].y,p[last].y,r1,dis);
        x2 = getend(p[last].x, p[0].x, r2, dis);
        y2 = getend(p[last].y, p[0].y, r2, dis);
        var adjustList = [p[last - 3], p[last - 2], p[last - 1], p[last]];

        var originPoints = adjustPoints(adjustList, {x: x2, y: y2});
        edge.originPoints = originPoints;

    }
}
function adjustPoints(points, point) {
    var origin = [];
    clone(points, origin);
    var box = findBoxOfPoints(points);
    points[1].ratioToLeft = (points[1].x - box.x) / box.width;
    points[1].ratioToTop = (points[1].y - box.y) / box.height;
    points[2].ratioToLeft = (points[2].x - box.x) / box.width;
    points[2].ratioToTop = (points[2].y - box.y) / box.height;
    points[3].x = point.x;
    points[3].y = point.y;
    var newBox = findBoxOfPoints(points);
    points[1].x = newBox.width * points[1].ratioToLeft + newBox.x;
    points[2].x = newBox.width * points[2].ratioToLeft + newBox.x;
    points[1].y = newBox.height * points[1].ratioToTop + newBox.y;
    points[2].y = newBox.height * points[2].ratioToTop + newBox.y;
    return origin;
//    svg.selectAll('whatever')
//        .data(points)
//        .enter()
//        .append('circle')
//        .each(function(d){
//            d3.select(this)
//                .attrs({
//                    cx:d.x,
//                    cy:d.y,
//                    r:5
//                })
//                .styles({
//                    fill:'black'
//                })
//        })

}
function filterSelfEdge(d) {
    var edge = d.edge
    var newEdge = []
    for (var i = 0; i < edge.length; i++) {
        if (edge[i].source != edge[i].target) {
            newEdge.push(edge[i])
        }
    }
    d.edge = newEdge;

}
function countFlow(edges) {
    var flow = 0;
    for (var i = 0; i < edges.length; i++) {
        flow += edges[i].flow;
    }
    return flow;
}
function countYearFlow(edges) {
    var flow = 0;
    for (var i = 0; i < edges.length; i++) {
        flow += edges[i].flow * edges[i].yearWeight;
    }
    return flow;
}
function countCitation(edges) {
    var citation = 0;
    for (var i = 0; i < edges.length; i++) {
        citation += edges[i].citation;
    }
    return citation;
}
function preLayout(d) {
    var layoutData = {};
    clone(d, layoutData);
    this.axisLayout(d);
    this.yearFilter = [this.minYear, this.maxYear];
    this.preYear = this.minYear;
    var newD = this.filterDataByYear(d, [this.yearFilter[0], this.yearFilter[1]]);
    this.layout(optionNumber, false, false, newD);
    this.ifInitLayout = false;
    this.requestTitleList(this.focusedNodeData, 300);
}
function filterDataByYear(d, yearFilter) {
    //console.log(yearFilter);
    var animateMode = this.animateMode;
    yearFilter[1] -= 1;
    //过滤完之后需要更新id
    var nodes = d.node;
    var edges = d.edge;
    var newEdges = [];
    var newNodes = [];
    var yearDelay = this.yearDelay;
    var minYear = this.minYear;
    //filter edges
    for (var i = 0; i < edges.length; i++) {
        var edge = edges[i];
        //if (animateMode == flipBook) {
        var years = edge.yearSet.values();
        for (var j = 0; j < years.length; j++) {
            if (years[j] >= yearFilter[0] && years[j] <= yearFilter[1]) {
                newEdges.push(edge);
                newEdges[newEdges.length - 1].delay -= yearDelay * (yearFilter[0] - minYear);
                break;

            }
        }
        edge.ratio = 0;
        for (var year in edge.yearRatioDic) {
            if (year >= yearFilter[0] && year <= yearFilter[1]) {
                edge.ratio += edge.yearRatioDic[year];
            }
        }


    }
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].sourceID = false;
        nodes[i].targetID = false;
    }
    //rebuild the relation between edges and nodes
    for (var i = 0; i < newEdges.length; i++) {
        var edge = newEdges[i];
        var source = edge.source;
        var target = edge.target;

        if (nodes[source].targetID && !in_array(target, nodes[source].targetID))
            nodes[source].targetID.push(target);
        else {
            nodes[source].targetID = [target.toString()];
        }

        nodes[target].sourceID = source.toString();
    }
    for (var i = 0; i < nodes.length; i++) {

        var j = 0;
        var newNodeYearInfo = {};
        var len = 0;
        var preStatus = minYear;
        if (animateMode == flipBook) {
            for (var key in nodes[i].nodeYearInfo) {
                if (key.toInt() < yearFilter[0])preStatus = key.toInt();
                else break;
            }
        }
        else if (animateMode == movie) {
            preStatus = yearFilter[0];
        }
        var k = 0;
        var newDelay = [];
        var delaySum = 0;
        for (var key in nodes[i].nodeYearInfo) {

            var year = key.toInt();
            if (animateMode == flipBook) {
                if (year >= yearFilter[0] && year <= yearFilter[1]) {
                    newNodeYearInfo[key] = nodes[i].nodeYearInfo[key];
                    newDelay.push(nodes[i].oriDelay[k]);
                    len += 1;
                }
                else if (year < yearFilter[0]) {
                    delaySum += nodes[i].oriDelay[k];
                }
            }
            else {
                if (year >= preStatus && year <= yearFilter[1]) {
                    newNodeYearInfo[key] = nodes[i].nodeYearInfo[key];
                    newDelay.push(nodes[i].oriDelay[k]);
                    len += 1;
                }
                else if (year < preStatus) {
                    delaySum += nodes[i].oriDelay[k];
                }
            }


            k += 1;
        }
        if (len > 0) {
//            setNodeTransition(nodes, preYear);
            newDelay[0] += delaySum;
            newNodes.push(nodes[i]);
            var minKey = 2100;
            var size = 0;
            for (var key in newNodeYearInfo) {
                size += newNodeYearInfo[key];
                var year = key.toInt();
                if (year < minKey)minKey = year;
            }
            if (animateMode == flipBook) {
                for (var key in nodes[i].nodeYearInfo) {
                    if (!newNodeYearInfo[key])newNodeYearInfo[minKey] += nodes[i].nodeYearInfo[key];
                }
            }
            newNodes[newNodes.length - 1].newNodeYearInfo = newNodeYearInfo;
            newNodes[newNodes.length - 1].delay = newDelay;
            newNodes[newNodes.length - 1].newSize = size;
        }

    }
    this.setNodeTransition(newNodes, yearFilter[0]);
    var newD = {
        deletedNonTreeEdges: d.deletedNonTreeEdges,
        deletedTreeEdges: d.deletedTreeEdges,
        nodeYearData: d.nodeYearData,
        originGraphInfo: d.originGraphInfo,
        selfEdge: d.selfEdge,
        sunNodeYearData: d.sunNodeYearData
    };
    newD.node = newNodes;
    newD.edge = newEdges;
    return newD;
}
function setNodeTransition(nodes, preYear) {
    var yearDelay = this.yearDelay;
    var yearFilter = this.yearFilter;
    var maxYear = this.maxYear;
    var minYear = this.minYear;
//    var thisYear;
//    var lastYear=minYear;
//    for(var i=0;i<edges.length;i++){
//        var target=edges[i].target;
//        nodes[target].delay = [];
//        for(var key in edges[i].weight){
//            var year=parseInt(key);
//            if(lastYear==minYear){
//                nodes[target].delay.push({delay:2000*(thisYear-lastYear+1),year:thisYear,});
//            }
//            else{
//                nodes[target].delay.push(2000*(thisYear-lastYear));
//            }
//            lastYear=thisYear;
//        }
//    }
    var timeDic = {};
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].parentNode) {
            nodes[i].sourceID = nodes[i].parentNode.id;
            nodes[i].parentNode = null;
//            delete(nodes[i].parentNode);
        }
        if (nodes[i].children) {
            nodes[i].targetID = []
            for (var j = 0; j < nodes[i].children.length; j++) {
                nodes[i].targetID.push(nodes[i].children[j].id);
            }
            nodes[i].children = null;
//            delete(nodes[i].children);
        }
        var thisYear;
        var lastYear = preYear;
        var sum = 0;
//        nodes[i].delay = [];
        nodes[i].delay[0] -= yearDelay * (yearFilter[0] - minYear);
        nodes[i].ratio = [];
        nodes[i].sizeSeries = [];
        var j = 0;
        for (var key in nodes[i].nodeYearInfo) {
            thisYear = parseInt(key);
            sum += parseInt(nodes[i].nodeYearInfo[key]);
            if (thisYear >= yearFilter[0] && thisYear <= yearFilter[1]) {
                var ratio = parseFloat(sum / nodes[i].size);
                nodes[i].sizeSeries.push(sum);
                nodes[i].ratio.push(ratio);
                lastYear = thisYear;
            }

            j += 1;
        }

        if (nodes[i].delay[0] < 0) {

//            for(var j=1;j<nodes[i].delay.length;j++){
            nodes[i].delay[1] += nodes[i].delay[0];
//            }
            nodes[i].delay[0] = 0;
        }
        nodes[i].sizeRatio = [];
        nodes[i].sizeDelay = [];

        //
        nodes[i].timeSeries = [];
        nodes[i].timeSeries[0] = nodes[i].delay[0];
        for (var j = 1; j < nodes[i].delay.length; j++) {
            nodes[i].timeSeries[j] = nodes[i].delay[j] + nodes[i].timeSeries[j - 1];
        }

        nodes[i].sizeIncrease = [];
        nodes[i].sizeIncrease[0] = nodes[i].sizeSeries[0];
        nodes[i].sizeIncreaseRatio = [];
        for (var j = 1; j < nodes[i].sizeSeries.length; j++) {
            nodes[i].sizeIncrease[j] = nodes[i].sizeSeries[j] - nodes[i].sizeSeries[j - 1];
        }


        for (var j = 0; j < nodes[i].timeSeries.length; j++) {
            var time = nodes[i].timeSeries[j];
            var nodeID = nodes[i].id;
            var deltaSize = nodes[i].sizeIncrease[j];
            if (!(time in timeDic))timeDic[time] = {'sum': 0, 'list': []};
            timeDic[time]['list'].push({'id': nodeID, 'size': deltaSize});
            timeDic[time]['sum'] += deltaSize;
        }

        clone(nodes[i].ratio, nodes[i].sizeRatio);
        clone(nodes[i].delay, nodes[i].sizeDelay);

    }
    var nodesDic = {};

    for (var i = 0; i < nodes.length; i++) {
        id = nodes[i].id;
        nodesDic[id] = nodes[i];
    }
    for (var time in timeDic) {
        var obj = timeDic[time];
        var sum = obj['sum'];
        var list = obj['list'];

        var sizeList = [];
        for (var i = 0; i < list.length; i++) {
            sizeList.push(list[i]['size']);
        }
        var scale = d3.scaleLinear()
            .domain([0, d3.max(sizeList)])
            .range([0.2, 1]);
        for (var i = 0; i < list.length; i++) {
            var id = list[i]['id'];
            var size = list[i]['size'];
            var index = nodesDic[id].timeSeries.indexOf(parseInt(time));
            var ratio = scale(size);
            if (ratio < 0.5)ratio = 0.01;
            nodesDic[id].sizeIncreaseRatio[index] = ratio;
            list[i]['ratio'] = ratio;
        }
    }
    //console.log(timeDic);
}
function setInitNodeTransition(d) {
    var nodes = d.node;
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].duration = 100;
        nodes[i].delay = [];
        var preStep;
        preStep = this.minYear;
        var j = 0
        for (var key in nodes[i].nodeYearInfo) {
            var year = key.toInt();
            var delay = this.yearDelay * (year - preStep);
            if (j == 0)delay += 1000;
            nodes[i].delay.push(delay);
            preStep = year;
            j += 1;
        }
    }
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].focused == 'true') {
            nodes[i].delay[0] -= 1000;
            break;
        }
        nodes[i].oriDelay = [];
        clone(nodes[i].delay, nodes[i].oriDelay);
    }
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].oriDelay = [];
        clone(nodes[i].delay, nodes[i].oriDelay);
    }
//    nodes[0].delay[0]-=1000;
}
function setInitEdgeTransition(d) {

    var edges = d.edge;
    //var newEdges = [];
    var edgeMaxYear = this.maxYear;
    var edgeMinYear = this.minYear;
//    for(var i=0;i<edges.length;i++){
//        for(var key in edges[i].weight){
//            var year=parseInt(key);
//            if(year>edgeMaxYear)edgeMaxYear=year;
//            if(year<edgeMinYear)edgeMinYear=year;
//        }
//    }
    for (var i = 0; i < edges.length; i++) {
        var totalSum = 0;
        for (var key in edges[i].weight) {
            totalSum += parseInt(edges[i].weight[key]);
        }
        var sum = 0;
        edges[i].yearRatioDic = {};
        edges[i].yearSet = d3.set();
        edges[i].flipBookStartYear = edgeMinYear;
        edges[i].flipBookEndYear = edgeMaxYear;
        if (edges[i].isBackgroundEdge || edges[i].isForegroundSourceEdge || edges[i].isForegroundTargetEdge) {
            edges[i].flipBookRatio = {};
            for (var j = edgeMinYear; j <= edgeMaxYear; j++) {
                var partSum = 0;
                for (var k = edgeMinYear; k <= j; k++) {
                    if (k in edges[i].weight) {
                        partSum += edges[i].weight[k];
                    }
                }
                var ratioKey = edgeMinYear + '_' + j;
                edges[i].flipBookRatio[ratioKey] = (partSum / totalSum);
            }
        }

        for (var key in edges[i].weight) {
            edges[i].yearRatioDic[key] = parseFloat(edges[i].weight[key] / totalSum);
            edges[i].yearSet.add(key);
        }
        edges[i].delay = this.yearDelay * (parseInt(key) - edgeMinYear);
        edges[i].duration = this.edgeDuration;
        edges[i].id = i;
        //for (var key in edges[i].weight) {
        //    sum += parseInt(edges[i].weight[key]);
        //    var edge = {};
        //
        //    clone(edges[i], edge);
        //    edge.year = parseInt(key);
        //    edge.delay = this.yearDelay * (parseInt(key) - edgeMinYear);
        //    edge.ratio = parseFloat(sum / totalSum);
        //
        //    edge.duration = this.edgeDuration;
        //    edge.id = i;
        //    if(edge.ratio!=1)edge.isFaker=true;
        //    newEdges.push(edge);
        //
        //    if(edge.source=='14'&&edge.target == '7'){
        //        console.log(edge.ratio)
        //        console.log(edge)
        //    }
        //}
    }
    //d.edge = newEdges;
}

function getYearData(d) {
    var nodeYearDic = {}
    for (var i = 0; i < d.node.length; i++) {
        for (var key in d.node[i].nodeYearInfo) {
            if (nodeYearDic[key])nodeYearDic[key] += d.node[i].nodeYearInfo[key];
            else nodeYearDic[key] = d.node[i].nodeYearInfo[key];
        }
    }
//    console.log(nodeYearDic);
    var nodeYearData = []
    for (var key in nodeYearDic) {
        nodeYearData.push([parseInt(key), nodeYearDic[key]]);
    }
//    console.log(nodeYearData);
    this.maxYear = d3.max(nodeYearData, function (d) {
        return d[0]
    });
    this.minYear = d3.min(nodeYearData, function (d) {
        return d[0]
    });
    var maxCount = d3.max(nodeYearData, function (d) {
        return d[1]
    });
    var minCount = d3.min(nodeYearData, function (d) {
        return d[1]
    });
    for (var i = this.minYear; i <= this.maxYear; i++) {
        if (!nodeYearDic[i])nodeYearDic[i] = 0;
    }
//    if(!requestMethod=='local'){
    nodeYearDic[this.maxYear + 1] = 0;
    this.maxYear += 1;
//    }

    var nodeYearData = []
    for (var key in nodeYearDic) {
        nodeYearData.push([parseInt(key), nodeYearDic[key]]);
    }
    nodeYearData.sort(function (a, b) {
        return a[0] - b[0]
    });
    d.nodeYearData = {
        data: nodeYearData,
        maxYear: this.maxYear,
        maxCount: maxCount,
        minYear: this.minYear,
        minCount: minCount
    };
    this.yearFilter = [this.minYear, this.maxYear];
}
function generateTransitionData(chlData, parData) {
    //process nodes
    var fID = parseInt(focusedID.split('_')[1]);
    var pID = parseInt(preFocusedID.split('_')[1]);
    var chlNodeIDDic = {};
    var parNodeIDDic = {};
    var transitionData = {node: [], edge: []};
    for (var i = 0; i < chlData.node.length; i++) {
        chlNodeIDDic[chlData.node[i].oldKey] = i;
    }
    for (var i = 0; i < parData.node.length; i++) {
        parNodeIDDic[parData.node[i].oldKey] = i;
    }
    for (var i = 0; i < chlData.node.length; i++) {
        if (chlData.node[i].oldKey == '300') {
            transitionData.node[i] = {};
            clone(chlData.node[i], transitionData.node[i]);
            transitionData.node[i].x = parData.node[parNodeIDDic['300']].x;
            transitionData.node[i].y = parData.node[parNodeIDDic['300']].y;
        }
        else {
            var chlKey = chlData.node[i].oldKey;
            var parKey = data.incrementalTree[fID][chlKey].parent;
            transitionData.node[i] = {};
            clone(chlData.node[i], transitionData.node[i]);
            transitionData.node[i].x = parData.node[parNodeIDDic[parKey]].x;
            transitionData.node[i].y = parData.node[parNodeIDDic[parKey]].y;
        }
    }
    //process edges
    clone(chlData.edge, transitionData.edge);
    for (var i = 0; i < transitionData.edge.length; i++) {
        var source = transitionData.edge[i].source;
        var target = transitionData.edge[i].target;
        var sourceX = transitionData.node[source].x;
        var sourceY = transitionData.node[source].y;
        var targetX = transitionData.node[target].x;
        var targetY = transitionData.node[target].y;
        transitionData.edge[i].points[0].x = sourceX;
        transitionData.edge[i].points[0].y = sourceY;
        transitionData.edge[i].points[2].x = targetX;
        transitionData.edge[i].points[2].y = targetY;

    }
    tmpNodes = transitionData.node;
    tmpCurves = transitionData.edge;
}
function generateAssistEdge(d) {
    var clusterCount = parseInt(focusedID.split('_')[1]);
    var tmpNodeID = clusterCount + 1;
    var tmpEdges = [];
//    console.log(d);
//    console.log(data.incrementalTree);
    var tree = data.incrementalTree[parseInt(clusterCount) - 5];
    //get node id oldid dic
    var idDic = {}
    for (var i = 0; i < d.node.length; i++) {
        idDic[d.node[i].oldKey] = i;
    }
    if (clusterCount != 5) {
        for (var key in tree) {
            var newNode = tmpNodeID;
            for (var i = 0; i < tree[key].child.length; i++) {
                var id = idDic[tree[key].child[i]];
                var newEdge = {source: newNode, target: id};
                tmpEdges.push(newEdge);
            }
            tmpNodeID += 1;
        }
    }
    return tmpEdges;
}
function procrustes(graph1, graph2) {
    function getNodeKeyDic(graph) {
        var dic = {};
        for (var i = 0; i < graph.node.length; i++) {
            var oldKey = graph.node[i].oldKey;
            dic[oldKey] = i;
        }
        return dic;
    }

    var graph1NodeDic = getNodeKeyDic(graph1);
    var graph2NodeDic = getNodeKeyDic(graph2);
//    console.log(graph1, graph2);
//    console.log(data.incrementalTree);
//    if(graph1.node.length<graph2.node.length){
    //small graph to large graph
    //translation
    var totalX = 0;
    var totalY = 0;
    var k = graph1.node.length + graph2.node.length;
    for (var i = 0; i < graph1.node.length; i++) {
        totalX += graph1.node[i].x;
        totalY += graph1.node[i].y;
    }
    for (var i = 0; i < graph2.node.length; i++) {
        totalX += graph2.node[i].x;
        totalY += graph2.node[i].y;
    }
    var avgX = totalX / k;
    var avgY = totalY / k;
    for (var i = 0; i < graph1.node.length; i++) {
        graph1.node[i].x -= avgX;
        graph1.node[i].y -= avgY;
    }
    for (var i = 0; i < graph2.node.length; i++) {
        graph2.node[i].x -= avgX;
        graph2.node[i].y -= avgY;
    }
    //uniform scaling
//    }
//    else{
    //large graph to small graph
//    }

}
function generateNodesDic(nodes) {
    var dic = {};
    for (var i = 0, len = nodes.length; i < len; i++) {
        var key = nodes[i].oldKey;
        var value = nodes[i];
        dic[key] = value;
    }
    return dic
}
function generateTmpNodes(oldNodes, newNodes) {
    var oldNodesDic = generateNodesDic(oldNodes);
    var newNodesDic = generateNodesDic(newNodes);
    tmpNodes = [];
    for (var i = 0, len = newNodes.length; i < len; i++) {
        var tmp = {};
        for (var key in newNodes[i]) {
            tmp[key] = newNodes[i][key];
        }
        tmpNodes.push(tmp);
    }
    var t = 0;

    for (var key in newNodesDic) {
        if (!oldNodesDic[key]) {
            var fatherKey = newNodesDic[key].father;
            var father = oldNodesDic[fatherKey];
            tmpNodes[t].x = father.x;
            tmpNodes[t].y = father.y;
        }
        else {
            tmpNodes[t].x = oldNodesDic[key].x;
            tmpNodes[t].y = oldNodesDic[key].y;

        }
        t += 1;

    }
}
function generateTmpCurves(oldCurves, newCurves) {
    tmpCurves = [];
    for (var i = 0, len = newCurves.length; i < len; i++) {
        var tmp = {}
        for (var key in newCurves[i]) {
            tmp[key] = newCurves[i][key];
        }
        tmpCurves.push(tmp);
        var id = newCurves[i].id;
        var existFlag = false;
        for (var j = 0, len1 = oldCurves.length; j < len1; j++) {
            if (oldCurves[j].id == id) {
                existFlag = true;
                tmp.points = oldCurves[j].points;
                tmp.opacity = 1;
                newCurves[i].opacity = 1;
                newCurves[i].delay = 0;
                newCurves[i].duration = duration;
                break;
            }

        }
        if (!existFlag) {
            tmp.opacity = 0;
            newCurves[i].opacity = 1;
            newCurves[i].delay = 3 / 4 * duration;
            newCurves[i].duration = 1 / 10 * duration;
        }

    }
}
function getRelation(d) {
    var nodes = d.node;
    var edges = d.edge;
    this.relation = {};
    for (var i = 0; i < nodes.length; i++) {
        var id = nodes[i].id.toInt();
        this.relation[id] = this.relationship.newrelation();
        this.relation[id].nodeid = i;
        for (var j = 0; j < edges.length; j++) {
            //if(!edges[j].recovered){
            if (edges[j].source == id || edges[j].target == id) {
                this.relation[id].edges.push(j);
            }
            //}
            //else{
            //    if(edges[j].routerClusters.indexOf(id)!=-1){
            //        this.relation[id].edges.push(j);
            //    }
            //}


        }
    }
}
function typeofObj(obj) {
    return Object.prototype.toString.call(obj);
}
function cloneArray(fromObj, toObj) {
    for (var j = 0; j < fromObj.length; j++) {
        var type = typeofObj(fromObj[j]);
        if (type == "[object Object]") {
            toObj[j] = {};
            cloneObj(fromObj[j], toObj[j]);
        }
        else if (type == "[object Array]") {
            toObj[j] = [];
            cloneArray(fromObj[j], toObj[j])
        }
        else {
            toObj[j] = fromObj[j];
        }
    }
}
function cloneObj(fromObj, toObj) {
    for (var i in fromObj) {
        if (!in_array(i, cloneIngoreList)) {
            if (typeofObj(fromObj[i]) == "[object Object]") {
                toObj[i] = {}
                cloneObj(fromObj[i], toObj[i]);
            }
            else if (typeofObj(fromObj[i]) == "[object Array]") {
                toObj[i] = [];
                cloneArray(fromObj[i], toObj[i])
            }
            else {
                toObj[i] = fromObj[i];
            }
        }

    }
}
function clone(fromObj, toObj) {
    if (typeofObj(fromObj) == "[object Object]")cloneObj(fromObj, toObj);
    else if (typeofObj(fromObj) == "[object Array]")cloneArray(fromObj, toObj);
    else toObj = fromObj;
}
function in_array(stringToSearch, arrayToSearch) {
    for (s = 0; s < arrayToSearch.length; s++) {
        thisEntry = arrayToSearch[s].toString();
        if (thisEntry == stringToSearch) {
            return true;
        }
    }
    return false;
}
function dataPreProcess(d) {
//    if(method=='mst'){
//    }

    this.calculateEdgeCitation(d);

    var newId = [];
    var json_nodes = [];
    var i = 0;
    this.maxSize = 0;
    for (var key in d.cluster) {
        var t = String(i);
        i += 1;
        newId[key] = t;
        if (key == '300') {
            this.title = d.cluster[key].title;
            var year = '';
            for (var yearKey in d.cluster[key].nodeYearInfo) {
                year = yearKey;
                break
            }
            if(!d.cluster[key].summary) d.cluster[key].summary = '';
            var author = d.cluster[key].summary.replace(/\]/g, '');
            author = author.split('[')[0];
            d.cluster[key].keywords = [author, year];
            d.cluster[key].onegram = [author, year];
            d.cluster[key].bigrams = [author, year];
        }
        d.cluster[key].x = parseFloat(d.cluster[key].x);
        d.cluster[key].y = parseFloat(d.cluster[key].y);
        d.cluster[key].size = d.cluster[key].nodeidlist.length;
        if (d.cluster[key].size > this.maxSize)this.maxSize = d.cluster[key].size;
        d.cluster[key].id = t;
        d.cluster[key].oldKey = key;
        json_nodes[t] = d.cluster[key];

    }
    this.sizeScale = new SizeScale(this.maxSize);

    for (var i = 0; i < d.edge.length; i++) {
        var source = parseInt(newId[d.edge[i].source]);
        d.edge[i].source = source;
        var target = parseInt(newId[d.edge[i].target]);
        d.edge[i].target = target;

    }

    //calculate #citation of edge
    return json_nodes;
}
function calculateEdgeCitation(data) {
    for (var i = 0; i < data['edge'].length; i++) {
        var edge = data['edge'][i];
        var flow = edge.flow;
        var source = edge.source;
        var target = edge.target;
        var sourceNode = data['cluster'][source];
        var sourceSize = sourceNode.nodeidlist.length;
        var targetNode = data['cluster'][target];
        var targetSize = targetNode.nodeidlist.length;
        var citation = parseInt(flow * Math.sqrt(sourceSize * targetSize));
        data['edge'][i].citation = citation;
    }
}
function initData(nodes, edges) {
    sortByCitations(nodes);
    getData(nodes, edges);
    getRelation();
    coordinateOffset();
    getCurves();
//    splitLabels(nodes, edges);
}
function draw() {
//    drawAuthorInfo();
    layout(optionNumber, false, false, data.postData[focusedID]);
}

function sortByCitations(data) {
//    console.log(data);
    for (var i = 1; i < data.length; i++) {
        data[i].nodes.sort(function (a, b) {
            return parseInt(b.citation_count) - parseInt(a.citation_count);
        })
    }
//    console.log(data);
}
//function getRelation(d){
//    var nodes=d.node;
//    var edges=d.edge;
//    for (var i=0;i<nodes.length;i++)
//    {
//        relation[i]=relationship.newrelation();
//        relation[i].nodeid=i;
//        for (var j=0;j<edges.length;j++)
//        {
//            if(edges[j].source==i||edges[j].target==i)
//            {
//                relation[i].edges.push(j);
//            }
//        }
//    }
//}
function coordinate(sx, sy, tx, ty) {
    var d = distance(sx, sy, tx, ty);
    var mid_x = (sx + tx) / 2;
    var mid_y = (sy + ty) / 2;
    var x = mid_x - ((2 - Math.sqrt(3)) / 4) * d;
    var y = mid_y - ((2 * Math.sqrt(3) - 3) / 4) * d;
    return [x, y];
}
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((y1 - y2), 2) + Math.pow((x1 - x2), 2));
}

function coordinateOffset(d) {
    var nodes = d.node;
    var edges = d.edge;
    var screenPreviousData = {};
    clone(d, screenPreviousData);
    this.data.screenPreviousData = {};
    this.data.screenPreviousData[this.focusedID] = screenPreviousData;
    var sizeScale = this.sizeScale;
    var max_x, max_y, min_x, min_y;
    max_x = max_y = -100000;
    min_x = min_y = 100000;
    for (var i = 0; i < nodes.length; i++) {
        if (parseInt(nodes[i].x + sizeScale.sizeScale(nodes[i].size)) > max_x) {
            max_x = parseInt(nodes[i].x + sizeScale.sizeScale(nodes[i].size));
        }
        if (parseInt(nodes[i].y + sizeScale.sizeScale(nodes[i].size) + 50) > max_y) {
            max_y = parseInt(nodes[i].y + sizeScale.sizeScale(nodes[i].size) + 50);
        }
        if (parseInt(nodes[i].x - sizeScale.sizeScale(nodes[i].size)) <= min_x) {
            min_x = parseInt(nodes[i].x - sizeScale.sizeScale(nodes[i].size));
        }
        if (parseInt(nodes[i].y - sizeScale.sizeScale(nodes[i].size)) <= min_y) {
            min_y = parseInt(nodes[i].y - sizeScale.sizeScale(nodes[i].size));
        }
    }
    var x_basic = (this.svg.attr("width") - this.size.width) / 2;
    var y_basic = (this.svg.attr("height") - this.size.height) / 2;
    var x_offset = x_basic - min_x;
    var y_offset = y_basic - min_y;
    var x_zoom = this.size.width / (max_x - min_x);
    var y_zoom = this.size.height / (max_y - min_y);
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].x += x_offset;
        nodes[i].y += y_offset;
    }
    for (var i = 0; i < edges.length; i++) {
        for (var j = 0; j < edges[i].assists.length; j++) {
//            console.log(edges[i].assists[j]);
//            console.log(edges[i].assists[j][1]);
            edges[i].assists[j][0] = parseInt(edges[i].assists[j][0]);
            edges[i].assists[j][1] = parseInt(edges[i].assists[j][1]);
            edges[i].assists[j][0] += x_offset;
            edges[i].assists[j][1] += y_offset;
        }
    }
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].x -= x_basic;
        nodes[i].y -= y_basic;
        nodes[i].x *= x_zoom;
        nodes[i].y *= y_zoom;
        nodes[i].x += x_basic;
        nodes[i].y += y_basic;
    }
    for (var i = 0; i < edges.length; i++) {
        for (var j = 0; j < edges[i].assists.length; j++) {
            edges[i].assists[j][0] -= x_basic;
            edges[i].assists[j][0] *= x_zoom;
            edges[i].assists[j][0] += x_basic;
            edges[i].assists[j][1] -= y_basic;
            edges[i].assists[j][1] *= y_zoom;
            edges[i].assists[j][1] += y_basic;
        }
    }
    d.node = nodes;
    d.edge = edges;
}
function findCircleEdges(d) {
    var nodes = d.node;
    var edges = d.edge;
    var edgeSourceTargetDic = getEdgeSourceTargetDic(edges);
    var nodeDic = getNodeDic(nodes);
    for (var i = 0, len = edges.length; i < len; i++) {
        var source = edges[i].source;
        var target = edges[i].target;
        if (edgeSourceTargetDic[target])if (edgeSourceTargetDic[target][source]) {
            var edge1 = edges[i];
            var edge2 = edgeSourceTargetDic[target][source];
            var p1 = {x: nodeDic[nodes[source].oldKey].x, y: nodeDic[nodes[source].oldKey].y};
            var p2 = {x: nodeDic[nodes[target].oldKey].x, y: nodeDic[nodes[target].oldKey].y};
            var p3 = {x: nodeDic[nodes[source].oldKey].x, y: nodeDic[nodes[source].oldKey].y};
            var p4 = {x: nodeDic[nodes[target].oldKey].x, y: nodeDic[nodes[target].oldKey].y};
            var e1 = {p1: p1, p2: p2};
            var e2 = {p1: p3, p2: p4};
            var newEdge = moveCircleEdge(e1, e2);
            edges[i].dx = e1.dx;
            edges[i].dy = e1.dy;
            edgeSourceTargetDic[target][source].dx = e2.dx;
            edgeSourceTargetDic[target][source].dy = e2.dy;

        }
    }
}
function getCurves(d) {
    var nodes = d.node;
    var edges = d.edge;
    for (var i = 0; i < edges.length; i++) {
        var dx = 0;
        var dy = 0;
        if (edges[i].dx)dx = edges[i].dx;
        if (edges[i].dy)dy = edges[i].dy;
        var source_x = parseInt(nodes[edges[i].source].x) + dx;
        var source_y = parseInt(nodes[edges[i].source].y) + dy;
        var target_x = parseInt(nodes[edges[i].target].x) + dx;
        var target_y = parseInt(nodes[edges[i].target].y) + dy;
        var source_size = parseInt(nodes[edges[i].source].size);
        var target_size = parseInt(nodes[edges[i].target].size);
        var source_label = nodes[edges[i].source].label;
        var target_label = nodes[edges[i].target].label;
        var flow = edges[i].flow;
        var edgeType = edges[i].edgeType;
        var citation = edges[i].citation;
        var weight = edges[i].weight;
        var id = edges[i].id;
        var ratio = edges[i].ratio;
        var delay = edges[i].delay;
        var duration = edges[i].duration;
        var assist = coordinate(source_x, source_y, target_x, target_y);
        var year = edges[i].year;
        var structureType;
        var routerClusters = edges[i].routerClusters;
        if (edges[i].TreeEdge)structureType = 'treeEdge';
        else if (edges[i].isNontreeEdge)structureType = 'nontreeEdge';
        else structureType = 'originEdge';
        edges[i] = {
            source: edges[i].source,
            target: edges[i].target,
            points: [],
            nodes: [edges[i].source, edges[i].target],
            flow: flow,
            weight: weight,
            id: id,
            citation: citation,
            dx: dx,
            dy: dy,
            assists: edges[i].assists,
            edgeType: edgeType,
            delay: delay,
            duration: duration,
            ratio: ratio,
            year: year,
            structureType: structureType,
            routerClusters: routerClusters,
            pathNodeDic: edges[i].pathNodeDic,
            pathNodeList: edges[i].pathNodeList,
            shift: edges[i].shift,
            recovered: edges[i].recovered,
            longPathNodes: edges[i].longPathNodes,
            flowStrokeWidth: edges[i].flowStrokeWidth,
            citationStrokeWidth: edges[i].citationStrokeWidth,
            uniformStrokeWidth: edges[i].uniformStrokeWidth,
            isBackgroundEdge: edges[i].isBackgroundEdge,
            isForegroundEdge: edges[i].isForegroundEdge,
            isForegroundSourceEdge: edges[i].isForegroundSourceEdge,
            isForegroundTargetEdge: edges[i].isForegroundTargetEdge,
            isNontreeEdge: edges[i].isNontreeEdge,
            merged: edges[i].merged,
            shiftDic: edges[i].shiftDic,
            nodeShiftDic: edges[i].nodeShiftDic,
            fatherNode: edges[i].fatherNode,
            isFaker: edges[i].isFaker,
            yearRatioDic: edges[i].yearRatioDic,
            yearSet: edges[i].yearSet,
            transitionCount: 0,
            flipBookStartYear: edges[i].flipBookStartYear,
            flipBookEndYear: edges[i].flipBookEndYear,
            flipBookRatio: edges[i].flipBookRatio


        };
        var source_text, target_text;
        edges[i].points.push({x: source_x, y: source_y, size: source_size, text: source_label, id: edges[i].source});
        if (drawFlowMap) {
            for (var j = 0; j < edges[i].assists.length; j++) {
                edges[i].points.push({x: edges[i].assists[j][0], y: edges[i].assists[j][1], size: 1, text: "", id: -1});
            }
        }
        edges[i].points.push({x: target_x, y: target_y, size: target_size, text: target_label, id: edges[i].target});
    }
}
function calculateAssistPoint(x1, y1, x2, y2, x3, y3) {
    var x0, y0;//p1p2中点
    var k1, b1;//p1p2直线的斜率与常数项
    var k2, b2;// 过p1p2直线中点垂线的斜率与常数项
    var a0, b0, c0;//圆与直线相交的二次方程系数
    var d;//所需距离
    var x4, y4, x5, y5;//解出来的两个点坐标，分列直线左右两侧
    var pi = Math.PI;
    var angle = pi / 6;//角度
    var delta;//判别式
    x0 = (x1 + x2) / 2;
    y0 = (y1 + y2) / 2;
    k1 = (y2 - y1) / (x2 - x1);
    b1 = y1 - k1 * x1;
    k2 = (x1 - x2) / (y2 - y1);
    b2 = (y1 + y2) / 2 + ((x2 - x1) * (x2 + x1)) / (2 * (y2 - y1));
    d = Math.tan(angle) * Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) / 2;
    a0 = 1 + k2 * k2;
    b0 = 2 * k2 * (b2 - y0) - 2 * x0;
    c0 = x0 * x0 + (b2 - y0) * (b2 - y0) - d * d;
    delta = Math.sqrt(b0 * b0 - 4 * a0 * c0);
    x4 = (-b0 + delta) / (2 * a0);
    y4 = k2 * x4 + b2;
    x5 = (-b0 - delta) / (2 * a0);
    y5 = k2 * x5 + b2;
    var value3, value4, value5;//判断左右
    value3 = k1 * x3 + b1 - y3;
    value4 = k1 * x4 + b1 - y4;
    value5 = k1 * x5 + b1 - y5;
    var right, left;
    right = left = {};
    var p = {}//所需结果
    if (value4 > value5) {
        right.x = x4;
        right.y = y4;
        left.x = x5;
        left.y = y5;
    }
    else {
        left.x = x4;
        left.y = y4;
        right.x = x5;
        right.y = y5;
    }
    if (value3 > 0) {
        return right;
        //p3点在直线右侧
    }
    else if (value3 < 0) {
        return left;
        //p3点在直线左侧
    }
    else {
        if (k1 >= 0) {
            return left;
        }
        else {
            return right;
        }
    }
}
function ajax(url,success,data) {
    console.log(url);
    console.log(data);
    $.ajax({
        url: url,
        data: data,
        async: false,
        success: success
    })
}
function requestData(){
    ids=[];
    var layers=[];
    if('left' in sourceCheckedStatus)layers.push(leftLayer);
    if('right' in sourceCheckedStatus)layers.push(rightLayer);
    layers.forEach(function(layer){
        var source=layer.source;
        var clusterCount=layer.clusterCount;
        layer.focusedID=source+'_'+clusterCount;
        //if(!(layer.focusedID in layer.data.sourceData)){
        if(source in dataID&&layer.ifLayout){
            ids.push({
                id:dataID[source],
                source:source,
                layer:layer,
                clusterCount:clusterCount
            })
        }
        //}
    });
    search(ids);
}
function search(ids){
    var requests=[];
    ids.forEach(function(item){
        var id=item.layer.focusedID;
        var data=item.layer.data;
        if(!(id in data.sourceData)||!data.sourceData[id]){
            requests.push(item);
        }
    });
    if(requests.length==0){
        //data all exist, call layout function
        ids.forEach(function(item){
            if(item.layer.ifLayout) {
                var source = item.source;
                var tmpData = {};
                clone(item.layer.data.sourceData[item.layer.focusedID], tmpData);
                item.layer.processData(tmpData);
                if (item.layer.focusedID && item.layer.preFocusedID) {
                    item.layer.layout(optionNumber, true, 'incremental', item.layer.data.postData[item.layer.focusedID]);
                }
                else {
                    item.layer.preLayout(item.layer.data.postData[item.layer.focusedID]);
                }
            }
        });
    }
    else{
        var url='http://'+server+':'+port+'/InfluenceGraph';
        var reqData=[];
        requests.forEach(function(item){
            reqData.push({
                source:item.source,
                id:item.id,
                clusterCount:item.clusterCount
            });
            item.layer.focusedID=item.source+'_'+item.clusterCount;
        });
        var success=function(d){
            if(d['error']){
                var newUrl='http://'+server+':'+errorPort+'/error';
                var errorData={
                    errorCode:1,
                    source:source,
                    errorID:searchID
                };
                var success=function(){
                    alert('The influence graph is computing in the backend');
                };
                ajax(newUrl,success,errorData);
            }
            else{
                console.log(d);
                function clearCiteseerx(graph){
                    var clusters=graph.cluster;
                    var edges=graph.edge;
                    var newClusters={};
                    var newEdges=[];
                    var yearList=[];
                    var cluster300IDList=clusters['300'].nodeidlist;
                    var mYear=1980;

                    for(var y in cluster300IDList){
                        if(y&&parseInt(y)>mYear)mYear=parseInt(y);
                    }
                    for(var key in clusters){
                        var idYearDic=clusters[key].nodeidlist;
                        var newDic={};
                        for(var year in idYearDic){
                            if(year&&parseInt(year)>=mYear){
                                yearList.push(parseInt(year));
                                newDic[year]=idYearDic[year];
                            }
                        }
                        var flag=false;
                        for(var k in newDic){
                            flag=true;
                            break;
                        }
                        if(flag){
                            newClusters[key]=clusters[key];
                            newClusters[key].nodeidlist=newDic;
                        }
                        else{
                            console.log('cluster '+key+' year is error');
                        }

                    }
                    //console.log(yearList)
                    if(!('300' in newClusters)){
                        var cluster300=clusters[300];
                        var minYear=d3.min(yearList);
                        var id=cluster300.nodeidlist[''][0];
                        var yearKey=String(minYear-1);
                        cluster300.nodeidlist={};
                        cluster300.nodeidlist[yearKey]=[id];
                        newClusters['300']=cluster300;
                    }
                    edges.forEach(function(edge){
                        var source=edge.source;
                        var target=edge.target;
                        if((source in newClusters)&&(target in newClusters)){
                            newEdges.push(edge);
                        }
                    });

                    //fix year data
                    //citeseerx year should <=2014
                    for(var clusterID in graph.cluster){
                        var newIDList={};
                        for(var year in graph.cluster[clusterID].nodeidlist){
                            if(parseInt(year)>2014){
                                //console.log(year);
                                if(!('2014' in newIDList))newIDList[String(2014)]=[];
                                newIDList[String(2014)]=newIDList[String(2014)].concat(graph.cluster[clusterID].nodeidlist[year]);
                            }
                            else{
                                newIDList[year]=graph.cluster[clusterID].nodeidlist[year];
                            }
                        }
                        graph.cluster[clusterID].nodeidlist=newIDList;
                    }
                    graph.edge.forEach(function(edge){
                        var newWeight={};
                        for(var key in edge.weight){
                            var sourceYear=key.split('_')[0];
                            var targetYear=key.split('_')[1];
                            if(parseInt(sourceYear)>=2014)sourceYear=2014;
                            if(parseInt(targetYear)>=2014)targetYear=2014;
                            var newKey=sourceYear+'_'+targetYear;
                            if(!(newKey in newWeight))newWeight[newKey]=0;
                            newWeight[newKey]+=edge.weight[key];
                        }
                        edge.weight=newWeight;
                    });

                    graph.cluster=newClusters;
                    graph.edge=newEdges;
                }
                function addFrequencyKeywords(graph){
                    var clusters=graph.cluster;
                    for(var key in clusters){
                        if(!('frequencyKeywords' in clusters[key])){
                            clusters[key].frequencyKeywords=['none','none','none'];
                        }
                    }
                }
                //console.log(d.citeseerx);
                for(var key in d){
                    if(key.split('_')[0]=='citeseerx'){
                        clearCiteseerx(d[key]);
                    }
                    addFrequencyKeywords(d[key]);
                }
                //if(d.citeseerx){
                //    clearCiteseerx(d.citeseerx);
                //
                //}
                //console.log(d.citeseerx);
                ids.forEach(function(item,i){
                    //if(i==1)return;
                    var source=item.source;
                    if(source=='aminerV8')item.layer.sourceText='AMiner';
                    else if(source=='citeseerx')item.layer.sourceText='CiteseerX';
                    var tmpData={};
                    item.layer.source=item.source;
                    var focused=item.source+'_'+item.clusterCount;
                    item.layer.focusedID=focused;
                    var data=item.layer.data;
                    if(data.sourceData[focused]){
                        clone(data.sourceData[focused],tmpData);
                    }
                    else{
                        clone(d[source+'_'+item.clusterCount],tmpData);
                        item.layer.data.sourceData[item.layer.focusedID]= d[source+'_'+item.clusterCount];
                    }
                    if(item.layer.ifLayout){
                        item.layer.processData(tmpData);
                        if(item.layer.focusedID&&item.layer.preFocusedID){
                            item.layer.layout(optionNumber,true, 'incremental',item.layer.data.postData[item.layer.focusedID]);
                        }
                        else{
                            item.layer.preLayout(item.layer.data.postData[item.layer.focusedID]);
                        }
                    }


                });
            }
        };
        ajax(url,success,{data:reqData});
    }
}
function FSubmit(e){
    if(e ==13){
        search();
    }
}
function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return unescape(r[2]); return null; //返回参数值
}


function ajax(url, success, data) {
    //console.log(url);
    //console.log(data);
    $.ajax({
        url: url,
        data: data,
        async: false,
        success: success
    })
}
function requestData() {
    var twitterClusterCount = getUrlParam('twitter');
    if (twitterClusterCount) {
        d3.json('localData/twitter'+twitterClusterCount+'.json', function (data) {
            console.log(data);
            data.clusterIDList = [5,10,20];
            for (var key in data.cluster) {
                var nodeYearInfo = data.cluster[key].nodeYearInfo;
                var nodeidlist = {};
                for (var year in nodeYearInfo) {
                    nodeidlist[year] = new Array(parseInt(nodeYearInfo[year]));
                }
                data.cluster[key].nodeidlist = nodeidlist;
                data.cluster[key].keywords = ['','',''];
                data.cluster[key].bigrams = ['','',''];
                data.cluster[key].onegram = ['','',''];
            }

            var k ='twitter_'+twitterClusterCount;
            var d={};
            d[k] = data;
            ids = [{
                source: 'twitter',
                layer: leftLayer,
                clusterCount: twitterClusterCount
            }];
            ids.forEach(function (item, i) {
                //if(i==1)return;
                var source = item.source;
                var tmpData = {};
                item.layer.source = item.source;
                var focused = item.source + '_' + item.clusterCount;
                item.layer.focusedID = focused;
                var data = item.layer.data;

                if (data.sourceData[focused]) {
                    clone(data.sourceData[focused], tmpData);
                }
                else {
                    var newCluster = {};
                    for (var key in d[source + '_' + item.clusterCount]['cluster']) {
                        var node = new Node(d[source + '_' + item.clusterCount]['cluster'][key]);
                        newCluster[key] = node;
                    }
                    d[source + '_' + item.clusterCount]['cluster'] = newCluster;
                    clone(d[source + '_' + item.clusterCount], tmpData);
                    item.layer.data.sourceData[item.layer.focusedID] = d[source + '_' + item.clusterCount];
                }
                if (item.layer.ifLayout) {
                    item.layer.processData(tmpData);
                    if (item.layer.focusedID && item.layer.preFocusedID) {
                        item.layer.layout(optionNumber, true, 'incremental', item.layer.data.postData[item.layer.focusedID]);
                    }
                    else {
                        item.layer.preLayout(item.layer.data.postData[item.layer.focusedID]);
                    }
                }


            });
        })
    }
    else {
        ids = [];
        var layers = [];
        if ('left' in sourceCheckedStatus)layers.push(leftLayer);
        if ('right' in sourceCheckedStatus)layers.push(rightLayer);
        layers.forEach(function (layer) {
            var source = layer.source;
            var clusterCount = layer.clusterCount;
            layer.focusedID = source + '_' + clusterCount;
            //if(!(layer.focusedID in layer.data.sourceData)){
            if (source in dataID && layer.ifLayout) {
                ids.push({
                    id: dataID[source],
                    source: source,
                    layer: layer,
                    clusterCount: clusterCount
                })
            }
        });
        search(ids);
    }

}
function search(ids) {
    var requests = [];
    ids.forEach(function (item) {
        var id = item.layer.focusedID;
        var data = item.layer.data;
        if (!(id in data.sourceData) || !data.sourceData[id]) {
            requests.push(item);
        }
    });

    if (requests.length == 0) {

        //data all exist, call layout function
        ids.forEach(function (item) {

            if (item.layer.ifLayout) {
                var source = item.source;
                var tmpData = {};
                clone(item.layer.data.sourceData[item.layer.focusedID], tmpData);
                item.layer.processData(tmpData);
                if (item.layer.focusedID && item.layer.preFocusedID) {
                    item.layer.layout(optionNumber, true, 'incremental', item.layer.data.postData[item.layer.focusedID]);
                }
                else {
                    item.layer.preLayout(item.layer.data.postData[item.layer.focusedID]);
                }
            }
        });
    }
    else {
        var url = 'http://' + server + ':' + port + '/InfluenceGraph';
        var reqData = [];
        requests.forEach(function (item) {
            reqData.push({
                source: item.source,
                id: item.id,
                clusterCount: item.clusterCount
            });
            item.layer.focusedID = item.source + '_' + item.clusterCount;
        });
        var success = function (d) {
            if (d['error']) {
                var newUrl = 'http://' + server + ':' + errorPort + '/error';
                var errorData = {
                    errorCode: 1,
                    source: source,
                    errorID: searchID
                };
                var success = function () {
                    alert('The influence graph is computing in the backend');
                };
                ajax(newUrl, success, errorData);
            }
            else {
                //console.log(d);
                function clearCiteseerx(graph) {
                    var clusters = graph.cluster;
                    var edges = graph.edge;
                    var newClusters = {};
                    var newEdges = [];
                    var yearList = [];
                    var cluster300IDList = clusters['300'].nodeidlist;
                    var mYear = 1980;

                    for (var y in cluster300IDList) {
                        if (y && parseInt(y) > mYear)mYear = parseInt(y);
                    }
                    for (var key in clusters) {
                        var idYearDic = clusters[key].nodeidlist;
                        var newDic = {};
                        for (var year in idYearDic) {
                            if (year && parseInt(year) >= mYear) {
                                yearList.push(parseInt(year));
                                newDic[year] = idYearDic[year];
                            }
                        }
                        var flag = false;
                        for (var k in newDic) {
                            flag = true;
                            break;
                        }
                        if (flag) {
                            newClusters[key] = clusters[key];
                            newClusters[key].nodeidlist = newDic;
                        }
                        else {
                            console.log('cluster ' + key + ' year is error');
                        }

                    }
                    //console.log(yearList)
                    if (!('300' in newClusters)) {
                        var cluster300 = clusters[300];
                        var minYear = d3.min(yearList);
                        var id = cluster300.nodeidlist[''][0];
                        var yearKey = String(minYear - 1);
                        cluster300.nodeidlist = {};
                        cluster300.nodeidlist[yearKey] = [id];
                        newClusters['300'] = cluster300;
                    }
                    edges.forEach(function (edge) {
                        var source = edge.source;
                        var target = edge.target;
                        if ((source in newClusters) && (target in newClusters)) {
                            newEdges.push(edge);
                        }
                    });

                    //fix year data
                    //citeseerx year should <=2014
                    for (var clusterID in graph.cluster) {
                        var newIDList = {};
                        for (var year in graph.cluster[clusterID].nodeidlist) {
                            if (parseInt(year) > 2014) {
                                //console.log(year);
                                if (!('2014' in newIDList))newIDList[String(2014)] = [];
                                newIDList[String(2014)] = newIDList[String(2014)].concat(graph.cluster[clusterID].nodeidlist[year]);
                            }
                            else {
                                newIDList[year] = graph.cluster[clusterID].nodeidlist[year];
                            }
                        }
                        graph.cluster[clusterID].nodeidlist = newIDList;
                    }
                    graph.edge.forEach(function (edge) {
                        var newWeight = {};
                        for (var key in edge.weight) {
                            var sourceYear = key.split('_')[0];
                            var targetYear = key.split('_')[1];
                            if (parseInt(sourceYear) >= 2014)sourceYear = 2014;
                            if (parseInt(targetYear) >= 2014)targetYear = 2014;
                            var newKey = sourceYear + '_' + targetYear;
                            if (!(newKey in newWeight))newWeight[newKey] = 0;
                            newWeight[newKey] += edge.weight[key];
                        }
                        edge.weight = newWeight;
                    });

                    graph.cluster = newClusters;
                    graph.edge = newEdges;
                }

                function addFrequencyKeywords(graph) {
                    var clusters = graph.cluster;
                    for (var key in clusters) {
                        if (!('frequencyKeywords' in clusters[key])) {
                            clusters[key].frequencyKeywords = ['none', 'none', 'none'];
                        }
                    }
                }

                //console.log(d.citeseerx);
                for (var key in d) {
                    var db = key.split('_')[0];
                    var count = key.split('_')[1];
                    if (db == 'citeseerx') {
                        clearCiteseerx(d[key]);
                    }
                    addFrequencyKeywords(d[key]);
                }
                var clusterCount=leftLayer.clusterCount;
                var key = 'aminerV8_'+clusterCount;
                if (d[key]) {
                    var sum = 0;
                    for (var clusterId in d[key].cluster) {
                        var cluster = d[key].cluster[clusterId];
                        for (var year in cluster.nodeidlist) {
                            sum += cluster.nodeidlist[year].length;
                        }
                    }
                    if(sum<500&&isFirstRequest){
                        console.log('hi');
                        isFirstRequest=false;
                        if(clusterCount=='20'){
                            leftLayer.clusterCount=10;
                            rightLayer.clusterCount=10;
                            d3.selectAll('.dbOption')
                                .each(function (d) {
                                    d3.select(this)
                                        .select('cite')
                                        .html(d.name+'-'+ d.layer.clusterCount);
                                });
                            requestData();
                        }
                        else{
                            ids.forEach(function (item, i) {
                                //if(i==1)return;
                                var source = item.source;
                                if (source == 'aminerV8')item.layer.sourceText = 'AMiner';
                                else if (source == 'citeseerx')item.layer.sourceText = 'CiteseerX';
                                var tmpData = {};
                                item.layer.source = item.source;
                                var focused = item.source + '_' + item.clusterCount;
                                item.layer.focusedID = focused;
                                var data = item.layer.data;

                                if (data.sourceData[focused]) {
                                    clone(data.sourceData[focused], tmpData);
                                }
                                else {
                                    var newCluster = {};
                                    for (var key in d[source + '_' + item.clusterCount]['cluster']) {
                                        var node = new Node(d[source + '_' + item.clusterCount]['cluster'][key]);
                                        newCluster[key] = node;
                                    }
                                    d[source + '_' + item.clusterCount]['cluster'] = newCluster;
                                    clone(d[source + '_' + item.clusterCount], tmpData);
                                    item.layer.data.sourceData[item.layer.focusedID] = d[source + '_' + item.clusterCount];
                                }
                                if (item.layer.ifLayout) {
                                    item.layer.processData(tmpData);
                                    if (item.layer.focusedID && item.layer.preFocusedID) {
                                        item.layer.layout(optionNumber, true, 'incremental', item.layer.data.postData[item.layer.focusedID]);
                                    }
                                    else {
                                        item.layer.preLayout(item.layer.data.postData[item.layer.focusedID]);
                                    }
                                }


                            });
                        }
                    }
                    else{

                        ids.forEach(function (item, i) {
                            //if(i==1)return;
                            var source = item.source;
                            if (source == 'aminerV8')item.layer.sourceText = 'AMiner';
                            else if (source == 'citeseerx')item.layer.sourceText = 'CiteseerX';
                            var tmpData = {};
                            item.layer.source = item.source;
                            var focused = item.source + '_' + item.clusterCount;
                            item.layer.focusedID = focused;
                            var data = item.layer.data;

                            if (data.sourceData[focused]) {
                                clone(data.sourceData[focused], tmpData);
                            }
                            else {
                                var newCluster = {};
                                for (var key in d[source + '_' + item.clusterCount]['cluster']) {
                                    var node = new Node(d[source + '_' + item.clusterCount]['cluster'][key]);
                                    newCluster[key] = node;
                                }
                                d[source + '_' + item.clusterCount]['cluster'] = newCluster;
                                clone(d[source + '_' + item.clusterCount], tmpData);
                                item.layer.data.sourceData[item.layer.focusedID] = d[source + '_' + item.clusterCount];
                            }
                            if (item.layer.ifLayout) {
                                item.layer.processData(tmpData);
                                if (item.layer.focusedID && item.layer.preFocusedID) {
                                    item.layer.layout(optionNumber, true, 'incremental', item.layer.data.postData[item.layer.focusedID]);
                                }
                                else {
                                    item.layer.preLayout(item.layer.data.postData[item.layer.focusedID]);
                                }
                            }


                        });

                    }

                }
            }
        };
        ajax(url, success, {data: reqData});
    }
}
function FSubmit(e) {
    if (e == 13) {
        search();
    }
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}


function Temporal(data){
    this.temporalDic=data;
    this.temporalList=[];
    this.division={};
    this.init=function(){
        for(var year in this.temporalDic){
            var tmp={
                year:year,
                flow:this.temporalDic[year]
            };
            this.temporalList.push(tmp)
        }
        this.division[1]=[this.temporalList]
    };
    this.divideYear=function(num){
        if(this.division[num]){
            return this.division[num];
        }
        else{
            var preDivision=this.divideYear(num-1);
            var newDivision=this.cut(preDivision);
            this.division[num]=newDivision;
            return newDivision;
        }
    };
    this.cut=function(divsion){
        var newDivisionList=[];
        for(var i=0;i<divsion.length;i++){
            var currentPart=divsion[i];
            var otherParts=[];
            for(var j=0;j<divsion.length;j++){
                if(j!=i)otherParts.push(divsion[j]);
            }
            var len=currentPart.length;
            if(len>=4){
                for(var j=2;j<len-1;j++){
                    var part1=[];
                    var part2=[];
                    for(var k=0;k<j;k++){
                        part1.push(currentPart[k]);
                    }
                    for(var k=j;k<len;k++){
                        part2.push(currentPart[k]);
                    }
                    part1 = this.denseFlow(part1);
                    part2 = this.denseFlow(part2);
                    if(part1.length>1&&part2.length>1){
                        var newDivision=[];
                        newDivision.push(part1);
                        newDivision.push(part2);
                        for(var k=0;k<otherParts.length;k++){
                            newDivision.push(otherParts[k]);
                        }
                        newDivisionList.push(newDivision)
                    }
                }
            }
        }
        var maxFlow=0;
        var maxDivision;
        if(newDivisionList.length>0){
            for(var i=0;i<newDivisionList.length;i++){
                var division=newDivisionList[i];
                var divisionFlow=this.countDivisionFlow(division);
                if(divisionFlow>maxFlow){
                    maxDivision=division;
                    maxFlow=divisionFlow;
                }
            }
            return division;
        }
        else{
            return [];
        }

    };
    this.sortDivision=function(division){
        division.sort(function(a,b){return d3.ascending(a[0].year, b[0].year)});
    };
    this.countDivisionFlow=function(division){
        var sum=0;
        for(var i=0;i<division.length;i++){
            var part=division[i];
            var partFlow=this.countPartFlow(part);
            sum+=partFlow;
        }
        division.smoothFlowCount=sum;
        return sum;
    };
    this.countPartFlow=function(part){
        var sum=0;
        for(var i=0;i<part.length;i++){
            sum+=part[i].flow;
        }
        sum = this.smoothFlow(sum, part.length);
        return sum;
    };
    this.denseFlow=function(part){
        while(part[0]&&part[0].flow==0){
            part = part.slice(1,part.length);
        }
        while(part[part.length-1]&&part[part.length-1].flow==0){
            part = part.slice(0,part.length-1);
        }
        return part;
    };
    this.smoothFlow=function(flow,duration){
        var k=0.5;
        return flow/Math.pow(duration,k)
    };
    this.selectMaxDivision=function(){
        var max=0;
        var maxDivision;
        for(var key in this.division){
            if(key!=1){
                if(this.division[key].smoothFlowCount){
                    if(this.division[key].smoothFlowCount>max){
                        max = this.division[key].smoothFlowCount;
                        maxDivision=this.division[key];
                    }
                }
            }
        }
        this.maxDivision=maxDivision;
    }
}

function temporalSummarization(d){
    var temporalData=this.getTemporalData(d);
    this.temporal=new Temporal(temporalData);
    this.temporal.init();
    this.temporal.divideYear(12);
    this.temporal.selectMaxDivision();
}


function getTemporalData(d){
    var edges=d.edge;
    var temporal={};
    for(var year=this.minYear;year<=this.maxYear;year++){
        temporal[year]=0;
    }
    var edgeSumFlow=0
    var temporFlow=0;
    for(var i=0;i<edges.length;i++){

        var edge=edges[i];
        var flow=edge.flow;
        edgeSumFlow+=flow;
        var weight=edge.weight;
        var totalCitation=edge.citation;
        for(var year in weight){
            var subFlow=(weight[year]/totalCitation)*flow;
            temporal[year.toInt()]+=subFlow;
        }
    }
    for(var year in temporal){
        temporFlow+=temporal[year];
    }
//    console.log(temporFlow,edgeSumFlow);
//    console.log(temporal);
    return temporal
}
var str='M41.08164179104483,302.4C43.678231395542014,307.7846857291704,46.27482100003919,313.1693714583408,48.87141060453637,313.1693714583408C49.20474393786971,313.1693714583408,49.538077271203036,313.1693714583408,49.87141060453637,313.1693714583408C58.23100768625882,313.1693714583408,66.59060476798126,337.43976747453956,74.95020184970372,349.2233541666991C83.02517284222147,360.6057353744069,91.1001438347392,382.71434634472195,99.17511482725695,382.71434634472195C99.50844816059028,382.71434634472195,99.84178149392362,382.71434634472195,100.17511482725695,382.71434634472195C109.27542867925101,382.71434634472195,118.37574253124507,342.360373892397,127.47605638323913,340.5042414171221C144.98467456108426,336.9331211980139,162.4932927389294,337.07257695634183,180.00191091677453,335.14756108845984C197.51052909461967,333.22254522057784,215.01914727246478,330.8198318600074,232.52776545030991,328.95414620983C253.8895177126435,326.67787778854984,275.2512699749771,325.0115953216645,296.6130222373107,323.0130629844527C303.86170497201624,322.3349010682581,311.1103877067217,320.97230025533116,318.35907044142726,320.97230025533116C318.6924037747606,320.97230025533116,319.02573710809395,320.97230025533116,319.35907044142726,320.97230025533116C365.7941962146828,320.97230025533116,412.2293219879384,259.4534228549383,458.66444776119397,197.93454545454546';
var reg=new RegExp('127.47605638323913,343.2110302810014(.*)296.6130222373107,325.172287336565')
console.log(reg.exec(str))
function layoutPapers(d){
    //pingbi chongfu lunwen
    if(d.id!=2253750){
        //console.log(d3.select(this));
        var textColor='rgb(223,209,32)';
        var abstractColor='rgb(221, 226, 164)';
        var title=d3.select(this).append('div');
        title
            .append('text')
            .styles({
                cursor:'pointer',
                color:'white',
                'font-size':18+px,
                'font-family':'Microsoft YaHei'

            })
            .on('mouseover',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':'underline'
                    })
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':''
                    })
            })
            .on('click',function(d){
                var url='graph.html?';
                var sourceStr='';
                d.ids.forEach(function(item){
                    var source=item.source;
                    sourceStr+=source+'_';
                    url+=source+'_id='+item.id+'&';
                });
                var source='aminerV8';
                //url+=source+'_id='+ d.id+'&';
                url+='selected='+source;
                url+='&source='+sourceStr;
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            })
            .html(d.title);

        if(d.graphSize){
            var graphSizeDatas=[
                {text:' [',color:'white'},
                {text: d.graphSize,color:'white'},
                {text:' papers influenced',color:textColor},
                {text:']<br>',color:'white'}
            ];
            title
                .selectAll('whatever')
                .data(graphSizeDatas)
                .enter()
                .append('text')
                .styles({
                    color:function(d){return d.color},
                    'font-size':14+px,
                    'font-family':'Microsoft YaHei'
                })
                .each(function(e,i){
                    if(i==1){
                        d3.select(this)
                            .styles({
                                color:'white',
                                cursor:'pointer'
                            })
                            .on('mouseover',function(e){
                                d3.select(this)
                                    .styles({
                                        'text-decoration':'underline'
                                    })
                            })
                            .on('mouseout',function(e){
                                d3.select(this)
                                    .styles({
                                        'text-decoration':''
                                    })
                            })
                            .on('click',function(e){
                                var url='citation.html?id='+ d.id+'&action=all&'+'source=aminerV8'+'&title='+ d.title+'&r='+Math.floor(Math.random()*1000000000+1);
                                window.open(url);
                            })
                    }
                })
                .html(function(e){
                    return e.text;
                });
        }

        var summary=d3.select(this).append('div');
        summary
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html(d.authors+' - '+d.year+' - ');
        summary
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })

            .html(d.venue+'<br>')
            .each(function(){
                if(d.venueID){
                    d3.select(this)
                        .styles({
                            color:'white',
                            cursor:'pointer'
                        })
                        .on('mouseover',function(){
                            d3.select(this)
                                .styles({
                                    'text-decoration':'underline'
                                })
                        })
                        .on('mouseout',function(){
                            d3.select(this)
                                .styles({
                                    'text-decoration':''
                                })
                        })
                        .on('click',function(){
                            var url='venuepapers.html?venue='+d.venue+'&id='+d.venueID+'&r='+Math.floor(Math.random()*1000000000+1);
                            window.open(url);
                        })
                }
            });
        if(d.abstract){
            var abstract=d3.select(this).append('div')
                .styles({
                    height:55+px,
                    'overflow-y':'hidden'
                });
            abstract.append('text')
                .styles({
                    color:abstractColor,
                    'font-size':10+px,
                    'font-family':'Microsoft YaHei',

                })
                .html(d.abstract);
        }
        var citation=d3.select(this).append('div');
        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html('Citing ');
        citation
            .append('text')
            .styles({
                cursor:'pointer',
                color:'white',
                'font-size':14+px,
                'font-family':'Microsoft YaHei',
            })
            .on('mouseover',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':'underline'
                    })
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':''
                    })
            })
            .on('click',function(d){
                var url='citation.html?';
                var source='aminerV8';
                url+='id='+ d.id+'&';
                url+='source='+source;
                url+='&title='+ d.title;
                url+='&action=t';
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            })
            .html(d.citing);
        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html(' papers');
        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei',
                'margin-left':50+px
            })
            .html('Cited by ');
        citation
            .append('text')
            .styles({
                cursor:'pointer',
                color:'white',
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .on('mouseover',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':'underline'
                    })
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':''
                    })
            })
            .on('click',function(d){
                var url='citation.html?';
                var source='aminerV8';
                url+='id='+ d.id+'&';
                url+='source='+source;
                url+='&title='+ d.title;
                url+='&action=s';
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            })
            .html(d.citation);
        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html(' papers');



        citation
            .append('text')
            .styles({
                color:textColor,
                'font-size':14+px,
                'font-family':'Microsoft YaHei',
                'margin-left':50+px
            })
            .html('Source: ');
        citation
            .selectAll('whatever')
            .data(d.ids)
            .enter()
            .append('text')
            .styles({
                cursor:'pointer',
                color:'white',
                'font-size':14+px,
                'font-family':'Microsoft YaHei'
            })
            .html(function(e,i){
                if(i==0)return 'AMiner';
                else return ', CiteseerX';
            })
            .on('mouseover',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':'underline'
                    })
            })
            .on('mouseout',function(d){
                d3.select(this)
                    .styles({
                        'text-decoration':''
                    })
            })
            .on('click',function(e,i){
                var url='graph.html?';
                d.ids.forEach(function(item){
                    var source=item.source;
                    url+=source+'_id='+item.id+'&';
                });
                var source= e.source;
                //url+=source+'_id='+ e.id+'&';
                url+='selected='+source;
                url+='&r='+Math.floor(Math.random()*1000000000+1);
                window.open(url);
            });
    }

}
function layoutSetting(){
    drawFlowMap=true;
}
function initServer(){

    SDCloud='211.147.15.14';
    server40='192.168.1.40';
    localServer='127.0.0.1';
    server42='192.168.1.42';
    ali='118.190.210.193';
    server=ali;
    port='5002';
    errorPort='5003';

}
