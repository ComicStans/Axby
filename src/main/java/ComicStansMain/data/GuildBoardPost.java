package ComicStansMain.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "axby_guild_board_posts")
public class GuildBoardPost {

    //Each Post is associated with one board and one user.
    //Posts can be Original or Reply; if Reply, the Post has a post_replied_to value.
    public enum postType {ORIGINAL, REPLY}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "guild_board_id", nullable = false)
    @JsonIgnoreProperties("posts")
    private GuildBoard guildBoardId;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    @JsonIgnoreProperties({"posts","boards"})
    private User authorId;

    @Column(name = "post_type", nullable = false)
    @Enumerated
    private postType postType;

    @Column(name = "post_text")
    private String postText;

//    @Column(name = "post_replied_to")
//    private long postRepliedTo;

    @Column(name = "post_time", nullable = false)
    private LocalDate postTime;

}
