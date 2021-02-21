const {HashRouter, Switch, Route, Link,useHistory,useParams} = ReactRouterDOM;
const {Menu,Icon,Tooltip,Timeline} =antd;
const {SubMenu}=Menu;

/**
 * header里的先放这里了
 */
let button =document.getElementById("searchbar-button");
button.addEventListener("click",(event)=>{
    let str=document.getElementById("searchbar-input").value;
    window.open('https://cn.bing.com/search?q='+str+' NBA');
});

/**
 * Router
 */
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter >
                <div>
                    <HeaderMenu
                        history={this.props.history}
                    />
                    {/*<img src={"https://pic4.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1440w.jpg?source=172ae18b"} />*/}

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/player" component={Player} />
                        <Route path="/playoff/:winner/:loser" component={Playoff} />
                        <Route path="/team" component={Team} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}




/**
 * HeaderMenu
 */
class HeaderMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            MenuDisabled:true,
            winner:"",
            loser:""
        }
    }


    changeRound(winner,loser){
        /**
         * 不禁用简介
         */
        if(this.state.MenuDisabled==true){
            this.setState({
                MenuDisabled: false,
            });
        }

        /**
         * 重置轮次
         */
        this.setState({
            winner:winner,
            loser:loser
        });
    }

    render(){
        const tooltip=this.state.winner+"/"+this.state.loser;
        return (
            <div >
                <Menu mode="horizontal" theme="dark"  >
                    <SubMenu key="round1" title="第一轮" style={{marginLeft:20}}>
                        <Menu.ItemGroup title="西部">
                            <Menu.Item key="round1:1" onClick={()=>this.changeRound("开拓者","雷霆" )}><Link to={"/playoff/开拓者/雷霆"}>西部第1 vs 西部第8</Link> </Menu.Item>
                            <Menu.Item key="round1:2" onClick={()=>this.changeRound("爵士","掘金")}> <Link to={"/playoff/爵士/掘金"}> 西部第2 vs 西部第7</Link></Menu.Item>
                            <Menu.Item key="round1:3" onClick={()=>this.changeRound("勇士","快船")}> <Link to={"/playoff/勇士/快船"}> 西部第3 vs 西部第6</Link></Menu.Item>
                            <Menu.Item key="round1:4" onClick={()=>this.changeRound("火箭","马刺")}> <Link to={"/playoff/火箭/马刺"}> 西部第4 vs 西部第5</Link></Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="东部">
                            <Menu.Item key="round1:5" onClick={()=>this.changeRound("步行者","76人")}> <Link to={"/playoff/步行者/76人"}> 东部第1 vs 东部第8</Link></Menu.Item>
                            <Menu.Item key="round1:6" onClick={()=>this.changeRound("雄鹿","活塞")}> <Link to={"/playoff/雄鹿/活塞"}> 东部第2 vs 东部第7</Link></Menu.Item>
                            <Menu.Item key="round1:7" onClick={()=>this.changeRound("猛龙","魔术")}> <Link to={"/playoff/猛龙/魔术"}> 东部第3 vs 东部第6</Link></Menu.Item>
                            <Menu.Item key="round1:8" onClick={()=>this.changeRound("凯尔特人","篮网")}> <Link to={"/playoff/凯尔特人/篮网"}> 东部第4 vs 东部第5</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="round2" title="第二轮" style={{marginLeft:20}}>
                        <Menu.ItemGroup title="西部">
                            <Menu.Item key="round2:1" onClick={()=>this.changeRound("勇士","爵士")}> <Link to={"/playoff/勇士/爵士"}> 西部第1 vs 西部第4</Link></Menu.Item>
                            <Menu.Item key="round2:2" onClick={()=>this.changeRound("开拓者","火箭")}> <Link to={"/playoff/开拓者/火箭"}> 西部第2 vs 西部第3</Link></Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="东部">
                            <Menu.Item key="round2:3" onClick={()=>this.changeRound("雄鹿","凯尔特人")}> <Link to={"/playoff/雄鹿/凯尔特人"}> 东部第1 vs 东部第4</Link></Menu.Item>
                            <Menu.Item key="round2:4" onClick={()=>this.changeRound("猛龙","步行者")}> <Link to={"/playoff/猛龙/步行者"}> 东部第2 vs 东部第3</Link></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="round3" title="东决/西决" style={{marginLeft:20}}>
                        <Menu.Item onClick={()=>this.changeRound("勇士","开拓者")}>
                            <Link to={"/playoff/勇士/开拓者"}> <i className="ai-smile-o" ></i> 西决</Link>
                        </Menu.Item>
                        <Menu.Item onClick={()=>this.changeRound("雄鹿","猛龙")}>
                            <Link to={"/playoff/雄鹿/猛龙"}> <i className="ai-smile-o" ></i> 东决</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key={"round4"} style={{marginLeft:20}}>
                        <Link to={"/playoff/雄鹿/勇士"}> <i className="ai-smile-o" ></i> 总决赛</Link>
                    </Menu.Item>
                    <Menu.Item key="Two" style={{marginLeft:20}}  disabled={this.state.MenuDisabled}>
                        <Tooltip title={tooltip}>
                        <i className="ai-smile"></i>  战队资料
                        </Tooltip>
                    </Menu.Item>
                    <Menu.Item key="Three" style={{marginLeft:20}} disabled={this.state.MenuDisabled}>
                        <i className="ai-smile"></i>  球员资料
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

/**
 * home
 */
class Home extends React.Component{

    constructor(props) {
        super(props);
        const title="";
    }

    render(){
        return(
            <div className="playoff-content">
                <Timeline mode="left">
                    {/*季后赛第一轮*/}
                    <Timeline.Item >开拓者 vs 雷霆  季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item >开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item >开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item >开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  color={"green"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  color={"green"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  color={"green"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  color={"green"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  color={"green"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>

                    {/*季后赛第二轮*/}
                    <Timeline.Item label={"季后赛第二轮第一场 2021-10-01"} >开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  >开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  color={"green"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  color={"green"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>

                    {/*西决东决*/}
                    <Timeline.Item >开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                    <Timeline.Item  color={"green"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>

                    {/*总决*/}
                    <Timeline.Item  color={"red"}>开拓者 vs 雷霆 季后赛第一轮第一场 2021-10-01 </Timeline.Item>
                </Timeline>
            </div>
        );
    }
}

/**
 * player
 */
class Player extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <p>player</p>
            </div>
        );
    }
}

/**
 * playoff
 */
class Playoff extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            winnerPicUrl:"../img/tupian/tupian/公牛.jpg",
            loserPicUrl:"../img/tupian/tupian/勇士.jpg"
        }
    }

    render(){
        let winner=this.props.match.params.winner;
        let loser=this.props.match.params.loser;
        return (
            <div>
                <p>{loser}</p>
            </div>
        );
    }
}

/**
 * team
 */
class Team extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <p>team</p>
            </div>
        );
    }
}








ReactDOM.render(<App/>, document.getElementById('root'));

