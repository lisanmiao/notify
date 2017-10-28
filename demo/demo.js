/**
 * @description the demos for notify plugin
 * @version 1.0
 */
$(function() {
    // default
    $("#show-default-notify-for-3-seconds").click(function() {
        showDefaultNotifyFor3S();
    });
    $("#show-default-notify-without-cover-for-3-seconds").click(function() {
        showDefaultNotifyWithoutCoverFor3S();
    });
    $("#show-default-notify-without-loading-for-3-seconds").click(function() {
        showDefaultNotifyWithoutLoadingFor3S();
    });
    $("#show-default-notify-without-cover-and-loading-for-3-seconds").click(function() {
        showDefaultNotifyWithoutCoverAndLoadingFor3S();
    });
    $("#show-default-notify-always").click(function() {
        showDefaultNotifyAlways();
    });

    // success 
    $("#show-success-notify-without-loading-for-3-seconds").click(function() {
        showSuccessNotifyWithoutLoadingFor3S();
    });
    $("#show-success-notify-without-cover-and-loading-for-3-seconds").click(function() {
        showSuccessNotifyWithoutCoverAndLoadingFor3S();
    });

    // information 
    $("#show-information-notify-without-loading-for-3-seconds").click(function() {
        showInformationNotifyWithoutLoadingFor3S();
    });
    $("#show-information-notify-without-cover-and-loading-for-3-seconds").click(function() {
        showInformationNotifyWithoutCoverAndLoadingFor3S();
    });

    // attention
    $("#show-attention-notify-without-loading-for-3-seconds").click(function() {
        showAttentionNotifyWithoutLoadingFor3S();
    });
    $("#show-attention-notify-without-cover-and-loading-for-3-seconds").click(function() {
        showAttentionNotifyWithoutCoverAndLoadingFor3S();
    });

    // error
    $("#show-error-notify-without-loading-for-3-seconds").click(function() {
        showErrorNotifyWithoutLoadingFor3S();
    });
    $("#show-error-notify-without-cover-and-loading-for-3-seconds").click(function() {
        showErrorNotifyWithoutCoverAndLoadingFor3S();
    });
});

// default
function showDefaultNotifyFor3S() {
    $.notify("default notify, with cover and loading, 3s", 3000, "", true, true);
}
function showDefaultNotifyWithoutCoverFor3S() {
    $.notify("default notify, without cover, with loading, 3s", 3000, "", false, true);
}
function showDefaultNotifyWithoutLoadingFor3S() {
    $.notify("default notify, with cover, without loading, 3s", 3000, "", true, false);
}
function showDefaultNotifyWithoutCoverAndLoadingFor3S() {
    $.notify("default notify, without cover and loading, 3s", 3000, "", false, false);
}
function showDefaultNotifyAlways() {
    $.notify("loading default notify forever until next notify", -1, "", true, true);
    setTimeout(function() {
        $.notify("next default notify comes, the notify before hide", 3000, "", true, false);
    }, 10000);
}

// success 
function showSuccessNotifyWithoutLoadingFor3S() {
    $.notify("success notify, with cover, without loading, 3s", 3000, "success", true, false);
}
function showSuccessNotifyWithoutCoverAndLoadingFor3S() {
    $.notify("success notify, without cover and loading, 3s", 3000, "success", false, false);
}

// information 
function showInformationNotifyWithoutLoadingFor3S() {
    $.notify("information notify, with cover, without loading, 3s", 3000, "information", true, false);
}
function showInformationNotifyWithoutCoverAndLoadingFor3S() {
    $.notify("information notify, without cover and loading, 3s", 3000, "information", false, false);
}

// attention
function showAttentionNotifyWithoutLoadingFor3S() {
    $.notify("attention notify, with cover, without loading, 3s", 3000, "attention", true, false);
}
function showAttentionNotifyWithoutCoverAndLoadingFor3S() {
    $.notify("attention notify, without cover and loading, 3s", 3000, "attention", false, false);
}

// error
function showErrorNotifyWithoutLoadingFor3S() {
    $.notify("error notify, with cover, without loading, 3s", 3000, "error", true, false);
}
function showErrorNotifyWithoutCoverAndLoadingFor3S() {
    $.notify("error notify, without cover and loading, 3s", 3000, "error", false, false);
}
