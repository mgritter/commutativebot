
// Layout:
// a c e
// b d f
//
// define a half-height, and half-width for each text block

var grammar = {
    "origin" : "#header##marker##background##diagram##end#",
    "header" : "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" height=\"512\" width=\"1024\">",
    "marker" : "<marker id=\"triangle\" viewBox=\"0 0 10 10\" refX=\"0\" refY=\"5\" markerUnits=\"strokeWidth\" markerWidth=\"4\" markerHeight=\"3\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 Z\"/></marker>",
    "background" : "<rect width=\"100%\" height=\"100%\" fill=\"#bgcolor#\"/>",
    "bgcolor" : [ "white" ],
    "onechar" : "[hh:20][hw:20][hd:20]",
    "textcolor": [ "black" ],
    "textsize": [ "20" ],
    "textelement" : "<text x=\"#textx#\" y=\"#texty#\" font-size=\"#textsize#\" text-anchor=\"middle\" fill=\"#textcolor#\" dominant-baseline=\"central\">#text#</text>",
    "homObjectName" : [ "Hom(#smallObjectName#﹐#smallObjectName#)" ],
    "smallObjectName" :  [ "ℝ", "ℂ", "ℤ", "ℚ", "A", "B", "D", "E", "G", "H", "T" ],
    "smallObjectModifier" : [ "F", "G", "H", "p", "q", 
			      "π", "μ", "ψ", "φ", "ℾ", "ℿ" ],
    "smallOperator" : [ "+", "×", "⨷", "⨴","⨵", "⨻", "⨢", "⨹", ":" ],
    "objectName" : [
	"#onechar#[text:ℝ][objectName:]",
	"#onechar#[text:ℂ][objectName:]",
	"#onechar#[text:ℤ][objectName:]",
	"#onechar#[text:ℚ][objectName:]",
	"#onechar#[text:A][objectName:]",
	"#onechar#[text:B][objectName:]",
	"#onechar#[text:D][objectName:]",
	"#onechar#[text:E][objectName:]",
	"#onechar#[text:G][objectName:]",
	"#onechar#[text:H][objectName:]",
	"#onechar#[text:T][objectName:]",
	"[hh:20][hw:70][hd:25][text:#homObjectName#][objectName:]",
	"[hh:20][hw:40][hd:25][text:#smallObjectName##smallOperator##smallObjectName#][objectName:]",
	"[hh:20][hw:40][hd:25][text:Cats][objectName:]",
	"[hh:20][hw:40][hd:25][text:Dogs][objectName:]",
	"[hh:20][hw:50][hd:25][text:#smallObjectModifier#(#smallObjectName#)][objectName:]",
	"#onechar#[text:D][objectName:][text:C][objectName:][text:B][objectName:][text:D][objectName:]",
	"[hh:20][hw:50][hd:25][mod:#smallObjectModifier#][text:#mod#(#smallObjectName#)][objectName:][text:#mod#(#smallObjectName#)][objectName:][text:#mod#(#smallObjectName#)][objectName:][text:#mod#(#smallObjectName#)][objectName:]",
	"[hh:20][hw:50][hd:25][mod1:#smallObjectModifier#][mod2:#smallObjectModifier#][obj1:#smallObjectName#][obj2:#smallObjectName#][text:#mod2#(#obj2#)][objectName:][text:#mod1#(#obj2#)][objectName:][text:#mod2#(#obj1#)][objectName:][text:#mod1#(#obj1#)][objectName:]",
	"[hh:20][hw:50][hd:25][mod1:#smallObjectModifier#][obj1:#smallObjectName#][obj2:#smallObjectName#][text:#mod1#(#obj2#)][objectName:][text:#obj2#][objectName:][text:#mod1#(#obj1#)][objectName:][text:#obj1#][objectName:]"
    ],
    "morphismName" : [
	"#onechar#[text:f]",
	"#onechar#[text:g]",
	"#onechar#[text:h]",
	"#onechar#[text:p]",
	"#onechar#[text:q]",
	"#onechar#[text:r]",
	"#onechar#[text:π]",
	"#onechar#[text:μ]",
	"#onechar#[text:ψ]",
	"#onechar#[text:φ]",
	"#onechar#[text:χ]"
    ],
    "ax" : "60",
    "ay" : "60",
    "bx" : "60",
    "by" : "260",
    "cx" : "260",
    "cy" : "60",
    "dx" : "260",
    "dy" : "260",
    "aby" : "160",
    "acx" : "160",
    "bdx" : "160",
    "cdy" : "160",
    "diag_len" : "100", 
    "a_text" : "#objectName#[ahh:#hh#][ahw:#hw#][ahd:#hd#][textx:#ax#][texty:#ay#]#textelement#[objectName:POP][text:POP]",    
    "b_text" : "#objectName#[bhh:#hh#][bhw:#hw#][bhd:#hd#][textx:#bx#][texty:#by#]#textelement#[objectName:POP][text:POP]",
    "c_text" : "#objectName#[chh:#hh#][chw:#hw#][chd:#hd#][textx:#cx#][texty:#cy#]#textelement#[objectName:POP][text:POP]",
    "d_text" : "#objectName#[dhh:#hh#][dhw:#hw#][dhd:#hd#][textx:#dx#][texty:#dy#]#textelement#[objectName:POP][text:POP]",
    "diagram" : [ "#diagram3#", "#diagram4#" ],
    "diagram3" : "<g transform=\"scale(1.6 1.6)\">#a_text##c_text##d_text##ac_arrow##cd_arrow##ad_arrow#</g>",
    "diagram4" : [ "<g transform=\"scale(1.6 1.6)\">#a_text##b_text##c_text##d_text##ab_arrow##ac_arrow##cd_arrow##bd_arrow#</g>",
		   "<g transform=\"scale(1.6 1.6)\">#a_text##b_text##c_text##d_text##ba_arrow##ac_arrow##cd_arrow##bd_arrow#</g>" ],
    "arrow_special" : [ "", "", "", "", "", "", "", "", "",
			"stroke-dasharray=\"5,5\"[arrow_special:]",
			"stroke-dasharray=\"4,2,4\"[arrow_special:]"
		      ],
    "ab_arrow" : "<path d=\"M #ax# #ay# m 0 #ahh# L #ax# #aby# M #bx# #by# m 0 -#bhh# L #ax# #aby#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #bx# #by# m 0 -#bhh# m 0 -2 l 0 1\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"#/>",
    "ba_arrow" : "<path d=\"M #bx# #by# m 0 -#bhh# L #bx# #aby# M #ax# #ay# m 0 #ahh# L #bx# #aby#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #ax# #ay# m 0 #ahh# m 0 2 l 0 -1\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"/>",
    "ac_arrow" : "<path d=\"M #ax# #ay# m #ahw# 0 L #acx# #ay# M #cx# #cy# m -#chw# 0 L #acx# #ay#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #cx# #cy# m -#chw# 0 m -2 0 l 1 0\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"/>",
    "ad_arrow" : "<g transform=\"translate(#ax# #ay#) scale(1.414 1.414) rotate(45 0 0)\"><path d=\"M 0 0 m #ahd# 0 L #diag_len# 0 M 0 0 m #diag_len# 0 m #diag_len# 0 m -#dhd# 0 L #diag_len# 0\" #arrow_special# stroke=\"black\" stroke-width=\"2.12\"/><path d=\"M #diag_len# 0 m #diag_len# 0 m -#dhd# 0 m -2 0 l 1 0\" marker-end=\"url(\\#triangle)\" stroke-width=\"2.12\" stroke=\"black\"/></g>",
    "bd_arrow" : "<path d=\"M #bx# #by# m #bhw# 0 L #bdx# #by# M #dx# #dy# m -#dhw# 0 L #bdx# #by#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #dx# #dy# m -#dhw# 0 m -2 0 l 1 0\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"/>",
    "cd_arrow" : "<path d=\"M #cx# #cy# m 0 #chh# L #cx# #cdy# M #dx# #dy# m 0 -#dhh# L #cx# #cdy#\" #arrow_special# stroke=\"black\" stroke-width=\"3\"/><path d=\"M #dx# #dy# m 0 -#dhh# m 0 -2 l 0 1\" marker-end=\"url(\\#triangle)\" stroke-width=\"3\" stroke=\"black\"/>",
    "end" : "</svg>"
};

function newDiagram() {
    var g = tracery.createGrammar( grammar );
    var svg = g.flatten( "#origin#" );
    var div = document.getElementById( "diagram" );
    div.innerHTML = svg;
}
