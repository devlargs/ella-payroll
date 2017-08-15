import React from 'react';

class Profile extends React.Component{
    constructor(){
        super();
    }

    render(){
        console.log(this.props.id)
        return(
            <div class="row">
                <div class="col-md-3">
                    <div class="box box-primary">
                        <div class="box-body box-profile">
                        <img class="profile-user-img img-responsive img-circle" src="/user.jpeg" alt="User profile picture"/>

                        <h3 class="profile-username text-center">Nina Mcintire</h3>

                        <p class="text-muted text-center">Software Engineer</p>

                        <ul class="list-group list-group-unbordered">
                            <li class="list-group-item">
                            <b>Followers</b> <a class="pull-right">1,322</a>
                            </li>
                            <li class="list-group-item">
                            <b>Following</b> <a class="pull-right">543</a>
                            </li>
                            <li class="list-group-item">
                            <b>Friends</b> <a class="pull-right">13,287</a>
                            </li>
                        </ul>

                        <a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-9">
                    <div class="nav-tabs-custom">
                        <ul class="nav nav-tabs">
                        <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true">Tab 1</a></li>
                        <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">Tab 2</a></li>
                        <li class=""><a href="#tab_3" data-toggle="tab" aria-expanded="false">Tab 3</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            Dropdown <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                            <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Action</a></li>
                            <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Another action</a></li>
                            <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Something else here</a></li>
                            <li role="presentation" class="divider"></li>
                            <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Separated link</a></li>
                            </ul>
                        </li>
                        <li class="pull-right"><a href="#" class="text-muted"><i class="fa fa-gear"></i></a></li>
                        </ul>
                        <div class="tab-content">
                        <div class="tab-pane active" id="tab_1">
                            <b>How to use:</b>

                            <p>Exactly like the original bootstrap tabs except you should use
                            the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
                            A wonderful serenity has taken possession of my entire soul,
                            like these sweet mornings of spring which I enjoy with my whole heart.
                            I am alone, and feel the charm of existence in this spot,
                            which was created for the bliss of souls like mine. I am so happy,
                            my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                            that I neglect my talents. I should be incapable of drawing a single stroke
                            at the present moment; and yet I feel that I never was a greater artist than now.
                        </div>
                        <div class="tab-pane" id="tab_2">
                            The European languages are members of the same family. Their separate existence is a myth.
                            For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                            in their grammar, their pronunciation and their most common words. Everyone realizes why a
                            new common language would be desirable: one could refuse to pay expensive translators. To
                            achieve this, it would be necessary to have uniform grammar, pronunciation and more common
                            words. If several languages coalesce, the grammar of the resulting language is more simple
                            and regular than that of the individual languages.
                        </div>
                        <div class="tab-pane" id="tab_3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Profile;