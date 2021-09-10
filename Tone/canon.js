let button = document.body.getElementsByTagName('button')

// code C G Am Em F C F G

// melody

var melody_ = [
    'A4', null, 'E4', null, 'F4', null, 'C4', null,
    'D4', null, 'A3', null, 'D4', null, 'E4', null
]

// root
var root_ = [
    'C4', 'C4', 'G3', 'G3', 'E3', 'E3', 'E3', 'E3',
    'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'D3', 'D3'
];

// center
var center_ = [
    'E4', 'E4', 'B4', 'B4', 'A4', 'A4', 'G3', 'G3',
    'F3', 'F3', 'E3', 'E3', 'F3', 'F3', 'G3', 'G3'    
];

// top
var top_ = [
    'G4', 'G4', 'D4', 'D4', 'C4', 'C4', 'B4', 'B4', 
    'A4', 'A4', 'G3', 'G3', 'A4', 'A4', 'B4', 'B4'
];

function play(){
    var melody_synth = new Tone.Synth().toMaster();
    var code1_synth = new Tone.Synth().toMaster();
    var code2_synth = new Tone.Synth().toMaster();
    var code3_synth = new Tone.Synth().toMaster();

    function addMelody(time, note) {
        melody_synth.triggerAttackRelease(note, '2n', time);
    }
    
    function addCode1(time, note) {
        code1_synth.triggerAttackRelease(note, '4n', time);
    }

    function addCode2(time, note) {
        code2_synth.triggerAttackRelease(note, '4n', time);
    }

    function addCode3(time, note) {
        code3_synth.triggerAttackRelease(note, '4n', time);
    }

    var melody = new Tone.Sequence(addMelody, melody_).start();
    var code1 = new Tone.Sequence(addCode1, root_).start();
    var code2 = new Tone.Sequence(addCode2, center_).start();
    var code3 = new Tone.Sequence(addCode3, top_).start();

    // テンポを指定
    Tone.Transport.bpm.value = 60
    // 音のループ回数
    melody.loop = 1
    code1.loop = 1
    code2.loop = 1
    code3.loop = 1
    Tone.Transport.start();
}

button[0].addEventListener('click', play)

