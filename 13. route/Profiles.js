import { NavLink, Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          {/* <Link to="/profiles/velopert">velopert</Link> */}

          {/* NavLink : 경로가 일치하는 경우 특정 스타일을 적용할수 있는 컴포넌트 */}
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) => ({ color: isActive ? "black" : "blue" })}
          >
            velopert
          </NavLink>
        </li>
        <li>
          {/* <Link to="/profiles/gildong">gildong</Link> */}
          <NavLink
            to="/profiles/gildong"
            style={({ isActive }) => ({ color: isActive ? "black" : "blue" })}
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Routes>
        {/* 하위페이지가 있으면 *로 감싸줘야함, path에는 부모경로를 적을 필요없이 파라미터만 적어준다 */}
        <Route path="/*" element={<div>사용자를 선택해 주세요</div>}></Route>
        <Route path=":username" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

export default Profiles;
