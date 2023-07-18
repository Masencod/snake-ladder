import Players from "./Players";

export default function Grid() {



  return (
    <div className="flex flex-col  justify-center md:items-center md:mt-10 ">
      <div className="grid board w-[100%] md:max-w-[700px] md:w-[70%] aspect-square bg-[url('./bg.jpg')] bg-contain">
        <div className=" grid rows gr" id="row1">
          <div id="100"></div>
          <div id="99"></div>
          <div id="98"></div>
          <div id="97"></div>
          <div id="96"></div>
          <div id="95"></div>
          <div id="94"></div>
          <div id="93"></div>
          <div id="92"></div>
          <div id="91"></div>
        </div>
        <div className=" grid rows" id="row2">
          <div id="81"></div>
          <div id="82"></div>
          <div id="83"></div>
          <div id="84"></div>
          <div id="85"></div>
          <div id="86"></div>
          <div id="87"></div>
          <div id="88"></div>
          <div id="89"></div>
          <div id="90"></div>
        </div>
        <div className=" grid rows" id="row3">
          <div id="80"></div>
          <div id="79"></div>
          <div id="78"></div>
          <div id="77"></div>
          <div id="76"></div>
          <div id="75"></div>
          <div id="74"></div>
          <div id="73"></div>
          <div id="72"></div>
          <div id="71"></div>
        </div>
        <div className=" grid rows" id="row4">
          <div id="61"></div>
          <div id="62"></div>
          <div id="63"></div>
          <div id="64"></div>
          <div id="65"></div>
          <div id="66"></div>
          <div id="67"></div>
          <div id="68"></div>
          <div id="69"></div>
          <div id="70"></div>
        </div>
        <div className=" grid rows" id="row5">
          <div id="60"></div>
          <div id="59"></div>
          <div id="58"></div>
          <div id="57"></div>
          <div id="56"></div>
          <div id="55"></div>
          <div id="54"></div>
          <div id="53"></div>
          <div id="52"></div>
          <div id="51"></div>
        </div>
        <div className=" grid rows" id="row6">
          <div id="41"></div>
          <div id="42"></div>
          <div id="43"></div>
          <div id="44"></div>
          <div id="45"></div>
          <div id="46"></div>
          <div id="47"></div>
          <div id="48"></div>
          <div id="49"></div>
          <div id="50"></div>
        </div>
        <div className=" grid rows" id="row7">
          <div id="40"></div>
          <div id="39"></div>
          <div id="38"></div>
          <div id="37"></div>
          <div id="36"></div>
          <div id="35"></div>
          <div id="34"></div>
          <div id="33"></div>
          <div id="32"></div>
          <div id="31"></div>
        </div>
        <div className=" grid rows" id="row8">
          <div id="21"></div>
          <div id="22"></div>
          <div id="23"></div>
          <div id="24"></div>
          <div id="25"></div>
          <div id="26"></div>
          <div id="27"></div>
          <div id="28"></div>
          <div id="29"></div>
          <div id="30"></div>
        </div>
        <div className=" grid rows" id="row9">
          <div id="20"></div>
          <div id="19"></div>
          <div id="18"></div>
          <div id="17"></div>
          <div id="16"></div>
          <div id="15"></div>
          <div id="14"></div>
          <div id="13"></div>
          <div id="12"></div>
          <div id="11"></div>
        </div>
        <div className=" grid rows" id="row10">
          <div id="1"></div>
          <div id="2"></div>
          <div id="3"></div>
          <div id="4"></div>
          <div id="5"></div>
          <div id="6"></div>
          <div id="7"></div>
          <div id="8"></div>
          <div id="9"></div>
          <div id="10"></div>
        </div>
      </div>
      <Players />
    </div>
  );
}
